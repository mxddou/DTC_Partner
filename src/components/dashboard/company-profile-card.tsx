"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockProfileCompletion = {
  percentage: 75,
  completedSteps: 3,
  totalSteps: 4,
  nextStep: "Add brand assets",
};

export function CompanyProfileCard() {
  return (
    <Card className="card-hover shadow-modern-sm border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 gradient-primary rounded-full"></div>
          Profile Completion
        </CardTitle>
        <div className="p-2 gradient-secondary rounded-lg">
          <Building2 className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              {mockProfileCompletion.percentage}%
            </span>
            <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
              {mockProfileCompletion.completedSteps}/
              {mockProfileCompletion.totalSteps} steps
            </span>
          </div>

          <div className="space-y-2">
            <Progress value={mockProfileCompletion.percentage} className="h-3 rounded-full" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-muted-foreground">
              Next: <span className="font-medium text-foreground">{mockProfileCompletion.nextStep}</span>
            </p>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="gap-1 btn-modern hover:bg-primary/10 hover:text-primary">
                Complete <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
