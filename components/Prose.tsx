import { ReactNode } from 'react'

interface ProseProps {
  children: ReactNode
  className?: string
}

export function Prose({ children, className = '' }: ProseProps) {
  return (
    <div className={`prose prose-invert prose-orange max-w-none ${className}`}>
      {children}
    </div>
  )
}