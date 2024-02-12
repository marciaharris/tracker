export default function Card ({task}){
let demoData = [];
    return(   
        <div id="container">

          <div class="card">
            <img src="https://picsum.photos/200/300" alt="random image"/>
    
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