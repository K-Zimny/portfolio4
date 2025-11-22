# Scoping Cypress Commands

This guide explains the different ways to scope Cypress commands to specific test files or suites.

## The Reality: Commands Are Global by Default

**Important:** Once a command is registered with `Cypress.Commands.add()`, it's **globally available** to all test files. Cypress doesn't have built-in command scoping.

However, there are several patterns you can use to achieve scoping-like behavior:

---

## Method 1: Conditional Command Loading (Recommended for Scoping)

Load commands conditionally based on the test file being run.

### Implementation

```javascript
// cypress/support/e2e.js
import "./commands"; // Always load core commands

// Conditionally load feature-specific commands
const specPath = Cypress.spec?.relative || "";

if (specPath.includes("navigation") || specPath.includes("nav")) {
  import("./commands/navCommands");
}

if (specPath.includes("auth") || specPath.includes("login")) {
  import("./commands/authCommands");
}

if (specPath.includes("form") || specPath.includes("contact")) {
  import("./commands/formCommands");
}
```

### Pros

- ✅ Commands only loaded when needed
- ✅ Smaller bundle size
- ✅ Better performance for large suites
- ✅ Commands appear global within their scope

### Cons

- ❌ More complex setup
- ❌ Not standard Cypress pattern
- ❌ Can be harder to debug
- ❌ Requires careful path matching

### When to Use

- Very large test suites (500+ tests)
- Performance is a concern
- Clear separation between test domains
- Commands are truly feature-specific

---

## Method 2: Import Commands in Test Files

Import command files directly in test files instead of `e2e.js`.

### Implementation

```javascript
// cypress/support/e2e.js
import "./commands"; // Only core commands

// Don't import navCommands here
```

```javascript
// cypress/e2e/navigation.cy.js
import "../support/commands/navCommands"; // Import only in nav tests

describe("Navigation Tests", () => {
  it("should test nav", () => {
    cy.testNav(); // Available here
  });
});
```

```javascript
// cypress/e2e/homepage.cy.js
// Don't import navCommands

describe("Homepage Tests", () => {
  it("should test homepage", () => {
    // cy.testNav() would fail here if not imported
    cy.visitPage("/");
  });
});
```

### Important Note

⚠️ **Once imported, commands are still global!** If you import `navCommands.js` in one test file, those commands become available to ALL subsequent test files in that run.

### Pros

- ✅ Explicit dependencies
- ✅ Clear which tests use which commands
- ✅ Simple to implement

### Cons

- ❌ Commands still become global after first import
- ❌ Can lead to confusion
- ❌ Not true scoping

### When to Use

- Small to medium test suites
- You want explicit imports for documentation
- Team prefers explicit dependencies

---

## Method 3: Helper Functions (True Scoping)

Convert commands to regular JavaScript functions and import only where needed.

### Implementation

```javascript
// cypress/support/helpers/navHelpers.js
export function testNavStructure() {
  cy.log("Verifying all nav items have links");
  cy.get("nav ul li").as("navItems");
  cy.get("@navItems").each(($li) => {
    cy.wrap($li).find("a").should("exist");
  });
}

export function testNavHrefs() {
  // ... implementation
}

export function testNav(options = {}) {
  testNavStructure();
  testNavHrefs();
  // ...
}
```

```javascript
// cypress/e2e/navigation.cy.js
import { testNav, testNavStructure } from "../support/helpers/navHelpers.js";

describe("Navigation Tests", () => {
  it("should test nav", () => {
    testNav(); // Scoped to this file only
  });
});
```

```javascript
// cypress/e2e/homepage.cy.js
// No import = functions not available

describe("Homepage Tests", () => {
  it("should test homepage", () => {
    // testNav() is not available here
    cy.visitPage("/");
  });
});
```

### Pros

- ✅ True scoping - only available where imported
- ✅ Standard JavaScript pattern
- ✅ Explicit dependencies
- ✅ No global namespace pollution

### Cons

- ❌ Not using Cypress command system
- ❌ Can't use command chaining
- ❌ Slightly more verbose (imports needed)

### When to Use

- Feature-specific logic used in < 5 test files
- You want strict scoping
- Complex, multi-step operations
- Team prefers explicit imports

---

## Method 4: Command Namespacing (Pseudo-Scoping)

Use prefixes to create "namespaced" commands.

### Implementation

```javascript
// cypress/support/commands/navCommands.js
Cypress.Commands.add("nav.testNav", () => {
  // Navigation test logic
});

Cypress.Commands.add("nav.testNavStructure", () => {
  // Structure test logic
});
```

```javascript
// cypress/e2e/navigation.cy.js
describe("Navigation Tests", () => {
  it("should test nav", () => {
    cy.nav.testNav(); // Namespaced
  });
});
```

### Pros

- ✅ Clear command grouping
- ✅ Reduces naming conflicts
- ✅ Still uses Cypress commands

### Cons

- ❌ Still global (just organized)
- ❌ More verbose syntax
- ❌ Not true scoping

### When to Use

- Large command libraries
- Want to organize commands by domain
- Need to avoid naming conflicts

---

## Comparison Table

| Method               | True Scoping? | Complexity | Performance | Standard?   |
| -------------------- | ------------- | ---------- | ----------- | ----------- |
| Conditional Loading  | ⚠️ Partial    | High       | Best        | ❌ No       |
| Import in Test Files | ❌ No         | Low        | Good        | ⚠️ Uncommon |
| Helper Functions     | ✅ Yes        | Low        | Good        | ✅ Yes      |
| Command Namespacing  | ❌ No         | Low        | Good        | ✅ Yes      |

---

## Recommended Approach for Your Project

Based on your current setup, here's what I recommend:

### Current Situation

- You have nav commands used in multiple test files
- Commands are well-organized
- Project is growing

### Recommendation: **Hybrid Approach**

1. **Keep frequently used commands global** (current approach)

   - `cy.visitPage()` - used everywhere
   - `cy.testNav()` - used in multiple files

2. **Convert rarely used to helpers** (when needed)

   - Only if used in < 5 test files
   - Complex, feature-specific logic

3. **Consider conditional loading** (future)
   - Only if you reach 200+ test files
   - Performance becomes an issue

### Example Migration Path

```javascript
// Phase 1: Current (all commands global)
cy.testNav(); // Available everywhere

// Phase 2: If nav commands only used in nav tests
import { testNav } from "../support/helpers/navHelpers.js";
testNav(); // Scoped to this file

// Phase 3: If performance becomes an issue
// Use conditional loading in e2e.js
```

---

## Practical Example: Conditional Loading

Here's a complete example of conditional command loading:

```javascript
// cypress/support/e2e.js
import "./commands"; // Core commands always loaded

// Get the current test file path
const currentSpec = Cypress.spec?.relative || "";
const specName = currentSpec.toLowerCase();

// Load commands based on test file location
if (specName.includes("navigation") || specName.includes("nav")) {
  import("./commands/navCommands").then(() => {
    cy.log("Nav commands loaded for:", currentSpec);
  });
}

if (specName.includes("auth") || specName.includes("login")) {
  import("./commands/authCommands");
}

if (specName.includes("form") || specName.includes("contact")) {
  import("./commands/formCommands");
}
```

**Usage:**

```javascript
// cypress/e2e/navigation.cy.js
// navCommands automatically loaded
describe("Navigation", () => {
  it("tests nav", () => {
    cy.testNav(); // Available
  });
});

// cypress/e2e/homepage.cy.js
// navCommands NOT loaded
describe("Homepage", () => {
  it("tests homepage", () => {
    // cy.testNav() would fail here
    cy.visitPage("/"); // Core command still works
  });
});
```

---

## Best Practices

### ✅ Do

1. **Start with global commands** - Standard Cypress pattern
2. **Use helpers for true scoping** - When you need strict scoping
3. **Document command scope** - Note which commands are global vs scoped
4. **Consider performance** - Only optimize when needed

### ❌ Don't

1. **Don't over-engineer** - Global commands are fine for most cases
2. **Don't use conditional loading prematurely** - Adds complexity
3. **Don't mix patterns inconsistently** - Pick one approach per project
4. **Don't scope everything** - Some commands should be global

---

## Conclusion

**The short answer:** Cypress commands are global by design. True scoping requires using helper functions instead of commands.

**For your project:**

- ✅ Current approach (global commands) is fine
- ✅ Consider helpers only if commands are used in < 5 files
- ✅ Consider conditional loading only at 200+ test files

**Remember:** Global commands are not a problem - they're the standard Cypress pattern used by large projects worldwide.
