import React from 'react';

export default function OneStudent({ student }) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <h2>{student.name}</h2>
        </div>
        <div className="col-4">
          <img src={`${student.github}.png`} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="row">
        <h2>{student.github}</h2>
      </div>
      <div className="row">
        <h2>{student.cups}</h2>
      </div>
      <div className="row">
        <img src={student.cat} className="card-img-top" alt="..." />
      </div>
    </>
  );
}
