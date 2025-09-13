"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyInfoForm } from "@/components/profile/company-info-form";
import { ProductsSection } from "@/components/profile/products-section";
import { BrandAssetsSection } from "@/components/profile/brand-assets-section";
import { PastCampaignsSection } from "@/components/profile/past-campaigns-section";
import { PublicProfilePreview } from "@/components/profile/public-profile-preview";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function ProfilePage() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Company Profile</h1>
          <p className="text-gray-600">
            Manage your brand information and assets
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowPreview(!showPreview)}
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          {showPreview ? "Edit Profile" : "Preview Profile"}
        </Button>
      </div>

      {showPreview ? (
        <PublicProfilePreview />
      ) : (
        <Tabs defaultValue="company" className="space-y-6">
          <TabsList>
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="brand">Brand Assets</TabsTrigger>
            <TabsTrigger value="campaigns">Past Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            <CompanyInfoForm />
          </TabsContent>

          <TabsContent value="products">
            <ProductsSection />
          </TabsContent>

          <TabsContent value="brand">
            <BrandAssetsSection />
          </TabsContent>

          <TabsContent value="campaigns">
            <PastCampaignsSection />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
