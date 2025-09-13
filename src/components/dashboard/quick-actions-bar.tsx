"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, MessageSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    label: "Create Campaign",
    href: "/campaigns/create",
    icon: Plus,
    variant: "default" as const,
  },
  {
    label: "Find Creators",
    href: "/directory",
    icon: Search,
    variant: "outline" as const,
  },
  {
    label: "Start Conversation",
    href: "/messages",
    icon: MessageSquare,
    variant: "outline" as const,
  },
  {
    label: "View Analytics",
    href: "/campaigns/affiliate",
    icon: TrendingUp,
    variant: "outline" as const,
  },
];

export function QuickActionsBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {quickActions.map((action) => (
        <Link key={action.label} href={action.href}>
          <Button variant={action.variant} className="gap-2">
            <action.icon className="h-4 w-4" />
            {action.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
