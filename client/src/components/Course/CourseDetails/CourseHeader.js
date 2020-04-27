import React, { Component } from 'react'
import  './CourseHeader.css'

class CourseHeader extends Component {

    render() {
        const course = this.props.course
        console.log(course.Relevant_tags)
        var profName = (this.props.prof === null)?" ":this.props.prof.Name
        var courseRating = Number(course.Rating).toFixed(1)
        
        return (
            <div>
                <div className = "columns is-centered is-mobile">
                    <div className = "column is-11">
                        <div className = "courseDetail-box box">
                            <div className = "courseDetail-title">{course.Name}</div>
                            <div className = "prof-name"><span className = "has-text-weight-bold">Professor: </span>{profName}</div>
                            <nav className = "level">
                                <div className = "level-left">
                                    <div className = "level-item">
                                    <div className = "container">
                                            <span className = 'has-text-weight-semibold is-size-4'>Avg. Rating</span>
                                            <br/>
                                            <div className = "header-rating-circle">
                                                <div className = "circle-text"> {Number(courseRating).toFixed(1)}</div>
                                            </div>      
                                        </div>   
                                    </div>
                                </div>
                                <div className = "level-right">
                                    <div className = "level-item">
                                        <div className = "container">
                                            <span className = 'has-text-weight-semibold is-size-4'>Avg. Grade</span>
                                            <br/>
                                            <div className = "header-rating-circle">
                                                <div className = "circle-text"> {course.Average_grade}</div>
                                            </div>      
                                        </div>                             
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class= "course-description">
                <nav className = "level">
                    <div className = "level-left">
                        <div className = "level-item has-text-weight-semibold">
                            Tags:
                        </div>
                    </div>
                    <div className = "level-right">
                        <div className = "level-item has-text-weight-bold">
                            {this.props.course_tags} 
                        </div>
                    </div>
                </nav>
                </div>

                <div className = "course-description has-text-justified">
                    <span className = "has-text-weight-semibold">Details:</span>
                    {course.Description}
                </div>
\            </div>
        )
    }
}
export default CourseHeader