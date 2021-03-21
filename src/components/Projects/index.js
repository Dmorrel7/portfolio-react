import React from 'react';

function Projects() {
    return (
        <section>
            <div>
                <h2>My Work</h2>
            </div>
            <div className="grid-wrapper">
                <div className="grid-images">
                    <a href="https://sleepy-island-61088.herokuapp.com/" className="project1 projects" target="_blank" rel="noreferrer">
                        <div>
                            <p>Draft Room</p>
                        </div>
                    </a>
                    <a href="https://reaganjoseph26.github.io/Movie-Hunt/" className="project2 projects"  target="_blank" rel="noreferrer">
                        <div>
                            <p>Movie Hunt</p>
                        </div>
                    </a>
                    <a href="https://blooming-meadow-09050.herokuapp.com/" className="project3 projects"  target="_blank" rel="noreferrer">
                        <div>
                            <p>Pizza Hunt</p>
                        </div>
                    </a>
                    <a href="https://fathomless-crag-37156.herokuapp.com/" className="project4 projects"  target="_blank" rel="noreferrer">
                        <div>
                            <p>Budget Tracker</p>
                        </div>
                    </a>
                    <a href="https://shrouded-reaches-69073.herokuapp.com/" className="project4 projects"  target="_blank" rel="noreferrer">
                        <div>
                            <p>Zoo Keepr</p>
                        </div>
                    </a>
                    <a href="https://young-dawn-67776.herokuapp.com/" className="project4 projects"  target="_blank" rel="noreferrer">
                        <div>
                            <p>The Tech Blog</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;

