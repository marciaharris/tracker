import useSWR from 'swr';
import axios from "axios";

const fetcher = (url) => axios.get(url).then(response => response.data);

export default function Card ({task}){
  const{data, error, isLoading} = useSWR("https://api.thecatapi.com/v1/images/search",fetcher,{keepPreviousData:false});
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
    return(   
        <div id="container">

          <div class="card">
            <img src={data[0].url} alt="random image"/>
    
            <div class="card__details">

              <span class="tag">Time</span>
      
              <span class="tag">Date</span>
      
              <div class="list">{task}</div>
              <p>You're gonna get it done! </p>
            </div>
      
      
          </div>
        </div> 
    )
}