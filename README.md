# ArkLab AI Catalog

A modern, responsive web application for discovering, managing, and deploying AI agents. Built with Next.js 14, TypeScript, and Tailwind CSS, this platform provides a comprehensive catalog of AI solutions for various business needs.

![ArkLab AI Catalog](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### Core Functionality
- **AI Agent Catalog**: Browse and discover 50+ AI agents across multiple categories
- **Advanced Filtering**: Filter agents by status, category, and pricing model
- **Real-time Search**: Instant search functionality across all agent data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Authentication**: Secure Google OAuth integration with NextAuth.js

### User Experience
- **Modern UI/UX**: Beautiful, intuitive interface built with Radix UI components
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Loading States**: Elegant loading indicators and skeleton screens
- **Toast Notifications**: User-friendly feedback system

### Technical Features
- **Server-Side Rendering**: Optimized performance with Next.js 14 App Router
- **Type Safety**: Full TypeScript implementation for better development experience
- **State Management**: Redux Toolkit for global state management
- **Form Handling**: React Hook Form with Zod validation
- **Component Library**: Comprehensive UI component system

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- **Google OAuth Credentials** (for authentication)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/arklab-ai-catalog.git
   cd arklab-ai-catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
    GOOGLE_CLIENT_ID=294768053204-ouui0547v1g85i24uf3efg96pokkkv0e.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=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
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=super_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_URL` | Your application URL | Yes |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |

## 📁 Project Structure

```
arklab-ai-catalog/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── agent-card.tsx    # Agent display component
│   ├── agent-grid.tsx    # Agent grid layout
│   ├── filters.tsx       # Filter components
│   └── navbar.tsx        # Navigation component
├── lib/                  # Utility libraries
│   ├── auth.ts           # Authentication utilities
│   ├── store.ts          # Redux store configuration
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   └── mock-agents.json  # Sample agent data
└── styles/               # Additional stylesheets
```

## 🎯 Usage

### Landing Page
- Visit the homepage to see the application overview
- Click "Sign in with Google" to authenticate
- View key statistics and features

### Dashboard
- Browse the complete catalog of AI agents
- Use the search bar to find specific agents
- Apply filters by status, category, or pricing model
- View detailed information about each agent

### Agent Categories
- **Customer Service**: Chatbots, feedback analyzers
- **Marketing**: Content generators, social media tools
- **Development**: Code review assistants
- **Operations**: Voice assistants, automation tools
- **Finance**: Financial advisors
- **Human Resources**: Onboarding bots
- **Legal**: Document drafters
- **Data Analysis**: Analytics agents

## 🚀 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Add environment variables in Vercel dashboard**
4. **Deploy automatically**

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Direct deployment from GitHub
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Adding New Agents

To add new AI agents, edit the `public/mock-agents.json` file:

```json
{
  "id": "agent-011",
  "name": "Your Agent Name",
  "description": "Agent description",
  "status": "Active",
  "category": "Your Category",
  "pricingModel": "Subscription"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component and variable names
- Add proper error handling
- Write responsive, accessible components
- Test on multiple devices and browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for the deployment platform
- **Radix UI** for the component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for the animation library

## 📞 Support

If you have any questions or need help:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the Frontend Developer Intern Challenge**
