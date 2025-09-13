"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity, User, MessageSquare, CheckCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const mockRecentActivity = [
  {
    id: 1,
    type: "application",
    user: "Sarah Johnson",
    action: "applied to",
    target: "Summer Collection 2024",
    timestamp: new Date("2024-06-20T14:30:00"),
    avatar: "/api/placeholder/32/32",
  },
  {
    id: 2,
    type: "message",
    user: "Mike Chen",
    action: "sent a message about",
    target: "Fitness Challenge",
    timestamp: new Date("2024-06-20T12:15:00"),
    avatar: "/api/placeholder/32/32",
  },
  {
    id: 3,
    type: "approval",
    user: "Emma Wilson",
    action: "was approved for",
    target: "Holiday Recipes",
    timestamp: new Date("2024-06-19T16:45:00"),
    avatar: "/api/placeholder/32/32",
  },
  {
    id: 4,
    type: "delivery",
    user: "Alex Rodriguez",
    action: "delivered content for",
    target: "Tech Review Campaign",
    timestamp: new Date("2024-06-19T10:20:00"),
    avatar: "/api/placeholder/32/32",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "application":
      return <User className="h-4 w-4 text-blue-600" />;
    case "message":
      return <MessageSquare className="h-4 w-4 text-green-600" />;
    case "approval":
      return <CheckCircle className="h-4 w-4 text-purple-600" />;
    case "delivery":
      return <Activity className="h-4 w-4 text-orange-600" />;
    default:
      return <Activity className="h-4 w-4 text-gray-600" />;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "application":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "message":
      return "bg-green-100 text-green-800 border-green-200";
    case "approval":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "delivery":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function RecentActivityCard() {
  return (
    <Card className="card-hover shadow-modern-sm border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 gradient-primary rounded-full"></div>
            Recent Activity
          </CardTitle>
          <CardDescription className="text-xs">
            Latest updates from your campaigns and creators
          </CardDescription>
        </div>
        <div className="p-2 gradient-secondary rounded-lg">
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30 hover:shadow-modern-sm transition-all duration-200">
              <Avatar className="h-8 w-8 ring-2 ring-background">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback className="text-xs font-medium">{activity.user.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded-full bg-background/50">
                    {getActivityIcon(activity.type)}
                  </div>
                  <span className="text-sm font-medium">{activity.user}</span>
                  <span className="text-sm text-muted-foreground">
                    {activity.action}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className={`text-xs ${getActivityColor(activity.type)}`}
                  >
                    {activity.target}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
