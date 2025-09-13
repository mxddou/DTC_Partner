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
import { TrendingUp, DollarSign, Users, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockPerformanceData = {
  totalRevenue: 12450,
  conversionRate: 3.2,
  totalClicks: 3890,
  activeAffiliates: 12,
  topPerformer: {
    name: "Sarah Johnson",
    revenue: 3200,
    conversions: 45,
  },
};

export function AffiliatePerformanceCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Affiliate Performance
        </CardTitle>
        <TrendingUp className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <p className="text-2xl font-bold">
                  ${mockPerformanceData.totalRevenue.toLocaleString()}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">Total Revenue</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">
                {mockPerformanceData.conversionRate}%
              </p>
              <p className="text-xs text-muted-foreground">Conversion Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-600" />
                <p className="text-lg font-semibold">
                  {mockPerformanceData.totalClicks.toLocaleString()}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">Total Clicks</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                <p className="text-lg font-semibold">
                  {mockPerformanceData.activeAffiliates}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">Active Affiliates</p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Top Performer</span>
              <Badge variant="outline">
                {mockPerformanceData.topPerformer.name}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                ${mockPerformanceData.topPerformer.revenue.toLocaleString()}{" "}
                revenue
              </span>
              <span>
                {mockPerformanceData.topPerformer.conversions} conversions
              </span>
            </div>
          </div>

          <Link href="/campaigns/affiliate">
            <Button variant="outline" className="w-full gap-2">
              View Detailed Analytics
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
