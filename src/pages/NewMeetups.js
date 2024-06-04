import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupsPage = () => {
  const history = useNavigate();

  function addMeetupHandler(meetupData){
    fetch(
      'https://meetup-react-80388-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body: JSON.stringify(meetupData),
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(()=>{
      history('/')
    })

  }
  return (
    <section>
    <div>Add New Meetup</div>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupsPage