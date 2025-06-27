import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

// Mock data
const featuredProducts = [
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
  },
];

const categories = [
  {
    name: "Wedding Flowers",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop&crop=center",
    description: "Perfect arrangements for your special day",
  },
  {
    name: "Birthday Bouquets",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop&crop=center",
    description: "Colorful flowers to celebrate life",
  },
  {
    name: "Sympathy Flowers",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center",
    description: "Thoughtful arrangements for difficult times",
  },
  {
    name: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1587576461668-1fded2e1b37a?w=500&h=300&fit=crop&crop=center",
    description: "Professional floral designs for business",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Customer",
    content:
      "The flowers were absolutely gorgeous! They lasted over a week and brightened up my entire living room. Will definitely order again!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Event Planner",
    content:
      "BloomCraft consistently delivers stunning arrangements for our corporate events. Their attention to detail is unmatched.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Bride",
    content:
      "They created the most beautiful wedding bouquets! Every flower was perfect and exactly what I envisioned for my special day.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured Collection
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Handpicked for You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular flower arrangements, carefully selected
              and crafted by our expert florists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/flowers">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 gradient-sage">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Shop by Occasion
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect flowers for every special moment in your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    Shop Now <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100K+</div>
              <div className="text-gray-600">Flowers Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 gradient-rose">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers who've experienced the BloomCraft difference.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
