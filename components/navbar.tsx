"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const navItems = [
    { label: "Solutions", hasDropdown: true },
    { label: "Industries", hasDropdown: true },
    { label: "Browser Extensions", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
  ]

  return (
    <nav className="border-b border-border bg-background overflow-x-hidden">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">FUSEBASE</span>
          <span className="text-sm text-muted-foreground">| FORMERLY NIMBUS</span>
        </div>

        {/* Center Navigation Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer outline-none">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sign in</button>
          <Button variant="outline" size="sm" className="text-sm font-medium bg-transparent">
            Book a demo
          </Button>
          <Button size="sm" className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Get started for free
          </Button>
        </div>
      </div>
    </nav>
  )
}
