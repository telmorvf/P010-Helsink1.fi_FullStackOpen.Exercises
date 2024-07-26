import { useState } from 'react'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0));
  const [max, setMax] = useState(0)

  const randomIntClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const votedClick = () => {
    const newVote = [...voted]
    newVote[selected] += 1
    setVoted(newVote)
    //debugger

    if (newVote[selected] > max){
      const Newmax = newVote[selected]
      setMax(Newmax)
    }
    //{console.log('selected: ', selected , 'voted: ', voted, 'max: ', max)}
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{selected + ". " + anecdotes[selected]}</p>
      <p>has {voted[selected]} votes</p>

      <Button handleClick={votedClick} text="vote" />
      
      <Button handleClick={randomIntClick} text="next anecdote"/>
      {/* {console.log('selected: ',selected)}
      {console.log('voted: ', voted)}
      {console.log('max: ', max)} */}

      <h1>Anecdote with most votes</h1>
      <p>{voted.indexOf(max) + '. ' + anecdotes[voted.indexOf(max)] }</p>
      <p>has {max} votes</p>
    </div>
  )
}

export default App