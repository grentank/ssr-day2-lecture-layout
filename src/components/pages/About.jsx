import React, { useState } from 'react';

export default function About() {
  const [counter, setCounter] = useState(0);
  const [joke, setJoke] = useState(null);
  const increment = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  const clickHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        setCounter(counter + 1);
        setJoke(data);
      })
      .catch(console.log);
  };
  return (
    <div className="row">
      <div className="col-4">
        To learn more about Elbrus visit
        {' '}
        <a href="https://elbrus.com">official website</a>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={clickHandler}
        >
          FETCH
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={increment}
        >
          INC
        </button>
      </div>
      <div className="col-4">
        <h1>
          Counter:
          {counter}
        </h1>
      </div>
      <div className="col-12">
        {joke ? <p>{joke.value}</p> : 'Press the fetch button' }
      </div>
    </div>
  );
}
