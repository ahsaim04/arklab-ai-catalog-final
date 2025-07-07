"use client"

import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { GoogleSignIn } from "@/components/google-sign-in"
import { Bot, Zap, Shield, BarChart3, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Agents",
    description: "Discover cutting-edge AI agents designed for various business needs and use cases.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant access to powerful AI tools that can transform your workflow in seconds.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with enterprise-grade security to protect your data and ensure compliance.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance and gain insights with comprehensive analytics and reporting.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in collaboration tools and shared workspaces.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "Stay ahead with regular updates and new AI capabilities added to the platform.",
  },
]

const stats = [
  { label: "AI Agents", value: "50+" },
  { label: "Active Users", value: "10K+" },
  { label: "Success Rate", value: "99.9%" },
  { label: "Countries", value: "25+" },
]

export default function LandingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session && status === "authenticated") {
      console.log("User authenticated, redirecting to dashboard")
      router.replace("/dashboard")
    }
  }, [session, status, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (status === "authenticated" && session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">Redirecting to dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">ArkLab AI</span>
            <br />
            Agent Catalog
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Discover, deploy, and manage powerful AI agents that transform your business operations. From customer
            service to development tools, find the perfect AI solution for your needs.
          </p>
          <div className="mx-auto max-w-md">
            <GoogleSignIn />
            <p className="mt-4 text-sm text-muted-foreground">
              Sign in with Google to access your personalized AI agent dashboard
            </p>
          </div>
        </motion.div>
      </section>

      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-3xl font-bold text-primary md:text-4xl"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <span className="font-semibold">ArkLab AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ArkLab AI. Built for the Frontend Developer Intern Challenge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
