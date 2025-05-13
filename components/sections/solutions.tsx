"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"

const lexlyticSolutions = [
  {
    id: "organized",
    emoji: "📘",
    title: "Everything in one place",
    description: "All regulations summarized and organized in a clean dashboard.",
    image: "/solution3.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-green-700",
  },
  {
    id: "instant",
    emoji: "⚡",
    title: "Clear, instant answers",
    description: "Understand your legal obligations without endless research.",
    image: "/clear-instance.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-blue-700",
  },
  {
    id: "costs",
    emoji: "💰",
    title: "Save on legal costs",
    description: "Skip costly consultations — get expert-verified guidance on demand.",
    image: "/saves.jpg",
    color: "from-purple-500/20 to-violet-500/20",
    textColor: "text-purple-700",
  },
  {
    id: "deadlines",
    emoji: "📅",
    title: "Never miss a deadline",
    description: "Stay ahead of compliance with reminders and tracked tasks.",
    image: "/ontime.png",
    color: "from-yellow-500/20 to-amber-500/20",
    textColor: "text-amber-700",
  },
  {
    id: "global",
    emoji: "🌍",
    title: "Global compliance made simple",
    description: "Easily manage laws across borders with jurisdiction-aware insights.",
    image: "/all-b.jpeg",
    color: "from-pink-500/20 to-rose-500/20",
    textColor: "text-rose-700",
  },
]

export function AfterLexlyticSection() {
  const [activeTab, setActiveTab] = useState("organized")

  return (
    <section className="py-20 bg-gradient-to-b from-[#f4fbf8] to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c2e] mb-4">
            After Lexlytic, everything feels like this 😌
          </h2>
          <p className="text-lg text-[#4c6659] max-w-2xl mx-auto">
            Transform your legal compliance from a headache into a competitive advantage
          </p>
        </motion.div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-6">
          {lexlyticSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-5xl">{solution.emoji}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1f3c2e]">{solution.title}</h3>
                  <p className="text-[#4c6659]">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Interactive Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="organized" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 h-auto p-1 bg-muted/50 rounded-xl mb-8">
              {lexlyticSolutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="data-[state=active]:shadow-md py-3 flex flex-col gap-1 items-center"
                >
                  <span className="text-2xl">{solution.emoji}</span>
                  <span className="font-medium text-sm">{solution.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {lexlyticSolutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-0">
                <motion.div
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${solution.color} p-1`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="inline-block rounded-full px-4 py-1 bg-white shadow-sm border">
                      <span className="text-2xl mr-2">{solution.emoji}</span>
                      {/* <span className={`font-semibold ${solution.textColor}`}>
                        Solution {lexlyticSolutions.findIndex((s) => s.id === solution.id) + 1} of 5
                      </span> */}
                    </div>

                    <h3 className="text-3xl font-bold text-[#1f3c2e]">{solution.title}</h3>
                    <p className="text-xl text-[#4c6659]">{solution.description}</p>

                    <div className="pt-4">
                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                            <span className="text-[#4c6659]">
                              {solution.id === "organized" &&
                                item === 1 &&
                                "All your compliance tasks in one dashboard"}
                              {solution.id === "organized" &&
                                item === 2 &&
                                "Simplified summaries of complex regulations"}
                              {solution.id === "organized" && item === 3 && "Customized to your business needs"}

                              {solution.id === "instant" && item === 1 && "AI-powered search finds answers in seconds"}
                              {solution.id === "instant" && item === 2 && "Plain language explanations of legal jargon"}
                              {solution.id === "instant" && item === 3 && "Verified by legal experts for accuracy"}

                              {solution.id === "costs" && item === 1 && "Reduce legal consultation fees by up to 70%"}
                              {solution.id === "costs" && item === 2 && "Get answers without expensive hourly billing"}
                              {solution.id === "costs" && item === 3 && "Predictable subscription pricing"}

                              {solution.id === "deadlines" &&
                                item === 1 &&
                                "Automated reminders for upcoming deadlines"}
                              {solution.id === "deadlines" &&
                                item === 2 &&
                                "Calendar integration with your existing tools"}
                              {solution.id === "deadlines" && item === 3 && "Prioritized tasks based on urgency"}

                              {solution.id === "global" && item === 1 && "Coverage across multiple jurisdictions"}
                              {solution.id === "global" && item === 2 && "Comparison tools for different regions"}
                              {solution.id === "global" &&
                                item === 3 &&
                                "Updates when regulations change internationally"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button size="lg" className="bg-[#1f3c2e] hover:bg-[#355d47] text-white rounded-full px-8">
            Explore the Lexlytic advantage
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
