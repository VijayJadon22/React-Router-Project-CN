import React, { useState } from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, NavLink, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const { courseId } = useParams();
  const course = coursesData.find((data) => data.id === courseId);
  const chapters = course.chapters;

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back}>
          <Link to={"/courses"}>{"<<"}</Link>
        </h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {chapters.map((data, index) => {
              return (
                <div
                  onClick={() => setCurrentChapter(index)}
                  className={style.chapter}
                  key={data.chapter}
                >
                  {data.title}
                </div>
              );
            })}
          </ul>
        </div>

        <div className={style.courses}>
          {/* Task5:  Chapter Details Must be rendered here  */}
          <h1 className={style.chapter_box}>{chapters[currentChapter].chapter }. {chapters[currentChapter].title}</h1>
          <h3 className={style.chapter_box}>{chapters[currentChapter].description}</h3>
          <p className={style.chapter_box}>{chapters[currentChapter].details}</p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
