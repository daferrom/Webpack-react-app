import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };
  return (
    <div className="container">
      <h1>Hola triple mundo</h1>
      <button onClick={handleClick}>Click me bro</button>
      <div>
        {counter}
      </div>
    </div>
  );
};
export default App;
