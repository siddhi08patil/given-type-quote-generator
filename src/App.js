import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import Type from './components/Type';

function App() {
  const [category, setCategory] = useState(''); 
  return (
    <div className="App">
     quote generator
     <Type setCategory={setCategory}/>
     <Box category={category}/>
    </div>
  );
}

export default App;
