/**
 * Standalone TypeScript showcase using synthetic verification evidence.
 * This is an illustrative report format, not Truna's production API or engine.
 * Run with Node.js 22.18+ or 24+: node report-example.ts
 */

type StepStatus = "passed" | "failed" | "unverified";

interface VerificationStep {
  name: string;
  status: StepStatus;
  httpStatus?: number;
}

interface VerificationReport {
  flow: string;
  uiShowsSuccess: boolean;
  outcomeEvidence: "confirmed" | "missing";
  steps: readonly VerificationStep[];
}

interface ReviewSummary {
  flow: string;
  verdict: "blocked" | "needs-review" | "checks-passed";
  falseSuccessRisk: boolean;
  findings: string[];
}

function summarizeReport(report: VerificationReport): ReviewSummary {
  const failed = report.steps.filter(
    (step) => step.status === "failed" || (step.httpStatus ?? 0) >= 400,
  );
  const unverified = report.steps.filter((step) => step.status === "unverified");
  const findings = failed.map((step) =>
    `${step.name} failed${step.httpStatus ? ` (HTTP ${step.httpStatus})` : ""}.`,
  );

  for (const step of unverified) findings.push(`${step.name} needs verification.`);
  if (report.outcomeEvidence === "missing") {
    findings.push("Evidence of the expected business outcome is missing.");
  }
  if (report.steps.length === 0) findings.push("No verification steps were recorded.");

  const falseSuccessRisk = report.uiShowsSuccess && failed.length > 0;
  if (falseSuccessRisk) {
    findings.push("The UI showed success while execution evidence showed a failure.");
  }

  return {
    flow: report.flow,
    verdict: failed.length > 0 ? "blocked" : findings.length > 0 ? "needs-review" : "checks-passed",
    falseSuccessRisk,
    findings,
  };
}

const syntheticReports = [
  {
    flow: "Booking confirmation with a failed save",
    uiShowsSuccess: true,
    outcomeEvidence: "missing",
    steps: [{ name: "Save booking", status: "failed", httpStatus: 500 }],
  },
  {
    flow: "Signup with no delivery evidence",
    uiShowsSuccess: true,
    outcomeEvidence: "missing",
    steps: [{ name: "Submit signup", status: "passed", httpStatus: 202 }],
  },
  {
    flow: "Profile update with confirmed evidence",
    uiShowsSuccess: true,
    outcomeEvidence: "confirmed",
    steps: [
      { name: "Save profile", status: "passed", httpStatus: 200 },
      { name: "Read back updated profile", status: "passed", httpStatus: 200 },
    ],
  },
] satisfies readonly VerificationReport[];

for (const report of syntheticReports) {
  console.log(JSON.stringify(summarizeReport(report), null, 2));
}
