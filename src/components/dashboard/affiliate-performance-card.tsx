"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Eye } from "lucide-react";

const mockPerformanceData = {
  totalRevenue: 12500,
  totalClicks: 3400,
  conversionRate: 3.2,
  activeAffiliates: 12,
  topPerformer: {
    name: "Sarah Johnson",
    revenue: 3200,
    clicks: 890,
  },
};

export function AffiliatePerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Affiliate Performance
        </CardTitle>
        <CardDescription>Last 30 days performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">
                  Total Revenue
                </span>
              </div>
              <div className="text-2xl font-bold">
                ${mockPerformanceData.totalRevenue.toLocaleString()}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-muted-foreground">
                  Total Clicks
                </span>
              </div>
              <div className="text-2xl font-bold">
                {mockPerformanceData.totalClicks.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Conversion Rate
              </span>
              <Badge variant="secondary">
                {mockPerformanceData.conversionRate}%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Active Affiliates
              </span>
              <Badge variant="default">
                {mockPerformanceData.activeAffiliates}
              </Badge>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Top Performer</span>
              <Badge variant="outline">This Month</Badge>
            </div>
            <div className="space-y-1">
              <div className="font-medium">
                {mockPerformanceData.topPerformer.name}
              </div>
              <div className="text-sm text-muted-foreground">
                ${mockPerformanceData.topPerformer.revenue.toLocaleString()}{" "}
                revenue • {mockPerformanceData.topPerformer.clicks} clicks
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
