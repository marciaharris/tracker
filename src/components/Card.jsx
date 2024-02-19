import useSWR from 'swr'
import axios from 'axios'
import { useRef, useState } from 'react'

//research how to invalidate using SWR
const fetcher = (url) => axios.get(url).then((response) => response.data)
const Motivation = [
  "You're going to get it done!",
  "You're so much closer to the person you want to be",
  'You are so tenacious',
  'Take life one task at a time',
  'Working on you is the best way to honor yourself',
  'Never Back Down, Never Give Up',
  "Don't forget to reflect on your blessings",
  'There is beauty in the mundane',
  "Nothing is impossible, the word itself says 'I'm possible'",
  "The bad news is time flies, the good news is you're the pilot",
  'Succes is not final, failure is not fatal. It is the courage to continue that counts'
]

export default function Card({ task }) {
  const [newTime, setTime] = useState('')
  const [newDate, setDate] = useState('')
  const maxCharacters = 36;
  const maxSubString = 7;
  const uniqueKey = useRef(Math.random().toString(maxCharacters).substring(maxSubString))
  const { data, error, isLoading } = useSWR(`https://api.thecatapi.com/v1/images/search?key=${uniqueKey.current}`, fetcher)
  if (isLoading) {
    return <div>Loading data...</div>
  }
  if (error) {
    return <div>There was an error!</div>
  }
  // function for the time button, prompts user to choose a time between 1-12 and then prompts
  //user to determine if that is AM or PM. Updates will include structuring to read time inputs such as 11:30pm.
  let TaskTime = () => {
    let time = prompt('What time would you like your task completed? Enter a number 1-12. Substitute Colons for Periods')
    const minHourOfDay = 0;
    const maxHourOfDay = 13;
    if (time > minHourOfDay && time < maxHourOfDay) {
      let ofDay = prompt('AM or PM?')
      if (ofDay.toUpperCase() === 'AM' || ofDay.toUpperCase() === 'PM') {
        setTime(time +" " + ofDay)
      } else {
        alert('ERROR! Please choose AM or PM')
      }
    } else {
      alert('ERROR! Please enter a number from 1-12')
    }
  }

  let TaskDate = () => {
    let date = prompt('What date would you like your task completed?')
    setDate(date)
  }
  return (
    <div id='container'>
      <div className='card'>
        <img src={data[0].url} alt='random image' />

        <div className='card__details'>
        <div className='list'>{task}</div>
          <button className='tag' onClick={TaskTime}>
            Time
          </button>
          <div id='time'>{newTime}</div>
          <button className='tag' onClick={TaskDate}>
            Date
          </button>
          <div id='date'>{newDate}</div>
          <p>{Motivation[Math.floor(Math.random() * Motivation.length)]}</p>
        </div>
      </div>
    </div>
  )
}
