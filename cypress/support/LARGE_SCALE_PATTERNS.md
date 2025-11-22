# Large-Scale Cypress Command Organization Patterns

This document outlines patterns and strategies used by large projects to organize Cypress commands and maintain scalability.

## Common Patterns in Large Projects

### Pattern 1: Modular Commands (Your Current Approach) ✅

**Structure:**

```
cypress/support/
├── commands.js              # Core utilities (visitPage, etc.)
├── commands/
│   ├── navCommands.js      # Navigation-specific
│   ├── authCommands.js     # Authentication
│   ├── formCommands.js     # Form interactions
│   └── apiCommands.js      # API helpers
└── e2e.js                   # Imports all commands
```

**Pros:**

- ✅ Organized by domain/feature
- ✅ Easy to find and maintain
- ✅ Scales well (add new files as needed)
- ✅ Commands available globally (standard Cypress pattern)

**Cons:**

- ❌ All commands available in all tests (global namespace)
- ❌ Can't scope commands to specific test suites

**Used by:** Most large Cypress projects (Shopify, Airbnb patterns)

---

### Pattern 2: Hybrid Approach (Commands + Helpers)

**Structure:**

```
cypress/support/
├── commands.js              # Global, reusable commands
├── commands/
│   ├── coreCommands.js     # Core utilities
│   └── sharedCommands.js   # Shared across features
├── helpers/
│   ├── navHelpers.js       # Feature-specific helpers
│   ├── formHelpers.js      # Import only where needed
│   └── apiHelpers.js
└── e2e.js                   # Imports only commands
```

**Usage:**

```javascript
// Global commands (available everywhere)
cy.visitPage("/home");
cy.login("user", "pass");

// Scoped helpers (import where needed)
import { testNavStructure } from "../support/helpers/navHelpers.js";
testNavStructure();
```

**When to use:**

- ✅ Commands: Frequently used, cross-cutting concerns (login, navigation)
- ✅ Helpers: Feature-specific, used in few test files

**Used by:** Projects with 100+ test files, multiple teams

---

### Pattern 3: Conditional Command Loading

**Structure:**

```javascript
// cypress/support/e2e.js
import "./commands/core";

// Conditionally load based on test file location
if (Cypress.spec.relative.includes("navigation")) {
  import("./commands/navCommands");
}
if (Cypress.spec.relative.includes("auth")) {
  import("./commands/authCommands");
}
```

**Pros:**

- ✅ Commands only loaded when needed
- ✅ Smaller bundle size
- ✅ Better performance

**Cons:**

- ❌ More complex setup
- ❌ Not standard Cypress pattern
- ❌ Can be harder to debug

**Used by:** Very large projects (1000+ tests) with performance concerns

> **📚 For detailed scoping options:** See [SCOPING_COMMANDS.md](./SCOPING_COMMANDS.md) for all methods to scope commands, including conditional loading, helper functions, and more.

---

### Pattern 4: Page Object Model + Commands

**Structure:**

```
cypress/
├── support/
│   ├── commands/           # Low-level commands
│   └── pageObjects/        # Page-specific logic
│       ├── LoginPage.js
│       ├── DashboardPage.js
│       └── NavigationPage.js
└── e2e/
    └── auth/
        └── login.cy.js
```

**Usage:**

```javascript
// Commands: Atomic actions
cy.fillInput("#email", "user@example.com");
cy.clickButton("#submit");

// Page Objects: High-level flows
const loginPage = new LoginPage();
loginPage.login("user", "pass");
```

**Used by:** Enterprise projects, teams familiar with Selenium patterns

---

## Recommendations for Large Projects

### Tier 1: Core Commands (Always Global)

Keep these as global commands - used everywhere:

- `cy.visitPage()` - Navigation
- `cy.login()` - Authentication
- `cy.logout()` - Authentication
- `cy.waitForPageLoad()` - Utilities

### Tier 2: Feature Commands (Global but Organized)

Keep as commands, organized by feature:

- Navigation commands (`cy.testNav()`, `cy.testNavStructure()`)
- Form commands (`cy.fillForm()`, `cy.submitForm()`)
- API commands (`cy.apiGet()`, `cy.apiPost()`)

### Tier 3: Specialized Helpers (Scoped)

Convert to helpers, import only where needed:

- Complex, feature-specific logic
- Used in < 5 test files
- Domain-specific utilities

---

## Real-World Examples

### Example 1: E-commerce Platform (500+ tests)

**Structure:**

```
cypress/support/
├── commands/
│   ├── coreCommands.js     # visit, wait, etc.
│   ├── cartCommands.js     # Global - used everywhere
│   ├── checkoutCommands.js # Global - used everywhere
│   └── adminCommands.js    # Global - admin tests
└── helpers/
    ├── productHelpers.js   # Import in product tests only
    └── analyticsHelpers.js # Import in analytics tests only
```

**Rationale:**

- Cart/checkout are core flows → commands
- Product/analytics are specialized → helpers

### Example 2: SaaS Application (1000+ tests)

**Structure:**

```
cypress/support/
├── commands/
│   ├── auth.js            # Login, logout, permissions
│   ├── navigation.js      # Global nav
│   └── api.js             # API helpers
└── pageObjects/
    ├── Dashboard.js        # Feature-specific
    ├── Settings.js
    └── Reports.js
```

**Rationale:**

- Commands for reusable actions
- Page Objects for complex flows
- All commands global (standard pattern)

### Example 3: Multi-Team Project

**Structure:**

```
cypress/support/
├── commands/
│   └── shared.js          # Shared across teams
├── teams/
│   ├── teamA/
│   │   └── commands.js     # Team A specific
│   └── teamB/
│       └── commands.js    # Team B specific
└── e2e.js                  # Imports based on config
```

**Rationale:**

- Shared commands for common functionality
- Team-specific commands for domain logic
- Conditional loading based on team

---

## Decision Matrix

| Scenario                       | Use Commands | Use Helpers |
| ------------------------------ | ------------ | ----------- |
| Used in > 10 test files        | ✅           | ❌          |
| Used in < 5 test files         | ❌           | ✅          |
| Core application flow          | ✅           | ❌          |
| Feature-specific logic         | ❌           | ✅          |
| Needs Cypress command chaining | ✅           | ❌          |
| Complex, multi-step operations | ❌           | ✅          |
| Simple, atomic actions         | ✅           | ❌          |

---

## Migration Strategy for Growing Projects

### Phase 1: Start Simple (Current)

- All commands global
- Organized by feature in separate files
- Works for < 100 tests

### Phase 2: Add Helpers (50-200 tests)

- Keep frequently used as commands
- Convert rarely used to helpers
- Import helpers where needed

### Phase 3: Optimize (200+ tests)

- Review command usage
- Consider conditional loading for very large suites
- Implement Page Objects for complex flows

---

## Best Practices from Large Projects

### 1. Naming Conventions

```javascript
// Commands: Verb-based, action-oriented
cy.login();
cy.fillForm();
cy.navigateTo();

// Helpers: Function-based, descriptive
testNavStructure();
validateFormData();
calculateTotal();
```

### 2. Documentation

- Document all commands in COMMANDS.md
- Include usage examples
- Note when to use commands vs helpers

### 3. Version Control

- Keep command files focused (max 200-300 lines)
- Use feature branches for new commands
- Review command additions carefully

### 4. Testing Commands

- Test commands themselves if complex
- Use TypeScript for type safety (optional)
- Validate parameters

### 5. Performance

- Avoid heavy operations in commands
- Use aliases for expensive queries
- Cache results when appropriate

---

## Resources

### Official Cypress Documentation

- [Custom Commands Guide](https://docs.cypress.io/api/cypress-api/custom-commands)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Organizing Tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

### Community Resources

- [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app) - Example large-scale project
- [Cypress Best Practices](https://learn.cypress.io/advanced-cypress-concepts/building-the-right-cypress-commands)
- [Cypress Discord Community](https://discord.gg/cypress)

### Articles

- [Scaling Cypress Tests](https://www.cypress.io/blog/2020/07/08/scaling-cypress-tests/)
- [Organizing Cypress Tests](https://www.cypress.io/blog/2021/04/06/organizing-cypress-tests/)

---

## Conclusion

For your current project size, **Pattern 1 (Modular Commands)** is the right choice:

- ✅ Standard Cypress pattern
- ✅ Scales to 100+ tests easily
- ✅ Simple to maintain
- ✅ Team-friendly

As you grow, consider **Pattern 2 (Hybrid)** when:

- You have 200+ test files
- Some commands are only used in a few places
- You want explicit dependencies

The global command approach is **not a problem** - it's the standard Cypress pattern used by companies like Shopify, Airbnb, and others with large test suites.
