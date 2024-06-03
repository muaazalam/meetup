import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA=[
  {
  id:'m1',
  title:'this is a first meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Antalya%2C_Turkey_March_2022_-_D%C3%BCden_Park_Sign.jpg',
  address: 'meetupstreet 5, 12345 meetup city',
  description: 'this is a first amazing meetup which you definitely should not miss. it will be very exciting'
},
{
  id:'m1',
  title:'this is a first meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Museo_Chileno_de_Arte_Precolombino_-_2020_-_10.jpg',
  address: 'meetupstreet 5, 12345 meetup city',
  description: 'this is a first amazing meetup which you definitely should not miss. it will be very exciting'

}]


const AllMeetupsPage = () => {
  return (
    <section>
      <h1>
        All Meetups
      </h1>
      <MeetupList meetups={DUMMY_DATA}/>
      
    </section>
  );
}

export default AllMeetupsPage