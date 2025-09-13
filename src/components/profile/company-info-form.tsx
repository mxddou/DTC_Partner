"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Save, Building2, Globe, MapPin, Users } from "lucide-react";

const mockCompanyData = {
  companyName: "Fashion Forward Co.",
  industry: "Fashion & Apparel",
  website: "https://fashionforward.com",
  foundedYear: "2018",
  companySize: "11-50",
  headquarters: "New York, NY",
  description:
    "A modern fashion brand focused on sustainable and trendy clothing for young professionals.",
  mission: "To make sustainable fashion accessible and stylish for everyone.",
  values: ["Sustainability", "Innovation", "Inclusivity", "Quality"],
  socialMedia: {
    instagram: "@fashionforward",
    tiktok: "@fashionforward",
    youtube: "Fashion Forward",
  },
  contactEmail: "partnerships@fashionforward.com",
  phone: "+1 (555) 123-4567",
};

export function CompanyInfoForm() {
  const [formData, setFormData] = useState(mockCompanyData);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState("");

  const handleInputChange = (field: string, value: string | object) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddValue = () => {
    if (newValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        values: [...prev.values, newValue.trim()],
      }));
      setNewValue("");
    }
  };

  const handleRemoveValue = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log("Saving company info:", formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fashion & Apparel">
                    Fashion & Apparel
                  </SelectItem>
                  <SelectItem value="Beauty & Cosmetics">
                    Beauty & Cosmetics
                  </SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Food & Beverage">
                    Food & Beverage
                  </SelectItem>
                  <SelectItem value="Health & Fitness">
                    Health & Fitness
                  </SelectItem>
                  <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-400" />
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="foundedYear">Founded Year</Label>
              <Input
                id="foundedYear"
                value={formData.foundedYear}
                onChange={(e) =>
                  handleInputChange("foundedYear", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) =>
                  handleInputChange("companySize", value)
                }
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="headquarters">Headquarters</Label>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <Input
                  id="headquarters"
                  value={formData.headquarters}
                  onChange={(e) =>
                    handleInputChange("headquarters", e.target.value)
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">About Your Company</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              disabled={!isEditing}
              rows={3}
              placeholder="Tell creators about your brand..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              value={formData.mission}
              onChange={(e) => handleInputChange("mission", e.target.value)}
              disabled={!isEditing}
              rows={2}
              placeholder="What is your company's mission?"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {formData.values.map((value, index) => (
              <Badge key={index} variant="secondary" className="gap-1">
                {value}
                {isEditing && (
                  <button
                    onClick={() => handleRemoveValue(index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Add a company value..."
                onKeyPress={(e) => e.key === "Enter" && handleAddValue()}
              />
              <Button onClick={handleAddValue} variant="outline">
                Add
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Partnership Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={(e) =>
                  handleInputChange("contactEmail", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-4">
            <Label>Social Media Handles</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={formData.socialMedia.instagram}
                  onChange={(e) =>
                    handleInputChange("socialMedia", {
                      ...formData.socialMedia,
                      instagram: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok">TikTok</Label>
                <Input
                  id="tiktok"
                  value={formData.socialMedia.tiktok}
                  onChange={(e) =>
                    handleInputChange("socialMedia", {
                      ...formData.socialMedia,
                      tiktok: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  value={formData.socialMedia.youtube}
                  onChange={(e) =>
                    handleInputChange("socialMedia", {
                      ...formData.socialMedia,
                      youtube: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
