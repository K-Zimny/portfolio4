# Cypress Custom Commands Documentation

This document describes the custom Cypress commands available in this project and how to use them.

## Table of Contents

- [Overview](#overview)
- [Command Organization](#command-organization)
- [Available Commands](#available-commands)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Official Documentation References](#official-documentation-references)

## Overview

Custom commands in Cypress allow you to encapsulate reusable test logic. This project uses a **composable command pattern** where individual commands can be used separately or combined into convenience wrappers.

## Command Organization

Commands are organized into separate files for better maintainability:

```
cypress/support/
├── commands.js              # General utility commands
├── commands/
│   └── navCommands.js      # Navigation-related commands
└── e2e.js                   # Imports all command files
```

This structure:

- **Keeps commands organized** by domain/feature
- **Prevents file bloat** as the test suite grows
- **Makes it easier to find** specific commands
- **Follows Cypress best practices** for larger test suites

All command files are automatically imported in `e2e.js`, so commands are available in all test files.

> **📚 For large-scale projects:** See [LARGE_SCALE_PATTERNS.md](./LARGE_SCALE_PATTERNS.md) for patterns used by enterprise projects and strategies for scaling beyond 100+ tests.
>
> **🔒 Need to scope commands?** See [SCOPING_COMMANDS.md](./SCOPING_COMMANDS.md) for methods to scope commands to specific test files or suites.

### Command Architecture

```
testNav (convenience wrapper)
├── testNavStructure (individual command)
├── testNavHrefs (individual command)
└── testNavNavigation (individual command)
```

This pattern provides:

- **Flexibility**: Use individual commands for granular testing
- **Convenience**: Use wrapper commands for quick all-in-one tests
- **Maintainability**: Update individual commands without affecting the wrapper

## Available Commands

### `cy.visitPage(page)`

Visits a page on the local development server.

**Parameters:**

- `page` (string, optional): The page path to visit (e.g., "/skills", "/contact"). Defaults to "" (homepage).

**Example:**

```javascript
cy.visitPage("/skills");
cy.visitPage(); // visits homepage
```

---

### `cy.testNavStructure()`

Verifies that all navigation items have valid anchor links.

**What it tests:**

- All `<nav ul li>` elements contain an `<a>` tag

**Example:**

```javascript
it("Should have all nav items with valid links", () => {
  cy.testNavStructure();
});
```

---

### `cy.testNavHrefs()`

Verifies that navigation item hrefs match the expected values from the nav data.

**What it tests:**

- Each nav item's href attribute matches the expected value from `src/data/nav.js`

**Example:**

```javascript
it("Should have correct hrefs for all nav items", () => {
  cy.testNavHrefs();
});
```

---

### `cy.testNavNavigation(options)`

Tests navigation by clicking each nav item and verifying the destination.

**Parameters:**

- `options` (object, optional): Configuration options
  - `returnToOriginalPage` (boolean, default: `false`): If `true`, returns to the original page after testing navigation

**What it tests:**

- Each nav link is clickable
- Navigation to each page works correctly
- Page headers match expected titles (for non-PDF links)
- PDF links navigate to the correct URL

**Example:**

```javascript
it("Should navigate to each page correctly", () => {
  cy.testNavNavigation({ returnToOriginalPage: true });
});
```

---

### `cy.testNav(options)`

**Convenience wrapper** that runs all navigation tests in sequence.

**Parameters:**

- `options` (object, optional): Passed to `testNavNavigation`
  - `returnToOriginalPage` (boolean, default: `false`): If `true`, returns to the original page after testing

**What it tests:**

- Navigation structure (via `testNavStructure`)
- Navigation hrefs (via `testNavHrefs`)
- Navigation functionality (via `testNavNavigation`)

**Example:**

```javascript
it("Should verify navigation structure and links", () => {
  cy.testNav({ returnToOriginalPage: true });
});
```

## Usage Examples

### Example 1: Granular Testing (Recommended for Navigation Tests)

Use individual commands in separate `it` blocks for better test reporting and failure isolation:

```javascript
describe("Navigation Tests on Skills page", () => {
  beforeEach(() => {
    cy.visitPage("/skills");
  });

  it("Should have all nav items with valid links", () => {
    cy.testNavStructure();
  });

  it("Should have correct hrefs for all nav items", () => {
    cy.testNavHrefs();
  });

  it("Should navigate to each page correctly", () => {
    cy.testNavNavigation({ returnToOriginalPage: true });
  });
});
```

**Benefits:**

- Each test failure is isolated
- Clear test reports showing which aspect failed
- Easier debugging

### Example 2: Quick All-in-One Test (Recommended for Page Tests)

Use the convenience wrapper when you want to test navigation as part of a larger page test:

```javascript
describe("Homepage E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should verify navigation structure and links", () => {
    cy.testNav({ returnToOriginalPage: true });
  });

  it("Should contain Logo", () => {
    cy.get("#site-logo").should("exist");
  });
});
```

**Benefits:**

- Single command call
- All navigation tests run together
- Less verbose

### Example 3: Mixing Individual Commands

Use individual commands when you only need to test specific aspects:

```javascript
it("Should verify nav structure without testing navigation", () => {
  cy.testNavStructure();
  cy.testNavHrefs();
  // Skip navigation testing
});
```

## Best Practices

### ✅ Do

1. **Use granular commands for focused tests**

   - Better test reporting
   - Easier debugging
   - Clearer test intent

2. **Use convenience wrappers for quick checks**

   - When navigation is a secondary concern
   - For smoke tests
   - When you need all tests together

3. **Use `returnToOriginalPage: true` when needed**

   - Prevents side effects in subsequent tests
   - Maintains test isolation

4. **Add descriptive test names**
   ```javascript
   it("Should have all nav items with valid links", () => {
     // Good: Clear what's being tested
   });
   ```

### ❌ Don't

1. **Don't overuse convenience wrappers**

   - Use granular commands when you need detailed reporting

2. **Don't skip `returnToOriginalPage` when it matters**

   - Can cause test interdependencies
   - May leave the browser on an unexpected page

3. **Don't create commands for simple one-off actions**
   - Commands should be reusable
   - Simple actions are fine inline

## Official Documentation References

### Cypress Custom Commands

- **[Official Cypress Custom Commands Guide](https://docs.cypress.io/api/cypress-api/custom-commands)**

  - Complete reference for creating custom commands
  - Command options and configuration
  - TypeScript support

- **[Cypress Best Practices: Custom Commands](https://learn.cypress.io/advanced-cypress-concepts/building-the-right-cypress-commands)**
  - When to create custom commands
  - Command composition patterns
  - Best practices and anti-patterns

### Related Cypress Topics

- **[Cypress Commands API](https://docs.cypress.io/api/commands)**

  - All available Cypress commands
  - Command chaining and composition

- **[Cypress Assertions](https://docs.cypress.io/guides/references/assertions)**

  - Available assertion methods
  - Custom assertions

- **[Cypress Aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)**
  - Using `.as()` for element references
  - Sharing context between commands

## Command Composition Pattern

This project uses the **Command Composition Pattern**, which is a common practice in Cypress:

### Pattern Overview

```javascript
// Individual, focused commands
Cypress.Commands.add("commandA", () => {
  /* ... */
});
Cypress.Commands.add("commandB", () => {
  /* ... */
});
Cypress.Commands.add("commandC", () => {
  /* ... */
});

// Convenience wrapper that composes them
Cypress.Commands.add("commandAll", () => {
  cy.commandA();
  cy.commandB();
  cy.commandC();
});
```

### Benefits

1. **Single Responsibility**: Each command does one thing
2. **Reusability**: Commands can be used independently
3. **Flexibility**: Mix and match as needed
4. **Maintainability**: Update individual commands without breaking the wrapper

### When to Use This Pattern

- ✅ When you have related commands that are often used together
- ✅ When you need both granular and convenience options
- ✅ When commands share common logic

- ❌ When commands are completely unrelated
- ❌ When the wrapper doesn't add value
- ❌ When it overcomplicates simple scenarios

## Troubleshooting

### Command Not Found

If you see "command is not defined" errors:

1. Ensure the command file is imported in `cypress/support/e2e.js`
   - General commands: `import './commands'`
   - Feature commands: `import './commands/navCommands'` (or your specific file)
2. Check that the command name matches exactly (case-sensitive)
3. Verify the command is defined before use
4. Check the file path is correct (relative to `cypress/support/`)

### Navigation Tests Failing

If navigation tests fail:

1. Check that the nav structure matches: `<nav><ul><li><a>...</a></li></ul></nav>`
2. Verify `src/data/nav.js` has the correct data
3. Ensure pages are accessible at the expected URLs
4. Check that `[data-component='PageHeader']` exists on non-PDF pages

### Page Not Returning

If `returnToOriginalPage` doesn't work:

1. Ensure you're passing the option: `{ returnToOriginalPage: true }`
2. Check that the original URL is valid
3. Verify the page loads correctly when visited directly

## Contributing

When adding new custom commands:

1. **Choose the right file:**

   - General utility commands → `commands.js`
   - Feature-specific commands → Create a new file in `commands/` folder (e.g., `commands/formCommands.js`)
   - Related commands → Add to existing feature file

2. **Import in e2e.js:**

   ```javascript
   // In cypress/support/e2e.js
   import "./commands";
   import "./commands/navCommands";
   import "./commands/formCommands"; // Add new imports here
   ```

3. **Follow best practices:**

   - Single responsibility principle
   - Add descriptive `cy.log()` statements
   - Document the command in this file
   - Include usage examples
   - Consider if it should be part of a composition pattern

4. **File naming convention:**
   - Use camelCase: `navCommands.js`, `formCommands.js`, `apiCommands.js`
   - Group related commands together
   - Keep files focused on a single domain/feature

---

**Last Updated**: Based on Cypress best practices and official documentation as of 2024.
