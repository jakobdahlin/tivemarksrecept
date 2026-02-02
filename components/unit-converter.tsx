"use client"

import { useState } from "react"
import { Scale } from "lucide-react"

interface UnitConverterProps {
  isMetric: boolean
  onToggle: (isMetric: boolean) => void
}

export function UnitConverter({ isMetric, onToggle }: UnitConverterProps) {
  return (
    <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
      <Scale className="h-4 w-4 text-muted-foreground" />
      <div className="flex items-center gap-1 text-sm">
        <button
          type="button"
          onClick={() => onToggle(false)}
          className={`px-3 py-1 rounded-full transition-colors ${
            !isMetric
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Imperial
        </button>
        <button
          type="button"
          onClick={() => onToggle(true)}
          className={`px-3 py-1 rounded-full transition-colors ${
            isMetric
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Metric
        </button>
      </div>
    </div>
  )
}
