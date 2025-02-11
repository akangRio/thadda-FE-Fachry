# Getting Started with Thadda-FE (Vite + TypeScript)

This guide will help you set up and start the project quickly.

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended) ➜ [Download here](https://nodejs.org/)
- **npm** (Comes with Node.js) or **yarn**

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
# Using Git
git clone https://github.com/your-username/thadda-fe.git
cd thadda-fe
```

Or manually download the source code and navigate to the project folder.

### 2️⃣ Install Dependencies
```sh
# Using npm
yarn install  # or npm install
```

### 3️⃣ Start the Development Server
```sh
yarn dev  # or npm run dev
```

After running the command, the terminal will show a local development URL, usually:
```
  Local: http://localhost:5173/
```
Open this in your browser to see the app in action.


## Useful Commands

| Command | Description |
|---------|-------------|
| `yarn dev` or `npm run dev` | Starts the development server |
| `yarn build` or `npm run build` | Builds the project for production |
| `yarn preview` or `npm run preview` | Serves the built project locally |
| `yarn lint` or `npm run lint` | Runs ESLint to check code quality |

## Additional Notes
- The app fetches data from **JSONPlaceholder API**.
- Tasks are stored in local state and persist using **local storage**.
- Basic filtering for **All, Completed, and Pending** tasks is included.

Happy coding! 🚀
