import './App.css';
import Course from './Course';
import { useState } from 'react';

function getCourseRandom () {

  const courses_array = ["Angular", "Javascript", "React", "HtmlandCss"];
  return courses_array[Math.floor(Math.random() * courses_array.length)];

}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getCourseRandom()]);
  };

  const getRenderedArray = courses.map((course, index) => {
       return <Course course_name={course} key={index} />;
  });

  return (
    <div className="App">
      <button className='btn' onClick={handleClick}>Add new Course</button>
      <div className='courses_list'>
        {getRenderedArray}
      </div>
    </div>
  );
}

export default App;
