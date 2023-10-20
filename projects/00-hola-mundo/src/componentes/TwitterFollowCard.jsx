import { useState } from 'react';
import '../estilosComponentes/TwitterFollowCard.css'



function TwitterFollowCard({userName, children, initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir' ;
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  
  return(
        <article className="tw-followCard">
          <header className="tw-followCard-header">
            <img  className="tw-followCard-avatar" 
            alt= 'El avatar azar' 
            src= {`http://unavatar.io/${userName}`} />
            <div className="tw-followCard-info" >
              <strong className="tw-followCard-name"> {children}</strong>
              <span className="tw-followCard-username">@{userName}</span>
            </div>
          </header>
          <aside>
          <button className= {buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
          </button>
        </aside>
        </article>
    
      )
}

export default TwitterFollowCard;