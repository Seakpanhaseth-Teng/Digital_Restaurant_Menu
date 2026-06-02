# Draft: Digital Restaurant Menu Build

## Requirements (confirmed)
- Build out the Digital Restaurant Menu React application from the existing skeleton
- Project at `C:\Users\Admin\Github_Projects\Digital_Restaurant_Menu`
- Rewrite 2 broken files: MenuItemModal.jsx, SettingsDrawer.jsx
- Polish 1 file: AdminToolbar.jsx
- Create all empty files with proper implementations
- Create index.html (doesn't exist at all)

## Technical Decisions (from handoff)
- **Stack**: React 19 + Vite 6 + Tailwind CSS v3 (darkMode: "class")
- **IDs**: crypto.randomUUID()
- **Persistence**: localStorage only, no backend/no auth
- **Architecture**: Feature-based components
- **Data keys**: menuItems, darkMode, isAdminMode
- **Menu item model**: { id, name, description, price, category, image, createdAt, updatedAt }

## Currently Broken Files
- **MenuItemModal.jsx**: Backtick code fences inside JSX, floating expression outside component
- **SettingsDrawer.jsx**: Duplicate toggles same row, overlay nested wrong, missing dark mode label

## Empty Files (0 bytes)
- package.json, vite.config.js, tailwind.config.js, src/index.css
- src/main.jsx, src/App.jsx
- src/components/Header.jsx, CategoryTabs.jsx, MenuCard.jsx, EmptyState.jsx
- src/data/seedMenu.js
- src/hooks/useLocalStorage.js
- src/utils/storage.js, validation.js

## Missing Files (don't exist at all)
- index.html

## Git Status
- Branch: main, up to date with origin/main
- Working tree clean (all empty files are committed)
- README.md already has detailed spec (committed)

## Proposed Build Waves (from handoff)
- Wave 1: Foundation (index.html, package.json, vite.config.js, tailwind.config.js, index.css)
- Wave 2: Data layer (seedMenu.js, useLocalStorage.js, storage.js, validation.js)
- Wave 3: Components (Header.jsx, CategoryTabs.jsx, MenuCard.jsx, EmptyState.jsx, MenuItemModal.jsx rewrite, SettingsDrawer.jsx rewrite, AdminToolbar.jsx polish)
- Wave 4: Entry + App (main.jsx, App.jsx)
- Wave 5: Install + verify (npm install, npm run dev)
- Wave 6: Git commit

## Test Strategy
- **Infrastructure exists**: NO (no test config)
- **Decision needed**: PENDING (ask user)

## Open Questions
- What test strategy? TDD, tests-after, or none?
