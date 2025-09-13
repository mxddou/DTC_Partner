"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  User,
  Megaphone,
  Users,
  MessageSquare,
  Settings,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
  {
    name: "Campaigns",
    href: "/campaigns",
    icon: Megaphone,
    subpages: [
      { name: "Create Campaign", href: "/campaigns/create" },
      { name: "CRM", href: "/campaigns/crm" },
      { name: "Affiliate Manager", href: "/campaigns/affiliate" },
    ],
  },
  { name: "Creator Directory", href: "/directory", icon: Users },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isItemActive = (item: any) => {
    if (item.subpages) {
      return (
        item.subpages.some((subpage: any) => pathname === subpage.href) ||
        pathname === item.href
      );
    }
    return pathname === item.href;
  };

  const isSubpageActive = (subpage: any) => {
    return pathname === subpage.href;
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">Partner Hub</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = isItemActive(item);
          const isExpanded = expandedItems.includes(item.name);

          return (
            <div key={item.href}>
              {item.subpages ? (
                <div>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-between gap-3",
                      isActive && "bg-primary text-primary-foreground"
                    )}
                    onClick={() => toggleExpanded(item.name)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded && "rotate-90"
                      )}
                    />
                  </Button>

                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subpages.map((subpage) => (
                        <Link key={subpage.href} href={subpage.href}>
                          <Button
                            variant={
                              isSubpageActive(subpage) ? "default" : "ghost"
                            }
                            className={cn(
                              "w-full justify-start gap-3 text-sm",
                              isSubpageActive(subpage) &&
                                "bg-primary text-primary-foreground"
                            )}
                          >
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                            {subpage.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-primary text-primary-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
