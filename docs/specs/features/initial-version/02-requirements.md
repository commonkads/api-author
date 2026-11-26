# Requirements — initial-version

## In scope

- Copy source from `strata/author-api` into `commonkads/api-author`
- Rename `package.json` `name` from `strata-author-api` to `api-author`
- Update `package.json` `description` to remove "Strata" branding
- Update log message in `src/index.ts` to reference `api-author`
- Remove internal strata-specific TODO comment in `src/server.ts`
- Create `README.md` with methodology disclaimer and service documentation
- Initialise git repository, add remote `git@github-commonkads:commonkads/api-author.git`
- Push initial feature branch `feature/initialise-api-author`

## Out of scope

- Implementing authoring endpoints (follow-on feature)
- Adding `@commonkads/dev-workflow` as a devDependency
- CI workflow setup
