import Link from 'next/link'

function getDaypartGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return { time: 'AM', message: 'Rise and Grind', energy: 'warm' }
  if (hour >= 12 && hour < 20) return { time: 'PM', message: 'Peak Hours', energy: 'soft' }
  return { time: 'NIGHT', message: 'After Dark', energy: 'neon' }
}

export function Hero() {
  const daypart = getDaypartGreeting()

  return (
    <section className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container text-center relative z-10">
        <div className="animate-fade">
          <p className="text-sm font-display uppercase tracking-wider opacity-75 mb-4">
            {daypart.time} • {daypart.message}
          </p>
          <h1 className="mb-6 animate-slide">
            HOTMESS<br/>
            <span className="text-accent">LONDON</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Always Too Much, Never Enough
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop" className="btn btn-primary animate-roll">
              Shop Now
            </Link>
            <Link href="/radio" className="btn btn-secondary animate-roll" style={{ animationDelay: '0.2s' }}>
              Listen Live
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background gradient based on daypart */}
      <div 
        className={`absolute inset-0 opacity-20 ${
          daypart.energy === 'warm' ? 'bg-gradient-to-br from-orange-900/20 to-red-900/20' :
          daypart.energy === 'soft' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' :
          'bg-gradient-to-br from-accent/10 to-pink-900/20'
        }`}
      />
    </section>
  )
}