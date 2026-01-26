"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TarotCardProps {
  title: string
  description?: string
  symbol?: string
  className?: string
  isFlippable?: boolean
}

export function TarotCard({ 
  title, 
  description, 
  symbol = "★",
  className,
  isFlippable = false
}: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    if (isFlippable) {
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div 
      className={cn(
        "group relative h-80 w-56 cursor-pointer perspective-1000",
        className
      )}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      role={isFlippable ? "button" : undefined}
      tabIndex={isFlippable ? 0 : undefined}
    >
      <div 
        className={cn(
          "relative h-full w-full transition-transform duration-700 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-accent/30 bg-card p-6 shadow-lg backface-hidden">
          <div className="absolute inset-3 rounded-lg border border-accent/20" />
          <span className="mb-4 text-5xl text-accent">{symbol}</span>
          <h3 className="text-center text-lg font-semibold text-card-foreground">{title}</h3>
          {description && (
            <p className="mt-2 text-center text-sm text-muted-foreground">{description}</p>
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-xs text-accent/60">✦</span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        {isFlippable && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-accent/30 bg-primary p-6 shadow-lg backface-hidden rotate-y-180">
            <div className="absolute inset-3 rounded-lg border border-primary-foreground/20" />
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="text-2xl text-primary-foreground/60">✦</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
