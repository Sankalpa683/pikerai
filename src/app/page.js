import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import Nav from "./component/nav"
import Hero from "./component/hero"
import HowItWorks from "./component/how-it-works"
import ComparisonSection from "./component/comparison-section"
import InAction from "./component/in-action"
import Footer from "./component/footer"

export default function Home() {
  return (
    <div className="min-h-screen text-black bg-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* HowItWorks Section */}
      <HowItWorks />

      {/* ComparisonSection Section */}
      <ComparisonSection />

      {/* InAction Section */}
      <InAction />

      {/* CTA Section */}
      <ComparisonSection />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
