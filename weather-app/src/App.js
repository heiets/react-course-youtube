import './App.css';
import { Input } from './Input';
import { Card } from './Card';

function App() {
  const cities = ['Kyiv', 'Warsaw', 'London', 'New York'];
  return (
    <div className="App">
      <Input />
      <div className="CardList">
        {
          cities.map((city) => (
            <Card name={city} key={city}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
