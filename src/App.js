import './App.css';
import Header from './Header';
import './Footer'
import Footer from './Footer';

function App() {

  let name = "Md Nayeem Sarker"

  return (
    <div className="App">
      <Header />
      <a className="App-link" href="https://www.facebook.com/mdnayeemsarkar03" target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
      </a>
      <Footer />
    </div>
  );
}

export default App;
