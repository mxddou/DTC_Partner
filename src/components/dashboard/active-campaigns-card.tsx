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
import { Megaphone, Eye, Users } from "lucide-react";
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
        <Megaphone className="h-4 w-4 text-muted-foreground" />
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
