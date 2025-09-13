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
    <Card className="card-hover shadow-modern-sm border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 gradient-primary rounded-full"></div>
          Active Campaigns
        </CardTitle>
        <div className="p-2 gradient-secondary rounded-lg">
          <Megaphone className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            {mockActiveCampaigns.length}
          </div>

          <div className="space-y-3">
            {mockActiveCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30 hover:shadow-modern-sm transition-all duration-200"
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium">{campaign.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        campaign.status === "active" ? "default" : "secondary"
                      }
                      className={campaign.status === "active" ? "gradient-primary text-white" : ""}
                    >
                      {campaign.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                      <Users className="h-3 w-3" />
                      {campaign.applications} applications
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Budget: {campaign.budget}</p>
                </div>
                <Button variant="ghost" size="sm" className="btn-modern hover:bg-primary/10 hover:text-primary">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <Link href="/campaigns/crm">
            <Button variant="outline" className="w-full btn-modern hover:shadow-modern-sm">
              View All Campaigns
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
