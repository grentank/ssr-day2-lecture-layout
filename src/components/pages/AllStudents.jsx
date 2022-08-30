import React from 'react';
import StudentCard from '../ui/StudentCard';

export default function AllStudents({ students }) {
  return (
    <div className="row">
      {students ? students.map((el) => <StudentCard student={el} key={el.id} />) : 'No students'}
    </div>
  );
}
