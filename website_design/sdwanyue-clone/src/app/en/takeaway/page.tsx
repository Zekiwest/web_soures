import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: English version takeaway delivery page
 * [POS]: /en/takeaway 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  {
    title: "Multi-terminal Support",
    description: "User app, merchant app, rider app - all connected in one platform",
  },
  {
    title: "Smart Dispatch",
    description: "AI-powered order assignment for optimal delivery efficiency",
  },
  {
    title: "Real-time Tracking",
    description: "Live order tracking with GPS positioning and status updates",
  },
  {
    title: "Marketing Tools",
    description: "Coupons, promotions, and loyalty programs to grow your business",
  },
];

const solutions = [
  {
    title: "Food Delivery",
    description: "Complete restaurant delivery solution with menu management and order processing",
    image: "🍔",
  },
  {
    title: "Grocery Delivery",
    description: "Fresh groceries and daily essentials delivered to your doorstep",
    image: "🛒",
  },
  {
    title: "Errand Services",
    description: "Pick-up, drop-off, and various on-demand services",
    image: "📦",
  },
];

export default function ENTakeawayPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">On-Demand Delivery Solution</h1>
          <p className="mb-8 text-xl text-green-100">
            Build your local delivery platform with our comprehensive system
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900">Takeaway System</span>
            </div>
            <Link href="/" className="text-sm text-green-600 hover:underline">
              中文版
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Delivery Solutions
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card key={solution.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-6xl">{solution.image}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <p className="mt-2 text-gray-600">Active Platforms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">10M+</div>
              <p className="mt-2 text-gray-600">Orders Processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">50+</div>
              <p className="mt-2 text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">99.9%</div>
              <p className="mt-2 text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose Our Solution?
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Complete source code delivery with full customization rights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Multi-language and multi-currency support for global deployment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    White-label solution for your brand identity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    24/7 technical support and regular system updates
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md bg-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold">Ready to Start?</h3>
                  <p className="mb-6 text-green-100">
                    Get a free demo and consultation from our team
                  </p>
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">Build Your Delivery Empire</h2>
        <p className="mb-8 text-green-100">
          Join hundreds of successful delivery platforms powered by our technology
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-green-600 hover:bg-green-50">
            Get Quote
          </Button>
          <Button variant="outline" className="border-white text-white">
            Free Demo
          </Button>
        </div>
      </section>
    </>
  );
}