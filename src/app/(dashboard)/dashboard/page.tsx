import { CompanyProfileCard } from "@/components/dashboard/company-profile-card";
import { ActiveCampaignsCard } from "@/components/dashboard/active-campaigns-card";
import { CreatorOutreachCard } from "@/components/dashboard/creator-outreach-card";
import { AffiliatePerformanceCard } from "@/components/dashboard/affiliate-performance-card";
import { QuickActionsBar } from "@/components/dashboard/quick-actions-bar";
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your campaigns.
        </p>
      </div>

      <QuickActionsBar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AffiliatePerformanceCard />
        <RecentActivityCard />
        <CompanyProfileCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveCampaignsCard />
        <CreatorOutreachCard />
      </div>
    </div>
  );
}
