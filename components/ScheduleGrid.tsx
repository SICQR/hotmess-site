'use client'

import { useState, useEffect } from 'react'

export interface ShowData {
  id: string
  title: string
  host: string
  day: string
  startTime: string
  endTime: string
  type: 'live' | 'mix'
  description: string
}

interface ScheduleGridProps {
  shows?: ShowData[]
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const TIME_SLOTS = [
  '06:00', '08:00', '10:00', '12:00', '14:00', '16:00',
  '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'
]

export function ScheduleGrid({ shows = [] }: ScheduleGridProps) {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDay, setCurrentDay] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const londonTime = now.toLocaleString('en-GB', { 
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit'
      })
      setCurrentTime(londonTime)
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      setCurrentDay(dayNames[now.getDay()])
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

  const getShowForTimeSlot = (day: string, time: string): ShowData | null => {
    return shows.find(show => {
      if (show.day !== day) return false
      
      const startTime = show.startTime
      const endTime = show.endTime
      
      // Handle overnight shows (e.g., 22:00 to 06:00)
      if (endTime < startTime) {
        return time >= startTime || time < endTime
      }
      
      return time >= startTime && time < endTime
    }) || null
  }

  const isCurrentTimeSlot = (day: string, time: string): boolean => {
    if (day !== currentDay) return false
    if (!currentTime) return false
    
    const [currentHour, currentMinute] = currentTime.split(':').map(Number)
    const [slotHour, slotMinute] = time.split(':').map(Number)
    
    const currentMinutes = currentHour * 60 + currentMinute
    const slotMinutes = slotHour * 60 + slotMinute
    
    // Check if current time is within 2 hours of this slot
    return Math.abs(currentMinutes - slotMinutes) < 120
  }

  const getCurrentShow = (): ShowData | null => {
    if (!currentTime || !currentDay) return null
    
    const now = currentTime
    return shows.find(show => {
      if (show.day !== currentDay) return false
      
      const startTime = show.startTime
      const endTime = show.endTime
      
      // Handle overnight shows
      if (endTime < startTime) {
        return now >= startTime || now < endTime
      }
      
      return now >= startTime && now < endTime
    }) || null
  }

  const getNextShow = (): ShowData | null => {
    if (!currentTime || !currentDay) return null
    
    // Find next show today or tomorrow
    const currentDayIndex = DAYS.indexOf(currentDay)
    
    // First, check for shows later today
    const todayShows = shows
      .filter(show => show.day === currentDay)
      .filter(show => show.startTime > currentTime)
      .sort((a, b) => a.startTime.localeCompare(b.startTime))
    
    if (todayShows.length > 0) {
      return todayShows[0]
    }
    
    // Then check tomorrow
    const nextDayIndex = (currentDayIndex + 1) % 7
    const nextDay = DAYS[nextDayIndex]
    const nextDayShows = shows
      .filter(show => show.day === nextDay)
      .sort((a, b) => a.startTime.localeCompare(b.startTime))
    
    return nextDayShows[0] || null
  }

  const currentShow = getCurrentShow()
  const nextShow = getNextShow()

  return (
    <div className="w-full">
      {/* Now/Next Banner */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-4 p-4 border border-white/15 rounded-xl bg-black/20 backdrop-blur-sm">
          <div className="text-left">
            <div className="text-sm font-display font-bold text-accent mb-1">NOW LIVE</div>
            {currentShow ? (
              <div>
                <div className="font-display font-bold">{currentShow.title}</div>
                <div className="text-sm opacity-75">{currentShow.host}</div>
              </div>
            ) : (
              <div className="opacity-75">Auto DJ Mix</div>
            )}
          </div>
          
          <div className="w-px h-12 bg-white/20" />
          
          <div className="text-left">
            <div className="text-sm font-display font-bold mb-1">UP NEXT</div>
            {nextShow ? (
              <div>
                <div className="font-display font-bold">{nextShow.title}</div>
                <div className="text-sm opacity-75">{nextShow.startTime} • {nextShow.host}</div>
              </div>
            ) : (
              <div className="opacity-75">Continuous Mix</div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 text-center">
        <h3 className="font-display font-bold text-lg mb-2">Weekly Schedule</h3>
        <p className="text-sm opacity-75">
          All times London (GMT{new Date().toLocaleString('en-GB', { timeZone: 'Europe/London', timeZoneName: 'short' }).split(' ').pop()})
        </p>
        {currentTime && (
          <p className="text-xs opacity-60 mt-1">
            Current time: {currentTime}
          </p>
        )}
      </div>

      {/* Mobile-first: Stack days vertically */}
      <div className="block lg:hidden space-y-6">
        {DAYS.map(day => (
          <div key={day} className="card">
            <h4 className="font-display font-bold mb-3 text-accent">
              {day}
            </h4>
            <div className="space-y-2">
              {TIME_SLOTS.map(time => {
                const show = getShowForTimeSlot(day, time)
                const isCurrent = isCurrentTimeSlot(day, time)
                
                return (
                  <div 
                    key={time}
                    className={`flex items-center justify-between p-2 rounded border ${
                      isCurrent 
                        ? 'border-accent bg-accent/10' 
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <span className="text-sm font-mono">{time}</span>
                    {show ? (
                      <div className="text-right">
                        <div className="text-sm font-medium">{show.title}</div>
                        <div className="text-xs opacity-75">{show.host}</div>
                        {show.type === 'live' && (
                          <span className="inline-block bg-accent text-black text-xs px-2 py-0.5 rounded mt-1">
                            LIVE
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm opacity-50">Auto DJ</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="grid grid-cols-8 gap-2 min-w-[800px]">
          {/* Header row */}
          <div className="font-mono text-xs opacity-75 p-2">Time</div>
          {DAYS.map(day => (
            <div key={day} className="font-display font-bold text-sm p-2 text-center">
              {day}
            </div>
          ))}

          {/* Time slot rows */}
          {TIME_SLOTS.map(time => (
            <div key={time} className="contents">
              <div className="font-mono text-xs p-2 border-r border-white/10">
                {time}
              </div>
              {DAYS.map(day => {
                const show = getShowForTimeSlot(day, time)
                const isCurrent = isCurrentTimeSlot(day, time)
                
                return (
                  <div 
                    key={`${day}-${time}`}
                    className={`p-2 text-xs border border-white/5 ${
                      isCurrent ? 'bg-accent/10 border-accent' : ''
                    }`}
                  >
                    {show ? (
                      <div>
                        <div className="font-medium truncate">{show.title}</div>
                        <div className="opacity-75 truncate">{show.host}</div>
                        {show.type === 'live' && (
                          <span className="inline-block bg-accent text-black text-xs px-1 rounded mt-1">
                            LIVE
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="opacity-50">Auto DJ</div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}