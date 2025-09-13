"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6 shadow-modern-sm">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns, creators..."
            className="pl-10 w-80 bg-muted/50 border-border/50 focus:bg-background transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="gap-2 btn-modern gradient-primary text-white shadow-modern-sm hover:shadow-modern-md">
          <Plus className="h-4 w-4" />
          Quick Action
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative btn-modern hover:shadow-modern-sm border-border/50">
              <Bell className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs gradient-destructive"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 shadow-modern-md border-border/50 bg-white">
            <DropdownMenuLabel className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-4 hover:bg-muted/50">
              <div className="flex flex-col gap-1">
                <span className="font-medium">New application received</span>
                <span className="text-sm text-muted-foreground">
                  Summer Campaign 2024
                </span>
                <span className="text-xs text-muted-foreground">2 minutes ago</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4 hover:bg-muted/50">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Content delivered</span>
                <span className="text-sm text-muted-foreground">
                  Holiday Promotion
                </span>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4 hover:bg-muted/50">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Payment processed</span>
                <span className="text-sm text-muted-foreground">
                  $2,500 to Sarah Johnson
                </span>
                <span className="text-xs text-muted-foreground">3 hours ago</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
