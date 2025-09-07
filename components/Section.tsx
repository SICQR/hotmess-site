import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section className={`scroll-section ${className}`} id={id}>
      {children}
    </section>
  )
}