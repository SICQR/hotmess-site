'use client'

import { useState } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

interface LeaderboardEntry {
  rank: number
  username: string
  avatar?: string
  type: 'affiliate' | 'buyer' | 'contributor'
  score: number
  badge: string
  streak: number
  totalEarnings?: number
  totalPurchases?: number
  postsCount?: number
  joinDate: string
}

export default function Leaderboard() {
  const [activeBoard, setActiveBoard] = useState<'overall' | 'affiliates' | 'buyers' | 'contributors'>('overall')
  
  const [leaderboards] = useState({
    overall: [
      { 
        rank: 1, username: '@top_affiliate', type: 'affiliate' as const, score: 2340, badge: '🥇', 
        streak: 47, totalEarnings: 2340, joinDate: '2023-03-15'
      },
      { 
        rank: 2, username: '@sales_king', type: 'affiliate' as const, score: 1890, badge: '🥈', 
        streak: 23, totalEarnings: 1890, joinDate: '2023-04-22'
      },
      { 
        rank: 3, username: '@drops_hunter', type: 'buyer' as const, score: 1420, badge: '🥉', 
        streak: 15, totalPurchases: 1420, joinDate: '2023-02-08'
      },
      { 
        rank: 4, username: '@community_hero', type: 'contributor' as const, score: 1250, badge: '⭐', 
        streak: 89, postsCount: 234, joinDate: '2023-01-12'
      },
      { 
        rank: 5, username: '@ar_explorer', type: 'buyer' as const, score: 980, badge: '🚀', 
        streak: 12, totalPurchases: 980, joinDate: '2023-05-03'
      },
      { 
        rank: 6, username: '@radio_host', type: 'contributor' as const, score: 875, badge: '🎵', 
        streak: 67, postsCount: 156, joinDate: '2023-03-20'
      },
      { 
        rank: 7, username: '@fashion_guru', type: 'affiliate' as const, score: 720, badge: '👗', 
        streak: 8, totalEarnings: 720, joinDate: '2023-06-10'
      },
      { 
        rank: 8, username: '@london_local', type: 'contributor' as const, score: 650, badge: '🏙️', 
        streak: 34, postsCount: 98, joinDate: '2023-04-15'
      }
    ],
    affiliates: [
      { 
        rank: 1, username: '@top_affiliate', type: 'affiliate' as const, score: 2340, badge: '🥇', 
        streak: 47, totalEarnings: 2340, joinDate: '2023-03-15'
      },
      { 
        rank: 2, username: '@sales_king', type: 'affiliate' as const, score: 1890, badge: '🥈', 
        streak: 23, totalEarnings: 1890, joinDate: '2023-04-22'
      },
      { 
        rank: 3, username: '@fashion_guru', type: 'affiliate' as const, score: 720, badge: '🥉', 
        streak: 8, totalEarnings: 720, joinDate: '2023-06-10'
      }
    ],
    buyers: [
      { 
        rank: 1, username: '@drops_hunter', type: 'buyer' as const, score: 1420, badge: '🥇', 
        streak: 15, totalPurchases: 1420, joinDate: '2023-02-08'
      },
      { 
        rank: 2, username: '@ar_explorer', type: 'buyer' as const, score: 980, badge: '🥈', 
        streak: 12, totalPurchases: 980, joinDate: '2023-05-03'
      }
    ],
    contributors: [
      { 
        rank: 1, username: '@community_hero', type: 'contributor' as const, score: 1250, badge: '🥇', 
        streak: 89, postsCount: 234, joinDate: '2023-01-12'
      },
      { 
        rank: 2, username: '@radio_host', type: 'contributor' as const, score: 875, badge: '🥈', 
        streak: 67, postsCount: 156, joinDate: '2023-03-20'
      },
      { 
        rank: 3, username: '@london_local', type: 'contributor' as const, score: 650, badge: '🥉', 
        streak: 34, postsCount: 98, joinDate: '2023-04-15'
      }
    ]
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'affiliate': return 'text-accent'
      case 'buyer': return 'text-green-400'
      case 'contributor': return 'text-purple-400'
      default: return 'text-white'
    }
  }

  const getScoreLabel = (entry: LeaderboardEntry) => {
    switch (entry.type) {
      case 'affiliate': return `£${entry.score}`
      case 'buyer': return `£${entry.score} spent`
      case 'contributor': return `${entry.score} points`
      default: return `${entry.score} pts`
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', { 
      month: 'short', 
      year: 'numeric' 
    })
  }

  const currentLeaderboard = leaderboards[activeBoard]

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Leaderboard</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Top affiliates, buyers, and community contributors
          </p>
          
          {/* Board Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: 'overall', label: 'Overall', icon: '🏆' },
              { key: 'affiliates', label: 'Affiliates', icon: '💰' },
              { key: 'buyers', label: 'Top Buyers', icon: '🛍️' },
              { key: 'contributors', label: 'Contributors', icon: '⭐' }
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveBoard(key as any)}
                className={`btn ${activeBoard === key ? 'btn-primary' : 'btn-secondary'}`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Podium - Top 3 */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Top Performers</h2>
          
          {/* Awards Display */}
          <div className="grid grid-3 mb-12">
            {currentLeaderboard.slice(0, 3).map((entry) => (
              <div key={entry.rank} className={`text-center p-8 card ${entry.rank === 1 ? 'border-yellow-500/50 bg-yellow-500/10' : entry.rank === 2 ? 'border-gray-400/50 bg-gray-400/10' : 'border-orange-500/50 bg-orange-500/10'}`}>
                <div className="text-6xl mb-4">{entry.badge}</div>
                <h3 className="mb-2">{entry.username}</h3>
                <p className={`small ${getTypeColor(entry.type)} mb-3`}>
                  {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                </p>
                <p className="text-3xl font-bold text-accent mb-2">
                  {getScoreLabel(entry)}
                </p>
                <div className="text-sm opacity-75">
                  <p>🔥 {entry.streak} day streak</p>
                  <p>📅 Since {formatDate(entry.joinDate)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Leaderboard */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">Full Rankings</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/20 font-display font-bold uppercase text-sm">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">User</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Score</div>
              <div className="col-span-2">Streak</div>
              <div className="col-span-1">Badge</div>
            </div>
            
            {/* Entries */}
            <div className="space-y-2 mt-4">
              {currentLeaderboard.map((entry) => (
                <div key={entry.username} className="grid grid-cols-12 gap-4 p-4 bg-white/5 rounded items-center hover:bg-white/10 transition-colors">
                  <div className="col-span-1">
                    <span className={`text-xl font-bold ${entry.rank <= 3 ? 'text-accent' : ''}`}>
                      #{entry.rank}
                    </span>
                  </div>
                  
                  <div className="col-span-4">
                    <div>
                      <p className="font-bold">{entry.username}</p>
                      <p className="small opacity-75">Member since {formatDate(entry.joinDate)}</p>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <span className={`small ${getTypeColor(entry.type)}`}>
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                    </span>
                  </div>
                  
                  <div className="col-span-2">
                    <p className="text-lg font-bold text-accent">
                      {getScoreLabel(entry)}
                    </p>
                    {entry.type === 'affiliate' && 'totalEarnings' in entry && (
                      <p className="small opacity-75">Total earnings</p>
                    )}
                    {entry.type === 'buyer' && 'totalPurchases' in entry && (
                      <p className="small opacity-75">Total spent</p>
                    )}
                    {entry.type === 'contributor' && 'postsCount' in entry && (
                      <p className="small opacity-75">{entry.postsCount} posts</p>
                    )}
                  </div>
                  
                  <div className="col-span-2">
                    <p className="text-orange-400 font-bold">🔥 {entry.streak}</p>
                    <p className="small opacity-75">day streak</p>
                  </div>
                  
                  <div className="col-span-1 text-center">
                    <span className="text-2xl">{entry.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Achievements */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Achievements & Rewards</h2>
          
          <div className="grid grid-4 mb-8">
            <div className="card text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="mb-2">Top Performer</h4>
              <p className="small">Monthly bonus for #1 spot</p>
              <p className="text-accent font-bold mt-2">£500 bonus</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">🔥</div>
              <h4 className="mb-2">Streak Master</h4>
              <p className="small">30+ day activity streak</p>
              <p className="text-accent font-bold mt-2">Special badge</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="mb-2">Sales Champion</h4>
              <p className="small">£1000+ monthly earnings</p>
              <p className="text-accent font-bold mt-2">Commission boost</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="mb-2">Community Star</h4>
              <p className="small">100+ helpful posts</p>
              <p className="text-accent font-bold mt-2">VIP access</p>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '/affiliate', label: 'Join Affiliate Program' }}
            secondary={{ href: '/community', label: 'Join Community' }}
          />
        </div>
      </section>

      {/* How Rankings Work */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">How Rankings Work</h2>
          
          <div className="grid grid-3 mb-8">
            <div className="card">
              <h3 className="mb-3 text-accent">💰 Affiliates</h3>
              <ul className="small space-y-1">
                <li>• Monthly earnings</li>
                <li>• QR scan conversions</li>
                <li>• Referral quality</li>
                <li>• Activity consistency</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="mb-3 text-green-400">🛍️ Buyers</h3>
              <ul className="small space-y-1">
                <li>• Purchase volume</li>
                <li>• Drop participation</li>
                <li>• Review contributions</li>
                <li>• Community engagement</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="mb-3 text-purple-400">⭐ Contributors</h3>
              <ul className="small space-y-1">
                <li>• Post quality & frequency</li>
                <li>• Community helpfulness</li>
                <li>• Event participation</li>
                <li>• Platform loyalty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}