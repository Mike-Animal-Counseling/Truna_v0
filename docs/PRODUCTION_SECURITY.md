# Security and Deployment Notes

Truna is deployed at [truna-frontend.vercel.app](https://truna-frontend.vercel.app/). The application's implementation is maintained in a separate private source repository.

This public repository contains product documentation, screenshots, and a standalone TypeScript report example. Security scans of this repository cover those public files; they do not establish the security of the private application source or deployed service.

The TypeScript example runs locally with synthetic data and makes no network requests. It is a developer reference, not a server or an application deployment package. Application dependencies, access controls, provider configuration, and operational deployment requirements are maintained with the private application source.

Do not add credentials, private exports, or customer information to documentation, screenshots, videos, example configuration, or Git history. Report vulnerabilities using [SECURITY.md](../SECURITY.md).
