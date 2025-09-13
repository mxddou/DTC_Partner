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
import { Activity, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockRecentActivity = [
  {
    id: 1,
    type: "application",
    message: "New application received for Summer Collection 2024",
    creator: "Sarah Johnson",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "message",
    message: "Mike Chen replied to your message",
    creator: "Mike Chen",
    time: "4 hours ago",
    status: "read",
  },
  {
    id: 3,
    type: "campaign",
    message: "Holiday Promotion campaign published",
    creator: "System",
    time: "1 day ago",
    status: "completed",
  },
  {
    id: 4,
    type: "performance",
    message: "Weekly performance report is ready",
    creator: "System",
    time: "2 days ago",
    status: "completed",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "application":
      return "📝";
    case "message":
      return "💬";
    case "campaign":
      return "🚀";
    case "performance":
      return "📊";
    default:
      return "📋";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "default";
    case "read":
      return "secondary";
    case "completed":
      return "outline";
    default:
      return "outline";
  }
};

export function RecentActivityCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-3">
            {mockRecentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="text-lg">{getActivityIcon(activity.type)}</div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {activity.creator}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                    <Badge
                      variant={getStatusColor(activity.status) as any}
                      className="text-xs"
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/messages">
            <Button variant="outline" className="w-full gap-2">
              View All Activity
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
