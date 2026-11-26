# Design — api-author

## Package Layout

```
api-author/
  src/
    index.ts        # Entry point — starts the Express server
    server.ts       # Express app factory (createApp)
    server.test.ts  # HTTP tests via supertest
  Dockerfile        # Single-stage build (no optional provider installs)
  package.json
  tsconfig.json
  tsconfig.test.json
  eslint.config.mjs
```

## Architecture

`createApp()` in `src/server.ts` returns a configured Express application. `src/index.ts` calls it, binds the port, and writes a startup log line to stdout.

All routes will be registered inside `createApp()`. The initial stub registers only `GET /health`.

## Build and runtime

- TypeScript compiles to `dist/` via `tsc`.
- The Docker image copies the compiled `dist/` and `node_modules/` from the build stage.
- No optional provider build arguments — unlike `api-runtime`, this service has no inference provider dependency.
