import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { AppContext } from "./contexts/App";
import { Div } from "./Components/Div";

function App() {
  // 1- useState
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? "reverse" : "";

  // useContext

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  // 2- useEffect
  // 2.1 - componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  // 2.2 componentDidMount - executa apenas 1x
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // 2.3 - executa sempre que alguma dependência for alterada
  useEffect(() => {
    console.log(
      "Executa 1x ou mais quando alguma dependência for alterada. O counter mudou para:",
      counter
    );
  }, [counter]);

  return (
    <div className="App">
      <section className="App-section">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Incrementar
          </button>
        </p>
      </section>
      <section className="App-section">
        <h1>useEffect</h1>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>
          Atualizar Component
        </button>
      </section>
      <section className="App-section">
        <h1>useContext</h1>
        <AppContext>
          <Div />
        </AppContext>
      </section>
    </div>
  );
}

export default App;
