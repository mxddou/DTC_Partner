"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Package, DollarSign, Tag } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Summer Collection Dress",
    category: "Clothing",
    price: "$89.99",
    description: "Lightweight summer dress perfect for warm weather",
    targetAudience: "Women 18-35",
    keyFeatures: [
      "Sustainable materials",
      "Machine washable",
      "Multiple colors",
    ],
    imageUrl: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Eco-Friendly Tote Bag",
    category: "Accessories",
    price: "$24.99",
    description: "Reusable canvas tote bag for everyday use",
    targetAudience: "All ages",
    keyFeatures: ["100% organic cotton", "Reinforced handles", "Washable"],
    imageUrl: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Premium Denim Jeans",
    category: "Clothing",
    price: "$129.99",
    description: "High-quality denim jeans with modern fit",
    targetAudience: "Men & Women 20-40",
    keyFeatures: ["Stretch denim", "Multiple washes", "Sustainable production"],
    imageUrl: "/api/placeholder/200/200",
  },
];

export function ProductsSection() {
  const [products, setProducts] = useState(mockProducts);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    targetAudience: "",
    keyFeatures: [] as string[],
  });
  const [newFeature, setNewFeature] = useState("");

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price) {
      const product = {
        id: Date.now(),
        ...newProduct,
        imageUrl: "/api/placeholder/200/200",
      };
      setProducts([...products, product]);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        description: "",
        targetAudience: "",
        keyFeatures: [],
      });
      setIsAddingProduct(false);
    }
  };

  const handleEditProduct = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setNewProduct({
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description,
        targetAudience: product.targetAudience,
        keyFeatures: product.keyFeatures,
      });
      setEditingProduct(id);
    }
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct ? { ...p, ...newProduct } : p
        )
      );
      setEditingProduct(null);
      setNewProduct({
        name: "",
        category: "",
        price: "",
        description: "",
        targetAudience: "",
        keyFeatures: [],
      });
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewProduct((prev) => ({
        ...prev,
        keyFeatures: [...prev.keyFeatures, newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    setNewProduct((prev) => ({
      ...prev,
      keyFeatures: prev.keyFeatures.filter((_, i) => i !== index),
    }));
  };

  const isEditing = isAddingProduct || editingProduct !== null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <p className="text-gray-600">
            Manage your product catalog for creator collaborations
          </p>
        </div>
        <Button
          onClick={() => setIsAddingProduct(true)}
          className="gap-2"
          disabled={isEditing}
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>
              {isAddingProduct ? "Add New Product" : "Edit Product"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter product name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newProduct.category}
                  onValueChange={(value) =>
                    setNewProduct((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                    <SelectItem value="Beauty">Beauty</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                    <SelectItem value="Food & Beverage">
                      Food & Beverage
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <Input
                    id="price"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  value={newProduct.targetAudience}
                  onChange={(e) =>
                    setNewProduct((prev) => ({
                      ...prev,
                      targetAudience: e.target.value,
                    }))
                  }
                  placeholder="e.g., Women 18-35"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Describe your product..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Key Features</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {newProduct.keyFeatures.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {feature}
                    <button
                      onClick={() => handleRemoveFeature(index)}
                      className="ml-1 hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a key feature..."
                  onKeyPress={(e) => e.key === "Enter" && handleAddFeature()}
                />
                <Button onClick={handleAddFeature} variant="outline" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={
                  isAddingProduct ? handleAddProduct : handleUpdateProduct
                }
                className="gap-2"
              >
                <Package className="h-4 w-4" />
                {isAddingProduct ? "Add Product" : "Update Product"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                  setNewProduct({
                    name: "",
                    category: "",
                    price: "",
                    description: "",
                    targetAudience: "",
                    keyFeatures: [],
                  });
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              <Package className="h-12 w-12 text-gray-400" />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditProduct(product.id)}
                      disabled={isEditing}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                      disabled={isEditing}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <span className="text-lg font-semibold text-green-600">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="space-y-1">
                  <p className="text-xs text-gray-500">
                    Target: {product.targetAudience}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.keyFeatures.slice(0, 2).map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {product.keyFeatures.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{product.keyFeatures.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No products yet
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Add your first product to start collaborating with creators
            </p>
            <Button onClick={() => setIsAddingProduct(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Your First Product
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
