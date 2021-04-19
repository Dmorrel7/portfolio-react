
import React from 'react';
import BudgetTracker from "../../assets/projectImg/budget-tracker.png";
import DraftRoom from "../../assets/projectImg/draft-room.png";
import MovieHunt from "../../assets/projectImg/movie-hunt (2).png";
import PizzaHunt from "../../assets/projectImg/pizza-hunt.png";
import TechBlog from "../../assets/projectImg/tech-blog.png";
import ZooKeepr from "../../assets/projectImg/zoo-keepr.png";
import Fitter from "../../assets/projectImg/fitter.png";

function Projects() {
  return (
    <div className="container shadow px-4">
      <div className="row m-4 pt-5">
        <div className="col-3"></div>
        <div className="col-6 text-center mb-3">
            <h1 className="sub-title">Projects</h1>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">

        <div className="card-deck">

            <div className="card m-4 project hover-overlay shadow-sm"  >
                <img src={DraftRoom} className="card-img-top rounded" alt="draft-room" />
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://sleepy-island-61088.herokuapp.com/"}>Draft Room</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" >
                <img src={MovieHunt} className="card-img-top rounded" alt="movie-hunt"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://reaganjoseph26.github.io/Movie-Hunt/"}>Movie Hunt</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm">
                <img src={PizzaHunt} className="card-img-top rounded" alt="pizza-hunt"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://blooming-meadow-09050.herokuapp.com/"}>Pizza Hunt</a>
                    </p>
                </div>
            </div>

        </div>
        <div className="card-deck">
          
            <div className="card m-4 project shadow-sm">
                <img src={BudgetTracker} className="card-img-top rounded" alt="budget-tracker"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://fathomless-crag-37156.herokuapp.com/"}>Budget Tracker</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm">
                <img src={ZooKeepr} className="card-img-top rounded" alt="zoo-keepr"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://shrouded-reaches-69073.herokuapp.com/"}>Zoo Keepr</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm">
                <img src={TechBlog} className="card-img-top rounded" alt="tech-blog"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://young-dawn-67776.herokuapp.com/"}>The Tech Blog</a>
                    </p>
                </div>
            </div>
            
            <div className="card m-4 project shadow-sm">
                <img src={Fitter} className="card-img-top rounded" alt="fitter"/>
                <div className="card-body">
                    <p className="card-text"><a className="card-text" href={"https://frozen-ravine-95295.herokuapp.com/"}>Fitter</a>
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;