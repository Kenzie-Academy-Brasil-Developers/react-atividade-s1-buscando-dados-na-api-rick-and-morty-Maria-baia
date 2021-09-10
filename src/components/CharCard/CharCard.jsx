import './CharCard.css'

function CharCard({characterId, characterName, characterImage, characterStatus}){
    let isAlive = true
    if(characterStatus != "Alive"){
       isAlive = false
    }
    return(
        <div key={characterId} className={isAlive ? 'green' : 'red'}>
            <h1 className='name'>{characterName}</h1>
            <img src={characterImage}></img>
        </div>
    )
}

export default CharCard