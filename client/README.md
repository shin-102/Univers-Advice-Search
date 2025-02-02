# Univers Advice Search

Univers Advice Search is a resource locator application designed to provide users with easy access to a database of resources, such as courses, articles, videos, and PDFs. It is intended for entrepreneurs and self-development enthusiasts who are physically present in the Univers Advice workspace.  This application allows users to search and filter resources by various criteria, making it simple to find the information they need.

## Table of Contents

-   Technologies Used
-   Features
-   Project Structure
-   Code Explanation
-   Contributing ?

## Technologies Used

-   React
-   TypeScript
-   Tailwind CSS v4
-   Framer Motion
-   Lucide React

## Features

-   Search functionality with keyword matching in titles and descriptions.
-   Filtering by file type (PDF, Article, Video) and language (English, Spanish, French).
-   Dropdown menus for filter selection.
-   "Load More" button for paginated results display.
-   Smooth animations using Framer Motion.
-   Clear and concise UI with Tailwind CSS.
-   Consistent filter options across the application.
-   Navigation back to the home page from the search results page.

## Project Structure
```
src/
├── components/
│   ├── SearchBar.tsx        # Search and filter input component
│   └── filterOptions.ts     # Centralized filter option definitions
├── pages/
│   ├── HomePage.tsx             # Main landing page
│   └── SearchPage.tsx           # Search results page
├── assets/
│   └── data.json           # Sample resource data (replace with your actual data)
├── App.tsx                 # Main application component
├── main.tsx                 # ReactDOM Root/Router
├── index.tsx                # Entry point of the application
└── ...                     # Other files (types, utils, etc.)
public/
└── index.html
README.md                   # This file
package.json
tsconfig.json
...                         # Other configuration files
```

## Code Explanation

The project consists of several interconnected components:

-   **`data.json`:** This file contains the resource data. Each resource is an object with properties like `id`, `title`, `description`, `filetype`, `language`, and `thumbnail`.  It's crucial that the `id` is a string.

-   **`filterOptions.ts`:** This file defines the available filter options for file type and language.  It's imported by both the `SearchBar` and `SearchPage` components to ensure consistency.

-   **`HomePage.tsx`:** This is the main landing page. It displays the logo, the `SearchBar` component, and a section for featured resources.

-   **`SearchBar.tsx`:** This component handles user input for search queries and filter selection. It uses `URLSearchParams` to construct the URL with the query and filter parameters and navigates to the `SearchPage` component.

-   **`SearchPage.tsx`:** This component displays the search results. It reads the query and filter parameters from the URL, fetches the data from `data.json`, filters the data, and displays the results in a paginated manner using the "Load More" button.  It also handles navigation back to the home page via the logo.

The application utilizes React hooks like `useState` and `useEffect` for managing state and side effects.  The filtering logic is implemented using the `filter` method on the data array.  Framer Motion is used for animations, Tailwind CSS for styling, and Lucide React for icons.

## Contributing - *Optional*

For now, feel free to contribute if you stumble upon this repo :3

