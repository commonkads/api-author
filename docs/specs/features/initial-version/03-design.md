# Design — initial-version

## New files

| File | Source |
|------|--------|
| `src/index.ts` | Copied from `strata/author-api/src/index.ts` |
| `src/server.ts` | Copied from `strata/author-api/src/server.ts` |
| `src/server.test.ts` | Copied from `strata/author-api/src/server.test.ts` |
| `Dockerfile` | Copied from `strata/author-api/Dockerfile` |
| `package.json` | Adapted from `strata/author-api/package.json` |
| `tsconfig.json` | Copied verbatim |
| `tsconfig.test.json` | Copied verbatim |
| `eslint.config.mjs` | Copied verbatim |
| `.gitignore` | Copied verbatim |
| `README.md` | New — authored for this repo |
| `docs/specs/requirements.md` | New |
| `docs/specs/design.md` | New |

## Changes from source

| File | Change |
|------|--------|
| `package.json` | `name`: `strata-author-api` → `api-author`; `description`: removed "Strata" |
| `src/index.ts` | Log message: `strata-author-api` → `api-author`; removed strata TODO comment |
| `src/server.ts` | TODO comment generalised (removed `@robproper/strata-author` reference) |

## Key decisions

- `README.md` created fresh rather than copied — the source had none; includes methodology disclaimer matching other commonkads repos.
- No code logic changes — the stub behaviour (`GET /health` → `{"status":"not implemented"}`) is preserved exactly.
