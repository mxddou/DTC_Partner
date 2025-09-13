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
import { Users, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockOutreachStats = {
  totalReached: 156,
  responses: 42,
  responseRate: 26.9,
  activeConversations: 18,
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
            <div className="space-y-1">
              <p className="text-2xl font-bold">
                {mockOutreachStats.totalReached}
              </p>
              <p className="text-xs text-muted-foreground">Creators Reached</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">
                {mockOutreachStats.responses}
              </p>
              <p className="text-xs text-muted-foreground">Responses</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Response Rate</span>
              <Badge variant="outline">{mockOutreachStats.responseRate}%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Conversations</span>
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
