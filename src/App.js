import './App.css';
import Students from './components/Students';

function App() {

  let name = "Md Nayeem Sarker"

  return (
    <div className="App">
      <a className="App-link" href="https://www.facebook.com/mdnayeemsarkar03" target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
      </a>
      <Students name="nayeem" age={25} />
      <Students name="asha" age={23} />
      <Students name="Bizli" age={22} />
    </div>
  );
}

export default App;

