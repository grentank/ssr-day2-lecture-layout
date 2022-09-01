import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentCard({ student }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={`${student.github}.png`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">{student.email}</p>
          <p className="card-text">{`Cups: ${student.cups}`}</p>
          <Link to={`/students/${student.id}`} className="btn btn-primary">Show student</Link>
        </div>
      </div>
    </div>
  );
}
