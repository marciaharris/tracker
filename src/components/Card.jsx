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
  const uniqueKey = useRef(Math.random().toString(36).substring(7))
  const { data, error, isLoading } = useSWR(`https://api.thecatapi.com/v1/images/search?key=${uniqueKey.current}`, fetcher)
  if (isLoading) {
    return <div>Loading data...</div>
  }
  if (error) {
    return <div>There was an error!</div>
  }
  let TaskTime = () => {
    let time = prompt('What time would you like your task completed? Enter a number 1-12. Substitute Colons for Periods')
    if (time > 0 && time < 13) {
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
      <div class='card'>
        <img src={data[0].url} alt='random image' />

        <div class='card__details'>
        <div class='list'>{task}</div>
          <button class='tag' onClick={TaskTime}>
            Time
          </button>
          <div id='time'>{newTime}</div>
          <button class='tag' onClick={TaskDate}>
            Date
          </button>
          <div id='date'>{newDate}</div>
          <p>{Motivation[Math.floor(Math.random() * 11)]}</p>
        </div>
      </div>
    </div>
  )
}
