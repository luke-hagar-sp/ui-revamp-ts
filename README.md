# UI Development Kit Workspace

This is a pnpm workspace containing an Electron Angular application with shared components.

## Project Structure

```
├── packages/
│   ├── ui-dev-kit/          # Main Electron Angular application
│   └── sailpoint-components/ # Shared Angular component library
├── pnpm-workspace.yaml      # Workspace configuration
└── package.json             # Root workspace scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

```bash
# Install dependencies for all packages
pnpm install
```

### Development

```bash
# Start the Electron Angular app in development mode
pnpm dev

# Build the shared components library
pnpm build:components

# Watch mode for components (rebuilds on changes)
pnpm dev:components
```

### Building

```bash
# Build the Electron app for distribution
pnpm build

# Create distributable packages
pnpm make
```

## Package Details

### ui-dev-kit
- **Type**: Electron Angular Application
- **Framework**: Angular 20 + Electron Forge + Vite
- **Purpose**: Main desktop application for UI development

### sailpoint-components
- **Type**: Angular Component Library
- **Framework**: Angular 20
- **Purpose**: Shared components used across the application

## Key Features

- **Monorepo Structure**: Uses pnpm workspaces for efficient dependency management
- **Electron Integration**: Desktop app with Angular frontend
- **Shared Components**: Reusable component library
- **Modern Build System**: Vite for fast development and building
- **TypeScript**: Full TypeScript support across all packages

## Development Workflow

1. **Component Development**: Work on shared components in `packages/sailpoint-components/`
2. **App Development**: Develop the main app in `packages/ui-dev-kit/`
3. **Testing**: Components are automatically available in the main app via workspace dependencies
4. **Building**: Use workspace scripts to build and package the application

## Scripts

- `pnpm dev` - Start the Electron app in development mode
- `pnpm build` - Build the Electron app for distribution
- `pnpm make` - Create distributable packages
- `pnpm build:components` - Build the shared components library
- `pnpm dev:components` - Watch mode for components development 