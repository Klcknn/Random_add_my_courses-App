import Angular from "./images/Angular.png";
import HtmlandCss from "./images/Html_and_Css.jpeg";
import Javascript from "./images/Javascript.png";
import React from "./images/React_JS.png";
import "./Course.css";

function Course({course_name}) {
    const course_images = {
        Angular,
        HtmlandCss,
        Javascript,
        React
    };
    /* 
    const course_images = {
        Angular: Angular,
        HtmlandCss: HtmlandCss,
        Javascript: Javascript,
        React: React
    }; 
    */

    console.log(course_name);
    return ( 
        <div className="courses_div_element">
            <img className="course_image" src={course_images[course_name]} alt="Resim yüklenmezse bu yazıyı gör Angular resmi bu" />
        </div> 
    );
}

export default Course;
