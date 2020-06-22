import React from 'react';
import Chart from "./Chart";
import Data from "./Data";
import NavBar from "./NavBar";
import Footer from "./Footer"
import { BrowserRouter as Router } from 'react-router-dom';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            studentenData: Data.studentData,
            gemScores: Data.scores,
            visibleChart: Data.scores,
            studenten: Data.students

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAverage = this.handleClickAverage.bind(this);
    }

    handleClick = event => {
        const dataPerStudent = this.state.studentenData.filter((student) => {
            return student.naam === event
        })
        this.setState({
            visibleChart: dataPerStudent
        })
    }

    handleClickAverage = () => {
        this.setState({
            visibleChart: this.state.gemScores
        })
    }
    render() {
        return (
            <div>
                <Router>
                    <NavBar handleClick={this.handleClick}
                        studentenData={this.state.studentenData}
                        studenten={this.state.studenten}
                        handleClickAverage={this.handleClickAverage}
                    />
                    <Chart Scores={this.state.visibleChart} />
                    <Footer />
                </Router>
            </div>
        )
    }
}


export default Container;