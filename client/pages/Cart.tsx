import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cart() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-12">
                <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Shopping Cart
                </h1>
                <p className="text-muted-foreground mb-8">
                  Your cart is currently empty. Start shopping to add beautiful
                  flowers to your cart!
                </p>
                <Button asChild size="lg">
                  <Link to="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
