'use client'

import { useState } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

interface Post {
  id: string
  author: string
  content: string
  timestamp: string
  likes: number
  replies: number
  tags: string[]
}

interface LeaderboardEntry {
  rank: number
  username: string
  type: 'affiliate' | 'buyer' | 'contributor'
  score: number
  badge: string
}

export default function Community() {
  const [posts] = useState<Post[]>([
    {
      id: '1',
      author: '@daddy_longlegs',
      content: 'Just copped the new SUPERHUNG vest 🔥 The fit is absolutely perfect for tonight\'s rave. Quality is insane!',
      timestamp: '2h ago',
      likes: 47,
      replies: 12,
      tags: ['drop', 'superhung', 'review']
    },
    {
      id: '2',
      author: '@rave_queen',
      content: 'Tonight\'s Aftercare Sunday radio show was incredible! The DJ selection and the wellness segment hit different. More of this energy please 🙏',
      timestamp: '4h ago',
      likes: 89,
      replies: 23,
      tags: ['radio', 'aftercare', 'wellness']
    },
    {
      id: '3',
      author: '@mesh_master',
      content: 'Finally unlocked the AR experience for the HNH MESS lube packaging 👀 The aftercare resources that pop up are actually really helpful. This is the future!',
      timestamp: '6h ago',
      likes: 156,
      replies: 34,
      tags: ['ar', 'hnh', 'tech']
    },
    {
      id: '4',
      author: '@london_legend',
      content: 'Shoutout to everyone who came to last week\'s Hyde Park meetup! The energy was unmatched. Already planning the next one ✨',
      timestamp: '1d ago',
      likes: 203,
      replies: 67,
      tags: ['irl', 'meetup', 'community']
    }
  ])

  const [leaderboard] = useState<LeaderboardEntry[]>([
    { rank: 1, username: '@top_affiliate', type: 'affiliate', score: 2340, badge: '🥇' },
    { rank: 2, username: '@sales_king', type: 'affiliate', score: 1890, badge: '🥈' },
    { rank: 3, username: '@drops_hunter', type: 'buyer', score: 1420, badge: '🥉' },
    { rank: 4, username: '@community_hero', type: 'contributor', score: 1250, badge: '⭐' },
    { rank: 5, username: '@ar_explorer', type: 'buyer', score: 980, badge: '🚀' },
    { rank: 6, username: '@radio_host', type: 'contributor', score: 875, badge: '🎵' },
    { rank: 7, username: '@fashion_guru', type: 'affiliate', score: 720, badge: '👗' },
    { rank: 8, username: '@london_local', type: 'contributor', score: 650, badge: '🏙️' }
  ])

  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'forum'>('feed')

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'affiliate': return 'text-accent'
      case 'buyer': return 'text-green-400'
      case 'contributor': return 'text-purple-400'
      default: return 'text-white'
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Community</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect, share, and celebrate with the HOTMESS community
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { key: 'feed', label: 'Recent Posts' },
              { key: 'leaderboard', label: 'Leaderboard' },
              { key: 'forum', label: 'Forum' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`btn ${activeTab === key ? 'btn-primary' : 'btn-secondary'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="scroll-section">
        <div className="container">
          <div className="grid grid-4 mb-8">
            <div className="text-center p-6 border border-white/10 rounded">
              <div className="text-3xl font-bold text-accent mb-2">2,847</div>
              <p className="small">Active Members</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded">
              <div className="text-3xl font-bold text-green-400 mb-2">156</div>
              <p className="small">Posts Today</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded">
              <div className="text-3xl font-bold text-purple-400 mb-2">89</div>
              <p className="small">Events This Month</p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded">
              <div className="text-3xl font-bold text-blue-400 mb-2">£12.4k</div>
              <p className="small">Affiliate Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="scroll-section">
        <div className="container">
          {activeTab === 'feed' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-8">Community Feed</h2>
              
              {/* Post Composer */}
              <div className="card mb-8">
                <h3 className="mb-4">Share with the community</h3>
                <textarea 
                  placeholder="What's happening in your HOTMESS world?"
                  className="w-full bg-white/10 border border-white/20 rounded p-4 mb-4 text-white"
                  rows={3}
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">#drop</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">#radio</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">#community</span>
                  </div>
                  <button className="btn btn-primary">Post</button>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="community-post">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold">{post.author}</p>
                        <p className="small opacity-75">{post.timestamp}</p>
                      </div>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mb-4">{post.content}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1 text-sm hover:text-accent">
                          ❤️ {post.likes}
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:text-accent">
                          💬 {post.replies}
                        </button>
                        <button className="text-sm hover:text-accent">
                          🔗 Share
                        </button>
                      </div>
                      <button className="text-sm text-accent">Reply</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-8">Community Leaderboard</h2>
              
              {/* Top 3 Podium */}
              <div className="grid grid-3 mb-8">
                {leaderboard.slice(0, 3).map((entry) => (
                  <div key={entry.rank} className="text-center p-6 card">
                    <div className="text-4xl mb-2">{entry.badge}</div>
                    <h3 className="mb-2">{entry.username}</h3>
                    <p className={`small ${getTypeColor(entry.type)} mb-2`}>
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                    </p>
                    <p className="text-2xl font-bold text-accent">
                      {entry.type === 'affiliate' ? `£${entry.score}` : `${entry.score} pts`}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full Leaderboard */}
              <div className="space-y-2">
                {leaderboard.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between p-4 bg-white/5 rounded">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{entry.badge}</span>
                      <div>
                        <p className="font-bold">{entry.username}</p>
                        <p className={`small ${getTypeColor(entry.type)}`}>
                          {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-accent">
                        {entry.type === 'affiliate' ? `£${entry.score}` : `${entry.score} pts`}
                      </p>
                      <p className="small opacity-75">#{entry.rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'forum' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-8">Community Forum</h2>
              
              <div className="grid grid-2 mb-8">
                <div className="card">
                  <h3 className="mb-3">💬 General Discussion</h3>
                  <p className="small mb-3">Open chat about everything HOTMESS</p>
                  <div className="flex justify-between text-sm">
                    <span>1,247 posts</span>
                    <span>Latest: 5min ago</span>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="mb-3">🛍️ Drops & Reviews</h3>
                  <p className="small mb-3">Share your experiences with our products</p>
                  <div className="flex justify-between text-sm">
                    <span>543 posts</span>
                    <span>Latest: 12min ago</span>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="mb-3">📻 Radio Requests</h3>
                  <p className="small mb-3">Request tracks and suggest show ideas</p>
                  <div className="flex justify-between text-sm">
                    <span>289 posts</span>
                    <span>Latest: 1h ago</span>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="mb-3">🤝 Meetups & Events</h3>
                  <p className="small mb-3">Organize and discuss community events</p>
                  <div className="flex justify-between text-sm">
                    <span>167 posts</span>
                    <span>Latest: 2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="scroll-section bg-white/5">
        <div className="container text-center">
          <h2 className="mb-6">Join the Community</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Connect with fellow HOTMESS enthusiasts, share your experiences, and be part of our growing community.
          </p>
          <CrossCTA 
            primary={{ href: '/rooms', label: 'Join Telegram' }}
            secondary={{ href: '/affiliate', label: 'Become Affiliate' }}
          />
        </div>
      </section>
    </>
  )
}