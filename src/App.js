import './App.css';
import Characters from './components/Characters/Characters';
import CharCard from './components/CharCard/CharCard';
import { useState, useEffect } from 'react';

function App() {
  const [characterList, setCharacterList] = useState([])
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => setCharacterList(data.results))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList}/>
      </div>
    </div>
  );
}

export default App;
