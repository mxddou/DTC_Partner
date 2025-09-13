"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

const mockOutreachStats = {
  totalReached: 156,
  responses: 23,
  responseRate: 14.7,
  activeConversations: 8,
};

export function CreatorOutreachCard() {
  return (
    <Card className="card-hover shadow-modern-sm border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 gradient-primary rounded-full"></div>
          Creator Outreach
        </CardTitle>
        <div className="p-2 gradient-secondary rounded-lg">
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {mockOutreachStats.totalReached}
              </div>
              <div className="text-sm text-muted-foreground">
                Creators Reached
              </div>
            </div>
            <div className="text-center p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {mockOutreachStats.responses}
              </div>
              <div className="text-sm text-muted-foreground">Responses</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">
                Response Rate
              </span>
              <Badge
                variant="secondary"
                className="gradient-primary text-white"
              >
                {mockOutreachStats.responseRate}%
              </Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">
                Active Conversations
              </span>
              <Badge variant="default" className="gradient-primary text-white">
                {mockOutreachStats.activeConversations}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/directory" className="flex-1">
              <Button
                variant="outline"
                className="w-full gap-2 btn-modern hover:shadow-modern-sm border-border/50"
              >
                <Users className="h-4 w-4" />
                Find Creators
              </Button>
            </Link>
            <Link href="/messages" className="flex-1">
              <Button
                variant="outline"
                className="w-full gap-2 btn-modern hover:shadow-modern-sm border-border/50"
              >
                <MessageSquare className="h-4 w-4" />
                Messages
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
