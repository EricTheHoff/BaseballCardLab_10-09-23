import playerData from "./playerData.js"
import { useState } from "react"

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)

  const toggleCard = () => {
    setShowPicture(!showPicture)
  }

  if(showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt="Baseball Player"/>
      </div>
    )
  } else {
    const statsDisplay = Object.entries(props.stats).map(([statKey, statValue]) => (
      <p>{statKey}: {statValue}</p>
    ))
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>{props.team}</p>
        <p>{props.position}</p>
        {statsDisplay}
      </div>
    )
  }
}

function App() {
  const cards = playerData.map((player) => {
    return <BaseballCard
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    key={player.cardId}
    />
  })
  return <>{cards}</>
}

export default App;
