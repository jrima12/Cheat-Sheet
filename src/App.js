import React, {useState} from 'react';
import Navbar from './Components/Navbar.js';
import PdfDisplay from './Components/PdfDisplay.js';

function App() {
  const [currentCourse, setCurrentCourse] = useState("")
  return (
    <>
      <Navbar setCurrentCourse={setCurrentCourse}/>
      <PdfDisplay currentCourse={currentCourse}/>
      {/* <Navbar/>
      <PdfDisplay/> */}
    </>
  );
}

export default App;
