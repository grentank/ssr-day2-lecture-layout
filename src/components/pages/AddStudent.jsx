import React, { useState } from 'react';

export default function AddStudent() {
  const [input, setInput] = useState({
    name: '',
    github: '',
    email: '',
  });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
      .then(() => console.log('FETCH OK'))
      .catch(console.log);
  };
  return (
    <div className="row">
      <div className="col-4">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={changeHandler}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Github
              <input
                name="github"
                value={input.github}
                onChange={changeHandler}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
              <input
                name="email"
                value={input.email}
                onChange={changeHandler}
                type="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
