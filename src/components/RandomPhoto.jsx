import { useState, useEffect } from "react";
import useSWR from 'swr';
import axios from "axios";

const fetcher = (url) => axios.get(url).then(response => response.data);

export default function RandomPhoto (){
  const{data, error, isLoading} = useSWR("https://api.thecatapi.com/v1/images/search",fetcher);
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
return (
    <>
        <div>
            <img src={data[0].url}/>
        </div>
    </>
)
}