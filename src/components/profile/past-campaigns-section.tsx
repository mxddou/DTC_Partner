"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Eye, 
  Download, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  BarChart3,
  ExternalLink
} from "lucide-react";

const mockPastCampaigns = [
  {
    id: 1,
    name: "Summer Collection 2024",
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    budget: "$15,000",
    creators: 12,
    applications: 45,
    reach: "2.3M",
    engagement: "4.2%",
    conversions: 156,
    revenue: "$28,500",
    roi: "190%",
    platforms: ["Instagram", "TikTok"],
    category: "Fashion",
    description: "Promotional campaign for summer clothing line",
  },
  {
    id: 2,
    name: "Holiday Gift Guide",
    status: "completed",
    startDate: "2024-11-15",
    endDate: "2024-12-25",
    budget: "$8,500",
    creators: 8,
    applications: 32,
    reach: "1.8M",
    engagement: "5.1%",
    conversions: 89,
    revenue: "$18,200",
    roi: "214%",
    platforms: ["Instagram", "YouTube"],
    category: "Gift Guide",
    description: "Holiday shopping campaign featuring gift recommendations",
  },
  {
    id: 3,
    name: "Back to School Essentials",
    status: "completed",
    startDate: "2024-08-15",
    endDate: "2024-09-30",
    budget: "$6,200",
    creators: 6,
    applications: 28,
    reach: "1.2M",
    engagement: "3.8%",
    conversions: 67,
    revenue: "$12,800",
    roi: "206%",
    platforms: ["TikTok", "Instagram"],
    category: "Education",
    description: "Student-focused campaign for school supplies",
  },
  {
    id: 4,
    name: "Sustainable Fashion Week",
    status: "completed",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    budget: "$12,000",
    creators: 15,
    applications: 67,
    reach: "3.1M",
    engagement: "4.7%",
    conversions: 203,
    revenue: "$35,600",
    roi: "297%",
    platforms: ["Instagram", "TikTok", "YouTube"],
    category: "Sustainability",
    description: "Eco-friendly fashion awareness campaign",
  },
  {
    id: 5,
    name: "Valentine's Day Special",
    status: "completed",
    startDate: "2024-02-01",
    endDate: "2024-02-14",
    budget: "$4,800",
    creators: 5,
    applications: 18,
    reach: "850K",
    engagement: "6.2%",
    conversions: 45,
    revenue: "$9,100",
    roi: "190%",
    platforms: ["Instagram"],
    category: "Seasonal",
    description: "Valentine's Day themed product promotion",
  },
];

export function PastCampaignsSection() {
  const [campaigns, setCampaigns] = useState(mockPastCampaigns);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("endDate");

  const filteredCampaigns = campaigns
    .filter(campaign => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
      const matchesCategory = categoryFilter === "all" || campaign.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "budget":
          return parseFloat(b.budget.replace(/[$,]/g, '')) - parseFloat(a.budget.replace(/[$,]/g, ''));
        case "roi":
          return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
        case "endDate":
        default:
          return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "active":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const totalStats = campaigns.reduce((acc, campaign) => ({
    totalBudget: acc.totalBudget + parseFloat(campaign.budget.replace(/[$,]/g, '')),
    totalRevenue: acc.totalRevenue + parseFloat(campaign.revenue.replace(/[$,]/g, '')),
    totalCreators: acc.totalCreators + campaign.creators,
    totalReach: acc.totalReach + parseFloat(campaign.reach.replace(/[M,K]/g, '').replace('M', '000000').replace('K', '000')),
  }), { totalBudget: 0, totalRevenue: 0, totalCreators: 0, totalReach: 0 });

  const averageROI = campaigns.length > 0 
    ? campaigns.reduce((sum, campaign) => sum + parseFloat(campaign.roi.replace('%', '')), 0) / campaigns.length
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Past Campaigns</h2>
          <p className="text-gray-600">
            Review performance and learnings from your completed campaigns
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-600">Total Invested</span>
            </div>
            <p className="text-2xl font-bold">${totalStats.totalBudget.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Total Revenue</span>
            </div>
            <p className="text-2xl font-bold">${totalStats.totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Total Creators</span>
            </div>
            <p className="text-2xl font-bold">{totalStats.totalCreators}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-600">Avg ROI</span>
            </div>
            <p className="text-2xl font-bold">{averageROI.toFixed(0)}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Gift Guide">Gift Guide</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Sustainability">Sustainability</SelectItem>
                <SelectItem value="Seasonal">Seasonal</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="endDate">End Date</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="roi">ROI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-gray-600">{campaign.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{campaign.budget}</p>
                      <p className="text-xs text-gray-500">Budget</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{campaign.creators}</p>
                      <p className="text-xs text-gray-500">Creators</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{campaign.reach}</p>
                      <p className="text-xs text-gray-500">Reach</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{campaign.engagement}</p>
                      <p className="text-xs text-gray-500">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{campaign.revenue}</p>
                      <p className="text-xs text-gray-500">Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-600">{campaign.roi}</p>
                      <p className="text-xs text-gray-500">ROI</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      {campaign.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                      <Badge variant="secondary" className="text-xs">
                        {campaign.category}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <BarChart3 className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 text-center">
                {searchTerm || statusFilter !== "all" || categoryFilter !== "all"
                  ? "Try adjusting your filters or search terms"
                  : "You haven't run any campaigns yet"
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
