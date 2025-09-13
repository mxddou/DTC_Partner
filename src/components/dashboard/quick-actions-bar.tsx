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
    <div className="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-border/30 shadow-modern-sm">
      {quickActions.map((action) => (
        <Link key={action.label} href={action.href}>
          <Button 
            variant={action.variant} 
            className={`gap-2 btn-modern rounded-xl transition-all duration-200 ${
              action.variant === "default" 
                ? "gradient-primary text-white shadow-modern-sm hover:shadow-modern-md" 
                : "hover:bg-primary/10 hover:text-primary hover:shadow-modern-sm border-border/50"
            }`}
          >
            <action.icon className="h-4 w-4" />
            {action.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
