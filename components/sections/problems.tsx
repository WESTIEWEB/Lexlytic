"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink } from "lucide-react"

const legalProblems = [
  {
    id: "scattered",
    emoji: "📂",
    title: "Regulations Everywhere",
    description: "Scattered rules across multiple websites. Nothing centralized. Everything confusing.",
    image: "/mess4.jpg",
    color: "from-red-500/20 to-orange-500/20",
    textColor: "text-red-700",
  },
  {
    id: "time",
    emoji: "⏳",
    title: "Hours Wasted",
    description: "You spend your time Googling laws instead of building your business.",
    image: "/mess1.jpg",
    color: "from-amber-500/20 to-yellow-500/20",
    textColor: "text-amber-700",
  },
  {
    id: "expensive",
    emoji: "💸",
    title: "Expensive Lawyers",
    description: "Even a simple compliance question can cost hundreds in legal fees.",
    image: "/bills.png",
    color: "from-emerald-500/20 to-green-500/20",
    textColor: "text-emerald-700",
  },
  {
    id: "deadlines",
    emoji: "😰",
    title: "Deadline Anxiety",
    description: "Missed dates. No reminders. Penalties and panic follow quickly.",
    image: "/deadlines.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-blue-700",
  },
  {
    id: "jurisdictions",
    emoji: "🗺️",
    title: "Cross-border Mess",
    description: "Every jurisdiction feels like its own puzzle with no guidebook.",
    image: "/mess2.webp",
    color: "from-purple-500/20 to-violet-500/20",
    textColor: "text-purple-700",
  },
]

export function BeforeLexlyticSection() {
  const [activeTab, setActiveTab] = useState("scattered")

  return (
    <section className="py-20 bg-gradient-to-b from-[#fef9f6] to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
            Before Lexlytic, legal compliance was a nightmare
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto ">
            Businesses struggle with these common legal challenges every day, wasting time and money while increasing
            risk.
          </p>
        </motion.div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-6">
          {legalProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={problem.image || "/placeholder.svg"} alt={problem.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-5xl">{problem.emoji}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Interactive Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="scattered" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 h-auto p-1 bg-muted/50 rounded-xl mb-8">
              {legalProblems.map((problem) => (
                <TabsTrigger
                  key={problem.id}
                  value={problem.id}
                  className="data-[state=active]:shadow-md py-3 flex flex-col gap-1 items-center"
                >
                  <span className="text-2xl">{problem.emoji}</span>
                  <span className="font-medium text-sm">{problem.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {legalProblems.map((problem) => (
              <TabsContent key={problem.id} value={problem.id} className="mt-0">
                <motion.div
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${problem.color} p-1`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={problem.image || "/placeholder.svg"}
                        alt={problem.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="inline-block rounded-full px-4 py-1 bg-white shadow-sm border">
                      <span className="text-2xl mr-2">{problem.emoji}</span>
                      {/* <span className={`font-semibold ${problem.textColor}`}>
                        Problem {legalProblems.findIndex((p) => p.id === problem.id) + 1} of 5
                      </span> */}
                      
                    </div>

                    <h3 className="text-3xl font-semibold text-blue-900">{problem.title}</h3>
                    <p className="text-xl text-gray-600">{problem.description}</p>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-sm">This is just one of many compliance challenges businesses face</span>
                      </div>
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
          <Button size="lg" className="bg-[#2e2a27] hover:bg-[#443e3b] text-white rounded-full px-8">
            See how Lexlytic solves these problems
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
