import React from 'react'

export function Badge({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span className={`inline-block rounded-2xl px-3 py-1 text-xs ${className}`}>
      {children}
    </span>
  )
}
