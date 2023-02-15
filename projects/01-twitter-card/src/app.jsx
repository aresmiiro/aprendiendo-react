
import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'github',
    name: 'GitHub',
    isFollowing: true
  },
  {
    userName: 'reactjs',
    name: 'React',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Migue Ángel Durán',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      <h1 className='tw-followCard-title'>Who to follow</h1>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
      <p className='tw-followCard-showmore'>Show More</p>
    </section>
  )
}
