# Digital Restaurant Menu

A mobile-first digital restaurant menu application built with React and Tailwind CSS.

Customers access the menu by scanning a QR code placed on their table. The application provides a clean and responsive menu browsing experience while also including a built-in Manager Workspace that allows restaurant staff to create, update, and delete menu items without requiring a backend server or authentication system.

---

# Project Overview

Traditional paper menus are difficult to update, expensive to reprint, and inconvenient when menu items change frequently.

This project provides a digital alternative that allows restaurants to:

* Display menu items digitally
* Organize items by category
* Enable menu updates without code changes
* Store menu data locally in the browser
* Support both customer and manager workflows within a single application
* Provide a responsive experience optimized for smartphones

The application uses Local Storage as its persistence layer, making it suitable for small restaurants, cafes, food stalls, prototypes, and educational projects.

---

# Key Features

## Customer Features

* Mobile-first menu browsing
* Category-based filtering
* Clean card-based menu layout
* Product image support
* Image fallback support
* Responsive design
* Dark mode support
* Fast loading experience

## Manager Features

* Add menu items
* Edit existing menu items
* Delete menu items
* Local persistence using browser storage
* Settings panel
* Theme switching
* Manager Workspace toggle

## Technical Features

* React Functional Components
* React Hooks
* Local Storage persistence
* Component-based architecture
* Reusable modal system
* Dark mode implementation
* Responsive UI design
* Accessibility-focused form controls

---

# Technology Stack

## Frontend

* React
* JavaScript (ES6+)
* Vite
* Tailwind CSS

## State Management

* React useState
* React useEffect
* Custom Hooks

## Data Persistence

* Browser Local Storage

## Styling

* Tailwind CSS Utility Classes
* Mobile-First Responsive Design
* Dark Mode Support

## Development Tools

* Node.js
* npm
* Vite Development Server
* Git
* GitHub

---

# Application Architecture

The application follows a component-driven architecture.

```text
User Interface
       │
       ▼
React Components
       │
       ▼
Application State
       │
       ▼
Local Storage
```

Data flow:

```text
User Action
       │
       ▼
React State Update
       │
       ▼
UI Re-render
       │
       ▼
Local Storage Sync
```

---

# Project Structure

```text
restaurant-menu/
│
├── public/
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminToolbar.jsx
│   │   │   ├── MenuItemModal.jsx
│   │   │   └── SettingsDrawer.jsx
│   │   │
│   │   ├── Header.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── MenuCard.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── data/
│   │   └── seedMenu.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── storage.js
│   │   └── validation.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# Component Responsibilities

## App.jsx

Application controller.

Responsibilities:

* Global state management
* CRUD operations
* Theme management
* Local Storage synchronization
* Category filtering
* Modal management

---

## Header.jsx

Application header.

Responsibilities:

* Restaurant branding
* Settings access

---

## CategoryTabs.jsx

Menu filtering component.

Responsibilities:

* Display categories
* Switch active category
* Filter visible menu items

---

## MenuCard.jsx

Individual menu item component.

Responsibilities:

* Display item details
* Display image
* Display fallback image
* Display admin actions

---

## EmptyState.jsx

Reusable empty state component.

Responsibilities:

* Handle empty menus
* Handle empty categories

---

## AdminToolbar.jsx

Administrative controls.

Responsibilities:

* Create new menu items

---

## MenuItemModal.jsx

Reusable form modal.

Responsibilities:

* Create menu items
* Edit menu items
* Validate input

---

## SettingsDrawer.jsx

Application settings panel.

Responsibilities:

* Dark mode toggle
* Manager Workspace toggle

---

# Data Model

Each menu item follows the structure below:

```javascript
{
  id: "uuid",
  name: "Signature Beef Noodles",
  description: "Slow-cooked beef broth with handmade noodles",
  price: 8.99,
  category: "Mains",
  image: "https://example.com/image.jpg",
  createdAt: "2026-06-01T10:00:00Z",
  updatedAt: "2026-06-01T10:00:00Z"
}
```

---

# Local Storage Strategy

The application stores all persistent data in Local Storage.

Keys:

```javascript
menuItems
darkMode
isAdminMode
```

Purpose:

* Preserve menu data after refresh
* Preserve theme preference
* Preserve manager workspace preference

---

# CRUD Workflow

## Create

1. Manager clicks Add New Item
2. Modal opens
3. Form is completed
4. Validation runs
5. Item is added to state
6. Local Storage is updated

## Read

1. Menu items load from Local Storage
2. If no data exists, seed data is loaded
3. Items render to the interface

## Update

1. Manager clicks Edit
2. Modal opens with existing values
3. Changes are saved
4. Local Storage is updated

## Delete

1. Manager clicks Delete
2. Confirmation dialog appears
3. Item is removed
4. Local Storage is updated

---

# Accessibility Considerations

The application includes:

* Semantic HTML
* Form labels
* Keyboard-accessible controls
* Focus indicators
* Accessible button elements
* Sufficient color contrast
* Mobile-friendly touch targets

---

# Responsive Design Strategy

The application is designed using a mobile-first approach.

Target devices:

* Smartphones
* Tablets
* Laptops
* Desktop browsers

Key considerations:

* Touch-friendly controls
* Vertical scrolling
* Flexible layouts
* Responsive spacing
* Adaptive typography

---

# Dark Mode

Dark mode is implemented using Tailwind's class strategy.

```javascript
document.documentElement.classList.toggle(
  "dark",
  darkMode
);
```

The user's preference is automatically persisted in Local Storage.

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd restaurant-menu
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# Build for Production

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Future Enhancements

Potential improvements include:

* Backend API integration
* User authentication
* Cloud database storage
* Image upload support
* Inventory management
* Menu availability status
* Order placement system
* Shopping cart
* QR code generation
* Analytics dashboard
* Multi-language support
* Restaurant branding customization

---

# Learning Objectives

This project demonstrates practical experience with:

* React component architecture
* State management
* CRUD application development
* Local Storage persistence
* Responsive web design
* Tailwind CSS
* Frontend accessibility
* Modular project organization
* Software maintainability

---

# Author

Developed as a portfolio and learning project demonstrating modern frontend development practices using React and Tailwind CSS.