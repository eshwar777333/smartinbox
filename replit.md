# Smart Inbox - AI-Powered Email Management

## Overview

Smart Inbox is a waitlist landing page for an upcoming AI-powered email management application. The project is built as a full-stack TypeScript application with a React frontend and Express.js backend, featuring a clean, modern design focused on email productivity and inbox zero philosophy.

The application currently serves as a marketing site to collect email signups for early access, with features including waitlist management, signup counting, and a responsive landing page showcasing the upcoming product's capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with a custom design system featuring brand colors and comprehensive component library
- **UI Components**: shadcn/ui component library providing consistent, accessible components built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Custom Vite integration for hot module replacement in development
- **API Structure**: RESTful endpoints with proper error handling and request/response logging
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation

### Database Schema Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Two main tables - `waitlist_signups` for email collection and `app_stats` for application metrics
- **Migrations**: Drizzle Kit setup for database schema management and version control

### Component Architecture
- **Layout Components**: Modular sections (Header, Hero, Features, Footer) for maintainable page structure  
- **Feature Components**: Specialized components like WaitlistForm and RegistrationCounter with real-time updates
- **UI Components**: Comprehensive design system with consistent styling and accessibility features
- **Custom Hooks**: Reusable hooks for mobile detection and toast notifications

### Development Workflow
- **Build System**: Vite for frontend bundling with esbuild for server-side compilation
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Code Organization**: Clear separation between client, server, and shared code with path aliases
- **Development Tools**: Hot reloading, runtime error overlays, and development-specific tooling

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Backend**: Express.js, Node.js with ES modules
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution, various Vite plugins

### UI and Styling
- **CSS Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **Component Library**: Complete shadcn/ui suite built on Radix UI primitives
- **Icons**: Lucide React for consistent iconography, React Icons for social media icons
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Fonts**: Google Fonts (Inter) for typography

### Database and Validation
- **Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking and schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Utility Libraries
- **Styling Utilities**: clsx and class-variance-authority for conditional classes
- **Date Handling**: date-fns for date manipulation and formatting
- **Development**: Various development and debugging tools including Replit-specific plugins