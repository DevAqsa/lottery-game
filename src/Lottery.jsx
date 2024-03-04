import { useState } from 'react'
import { genTicket, sum } from './helper';
import Ticket from './Ticket';


function Lottery({n=3, winningSum= 15}) {

   let [ticket, setTicket] = useState(genTicket(n));
   let isWinning = sum(ticket) === winningSum;

let buyTicket = () => {
    setTicket(genTicket(n));
}
  return (
    <div>
    <h1>Lottery Game!</h1>
    <Ticket ticket={ticket}/>


     <button onClick={buyTicket}>Buy ticket</button>
    <h2>{isWinning && 'You win!' }</h2>
    </div>
  )
}

export default Lottery