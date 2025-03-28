# WhatBytes - Frontend Developer Assessment

A modern web application built with Next.js for frontend developer assessment, featuring authentication, dashboard analytics, and skill assessment functionalities.

## 🚀 Features

- **Authentication** - Secure user authentication using Clerk
- **Dashboard Analytics** - Visual representation of performance metrics
- **Skill Assessment** - Track and manage skill test results
- **Responsive Design** - Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI** - Clean and modern interface using Tailwind CSS
- **Real-time Updates** - Instant feedback and updates using Redux

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/iamsidar07/whatbytes.git
cd whatbytes
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your Clerk environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
whatbytes/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions and store
│   └── types/              # TypeScript type definitions
├── public/                  # Static assets
└── ...config files
```

## 🔑 Key Components

- `Header.tsx` - Main navigation header with authentication controls
- `Sidebar.tsx` - Desktop navigation sidebar
- `Topbar.tsx` - Mobile navigation bar
- `ComparasionGraph.tsx` - Performance comparison visualization
- `SkillCard.tsx` - Skill assessment card component

## 🔧 Configuration

The project uses several configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration

## 🚀 Deployment

The project is ready to be deployed on [Vercel](https://vercel.com). Simply connect your GitHub repository to Vercel and it will handle the rest.

## 💻 Development

- **Code Style**: The project uses ESLint and TypeScript for code quality
- **State Management**: Redux Toolkit for global state management
- **Routing**: Next.js App Router for file-system based routing
- **Styling**: Tailwind CSS for utility-first styling
- **Components**: Mix of client and server components following Next.js 13+ conventions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication and User Management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com) - Deployment Platform
