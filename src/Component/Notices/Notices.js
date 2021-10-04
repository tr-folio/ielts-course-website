import React from 'react';
import { Link } from 'react-router-dom';
import './Notices.css';

const Notices = () => {
    return (
        <div className="d-block">
            <h1 className="my-5">Notice Board</h1>
            <div className="notices-container">
                <div class="single-notice">
                    <h3 className="text-start">New Batch Orientation</h3>
                    <p className="text-start">New batch orientation will be held on 04-04-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Mock Test 4 Schedule</h3>
                    <p className="text-start">Mock test 4 will be held on 04-03-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Practice Session 10</h3>
                    <p className="text-start">Practice session 10 will be held on 04-02-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Weekly Test on Speaking Lesson</h3>
                    <p className="text-start">Weekly Test on Speaking Lesson will be held on 04-01-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Weekly Test on Listening Lesson</h3>
                    <p className="text-start">Weekly test on Listening Lesson will be held on 31-03-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Weekly Test on Writing Lesson</h3>
                    <p className="text-start">Weekly test on Writing Lesson will be held on 30-03-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Weekly Test on Reading Lesson</h3>
                    <p className="text-start">Weekly test on Reading Lesson will be held on 29-03-2022</p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Mock Test 2 Result</h3>
                    <p className="text-start">Mock test 2 result has been published. <Link to="/home">Click here to see your reuslt</Link></p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Saturday Counselling Schedule</h3>
                    <p className="text-start">Saturday counselling schedule has been published. <Link to="/home">Click here to see the schedule</Link></p>
                </div>
                <div class="single-notice">
                    <h3 className="text-start">Mock Test 1 Result</h3>
                    <p className="text-start">Mock test 1 result has been published. <Link to="/home">Click here to see your reuslt</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Notices;