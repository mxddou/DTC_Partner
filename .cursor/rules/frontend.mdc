# Partner Dashboard Frontend PRD

## Project Overview

**Project:** Partner Dashboard (Business/Brand Side)  
**Purpose:** A comprehensive platform for businesses to manage creator partnerships, campaigns, and affiliate programs  
**Target Stack:** Next.js 15, TailwindCSS, shadcn/ui, React Query, Framer Motion, Clerk Auth, Supabase

## Phase 1 – Frontend Development with Mock Data

### Sprint 1 – Project Foundation & Setup

#### 1.1 Initialize Next.js Project

```bash
# Create new Next.js project with TypeScript and App Router
npx create-next-app@latest partner-dashboard --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd partner-dashboard
```

**Cursor.ai Context:** Set up a modern Next.js 15 application with TypeScript, App Router, and organized project structure using src directory.

#### 1.2 Install Core Dependencies

```bash
# UI and Design System
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-select
npm install lucide-react class-variance-authority clsx tailwind-merge

# State Management & Data Fetching
npm install @tanstack/react-query @tanstack/react-query-devtools

# Animations
npm install framer-motion

# Development Tools
npm install -D @types/node @types/react @types/react-dom
```

**Cursor.ai Context:** Install shadcn/ui dependencies manually for maximum control, React Query for state management, and Framer Motion for smooth animations.

#### 1.3 Configure shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Install essential components
npx shadcn-ui@latest add button card input label textarea
npx shadcn-ui@latest add dropdown-menu dialog tabs table
npx shadcn-ui@latest add toast select badge avatar
npx shadcn-ui@latest add sidebar navigation-menu
```

**File:** `components.json`

```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**Cursor.ai Context:** Configure shadcn/ui with custom theme colors focusing on professional dashboard aesthetics.

#### 1.4 Setup Theme Configuration

**File:** `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}
```

#### 1.5 Create Global Layout Structure

**File:** `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partner Dashboard",
  description: "Manage your creator partnerships and campaigns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
```

**File:** `src/components/providers.tsx`

```tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

**Cursor.ai Context:** Set up the foundational layout with React Query for state management and theme support.

### Sprint 2 – Routing Structure & Navigation

#### 2.1 Create App Router Structure

Create the following directory structure:

```
src/app/
├── dashboard/
│   └── page.tsx
├── profile/
│   └── page.tsx
├── campaigns/
│   ├── create/
│   │   └── page.tsx
│   ├── crm/
│   │   └── page.tsx
│   └── affiliate/
│       └── page.tsx
├── directory/
│   └── page.tsx
├── messages/
│   └── page.tsx
└── settings/
    └── page.tsx
```

#### 2.2 Main Dashboard Layout

**File:** `src/app/(dashboard)/layout.tsx`

```tsx
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
```

#### 2.3 Sidebar Navigation Component

**File:** `src/components/dashboard/sidebar.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  User,
  Campaign,
  Users,
  MessageSquare,
  Settings,
  TrendingUp,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Create Campaign", href: "/campaigns/create", icon: Campaign },
  { name: "CRM", href: "/campaigns/crm", icon: TrendingUp },
  { name: "Affiliate Manager", href: "/campaigns/affiliate", icon: TrendingUp },
  { name: "Creator Directory", href: "/directory", icon: Users },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">Partner Hub</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive && "bg-primary text-primary-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
```

**Cursor.ai Context:** Create a responsive sidebar with active state management using Next.js App Router's usePathname hook.

#### 2.4 Dashboard Header Component

**File:** `src/components/dashboard/header.tsx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search campaigns, creators..."
            className="pl-10 w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Quick Action
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <span className="font-medium">New application received</span>
                <span className="text-sm text-gray-500">
                  Summer Campaign 2024
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
```

**Cursor.ai Context:** Build a comprehensive header with search functionality, quick actions, and notification system.

### Sprint 3 – Dashboard Home Page

#### 3.1 Dashboard Overview Page

**File:** `src/app/(dashboard)/dashboard/page.tsx`

```tsx
import { CompanyProfileCard } from "@/components/dashboard/company-profile-card";
import { ActiveCampaignsCard } from "@/components/dashboard/active-campaigns-card";
import { CreatorOutreachCard } from "@/components/dashboard/creator-outreach-card";
import { AffiliatePerformanceCard } from "@/components/dashboard/affiliate-performance-card";
import { QuickActionsBar } from "@/components/dashboard/quick-actions-bar";
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your campaigns.
        </p>
      </div>

      <QuickActionsBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CompanyProfileCard />
        <ActiveCampaignsCard />
        <CreatorOutreachCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AffiliatePerformanceCard />
        <RecentActivityCard />
      </div>
    </div>
  );
}
```

#### 3.2 Company Profile Completion Card

**File:** `src/components/dashboard/company-profile-card.tsx`

```tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockProfileCompletion = {
  percentage: 75,
  completedSteps: 3,
  totalSteps: 4,
  nextStep: "Add brand assets",
};

export function CompanyProfileCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Profile Completion
        </CardTitle>
        <Building2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              {mockProfileCompletion.percentage}%
            </span>
            <span className="text-sm text-muted-foreground">
              {mockProfileCompletion.completedSteps}/
              {mockProfileCompletion.totalSteps} steps
            </span>
          </div>

          <Progress value={mockProfileCompletion.percentage} className="h-2" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Next: {mockProfileCompletion.nextStep}
            </p>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="gap-1">
                Complete <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

#### 3.3 Active Campaigns Summary Card

**File:** `src/components/dashboard/active-campaigns-card.tsx`

```tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Campaign, Eye, Users } from "lucide-react";
import Link from "next/link";

const mockActiveCampaigns = [
  {
    id: 1,
    name: "Summer Collection 2024",
    status: "active",
    applications: 24,
    budget: "$5,000",
  },
  {
    id: 2,
    name: "Holiday Promotion",
    status: "draft",
    applications: 0,
    budget: "$3,000",
  },
];

export function ActiveCampaignsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
        <Campaign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold">{mockActiveCampaigns.length}</div>

          <div className="space-y-2">
            {mockActiveCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{campaign.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        campaign.status === "active" ? "default" : "secondary"
                      }
                    >
                      {campaign.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {campaign.applications} applications
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <Link href="/campaigns/crm">
            <Button variant="outline" className="w-full">
              View All Campaigns
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
```

#### 3.4 Quick Actions Bar Component

**File:** `src/components/dashboard/quick-actions-bar.tsx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, MessageSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    label: "Create Campaign",
    href: "/campaigns/create",
    icon: Plus,
    variant: "default" as const,
  },
  {
    label: "Find Creators",
    href: "/directory",
    icon: Search,
    variant: "outline" as const,
  },
  {
    label: "Start Conversation",
    href: "/messages",
    icon: MessageSquare,
    variant: "outline" as const,
  },
  {
    label: "View Analytics",
    href: "/campaigns/affiliate",
    icon: TrendingUp,
    variant: "outline" as const,
  },
];

export function QuickActionsBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {quickActions.map((action) => (
        <Link key={action.label} href={action.href}>
          <Button variant={action.variant} className="gap-2">
            <action.icon className="h-4 w-4" />
            {action.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
```

**Cursor.ai Context:** Build dashboard components with mock data that showcase key metrics and provide quick navigation to important features.

---

### Sprint 4 – Profile & Campaign Management Pages

#### 4.1 Company Profile Page

**File:** `src/app/(dashboard)/profile/page.tsx`

```tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyInfoForm } from "@/components/profile/company-info-form";
import { ProductsSection } from "@/components/profile/products-section";
import { BrandAssetsSection } from "@/components/profile/brand-assets-section";
import { PastCampaignsSection } from "@/components/profile/past-campaigns-section";
import { PublicProfilePreview } from "@/components/profile/public-profile-preview";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function ProfilePage() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Company Profile</h1>
          <p className="text-gray-600">
            Manage your brand information and assets
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowPreview(!showPreview)}
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          {showPreview ? "Edit Profile" : "Preview Profile"}
        </Button>
      </div>

      {showPreview ? (
        <PublicProfilePreview />
      ) : (
        <Tabs defaultValue="company" className="space-y-6">
          <TabsList>
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="brand">Brand Assets</TabsTrigger>
            <TabsTrigger value="campaigns">Past Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            <CompanyInfoForm />
          </TabsContent>

          <TabsContent value="products">
            <ProductsSection />
          </TabsContent>

          <TabsContent value="brand">
            <BrandAssetsSection />
          </TabsContent>

          <TabsContent value="campaigns">
            <PastCampaignsSection />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
```

### Sprint 5 – Creator Directory & Messaging System

#### 5.1 Creator Directory Page

**File:** `src/app/(dashboard)/directory/page.tsx`

```tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreatorFilters } from "@/components/directory/creator-filters";
import { CreatorGrid } from "@/components/directory/creator-grid";
import { CreatorProfileModal } from "@/components/directory/creator-profile-modal";
import { Search, Filter, Bookmark, Grid, List } from "lucide-react";

const mockCreators = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarah_style",
    platform: "Instagram",
    followers: 125000,
    engagement: 4.2,
    niche: "Fashion",
    location: "New York, NY",
    avatar: "/api/placeholder/80/80",
    verified: true,
    rate: "$500-800",
    pastCollaborations: 45,
    audience: {
      ageGroups: { "18-24": 35, "25-34": 45, "35-44": 20 },
      genderSplit: { female: 78, male: 22 },
      topCountries: ["US", "Canada", "UK"],
    },
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@mikefitness",
    platform: "TikTok",
    followers: 89000,
    engagement: 6.8,
    niche: "Fitness",
    location: "Los Angeles, CA",
    avatar: "/api/placeholder/80/80",
    verified: false,
    rate: "$300-500",
    pastCollaborations: 28,
    audience: {
      ageGroups: { "18-24": 55, "25-34": 30, "35-44": 15 },
      genderSplit: { female: 45, male: 55 },
      topCountries: ["US", "Mexico", "Canada"],
    },
  },
  {
    id: 3,
    name: "Emma Wilson",
    username: "@emmaeats",
    platform: "YouTube",
    followers: 234000,
    engagement: 3.1,
    niche: "Food & Cooking",
    location: "Austin, TX",
    avatar: "/api/placeholder/80/80",
    verified: true,
    rate: "$800-1200",
    pastCollaborations: 67,
    audience: {
      ageGroups: { "25-34": 40, "35-44": 35, "45-54": 25 },
      genderSplit: { female: 68, male: 32 },
      topCountries: ["US", "Canada", "Australia"],
    },
  },
];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCreator, setSelectedCreator] = useState<any>(null);
  const [filters, setFilters] = useState({
    platform: "",
    niche: "",
    followers: "",
    engagement: "",
    location: "",
    verified: false,
  });

  const filteredCreators = mockCreators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform =
      !filters.platform || creator.platform === filters.platform;
    const matchesNiche = !filters.niche || creator.niche === filters.niche;
    const matchesVerified =
      !filters.verified || creator.verified === filters.verified;

    return matchesSearch && matchesPlatform && matchesNiche && matchesVerified;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Creator Directory
          </h1>
          <p className="text-gray-600">
            Discover and connect with content creators
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
          <div className="flex rounded-lg border">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Search & Filter</CardTitle>
              <CardDescription>
                Find creators that match your campaign needs
              </CardDescription>
            </div>
            <Badge variant="outline">
              {filteredCreators.length} creators found
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, username, or hashtags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t">
              <CreatorFilters filters={filters} setFilters={setFilters} />
            </div>
          )}
        </CardContent>
      </Card>

      <CreatorGrid
        creators={filteredCreators}
        viewMode={viewMode}
        onCreatorSelect={setSelectedCreator}
      />

      {selectedCreator && (
        <CreatorProfileModal
          creator={selectedCreator}
          isOpen={!!selectedCreator}
          onClose={() => setSelectedCreator(null)}
        />
      )}
    </div>
  );
}
```

**Cursor.ai Context:** Build a comprehensive creator directory with advanced filtering and a fully functional messaging system with real-time UI features, typing indicators, and professional conversation management.

### Sprint 6 – Settings & UI Polish

#### 6.1 Settings Page with Tabs

**File:** `src/app/(dashboard)/settings/page.tsx`

```tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountSettings } from "@/components/settings/account-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { BillingSettings } from "@/components/settings/billing-settings";
import { SecuritySettings } from "@/components/settings/security-settings";
import { IntegrationsSettings } from "@/components/settings/integrations-settings";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your account preferences and configuration
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="billing">
          <BillingSettings />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="integrations">
          <IntegrationsSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
```

#### 6.2 Responsive Design Implementation

**File:** `src/components/dashboard/mobile-sidebar.tsx`

```tsx
"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "./sidebar";
import { Menu } from "lucide-react";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <DashboardSidebar />
      </SheetContent>
    </Sheet>
  );
}
```

#### 6.3 Dark/Light Theme Implementation

**File:** `src/components/theme-provider.tsx`

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**File:** `src/components/theme-toggle.tsx`

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

#### 6.4 Page Transitions with Framer Motion

**File:** `src/components/page-transition.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
```

**Cursor.ai Context:** Complete the frontend phase with comprehensive settings, responsive design, theming, and smooth animations. This establishes a solid foundation before moving to backend integration.

## Summary

This Frontend PRD outlines the complete development of a Partner Dashboard for managing creator partnerships and campaigns. The implementation includes:

- **Modern Tech Stack**: Next.js 15, TypeScript, TailwindCSS, shadcn/ui
- **Comprehensive UI Components**: Dashboard cards, forms, tables, messaging system
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme Support**: Light/dark mode with smooth transitions
- **Mock Data Integration**: Realistic data structures for development and testing
- **Component Architecture**: Reusable, maintainable React components
- **User Experience**: Intuitive navigation, search, filtering, and real-time features

The frontend provides a solid foundation for the partner dashboard, with all major features implemented using mock data to demonstrate functionality before backend integration.
