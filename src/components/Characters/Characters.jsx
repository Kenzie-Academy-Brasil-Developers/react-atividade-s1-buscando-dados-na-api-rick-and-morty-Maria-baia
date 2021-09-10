import './Characters.css'
import CharCard from '../CharCard/CharCard'

function Characters({characterList}){
    return(
        <div>
            <h1>Meus personagens</h1>
            <div className='charactersList'>
                {characterList.map((character) => (
                <CharCard characterId={character.id} characterName={character.name}
                characterImage={character.image} characterStatus={character.status}/>
                ))}
            </div>
        </div>
    )
}

export default Characters