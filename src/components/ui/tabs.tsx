import React from 'react'

type TabsProps = {
  value: string
  onValueChange?: (v: string) => void
  className?: string
  children: React.ReactNode
}

export function Tabs({ value, onValueChange, className = '', children }: TabsProps) {
  return <div className={className} data-value={value} data-onchange={!!onValueChange}>{children}</div>
}

export function TabsList({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>
}

export function TabsTrigger({ value, className = '', children }: { value: string; className?: string; children: React.ReactNode }) {
  // Just a styled button; the parent (App) controls the state.
  return (
    <button data-tab-value={value} className={className}>
      {children}
    </button>
  )
}

export function TabsContent({ value, current, className = '', children }: { value: string; current: string; className?: string; children: React.ReactNode }) {
  if (value !== current) return null
  return <div className={className}>{children}</div>
}
