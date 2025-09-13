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
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Create Campaign", href: "/campaigns/create", icon: Megaphone },
  { name: "CRM", href: "/campaigns/crm", icon: TrendingUp },
  { name: "Affiliate Manager", href: "/campaigns/affiliate", icon: TrendingUp },
  { name: "Creator Directory", href: "/directory", icon: Users },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border/50 flex flex-col shadow-modern-sm">
      <div className="p-6">
        <h2 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">Partner Hub</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 btn-modern transition-all duration-200",
                  isActive 
                    ? "gradient-primary text-white shadow-modern-sm" 
                    : "hover:bg-primary/10 hover:text-primary hover:shadow-modern-sm"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
