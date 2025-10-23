# React Task Manager & Posts Explorer

A modern, responsive React application featuring task management, API integration, and a clean user interface built with React, Vite, and Tailwind CSS.

## Features

### Task Management
- ✅ Create, complete, and delete tasks
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Persistent storage using localStorage
- ✅ Real-time task counter
- ✅ Smooth animations and transitions

### Posts Explorer
- ✅ Fetch and display posts from JSONPlaceholder API
- ✅ Search functionality to filter posts
- ✅ Pagination with page navigation
- ✅ Loading and error states
- ✅ Responsive grid layout

### User Interface
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle (in progress)
- ✅ Reusable component architecture
- ✅ Smooth animations and hover effects
- ✅ Clean, modern styling with Tailwind CSS

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **JSONPlaceholder API** - Mock REST API for posts
- **PropTypes** - Runtime type checking
- **localStorage API** - Data persistence

## Project Structure
```
my-react-app/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── TaskManager.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Tasks.jsx
│   │   └── Posts.jsx
│   ├── context/          # React Context
│   │   └── ThemeContext.jsx
│   ├── hooks/            # Custom hooks
│   │   └── useLocalStorage.js
│   ├── lib/              # Utilities and API functions
│   │   └── api.js
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd my-react-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5174
```

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Assignment Requirements Completed

- **Task 1: Project Setup**
  - Created React application using Vite
  - Installed and configured Tailwind CSS
  - Set up project structure with components, pages, and utility folders
  - Configured React Router for navigation

- **Task 2: Component Architecture**
  - Button component with multiple variants (primary, secondary, danger, success, warning)
  - Card component for content display
  - Navbar component with navigation links
  - Footer component with copyright information
  - Layout component integrating Navbar and Footer
  - All components use props for customization and reusability

- **Task 3: State Management and Hooks**
  - TaskManager component with full CRUD operations
  - Task filtering (All, Active, Completed)
  - `useState` for component state management
  - `useEffect` for localStorage persistence
  - `useContext` for theme management
  - Custom `useLocalStorage` hook for data persistence

- **Task 4: API Integration**
  - Fetches data from JSONPlaceholder API
  - Displays data in responsive grid layout
  - Loading and error states implemented
  - Pagination with page navigation
  - Search functionality to filter posts

- **Task 5: Styling with Tailwind CSS**
  - Fully responsive design (mobile, tablet, desktop)
  - Dark mode implementation (in progress)
  - Utility classes for layout, spacing, typography
  - Custom animations and smooth transitions

## Responsive Design

The application is fully responsive and works seamlessly across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## Component Features

### Button Component
- Multiple variants: primary, secondary, danger, success, warning
- Three sizes: sm, md, lg
- Disabled state support
- Hover and focus states
- PropTypes validation

### TaskManager Component
- Add new tasks with Enter key or button
- Toggle task completion with checkbox
- Delete tasks individually
- Filter by All/Active/Completed status
- Shows remaining task count
- Data persists in localStorage

### Posts Component
- Displays 10 posts per page
- Real-time search filtering
- Smooth pagination
- Hover effects on cards
- Loading spinner
- Error handling

## State Management

- **useState**: Local component state
- **useEffect**: Side effects and lifecycle management
- **useContext**: Global theme state
- **Custom Hooks**: Reusable localStorage logic

## API Integration

- **Endpoint**: https://jsonplaceholder.typicode.com/posts
- **Method**: GET
- **Features**: Error handling, loading states, data transformation

## Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.x",
  "prop-types": "^15.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x"
}
```

## Deployment

This application is deployed on [Vercel/Netlify - Add URL after deployment]

**Live Demo**: [Add your deployment URL here]
 

## License

This project was created as part of a React learning assignment.

---

**Built with using React, Vite, and Tailwind CSS**