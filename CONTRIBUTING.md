# Contributing Guidelines

Thank you for contributing to PAIO 2026! We appreciate your effort and time. Please follow these guidelines to ensure a smooth collaboration.

---

## Getting Started

1. **Fork the Repository**: Create your own fork of the project
2. **Clone Your Fork**: `git clone your-fork-url && cd paio_website_2026`
3. **Create a Feature Branch**: `git checkout -b feature/your-feature-name`
4. **Install Dependencies**: `yarn install`
5. **Start Development**: `yarn dev`

---

## Coding Standards

### TypeScript

- Always use TypeScript for new code
- Define proper types for all functions and components
- Avoid using `any` type; use generics or proper typing instead

### Components

```typescript
// Example: Proper component structure
import { FC } from 'react';

interface HelloProps {
  name: string;
  age?: number;
}

const Hello: FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default Hello;
```

### Styling

- Use Tailwind CSS utility classes
- Avoid CSS-in-JS or inline styles
- Create reusable component variants if needed

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`, `UserCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `validateEmail.ts`)
- **Types**: camelCase (e.g., `userTypes.ts`, `apiTypes.ts`)

---

## Git Workflow

### Branch Naming

```
feature/descriptive-name       # New features
fix/bug-description            # Bug fixes
docs/what-was-updated          # Documentation updates
refactor/what-changed          # Code refactoring
perf/improvement-description   # Performance improvements
```

### Commit Messages

Use the conventional commits format:

```
feat: add user authentication
fix: resolve navigation bug
docs: update setup instructions
refactor: simplify component logic
chore: upgrade dependencies
```

### Pull Requests

1. **Title**: Use clear, descriptive titles
2. **Description**: Include:
   - What was changed and why
   - Any related issues (e.g., `Fixes #123`)
   - Breaking changes (if any)
   - Screenshots for UI changes
3. **Keep it Focused**: One feature or fix per PR

---

## Code Review Checklist

Before submitting your PR, ensure:

- [ ] Code follows project standards
- [ ] TypeScript types are properly defined
- [ ] ESLint passes: `yarn lint`
- [ ] No console errors or warnings
- [ ] Components are tested manually
- [ ] Commit messages are clear and descriptive
- [ ] No breaking changes without discussion

---

## Running Tests and Linting

```bash
# Run linting
yarn lint

# Build production bundle
yarn build

# Start production server
yarn start
```

---

## Questions or Issues?

- Check existing documentation in the `docs/` folder
- Review similar implementations in the codebase
- Ask in team communication channels before starting complex work

---

## Thank You!

Your contributions make PAIO 2026 better! 🚀
