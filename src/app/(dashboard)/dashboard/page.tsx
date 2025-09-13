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
          Welcome back! Here&apos;s what&apos;s happening with your campaigns.
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
