# Agent Instructions

This repository contains a modern Svelte 5 and SvelteKit web application. It heavily relies on TypeScript, Tailwind CSS v4, and strictly enforces Svelte 5 Runes mode.

As an AI agent operating in this repository, you must adhere to the following build, test, and style guidelines.

---

## 1. Build, Lint, and Test Commands

### General Commands
- **Development Server:** `npm run dev`
- **Build:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Type Checking:** `npm run check` (Runs `svelte-check` and TypeScript validation).
- **Watch Type Checking:** `npm run check:watch`
- **Linting:** `npm run lint` (Checks formatting using Prettier).
- **Formatting:** `npm run format` (Auto-formats codebase using Prettier).

### Testing
Currently, a test framework (like Vitest or Playwright) is **not yet installed**. When you need to verify logic:
1. Verify types and Svelte templates using `npm run check`.
2. Ensure there are no compile-time or formatting errors using `npm run build` and `npm run lint`.
3. *If requested to add tests or if Vitest is installed in the future*, run a single test using:
   ```bash
   npx vitest run <path-to-test-file>
   ```
4. For E2E tests with Playwright:
   ```bash
   npx playwright test <path-to-test-file>
   ```

Always ensure the project compiles (`npm run check` and `npm run build`) before delivering completed tasks. Do not push or conclude a task if `npm run check` fails.

---

## 2. Code Style Guidelines

### Svelte 5 and Runes (Strict)
This project enforces Svelte 5's Runes mode in `svelte.config.js`. Do not use Svelte 4 APIs.
- **Props:** Use the `$props()` rune with strict TypeScript typing.
  ```svelte
  <script lang="ts">
      let {
          title,
          description = "Default description"
      }: {
          title: string;
          description?: string;
      } = $props();
  </script>
  ```
- **Reactivity:** Use `$state()` for local component state and `$derived()` for computed values. Do not use the `export let` or `$: ` syntax.
- **Side Effects:** Use the `$effect()` rune to handle side effects. Keep effects minimal to avoid infinite loops. Try to use derived state instead of effects whenever possible.
- **Snippets:** Use Svelte 5 snippets (`#snippet`) instead of slots for component composition when possible.
- **Event Handling:** Use standard HTML event attributes like `onclick` (instead of `on:click`). For custom events, pass callback functions as props rather than using `createEventDispatcher`.

### SvelteKit Conventions
- **Load Functions:** Use `+page.ts` for universal load functions and `+page.server.ts` for server-only load functions. Always type the `load` function using the auto-generated types (`import type { PageLoad, PageServerLoad } from './$types'`).
- **Server Actions:** Use `+page.server.ts` to define form actions. Return meaningful data and use `fail()` from `@sveltejs/kit` for error states.
- **API Routes:** Define API endpoints using `+server.ts` files with standard HTTP method exports (`GET`, `POST`, `PUT`, `DELETE`).
- **Routing:** Use directory-based routing. Place layout components in `+layout.svelte` and error boundaries in `+error.svelte`.

### TypeScript Conventions
- **Strict Typing:** `tsconfig.json` enforces strict mode. Do not use `any`. Use `unknown` if the type is truly not known, and narrow it down safely.
- **Return Types:** Explicitly define return types for complex functions to improve readability and catch bugs early.
- **Types Location:** Place shared types and interfaces inside a `src/lib/types/` directory or adjacent to the component they heavily interact with. Use `type` or `interface` keywords appropriately.
- **Error Handling:** Use robust `try...catch` blocks for asynchronous data fetching. In SvelteKit route files (`+page.server.ts` or `+server.ts`), use the `error()` function provided by `@sveltejs/kit` to handle HTTP errors properly.

### Naming Conventions & Structure
- **SvelteKit Routes:** File names in the `src/routes/` directory must follow standard SvelteKit conventions (`+page.svelte`, `+page.ts`, `+page.server.ts`, `+layout.svelte`, etc.).
- **Component Names:** Reusable Svelte components outside of routing should use PascalCase (e.g., `Button.svelte`, `ProductCard.svelte`).
- **Variables and Functions:** Use camelCase for variables and functions (e.g., `handleUserClick`, `userData`). Prefix boolean variables with `is`, `has`, or `should` (e.g., `isVisible`, `hasData`).
- **Constants:** Use UPPER_SNAKE_CASE for global constants (e.g., `MAX_RETRY_COUNT`).
- **File extensions:** Use `.ts` for TypeScript files, `.svelte` for Svelte components.

### Imports
- **Aliases:** Leverage SvelteKit aliases. Always use `$lib/` for importing components, utils, or types from the `src/lib` directory.
  - *Good:* `import Button from '$lib/components/Button.svelte';`
  - *Bad:* `import Button from '../../components/Button.svelte';`
- **Grouping:** Group imports sensibly. Put SvelteKit/Svelte imports first, followed by external packages, then internal `$lib` imports, and finally relative imports. Keep imports tidy.

### Styling & Tailwind CSS v4
- **Utility-First:** Use Tailwind CSS utility classes directly in the markup.
- **Avoid `<style>` Blocks:** Avoid writing custom CSS in Svelte `<style>` blocks. Rely on Tailwind classes to maintain consistency. If custom CSS is absolutely necessary, ensure it uses standard CSS features supported by Tailwind v4.
- **Design System Integration:** Always consult `DESIGN.md` for specific design tokens (colors like `primary` or `ink-deep`, rounded corners, and typography). Mimic the token values outlined in the design specification instead of hardcoding random values.
- **Prettier:** We use `prettier-plugin-tailwindcss` to automatically sort Tailwind classes. Always run `npm run format` after modifying classes to ensure class order consistency.

### Accessibility (A11y)
- **Semantic HTML:** Use semantic HTML tags (`<main>`, `<section>`, `<nav>`, `<button>`) instead of generic `<div>` tags whenever possible.
- **ARIA Attributes:** Ensure proper ARIA labels and roles are added to interactive elements that are not standard HTML controls.
- **Svelte A11y Warnings:** Do not ignore Svelte's built-in a11y compiler warnings. Fix them proactively.

### Best Practices for AI Agents
- Before editing files, always read them first to understand the context.
- Use `npm run check` frequently during refactoring to catch Svelte/TypeScript regressions.
- Keep comments concise and focus on the *why* rather than the *what*.
- Do not make broad assumptions about available utilities. Always verify the contents of `$lib/` or `node_modules/` if unsure.
- Remember to strictly adhere to the project conventions and existing framework structure!