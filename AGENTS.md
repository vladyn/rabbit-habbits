# Repository Guidelines

## Project Structure & Module Organization

This is an Expo React Native app. `App.tsx` contains the starter screen, `index.ts` registers it, `app.json` holds Expo metadata, and `__tests__/` holds component tests. Add feature code under `src/` as the app grows; keep assets under `assets/` and document new top-level directories in the README.

## Build, Test, and Development Commands

Run `npm install` once dependencies are available. Use `npm start` for Expo, or `npm run ios` and `npm run android` for simulators. Run `npm run typecheck`, `npm test`, and `npm run test:coverage` before a pull request. The app has no native build script yet.

## Coding Style & Naming Conventions

Use TypeScript with strict checking and two-space indentation, as in the starter files. Name React components in PascalCase (`HabitCard.tsx`), functions and variables in camelCase, and tests after the component (`App.test.tsx`). No formatter or linter is configured yet; add one with a shared configuration before enforcing its command.

## Testing Guidelines

Jest with `jest-expo` and React Native Testing Library runs tests in `__tests__/`. Name tests `*.test.tsx` and describe visible behavior, such as `shows the Rabbit Habits starter screen`. Run `npm test` locally and `npm run test:coverage` for the 100% threshold in `.coverage-thresholds.json`. Expand Jest's `collectCoverageFrom` when adding source files.

## Commit & Pull Request Guidelines

This directory has no Git history, so no existing commit convention can be inferred. Use short, imperative commit subjects that describe the change, for example `Add habit creation form`. Pull requests should explain the purpose, summarize the main changes, include test results, and link a related issue when one exists. Include screenshots for visible interface changes.

## metaswarm

This project uses [metaswarm](https://github.com/dsifry/metaswarm) for multi-agent orchestration. It provides 18 specialized agents, a 9-phase development workflow, and quality gates that enforce TDD, coverage thresholds, and spec-driven development.

### Workflow

- **Most tasks**: `$start` -- primes context, guides scoping, picks the right level of process
- **Complex features** (multi-file, spec-driven): Describe what you want built with a Definition of Done, then say: `Use the full metaswarm orchestration workflow.`

### Available Skills

Codex discovers skills by their SKILL.md `name` field. Invoke with `$name` syntax.

| Invoke | Purpose |
|---|---|
| `$start` | Begin tracked work on a task |
| `$setup` | Interactive guided setup |
| `$design-review-gate` | Trigger design review gate (5 reviewers) |
| `$pr-shepherd` | Monitor a PR through to merge |
| `$handling-pr-comments` | Handle PR review comments |
| `$brainstorming-extension` | Refine an idea with design review gate |
| `$create-issue` | Create a well-structured GitHub Issue |
| `$plan-review-gate` | Adversarial plan review (3 reviewers) |

### Quality Gates

- **Design Review Gate** -- 5-reviewer design review after design is drafted (`$design-review-gate`)
- **Plan Review Gate** -- 3 adversarial reviewers (Feasibility, Completeness, Scope & Alignment) -- ALL must PASS
- **Coverage Gate** -- `.coverage-thresholds.json` defines thresholds. BLOCKING gate before PR creation

### Testing & Quality

- **TDD is mandatory** -- Write tests first, watch them fail, then implement
- **100% test coverage required** -- Enforced via `.coverage-thresholds.json`
- **Coverage source of truth** -- `.coverage-thresholds.json` defines thresholds. The orchestrator reads it during validation.

### Workflow Enforcement (MANDATORY)

- **After brainstorming** -> MUST run `$design-review-gate` before planning or implementation
- **After any plan is created** -> MUST run `$plan-review-gate` before presenting to user
- **Coverage** -> `.coverage-thresholds.json` is the single source of truth. All skills must check it.
- **Agent discipline** -> NEVER use `--no-verify`, NEVER `git push --force` without approval, NEVER self-certify, ALWAYS follow TDD, STAY within file scope
