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
    <Card className="card-hover shadow-modern-sm border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 gradient-primary rounded-full"></div>
            Affiliate Performance
          </CardTitle>
          <CardDescription className="text-xs">Last 30 days performance metrics</CardDescription>
        </div>
        <div className="p-2 gradient-secondary rounded-lg">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">
                  Total Revenue
                </span>
              </div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                ${mockPerformanceData.totalRevenue.toLocaleString()}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-muted-foreground">
                  Total Clicks
                </span>
              </div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {mockPerformanceData.totalClicks.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">
                Conversion Rate
              </span>
              <Badge variant="secondary" className="gradient-primary text-white">
                {mockPerformanceData.conversionRate}%
              </Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">
                Active Affiliates
              </span>
              <Badge variant="default" className="gradient-primary text-white">
                {mockPerformanceData.activeAffiliates}
              </Badge>
            </div>
          </div>

          <div className="border-t border-border/30 pt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Top Performer</span>
              <Badge variant="outline" className="text-xs">This Month</Badge>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
              <div className="font-medium mb-1">
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
