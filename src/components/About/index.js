import React from 'react';
import selfImage from '../../assets/images/dalton-morrel.jpeg'

function About() {
    return (
        <section className="my-5">
            <div>
                <h2 className="text-center">
                    About Me
                </h2>
            </div>
            <div className="">
                <div className="self-portrait text-center">
                    <img src={selfImage} className="my-2 img-fluid" alt="sitting" />
                </div>
            </div>

            <p className="my-2 m-3 p-2 card text-center shadow about-me">
                For the past 10 years I have been in the construction industry. Building anything from pools to bridges.
                For 3 of those years I was a foreman. As a foreman I learned good leadership skills and sharpened my 
                communication skills. After some unforseen events I was forced to make a career change.

                I decided I would give coding a shot. It was always something I found interesting, through talking to many
                friends in the industry. Currently I am enrolled at UCF's Web Development Coding Bootcamp where they have 
                tought me many new skills. Web Development is a very challenging field but I look forward to continue 
                gaining knowledge and making myself a better Junior Develeoper.
            </p>

        </section>
    )
}

export default About;