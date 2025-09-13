"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload, Download, Trash2, Eye, Image, FileText, Palette, Type } from "lucide-react";

const mockBrandAssets = [
  {
    id: 1,
    name: "Logo - Primary",
    type: "Logo",
    format: "PNG",
    size: "2.1 MB",
    dimensions: "512x512",
    description: "Main company logo with transparent background",
    url: "/api/placeholder/200/200",
    category: "Logos",
  },
  {
    id: 2,
    name: "Brand Guidelines",
    type: "Document",
    format: "PDF",
    size: "4.2 MB",
    dimensions: "A4",
    description: "Complete brand guidelines and usage instructions",
    url: "/api/placeholder/200/200",
    category: "Documents",
  },
  {
    id: 3,
    name: "Color Palette",
    type: "Image",
    format: "JPG",
    size: "1.8 MB",
    dimensions: "800x600",
    description: "Brand color palette with hex codes",
    url: "/api/placeholder/200/200",
    category: "Brand Colors",
  },
  {
    id: 4,
    name: "Typography Guide",
    type: "Document",
    format: "PDF",
    size: "2.5 MB",
    dimensions: "A4",
    description: "Font specifications and typography rules",
    url: "/api/placeholder/200/200",
    category: "Documents",
  },
  {
    id: 5,
    name: "Product Photos - Set 1",
    type: "Image",
    format: "JPG",
    size: "15.2 MB",
    dimensions: "1920x1080",
    description: "High-quality product photography for campaigns",
    url: "/api/placeholder/200/200",
    category: "Product Images",
  },
  {
    id: 6,
    name: "Social Media Templates",
    type: "Image",
    format: "PSD",
    size: "8.7 MB",
    dimensions: "1080x1080",
    description: "Instagram post templates for creators",
    url: "/api/placeholder/200/200",
    category: "Templates",
  },
];

const assetCategories = [
  "Logos",
  "Brand Colors",
  "Typography",
  "Product Images",
  "Templates",
  "Documents",
  "Videos",
  "Other",
];

export function BrandAssetsSection() {
  const [assets, setAssets] = useState(mockBrandAssets);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isUploading, setIsUploading] = useState(false);

  const filteredAssets = selectedCategory === "all" 
    ? assets 
    : assets.filter(asset => asset.category === selectedCategory);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        const newAssets = Array.from(files).map((file, index) => ({
          id: Date.now() + index,
          name: file.name.split('.')[0],
          type: file.type.startsWith('image/') ? 'Image' : 'Document',
          format: file.name.split('.').pop()?.toUpperCase() || 'Unknown',
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          dimensions: 'Unknown',
          description: 'Uploaded asset',
          url: '/api/placeholder/200/200',
          category: 'Other',
        }));
        setAssets([...assets, ...newAssets]);
        setIsUploading(false);
      }, 2000);
    }
  };

  const handleDeleteAsset = (id: number) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'Logo':
        return <Type className="h-6 w-6" />;
      case 'Image':
        return <Image className="h-6 w-6" />;
      case 'Document':
        return <FileText className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Brand Colors':
        return <Palette className="h-4 w-4" />;
      case 'Logos':
        return <Type className="h-4 w-4" />;
      case 'Product Images':
        return <Image className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Brand Assets</h2>
          <p className="text-gray-600">
            Upload and manage your brand assets for creator collaborations
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="file"
            id="asset-upload"
            multiple
            accept="image/*,.pdf,.psd,.ai,.eps"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="asset-upload">
            <Button asChild className="gap-2" disabled={isUploading}>
              <span>
                <Upload className="h-4 w-4" />
                {isUploading ? "Uploading..." : "Upload Assets"}
              </span>
            </Button>
          </label>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Asset Library</CardTitle>
            <div className="flex items-center gap-2">
              <Label htmlFor="category-filter">Filter by category:</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {assetCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAssets.map((asset) => (
              <Card key={asset.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  {getAssetIcon(asset.type)}
                </div>
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium text-sm line-clamp-1">{asset.name}</h3>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => handleDeleteAsset(asset.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(asset.category)}
                      <Badge variant="outline" className="text-xs">
                        {asset.category}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-xs text-gray-500">
                      <p>{asset.format} • {asset.size}</p>
                      <p>{asset.dimensions}</p>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2">
                      {asset.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAssets.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {selectedCategory === "all" ? "No assets uploaded" : `No ${selectedCategory.toLowerCase()} found`}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {selectedCategory === "all" 
                  ? "Upload your brand assets to get started"
                  : `Try uploading some ${selectedCategory.toLowerCase()} or change the filter`
                }
              </p>
              <label htmlFor="asset-upload">
                <Button asChild className="gap-2">
                  <span>
                    <Upload className="h-4 w-4" />
                    Upload Assets
                  </span>
                </Button>
              </label>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Recommended Formats</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Logos: PNG, SVG, EPS</li>
                <li>• Images: JPG, PNG (high resolution)</li>
                <li>• Documents: PDF</li>
                <li>• Templates: PSD, AI, Figma</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">File Size Limits</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Images: Max 10MB</li>
                <li>• Documents: Max 25MB</li>
                <li>• Videos: Max 100MB</li>
                <li>• Total storage: 1GB</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Upload high-quality assets with clear descriptions to help creators 
              understand your brand guidelines and create better content for your campaigns.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
