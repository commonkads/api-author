# Requirements — api-author

## Purpose

`api-author` is a Docker-deployable HTTP service that will expose authoring endpoints for managing CommonKADS knowledge domains. The initial version is a stub — the authoring surface is deferred to a follow-on feature.

## Functional Requirements

### Health endpoint

1. `GET /health` returns HTTP 200 with `{"status":"not implemented"}` while the service is a stub.

### Configuration

1. The HTTP port is configurable via the `PORT` environment variable (default `3000`).

### Container

1. The service is packaged as a Docker image built from the project `Dockerfile`.
2. The image exposes port 3000.

## Non-functional Requirements

- Node.js ≥ 24 required.
- TypeScript with strict mode and ESM module output.
- Lint and format enforced via ESLint + Prettier on every compile.
- Tests run with the Node built-in test runner via `tsx`.
