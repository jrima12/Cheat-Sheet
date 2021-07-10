import React, { useEffect } from 'react';
import "./Navbar.css";
import data from "./data.json";

export default function Navbar({ setCurrentCourse }) {
    useEffect(() => {
        /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }, [])
    return (
        <div className="sidenav">
            {data.map((schoolLevel) => {
                console.log(schoolLevel)
                return (
                    <>
                        <a onClick={() => setCurrentCourse("/pdf/About.pdf")} className="aboutButton">About</a>
                        <button className="dropdown-btn">{schoolLevel.title}</button>
                        <div className="dropdown-container">
                            {schoolLevel.disciplines.map(discObj => (
                                <>
                                    <button className="dropdown-btn">{discObj.title}</button>
                                    <div className="dropdown-container">
                                        {discObj.type.map(typeObj => (
                                            <>
                                                <button className="dropdown-btn">{typeObj.title}</button>
                                                <div className="dropdown-container">
                                                    {typeObj.courses.map(courseObj => (
                                                        <a onClick={() => setCurrentCourse(courseObj.pdfPath)}>{courseObj.name}</a>
                                                    ))}
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                )
            })}
        </div>
    )
}