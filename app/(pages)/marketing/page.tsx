import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { VideoPlayer } from "@/components/video-player";

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  keywords: ["SaaS", "Next.js", "React", "TypeScript", "Web Development"],
  title: "Next.js SaaS Starter Kit - Build Your SaaS Faster",
  openGraph: {
    description:
      "Launch your SaaS project faster with our Next.js starter kit. Built with modern tools and best practices.",
    images: ["https://your-og-image-url.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SaaS Starter Kit",
    description:
      "Launch your SaaS project faster with our Next.js starter kit. Built with modern tools and best practices.",
    creator: "@yourtwitterhandle",
    images: ["https://your-og-image-url.com"],
  },
};

export default async function MarketingPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full">
        {/* Hero Section */}
        <h1 className="scroll-m-20 max-w-[800px] text-5xl font-bold tracking-tight text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
          Build Your SaaS Faster with Our Next.js Starter Kit
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-4 dark:text-gray-400">
          Skip the boilerplate and focus on what matters. Launch your SaaS
          project with authentication, payments, and essential features
          pre-configured.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <Link href="/dashboard" prefetch={true}>
            <Button size="lg" className="font-semibold">
              Start Building Free
            </Button>
          </Link>
          <Link
            href="https://github.com/yourusername/your-repo"
            target="_blank"
          >
            <Button size="lg" variant="outline" className="font-semibold">
              View on GitHub
            </Button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="mb-3 mt-16 max-w-[900px] w-full rounded-xl overflow-hidden shadow-2xl">
          <VideoPlayer videoSrc="https://customer-m033z5x00ks6nunl.cloudflarestream.com/b236bde30eb07b9d01318940e5fc3eda/manifest/video.m3u8" />
        </div>

        {/* Features Section */}
        <div className="flex flex-col max-w-[900px] items-center mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Everything You Need to Launch Fast
          </h2>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <FeatureCard
              title="Authentication Ready"
              description="Secure authentication system integrated with Clerk, including social logins and user management."
            />
            <FeatureCard
              title="Payment Integration"
              description="Stripe integration for handling subscriptions, payments, and billing management."
            />
            <FeatureCard
              title="Modern Stack"
              description="Built with Next.js 14, TypeScript, Tailwind CSS, and other modern tools."
            />
            <FeatureCard
              title="Database & API"
              description="Prisma ORM setup with PostgreSQL and API routes ready for your backend needs."
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full max-w-[900px] mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Loved by Developers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This starter kit saved me weeks of setup time. The code quality is excellent!"
              author="Sarah Chen"
              role="Full Stack Developer"
            />
            <TestimonialCard
              quote="Perfect balance of features and simplicity. Exactly what I needed for my SaaS project."
              author="Michael Rodriguez"
              role="Indie Hacker"
            />
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="w-full max-w-[900px] mb-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-[600px] mx-auto">
            Join hundreds of developers who are building their SaaS projects
            faster with our starter kit.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="font-semibold">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <p className="text-gray-600 dark:text-gray-400 italic mb-4">
        &quot;{quote}&quot;
      </p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 dark:text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}
