import React from 'react';
import { Heading } from './Heading';
import { ClasseList } from './ClasseList';
import('../home.css');

export const Home = () => {
    return (
        <div class="outer-container">
            <div className="dashboard-container">
                <div className="menu vertical">
                    <img src="{../img/logo.png}"></img>
                    <div className="cat1">
                        <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png"></img>
                        <a>Dashboard</a>
                    </div>

                    <div className="cat2">
                        <img src="https://freepikpsd.com/media/2019/10/subject-icon-png-8-Transparent-Images.png"></img>
                        <a href="/Classelist"><i class="fa fa-compass" aria-hidden="true"></i>Courses</a>
                    </div>

                    <div className="cat3">
                        <img
                            src="https://www.clipartmax.com/png/middle/216-2162817_square-academic-cap-computer-icons-portable-network-transparent-background-graduation-icon.png"></img>
                        <a href="/Students"><i class="fa fa-rocket" aria-hidden="true"></i>Students</a>
                    </div>

                    <div className="cat4">
                        <img
                            src="https://www.clipartmax.com/png/middle/451-4517854_biologia-icono-clipart-computer-icons-teacher-clip-teaching-icon-png.png"></img>
                        <a href="/TeachersList"><i class="fa fa-cubes" aria-hidden="true"></i>Teachers</a>
                    </div>

                    <a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i>Sign Out</a>
                </div>
            </div>

            <div className="second-container">
                <ClasseList />
            </div>
        </div>
    )
}
