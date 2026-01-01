import { Shield, Database, Clipboard } from "lucide-react"

export function SecurityIntegration() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SSO, 2FA, and encryption keep your data protected-always.",
    },
    {
      icon: Database,
      title: "Seamless Integrations",
      description: "Connect instantly to CRM, Slack, Teams, email, and your full tech stack.",
    },
    {
      icon: Clipboard,
      title: "Compliance & Control",
      description: "Track access, stay audit-ready, and manage permissions at scale.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Security & Integration</h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 bg-gray-50"
              >
                {/* Icon */}
                <div className="mb-6 p-4 rounded-full bg-white">
                  <Icon className="w-8 h-8 text-gray-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-black">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
