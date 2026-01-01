import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ConveyorBelt } from "@/components/conveyor-belt"
import { TrustSection } from "@/components/trust-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { OperationsSection } from "@/components/operations-section"
import { PortalShowcase } from "@/components/portal-showcase"
import { RevenueSection } from "@/components/revenue-section"
import { ClosingCTA } from "@/components/closing-cta"
import { FeaturesComparison } from "@/components/features-comparison"
import { AwardsSection } from "@/components/awards-section"
import { ImpactSection } from "@/components/impact-section"
import { SecurityIntegration } from "@/components/security-integration"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <ConveyorBelt />
      <RevenueSection />
      <PortalShowcase />
      <OperationsSection />
      <FeaturesShowcase />
      <ClosingCTA />
      <FeaturesComparison />
      <AwardsSection />
      <ImpactSection />
      <SecurityIntegration />
      <FinalCTA />
      <Footer />
    </div>
  )
}
