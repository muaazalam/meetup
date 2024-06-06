import React from 'react'
import { useContext } from 'react'
import FavouritesContext from '../store/favourites-context'
import MeetupList from '../components/meetups/MeetupList'

const FavouritesPage = () => {
  const favouritesContext=useContext(FavouritesContext)
  let content;
  if(favouritesContext.totalFavourites===0){
    content=<p>You got no favourites yet. Start adding some?</p>
  }else{
    content=<MeetupList meetups={favouritesContext.favourites}></MeetupList>

  }
  return (

    <section>
      <h1>My Favourites</h1>
      {content}
    </section>

  )
}

export default FavouritesPage