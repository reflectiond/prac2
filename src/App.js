import './App.css';
import Joke from './Joke.js'
import jokesData from './JokesData'

function App() {
  const jokesComponents = jokesData.map(joke => 
    <Joke key={joke.id} text={{question: joke.question, punchLine: joke.punchLine}}/>
  );
  return (
    <div>
      {jokesComponents}   
    </div>
  );
}

export default App;
