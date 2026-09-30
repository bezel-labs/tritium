# Tritium

Built by [Bezel](https://bezel.new/?utm_source=github&utm_medium=referral&utm_content=readme), the design system platform for product teams.

Tritium is an open source design system component library for React that takes a
design-tokens-first approach. Component styles are read from CSS variables, so you restyle the
library by changing token values instead of editing class names or inline styles.

Tritium is built for [Bezel](https://bezel.new/?utm_source=github&utm_medium=referral&utm_content=readme),
and it can be used anywhere. You do not need Bezel to use it.

> **Status: early development.** `Button` is the only component so far, the token set is still
> being defined, and the package is not published to npm. Expect breaking changes.

## Contents

- [Why tokens first](#why-tokens-first)
- [What's inside](#whats-inside)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [How to contribute](#how-to-contribute)
- [License](#license)

## Why tokens first

### The problem

Most component libraries are themed from the outside in. To match your brand you override class
names, pass style props, wrap components, or fork the source. Each of those couples your brand to
the library's internals:

- Overrides break when the library renames a class or changes its markup.
- The same decision, such as your primary color, ends up repeated across many components.
- Designers and engineers work from different sources of truth, so design and code drift apart.

### The approach

Tritium makes design tokens the styling contract. A component does not decide what its colors,
spacing, or radii are. It only decides which token each part reads. The values live in CSS
variables that you own.

- **One place to change.** Update a CSS variable and every component that uses it follows.
- **No class or inline-style overrides.** You change how a component looks by changing token values,
  not by overriding its classes or passing inline styles.
- **Usable anywhere.** Tokens are plain CSS variables, so Tritium is not tied to Bezel.

## What's inside

- **Components** written in React 19 and TypeScript. `Button`, the first component, is built on a
  [Base UI](https://base-ui.com) primitive.
- **Storybook 10** for developing and documenting each component, with the accessibility addon.
- **Story-driven tests** that run every story in a real browser with Vitest and Playwright.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 22
- npm, which ships with Node.js
- Git

### 1. Clone and install

```bash
git clone https://github.com/bezel-labs/tritium.git
cd tritium
npm install
```

### 2. Start Storybook

Storybook is the main place to view and develop components.

```bash
npm run storybook
```

Open <http://localhost:6006> and you should see the `Button` stories under **Components**.

### 3. Run the tests

The tests run every story in headless Chromium. Install the browser once, then run the suite:

```bash
npx playwright install chromium
npx vitest run
```

### 4. Check your setup

Confirm that lint and the build pass:

```bash
npm run lint
npm run build
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run storybook` | Start the Storybook dev server on port 6006. |
| `npm run build-storybook` | Build the static Storybook site into `storybook-static/`. |
| `npm run dev` | Start the Vite dev server. |
| `npm run build` | Type-check and build with Vite. |
| `npm run lint` | Lint with Oxlint. |
| `npx vitest run` | Run the story tests in headless Chromium. |

## How to contribute

Contributions are welcome, whether that is a bug report, an idea, a documentation fix, or a new
component.

### Report a bug or suggest an idea

[Open an issue](https://github.com/bezel-labs/tritium/issues). For bugs, include what you expected,
what happened, and the steps to reproduce it. For larger changes, open an issue before writing code
so the approach can be agreed first.

### Make a change

1. Fork the repository and clone your fork.
2. Follow [Getting started](#getting-started) to install and verify your setup.
3. Create a branch from `main`.
4. Make your change, keeping to the core rule: styles come from tokens. If a value would be
   hard-coded in a component, make it a CSS variable instead.
5. Run the checks:

   ```bash
   npm run lint
   npm run build
   npx vitest run
   ```

6. Open a pull request against `main`. Describe what changed and why, and include a screenshot
   for visual changes.

### Licensing

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).

## License

[MIT](LICENSE)
