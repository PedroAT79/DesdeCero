import './App.css'
import TwitterFollowCard from "./componentes/TwitterFollowCard.jsx"


const users = [
  {
    userName: 'PacoHdez',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  }

]

function App() {

  
  return(

    <section className='App'>
     {
      users.map(( { userName, name, isFollowing }) => (
       
          <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        )
      )
     }
    </section>
  

  )
}


export default App