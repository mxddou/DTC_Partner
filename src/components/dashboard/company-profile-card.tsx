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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Profile Completion
        </CardTitle>
        <Building2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              {mockProfileCompletion.percentage}%
            </span>
            <span className="text-sm text-muted-foreground">
              {mockProfileCompletion.completedSteps}/
              {mockProfileCompletion.totalSteps} steps
            </span>
          </div>

          <Progress value={mockProfileCompletion.percentage} className="h-2" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Next: {mockProfileCompletion.nextStep}
            </p>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="gap-1">
                Complete <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
