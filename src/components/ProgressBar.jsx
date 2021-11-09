import React from 'react'

const ProgressBar = () => {
    return (
        <div className="container-progressivebar">

            <ul className="skill">
                <li>
                    <span className="bar html_css"></span>
                    <span className="progressivebar">HTML/CSS/SASS /Bootstrap</span>
                </li>
                <li>
                    <span className="bar javascript"></span>
                    <span className="progressivebar">JavaScript</span>
                </li>
                <li>
                    <span className="bar react"></span>
                    <span className="progressivebar">Reacj js</span>
                </li>
                <li>
                    <span className="bar jquery"></span>
                    <span className="progressivebar">J Query</span>
                </li>
                <li>
                    <span className="bar angular"></span>
                    <span className="progressivebar">Angular/TypeScript</span>
                </li>
            </ul>
            <ul className="skill">

                <li>
                    <span className="bar node"></span>
                    <span className="progressivebar">Node-Express</span>
                </li>
                <li>
                    <span className="bar mongo"></span>
                    <span className="progressivebar">BBDD Mongodb/Mongoose</span>
                </li>
                <li>
                    <span className="bar mysql"></span>
                    <span className="progressivebar">BBDD MySQL</span>
                </li>
                <li>
                    <span className="bar deploy"></span>
                    <span className="progressivebarDeploy">Deploy:</span>
                    <span className="progressivebarDeploy2">Heroku, GitHub Pages, Netifly</span>
                </li>
                <li>
                    <span className="bar github"></span>
                    <span className="progressivebar">GitHub</span>
                </li>
            </ul>

        </div>

    )
}

export default ProgressBar
