import './App.css';
import Joke from './Joke.js'

function App() {
  return (
    <div>
      <Joke text={{
        question:'What is a joke?',
        punchLine:'It\'s a text',
      }}/>
    </div>
  );
}

export default App;
