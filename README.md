# WeKraft - Developer Collaboration Platform

<div align="center">
  <img src="public/download.jpeg" alt="Kiro Logo" width="200"/>
  
  ### *Documentation crafted with precision by Kiro*
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
  [![Next.js](https://img.shields.io/badge/Next.js-16+-black)](https://nextjs.org/)
  [![Convex](https://img.shields.io/badge/Convex-Database-orange)](https://convex.dev/)
  [![AWS](https://img.shields.io/badge/AWS-Powered-yellow)](https://aws.amazon.com/)
</div>

---

## 📋 About The Project

**WeKraft** is a comprehensive developer collaboration platform that combines GitHub integration, AI-powered code reviews, project management, and community features. The platform enables developers to showcase projects, collaborate effectively, and leverage AI assistance for code quality improvement.

This project is built according to the specifications outlined in:
- 📄 **[requirements.md](requirements.md)** - Complete functional and non-functional requirements
- 🎨 **[design.md](design.md)** - Detailed system architecture and design specifications

> **Note:** All project documentation and specifications have been carefully designed and documented by **Kiro**, ensuring comprehensive coverage of all technical and business requirements.

---

## ✨ Key Features

### 🔐 Authentication & User Management
- **Clerk Integration** - Secure user authentication and session management
- **GitHub OAuth** - Seamless GitHub account connection
- **User Tiers** - Free (2 projects), Pro (5 projects), Elite (15 projects)
- **Profile Management** - Comprehensive user profiles with activity tracking

### 📊 Project Management
- **Repository Integration** - Connect and sync GitHub repositories
- **Project Health Scores** - Real-time project health monitoring (0-100 scale)
- **Visibility Controls** - Public/private project settings
- **Tag-based Discovery** - Find projects by technology and keywords
- **Project Analytics** - Detailed insights into project performance

### 🤖 AI-Powered Code Reviews
- **Automated PR Analysis** - AI-driven code review for pull requests
- **Multi-Model Support** - Google Gemini, OpenAI, and Amazon Bedrock
- **Security Scanning** - Automated security vulnerability detection
- **Best Practice Suggestions** - Code quality and optimization recommendations
- **Review History** - Complete audit trail of all AI reviews

### 📈 Analytics & Insights
- **Developer Activity** - Contribution graphs and timelines
- **Impact Scoring** - Calculate developer influence and contributions
- **Project Health Trends** - Track health metrics over time
- **Monthly Breakdowns** - Detailed activity reports

### 👥 Collaboration Tools
- **Team Management** - Invite and manage team members
- **Role-Based Access** - Granular permission controls
- **Project Workspaces** - Dedicated spaces for each project
- **Community Features** - Project starring, forking, and discovery

---

## 🏗️ Technology Stack

### Frontend
- **Framework:** Next.js 16+ with App Router
- **UI Library:** React 19+ with TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **State Management:** Convex React hooks + TanStack Query
- **Authentication:** Clerk

### Backend
- **Database:** Convex (Real-time)
- **API Layer:** Convex functions and mutations
- **Background Jobs:** Inngest
- **Authentication:** Clerk JWT integration

### AWS Services
- **Amazon S3** - File storage and static assets
- **Amazon Bedrock** - Advanced AI model capabilities
- **Amazon CloudWatch** - Monitoring and logging
- **CloudFront** - CDN and caching

### External Integrations
- **GitHub API** - Repository and user data synchronization
- **Google Gemini** - AI code analysis
- **OpenAI** - Code review assistance
- **ElevenLabs** - Voice features

### Developer Tools
- **Package Manager:** pnpm
- **Code Quality:** Biome
- **Type Safety:** TypeScript
- **Linting:** ESLint

---

## 📦 Project Structure

```
convex-wekraft/
├── convex/              # Convex backend functions and schema
│   ├── auth.config.ts   # Authentication configuration
│   ├── projects.ts      # Project management functions
│   ├── repos.ts         # Repository integration
│   └── schema.ts        # Database schema definitions
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── (auth)/      # Authentication routes
│   │   ├── (main)/      # Main application routes
│   │   └── api/         # API endpoints
│   ├── components/      # React components
│   │   ├── ai-elements/ # AI-powered UI components
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   ├── modules/         # Feature modules
│   └── providers/       # React context providers
├── public/              # Static assets
│   └── download.jpeg    # Kiro branding logo
├── requirements.md      # Project requirements (by Kiro)
└── design.md           # System design document (by Kiro)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 8+
- **GitHub Account** for OAuth integration
- **Clerk Account** for authentication
- **Convex Account** for backend services
- **AWS Account** (optional, for S3 and Bedrock features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhanu-partap-13/convex-wekraft.git
   cd convex-wekraft
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Convex
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   CONVEX_DEPLOYMENT=your-deployment-id
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-key
   CLERK_SECRET_KEY=your-clerk-secret
   
   # GitHub OAuth
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-secret
   
   # AI Services
   GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-key
   OPENAI_API_KEY=your-openai-key
   
   # AWS (Optional)
   AWS_ACCESS_KEY_ID=your-aws-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret
   AWS_REGION=ap-south-1
   AWS_S3_BUCKET=your-bucket-name
   ```

4. **Run database migrations**
   ```bash
   pnpm convex dev
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Documentation

All project documentation has been meticulously created by **Kiro**:

- **[requirements.md](requirements.md)** - Comprehensive functional requirements, non-functional requirements, success criteria, and technical constraints
- **[design.md](design.md)** - Complete system architecture, component design, AWS integration patterns, and database schema
- **[AUTH_FLOW_ANALYSIS.txt](AUTH_FLOW_ANALYSIS.txt)** - Authentication flow documentation
- **[todo.txt](todo.txt)** - Development task tracking

---

## 🎯 Core Workflows

### User Onboarding
1. Sign up via Clerk authentication
2. Connect GitHub account
3. Complete profile setup
4. Create first project

### Project Creation
1. Select GitHub repository
2. Configure visibility and settings
3. Add description and tags
4. Set team requirements
5. Enable AI code reviews

### AI Code Review Process
1. Developer creates pull request
2. Webhook triggers AI analysis
3. AI models process code changes
4. Review comments posted automatically
5. Developers review and implement suggestions

---

## 📊 Features Overview

### Project Health Scoring Algorithm
- **Activity Momentum (35%)** - Recent commits, PRs, and contributions
- **Maintenance Quality (35%)** - Code review coverage, issue resolution
- **Community Trust (20%)** - Stars, forks, contributor count
- **Freshness (10%)** - Last update recency

### User Tiers Comparison

| Feature | Free | Pro | Elite |
|---------|------|-----|-------|
| Projects | 2 | 5 | 15 |
| AI Reviews | ✓ | ✓ | ✓ |
| Private Projects | Limited | ✓ | ✓ |
| Team Members | 3 | 10 | Unlimited |
| Analytics | Basic | Advanced | Premium |
| Priority Support | - | ✓ | ✓ |

---

## 🛠️ Development

### Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code with Biome
pnpm format

# Convex development
pnpm convex dev

# Seed database
pnpm convex run seedProjects:default
```

### Code Quality

This project uses:
- **Biome** for code formatting and linting
- **TypeScript** for type safety
- **ESLint** for additional code quality checks

---

## 🔒 Security

- All user data encrypted at rest and in transit
- GitHub tokens securely managed
- GDPR compliant data handling
- Rate limiting on all API endpoints
- Role-based access control (RBAC)
- Regular security audits

---

## 🌟 Performance

The platform is designed to meet stringent performance requirements:
- **Page Load:** < 3 seconds
- **API Response:** < 2 seconds
- **AI Reviews:** < 5 minutes
- **Real-time Updates:** < 500ms latency
- **Uptime:** 99.9% availability

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](bin/LICENSE.md) file for details.

---

## 👤 Credits

### Documentation & Design
All project documentation, requirements, and design specifications have been created by **[Kiro](public/download.jpeg)**.

### Technology Partners
- **Convex** - Real-time backend infrastructure
- **Clerk** - Authentication and user management
- **GitHub** - Version control integration
- **AWS** - Cloud infrastructure and AI services

---

## 📞 Support

For support, please:
- Check the [requirements.md](requirements.md) for functional specifications
- Review the [design.md](design.md) for technical architecture
- Open an issue on GitHub
- Contact the development team

---

## 🗺️ Roadmap

Future enhancements planned:
- Mobile application development
- Advanced AI code generation
- Additional version control integrations
- Enhanced collaboration tools
- Developer services marketplace

---

<div align="center">
  
  **Built with ❤️ by the WeKraft Team**
  
  *Powered by Convex, Next.js, and AWS*
  
  ---
  
  **Documentation by Kiro** 🤖
  
  ![Kiro](public/download.jpeg)
  
</div>
