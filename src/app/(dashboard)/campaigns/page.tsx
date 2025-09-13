import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone,
  TrendingUp,
  Users,
  Plus,
  Eye,
  BarChart3,
  ArrowRight,
  Calendar,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const mockCampaignStats = {
  totalCampaigns: 8,
  activeCampaigns: 3,
  totalApplications: 156,
  totalRevenue: 24500,
  conversionRate: 4.2,
};

const mockRecentCampaigns = [
  {
    id: 1,
    name: "Summer Collection 2024",
    status: "active",
    applications: 24,
    budget: "$5,000",
    revenue: "$8,200",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
  },
  {
    id: 2,
    name: "Holiday Promotion",
    status: "draft",
    applications: 0,
    budget: "$3,000",
    revenue: "$0",
    startDate: "2024-11-01",
    endDate: "2024-12-31",
  },
  {
    id: 3,
    name: "Back to School",
    status: "completed",
    applications: 45,
    budget: "$4,500",
    revenue: "$12,800",
    startDate: "2024-08-15",
    endDate: "2024-09-15",
  },
];

const campaignActions = [
  {
    title: "Create New Campaign",
    description: "Launch a new marketing campaign",
    href: "/campaigns/create",
    icon: Plus,
    variant: "default" as const,
  },
  {
    title: "Manage CRM",
    description: "Track applications and relationships",
    href: "/campaigns/crm",
    icon: Users,
    variant: "outline" as const,
  },
  {
    title: "Affiliate Analytics",
    description: "View performance metrics",
    href: "/campaigns/affiliate",
    icon: BarChart3,
    variant: "outline" as const,
  },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
        <p className="text-gray-600">
          Manage your marketing campaigns and track performance
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Campaigns
            </CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCampaignStats.totalCampaigns}
            </div>
            <p className="text-xs text-muted-foreground">
              {mockCampaignStats.activeCampaigns} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCampaignStats.totalApplications}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockCampaignStats.totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {mockCampaignStats.conversionRate}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCampaignStats.conversionRate}%
            </div>
            <p className="text-xs text-muted-foreground">Average conversion</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common campaign management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {campaignActions.map((action) => (
              <Link key={action.title} href={action.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <action.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Your latest campaign activity</CardDescription>
          </div>
          <Link href="/campaigns/crm">
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRecentCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Megaphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                      <span>{campaign.applications} applications</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-semibold">
                      {campaign.budget} budget
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {campaign.revenue} revenue
                    </div>
                  </div>
                  <Badge
                    variant={
                      campaign.status === "active"
                        ? "default"
                        : campaign.status === "completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {campaign.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
