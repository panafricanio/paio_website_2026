# PAIO 2026 Website

Welcome to the official website for **PAIO 2026**.
---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Team Collaboration](#team-collaboration)
- [Scripts](#scripts)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [Deployment](#deployment)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17+ or 20+
- **Yarn** (configured as the package manager)

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will automatically reload as you make changes to the code.

---

## 📁 Project Structure

```
paio_website_2026/
├── app/                          # Next.js App Router (page routes)
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   └── [dynamic]/                # Dynamic routes
├── src/
│   ├── components/               # Reusable React components
│   │   ├── Common/               # Common UI components (Header, Footer, etc.)
│   │   ├── Hero/                 # Hero section components
│   │   ├── Features/             # Feature-specific components
│   │   └── Cards/                # Card-based components
│   ├── hooks/                    # Custom React hooks
│   │   └── useCustom.ts          # Custom hooks for shared logic
│   ├── utils/                    # Utility functions
│   │   ├── helpers.ts            # General helper functions
│   │   ├── formatters.ts         # Data formatting functions
│   │   └── validators.ts         # Input validation functions
│   ├── lib/                      # Libraries and external integrations
│   │   ├── api.ts                # API client setup
│   │   └── config.ts             # Configuration constants
│   ├── types/                    # TypeScript type definitions
│   │   ├── index.ts              # Main type exports
│   │   └── models.ts             # Data models
│   └── styles/                   # Global stylesheets
│       └── globals.css           # Global CSS
├── public/
│   ├── images/                   # Static images and assets
│   └── [other assets]/
├── docs/                         # Documentation
├── .yarnrc.yml                   # Yarn configuration
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── yarn.lock                     # Dependency lock file
```

---

## 🛠 Development Guidelines

### Code Organization

- **Components**: Keep components in `src/components/` organized by feature or functionality
- **Utilities**: Place reusable functions in `src/utils/` with clear naming conventions
- **Types**: Define all TypeScript interfaces and types in `src/types/`
- **Hooks**: Create custom hooks in `src/hooks/` for shared component logic

### Component Structure

- Use functional components with React hooks
- Keep components focused and single-responsibility
- Export components at the end of the file
- Include proper TypeScript types for all props

### Styling

- Use Tailwind CSS for styling
- Avoid inline styles; prefer utility classes
- Create reusable style components when necessary

### Code Quality

- Follow ESLint rules configured in `eslint.config.mjs`
- Run linting before committing:
  ```bash
  yarn lint
  ```
- Maintain consistent code formatting

---

## 👥 Team Collaboration

### Best Practices

1. **Branch Naming**: Use descriptive branch names
   - `feature/component-name`
   - `fix/bug-description`
   - `docs/update-documentation`

2. **Commit Messages**: Write clear, concise commit messages
   - `feat: add new component`
   - `fix: resolve styling issue`
   - `docs: update README`

3. **Pull Requests**: Create descriptive PRs with:
   - Clear description of changes
   - References to related issues
   - Screenshots for UI changes

4. **Code Review**: Before merging:
   - Ensure all tests pass
   - Check ESLint compliance
   - Verify component imports and exports

### Communication

- Use the `docs/` folder for team documentation
- Document architectural decisions in `docs/ARCHITECTURE.md`
- Update `docs/CONTRIBUTING.md` with team guidelines

---

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build production bundle |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint on the codebase |

---

## 🛠 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Package Manager**: [Yarn](https://yarnpkg.com)
- **Linting**: [ESLint](https://eslint.org)

---

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the development guidelines
3. Commit with clear messages
4. Push to your branch
5. Open a pull request with a detailed description

For more details, see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

---

## 🚀 Deployment

The application can be deployed on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any other hosting platform that supports Next.js.

### Vercel Deployment

```bash
# Deploy using Vercel CLI
npm i -g vercel
vercel
```

For more deployment options, see [docs/SETUP.md](docs/SETUP.md).

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: March 2026
