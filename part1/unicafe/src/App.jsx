import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = ((good / total) * 100) + " %"
  if (total > 0){
    return(
      <table>
        <tbody>
          <StatisticLine  text="good" value={good} />
          <StatisticLine  text="neutral" value={neutral} />
          <StatisticLine  text="bad" value={bad} />
          <StatisticLine  text="all" value={total} />
          <StatisticLine  text="average" value={average} />
          <StatisticLine  text="positive" value={positive} />
        </tbody>
      </table>
    )
  }
  else{
    return <p>No feedback given</p>
  }
}

const StatisticLine  = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App