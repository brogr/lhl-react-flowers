// import logo from './logo.svg';
import './App.css';
import Flower from './Flower';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Beautiful Flowers</h1>
      </header>
      <main>
        <Flower />
        <section>
          <p>
            Canada has a wide variety of flowers, growing from winter to summer. The official flower is the bunchberry.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
