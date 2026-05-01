# Truna

Truna is an AI-assisted pre-launch verification platform for AI-built applications. It helps builders test launch-critical user flows, collect evidence, identify false-success risks, and generate repair handoffs before launch.

**Live Demo:** https://truna-frontend.vercel.app/

---

## Overview

AI-built apps can often look functional on the surface while still failing important user workflows. Truna helps builders verify whether an app is actually ready to launch by checking core flows such as signup, booking, checkout, search, and form submission.

Instead of acting as an open-ended autonomous browser agent, Truna uses controlled verification plans, bounded browser actions, evidence collection, and risk analysis to produce a launch-readiness review.

---

## Why I Built This

I built Truna to solve a problem I noticed while working with AI-generated products: it is easy to create a working-looking demo, but harder to know whether the product can reliably complete the flows that matter before launch.

Truna turns product requirements, user feedback, and browser verification evidence into a structured launch review workflow.

---

## Key Features

- Extracts launch-critical flows from PRDs, specs, and product descriptions
- Generates controlled verification plans for each flow
- Runs browser-based checks using Playwright
- Collects screenshots, page text, console errors, network status, and step logs
- Detects false-success risks where the UI appears successful but the business outcome may not be verified
- Scores launch readiness and surfaces blockers
- Generates repair handoffs for coding agents such as Cursor, Claude Code, Replit, and Lovable
- Imports user feedback and turns recurring issues into verification tasks
- Supports project-level launch reviews across multiple core flows

---

## Product Demo

<!-- Add screenshots after uploading images to the assets folder -->

<!--
## Screenshots

![Homepage](assets/truna-homepage.png)

![Sample Launch Review](assets/sample-launch-review.png)

![Core Flows](assets/core-flows.png)

![Repair Handoff](assets/repair-handoff.png)
-->

---

## Technical Highlights

- Full-stack monorepo architecture
- Next.js frontend with product workspace and public demo routes
- Express backend with project, flow, verification, feedback, and repair handoff APIs
- Prisma-based data modeling with Postgres readiness
- Playwright-based controlled browser verification runner
- LLM-assisted flow extraction, plan generation, analysis, and repair handoff creation
- Risk scoring and launch-readiness verdicts
- Background job foundation for verification runs
- Auth, quota, rate limit, and private-beta readiness foundations

---

## Architecture

The system follows a controlled verification pipeline:

1. User creates a project or imports a PRD/spec.
2. Truna extracts suggested launch-critical flows.
3. User reviews and accepts core flows.
4. Truna generates a verification strategy and controlled test plan.
5. The browser runner executes the approved plan.
6. Evidence is collected and analyzed.
7. Findings, risk scores, and repair handoffs are generated.

---

## My Role

I designed and built Truna end-to-end, including the product concept, frontend interface, backend APIs, database models, verification workflow, Playwright runner integration, LLM-assisted analysis, risk scoring logic, repair handoff generation, and demo/private-beta deployment structure.

---

## Source Code

The production source code is currently private because Truna is an active product prototype under continued development.

This repository serves as a public project showcase with demo access, product overview, architecture summary, and future roadmap.

---

## Roadmap

- Durable hosted job queue
- Object storage for evidence artifacts
- Production billing integration
- Real email, payment, webhook, and database verification tools
- Deeper feedback trend analysis
- Team workspaces and collaboration
- Stronger CI/CD and monitoring
