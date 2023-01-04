import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles.css';

function App() {

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [students, setStudents] = useState([]);

  const createStudent = (event) => {
    event.preventDefault();
    console.log("Form Submitted!")
    // Adding new students to the list of students
    setStudents([...students, name, rollno, checkInTime, checkOutTime])
  }

  return (
    <div className="App">
      <h1>Student Attendance System</h1>
      <form onSubmit={createStudent}>
        <label htmlFor='name'>Student Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label htmlFor="rollno">Roll Number: </label>
        <input type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} required /><br />
        <label htmlFor="checkInTime">Check-in Time</label>
        <input type="time" value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)} required /><br />
        <label htmlFor="checkOutTime">Check-Out Time</label>
        <input type="time" value={checkOutTime} onChange={(e) => setCheckOutTime(e.target.value)} required /><br />
        <input type="submit" value="Submit" />
      </form>
      <br />

      <h2>Total Students Checked In: {students.length}</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.rollno}>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.checkInTime}</td>
              <td>{student.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
