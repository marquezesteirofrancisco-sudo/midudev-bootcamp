import { useState } from 'react'

const Statistics = (props) => {

  console.log({props})

  const good = props.result.good ;
  const neutral = props.result.neutral;
  const bad = props.result.bad;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="All"/></td>
            <td><StatisticLine value= { good + neutral + bad }/></td>
          </tr>
          <tr>
            <td><StatisticLine text="Average"/></td>
            <td><StatisticLine value= { (good - bad) /  (good + neutral + bad) }/>  </td>
          </tr>
          <tr>
            <td><StatisticLine text="Positive"/></td>
            <td><StatisticLine value= {(good * 100) /  (good + neutral + bad) }/></td>
          </tr>
        </tbody>
      </table>
    </div>     
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text} </button>
  )
}

const StatisticLine  = ({text, value }) => {
  return (
    <div>
      <p>{text} : {value} </p>
    </div>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [showStats, setShowStats] = useState(false)

  const onClickGood = () => {setGood(good + 1);}
  const onClickNeutral = () => {setNeutral(neutral + 1); }
  const onClickBad = () => {setBad(bad + 1);}
  const onClickMostrarEstadisticas = () => { 
    setShowStats(true); 
  }
  

  return (
    <>

      <h1>Give FeedBack</h1>

      <div>
        <button onClick={onClickGood}>Good</button>
        <button onClick={onClickNeutral}>Neutral</button>
        <button onClick={onClickBad}>Bad</button>
      </div>

      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good :</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral :</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad :</td>
            <td>{bad}</td>
          </tr>
        </tbody>
      </table>

      <Button onClick={onClickMostrarEstadisticas} text="Estadisticas"/>

      {showStats && <Statistics result={{ good, neutral, bad }} />}

      

    </>
  )
}

export default App