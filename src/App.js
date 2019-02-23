import React, { Component } from 'react';
import CourseList from './components/CourseList'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
