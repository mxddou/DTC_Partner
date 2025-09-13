"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Globe,
  MapPin,
  Users,
  Calendar,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Heart,
  Star,
  ExternalLink,
  Share2,
} from "lucide-react";

const mockPublicProfile = {
  companyName: "Fashion Forward Co.",
  industry: "Fashion & Apparel",
  website: "https://fashionforward.com",
  foundedYear: "2018",
  companySize: "11-50 employees",
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
  logo: "/api/placeholder/120/120",
  coverImage: "/api/placeholder/800/300",
  rating: 4.8,
  totalCollaborations: 156,
  responseTime: "2-4 hours",
  averageBudget: "$500-2000",
  topCategories: ["Fashion", "Lifestyle", "Sustainability"],
  featuredProducts: [
    {
      id: 1,
      name: "Summer Collection Dress",
      price: "$89.99",
      image: "/api/placeholder/200/200",
      category: "Clothing",
    },
    {
      id: 2,
      name: "Eco-Friendly Tote Bag",
      price: "$24.99",
      image: "/api/placeholder/200/200",
      category: "Accessories",
    },
    {
      id: 3,
      name: "Premium Denim Jeans",
      price: "$129.99",
      image: "/api/placeholder/200/200",
      category: "Clothing",
    },
  ],
  recentCampaigns: [
    {
      id: 1,
      name: "Summer Collection 2024",
      status: "Active",
      budget: "$15,000",
      creators: 12,
      applications: 45,
    },
    {
      id: 2,
      name: "Holiday Gift Guide",
      status: "Completed",
      budget: "$8,500",
      creators: 8,
      applications: 32,
    },
  ],
  testimonials: [
    {
      id: 1,
      creator: "Sarah Johnson",
      platform: "Instagram",
      followers: "125K",
      text: "Working with Fashion Forward was amazing! They provided clear guidelines and were very responsive throughout the campaign.",
      rating: 5,
    },
    {
      id: 2,
      creator: "Mike Chen",
      platform: "TikTok",
      followers: "89K",
      text: "Great brand to collaborate with. Their products are high quality and the team is professional.",
      rating: 5,
    },
  ],
};

export function PublicProfilePreview() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Public Profile Preview
          </h2>
          <p className="text-gray-600">
            This is how creators will see your brand profile
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share Profile
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            View Live
          </Button>
        </div>
      </div>

      {/* Cover Image and Logo */}
      <Card className="overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-6 flex items-end gap-4">
            <div className="w-20 h-20 bg-white rounded-full p-2 shadow-lg">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">
                {mockPublicProfile.companyName}
              </h1>
              <p className="text-blue-100">{mockPublicProfile.industry}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {renderStars(mockPublicProfile.rating)}
            </div>
            <p className="text-2xl font-bold">{mockPublicProfile.rating}</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">
              {mockPublicProfile.totalCollaborations}
            </p>
            <p className="text-sm text-gray-600">Total Collaborations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">
              {mockPublicProfile.responseTime}
            </p>
            <p className="text-sm text-gray-600">Response Time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">
              {mockPublicProfile.averageBudget}
            </p>
            <p className="text-sm text-gray-600">Average Budget</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About {mockPublicProfile.companyName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{mockPublicProfile.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-gray-600 italic">
                  "{mockPublicProfile.mission}"
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Our Values</h4>
                <div className="flex flex-wrap gap-2">
                  {mockPublicProfile.values.map((value, index) => (
                    <Badge key={index} variant="secondary">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Products */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockPublicProfile.featuredProducts.map((product) => (
                  <div key={product.id} className="space-y-2">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-gray-400">Product Image</div>
                    </div>
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-600">
                        {product.category}
                      </p>
                      <p className="font-semibold text-green-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPublicProfile.recentCampaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{campaign.name}</h4>
                      <p className="text-sm text-gray-600">
                        {campaign.creators} creators • {campaign.applications}{" "}
                        applications
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{campaign.budget}</p>
                      <Badge
                        variant={
                          campaign.status === "Active" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-gray-400" />
                <a
                  href={mockPublicProfile.website}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mockPublicProfile.website}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm">
                  {mockPublicProfile.headquarters}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{mockPublicProfile.companySize}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm">
                  Founded {mockPublicProfile.foundedYear}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={`mailto:${mockPublicProfile.contactEmail}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {mockPublicProfile.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{mockPublicProfile.phone}</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-pink-500" />
                <a
                  href={`https://instagram.com/${mockPublicProfile.socialMedia.instagram.replace(
                    "@",
                    ""
                  )}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mockPublicProfile.socialMedia.instagram}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Youtube className="h-4 w-4 text-red-500" />
                <a
                  href={`https://youtube.com/c/${mockPublicProfile.socialMedia.youtube.replace(
                    /\s+/g,
                    ""
                  )}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mockPublicProfile.socialMedia.youtube}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Top Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Top Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockPublicProfile.topCategories.map((category, index) => (
                  <Badge key={index} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card>
            <CardHeader>
              <CardTitle>Creator Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockPublicProfile.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm font-medium">
                      {testimonial.creator}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.platform} • {testimonial.followers}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
