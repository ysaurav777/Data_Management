import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setcount] = useState(0);
  const [step, setstep] = useState(1);
  const date = new Date("October 7 2026");
  date.setDate(date.getDate() + count);

  function handleChangeadd() {
    setcount((s) => s + step);
  }
  function handleChangesub() {
    setcount((s) => s - step);
  }

  function stepchange(e) {
    setstep(e);
  }

  function ResetItems() {
    setcount(0);
    setstep(1);
  }

  function Count() {
    return (
      <div className="countdiv">
        <input
          value={step}
          type="range"
          min="0"
          max="15"
          onChange={(e) => stepchange(Number(e.target.value))}
        />
        <p>Step: {step}</p>
        <div className="btninputdiv">
          <button className="btnchange" onClick={handleChangesub}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setcount(Number(e.target.value))}
          />
          <button className="btnchange" onClick={handleChangeadd}>
            +
          </button>
        </div>
        {count > 0 && (
          <p>
            {count} days from Today {date.toDateString()}
          </p>
        )}
        {count < 0 && (
          <p>
            {count * -1} days ago {date.toDateString()}
          </p>
        )}
        {count === 0 && <p>Today is {date.toDateString()}</p>}
        {(step != 1 || count != 0) && (
          <div className="btnreset">
            <button onClick={ResetItems}>Reset</button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="maindiv">
      <Count />
    </div>
  );
};

export default App;
