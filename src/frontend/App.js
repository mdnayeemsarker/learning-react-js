import '../components/style/App.css';
import Header from '../components/partial/Header';
import Footer from '../components/partial/Footer';

function App() {

  let name = "Md Nayeem Sarker"
  let login = "Login"

  return (
    <div className="App">
      <Header />
      <a className="App-link" href="https://www.facebook.com/mdnayeemsarkar03" target="_blank" rel="noopener noreferrer">
      <h2>{name}</h2>
      </a>
      <a className="App-link" href="http://localhost:3000/login.js" target="_blank" rel="noopener noreferrer">
        <h2>{login}</h2>
      </a>
      <Footer/>
    </div>
  );
}

export default App;

