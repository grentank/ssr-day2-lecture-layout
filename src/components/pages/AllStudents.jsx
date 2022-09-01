import React, { useEffect, useState } from 'react';
import StudentCard from '../ui/StudentCard';

export default function AllStudents({ students }) {
  const [studentsArray, setStudentsArray] = useState(students || null);
  useEffect(() => {
    if (!studentsArray) {
      fetch('/api/v1/students')
        .then((res) => res.json())
        .then((data) => setStudentsArray(data));
    }
  }, []);
  return (
    <div className="row">
      {studentsArray ? studentsArray.map((el) => <StudentCard student={el} key={el.id} />) : 'No students'}
    </div>
  );
}
