'use client'

import { useState, useEffect } from 'react'
import { RadioShow, DOW } from '../src/types/radio'

interface ScheduleGridProps {
  shows?: RadioShow[]
}

const DAYS: { key: DOW; label: string }[] = [
  { key: 'mon', label: 'Monday' },
  { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' },
  { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' },
  { key: 'sat', label: 'Saturday' },
  { key: 'sun', label: 'Sunday' },
]

const TIME_SLOTS = [
  '06:00', '08:00', '10:00', '12:00', '14:00', '16:00',
  '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'
]

export function ScheduleGrid({ shows = [] }: ScheduleGridProps) {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDay, setCurrentDay] = useState<DOW>('mon')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const londonTime = now.toLocaleString('en-GB', { 
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit'
      })
      setCurrentTime(londonTime)
      
      const dayIndex = now.getDay()
      const dayMap: DOW[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
      setCurrentDay(dayMap[dayIndex])
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

  const getShowForTimeSlot = (day: DOW, time: string): RadioShow | null => {
    return shows.find(show => {
      if (show.day !== day) return false
      
      const startTime = show.start
      const endTime = show.end
      
      // Simple time comparison (assumes times are in HH:MM format)
      return time >= startTime && time < endTime
    }) || null
  }

  const isCurrentTimeSlot = (day: DOW, time: string): boolean => {
    if (day !== currentDay) return false
    if (!currentTime) return false
    
    const [currentHour, currentMinute] = currentTime.split(':').map(Number)
    const [slotHour, slotMinute] = time.split(':').map(Number)
    
    const currentMinutes = currentHour * 60 + currentMinute
    const slotMinutes = slotHour * 60 + slotMinute
    
    // Check if current time is within 2 hours of this slot
    return Math.abs(currentMinutes - slotMinutes) < 120
  }

  return (
    <div className="w-full">
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
        {DAYS.map(({ key: day, label }) => (
          <div key={day} className="card">
            <h4 className="font-display font-bold mb-3 text-accent">
              {label}
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
                        {show.host && (
                          <div className="text-xs opacity-75">{show.host}</div>
                        )}
                        {show.live && (
                          <span className="inline-block bg-accent text-black text-xs px-2 py-0.5 rounded mt-1">
                            LIVE
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm opacity-50">Playlist</div>
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
          {DAYS.map(({ label }) => (
            <div key={label} className="font-display font-bold text-sm p-2 text-center">
              {label}
            </div>
          ))}

          {/* Time slot rows */}
          {TIME_SLOTS.map(time => (
            <div key={time} className="contents">
              <div className="font-mono text-xs p-2 border-r border-white/10">
                {time}
              </div>
              {DAYS.map(({ key: day }) => {
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
                        {show.host && (
                          <div className="opacity-75 truncate">{show.host}</div>
                        )}
                        {show.live && (
                          <span className="inline-block bg-accent text-black text-xs px-1 rounded mt-1">
                            LIVE
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="opacity-50">Playlist</div>
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