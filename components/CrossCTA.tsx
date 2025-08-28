import Link from 'next/link'

interface CTALink {
  href: string
  label: string
}

interface CrossCTAProps {
  primary: CTALink
  secondary?: CTALink
  tertiary?: CTALink
}

export function CrossCTA({ primary, secondary, tertiary }: CrossCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade">
      <Link href={primary.href} className="btn btn-primary">
        {primary.label}
      </Link>
      {secondary && (
        <Link href={secondary.href} className="btn btn-secondary">
          {secondary.label}
        </Link>
      )}
      {tertiary && (
        <Link href={tertiary.href} className="btn btn-secondary">
          {tertiary.label}
        </Link>
      )}
    </div>
  )
}