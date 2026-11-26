# Brainstorm — initial-version

## Context

The authoring API was developed inside `strata/author-api` and needs to be migrated to the `commonkads` GitHub organisation as a standalone repository with the name `api-author`.

## Angles explored

**1. Direct copy with renames only**
Copy the source as-is, rename the package, remove internal references to the old strata namespace in documents.

**2. Restructure + rename**
Rename and also restructure the entry points, file naming conventions, or module boundaries.

**3. Incremental migration**
Port file by file over multiple PRs.

## Direction chosen

**Angle 1.** The source is already a minimal, clean stub. A direct copy with targeted renames and document cleanup is the right scope for an initial-version feature. Restructuring belongs in a follow-on feature once the authoring surface is built out.
