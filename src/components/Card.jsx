import useSWR from 'swr';
import axios from "axios";
import { useRef, useState } from 'react';

//research how to invalidate using SWR
const fetcher = (url) => axios.get(url).then(response => response.data);
const Motivation = ["You're going to get it done!", "You're so much closer to the person you want to be","You are so tenacious",
"Take life one task at a time","Working on you is the best way to honor yourself","Never Back Down, Never Give Up","Don't forget to reflect on your blessings"];

export default function Card ({task}){
  const [newTime, setTime] = useState("");
  const uniqueKey = useRef(Math.random().toString(36).substring(7));
  const{data, error, isLoading} = useSWR(`https://api.thecatapi.com/v1/images/search?key=${uniqueKey.current}`, fetcher);
    if(isLoading){
        return(
            <div>Loading data...</div>
        )
    }
    if(error){
        return(
            <div>There was an error!</div>
        )
    }
    const time = () => {
    let taskTime =  prompt("What time would you like your task completed?");
      return (
      <p> {taskTime} </p>
      );
    }
    const date = () => {
     let taskDate = prompt("What date would you like your task completed?");
    }
    return(   
        <div id="container">

          <div class="card">
            <img src={data[0].url} alt="random image"/>
    
            <div class="card__details">

              <button class="tag" onClick={time}>Time</button>
              <button class="tag" onClick={date}>Date</button>
      
              <div class="list">{task}</div>
              <p>{Motivation[Math.floor(Math.random()*7)]}</p>
            </div>
      
      
          </div>
        </div> 
    )
}