import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

// Mock data - expanded product list
const allProducts = [
  {
    id: "1",
    name: "Premium Red Rose Bouquet",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 124,
    isSale: true,
    tags: ["Premium", "Romantic"],
    category: "roses",
  },
  {
    id: "2",
    name: "Spring Tulip Arrangement",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    tags: ["Seasonal", "Colorful"],
    category: "tulips",
  },
  {
    id: "3",
    name: "Sunflower Summer Bouquet",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1597848212624-e6d2c7e6d7c0?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 156,
    tags: ["Bright", "Cheerful"],
    category: "sunflowers",
  },
  {
    id: "4",
    name: "Elegant White Lily Bundle",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviewCount: 203,
    tags: ["Elegant", "Classic"],
    category: "lilies",
  },
  {
    id: "5",
    name: "Mixed Wildflower Bouquet",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 78,
    tags: ["Natural", "Rustic"],
    category: "mixed",
  },
  {
    id: "6",
    name: "Pink Peony Arrangement",
    price: 67.99,
    image:
      "https://images.unsplash.com/photo-1587576461668-1fded2e1b37a?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 142,
    tags: ["Luxury", "Fragrant"],
    category: "peonies",
  },
  {
    id: "7",
    name: "Purple Lavender Bundle",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 95,
    tags: ["Aromatic", "Calming"],
    category: "lavender",
  },
  {
    id: "8",
    name: "Orange Marigold Collection",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 67,
    isSale: true,
    tags: ["Vibrant", "Long-lasting"],
    category: "marigolds",
  },
];

const categories = [
  { value: "all", label: "All Flowers" },
  { value: "roses", label: "Roses" },
  { value: "tulips", label: "Tulips" },
  { value: "lilies", label: "Lilies" },
  { value: "sunflowers", label: "Sunflowers" },
  { value: "peonies", label: "Peonies" },
  { value: "lavender", label: "Lavender" },
  { value: "marigolds", label: "Marigolds" },
  { value: "mixed", label: "Mixed Bouquets" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Flower Collection
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our carefully curated selection of fresh, premium flowers.
            From classic roses to exotic arrangements, find the perfect blooms
            for any occasion.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Filters Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>
              {searchQuery && (
                <Badge
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => setSearchQuery("")}
                >
                  Search: "{searchQuery}" ×
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory("all")}
                >
                  {categories.find((c) => c.value === selectedCategory)?.label}{" "}
                  ×
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div
              className={cn(
                "grid gap-6",
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1",
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === "list" ? "flex-row" : ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">No flowers found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredProducts.length > 0 && filteredProducts.length >= 8 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
