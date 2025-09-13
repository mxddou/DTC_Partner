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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Creator Outreach</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {mockOutreachStats.totalReached}
              </div>
              <div className="text-sm text-muted-foreground">
                Creators Reached
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {mockOutreachStats.responses}
              </div>
              <div className="text-sm text-muted-foreground">Responses</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Response Rate
              </span>
              <Badge variant="secondary">
                {mockOutreachStats.responseRate}%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Active Conversations
              </span>
              <Badge variant="default">
                {mockOutreachStats.activeConversations}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/directory" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Users className="h-4 w-4" />
                Find Creators
              </Button>
            </Link>
            <Link href="/messages" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
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
