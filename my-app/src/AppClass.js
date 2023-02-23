import React, { Component, Fragment } from "react";
import "./AppClass.css"

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    toggleTrue = () => {
        if (this.state.isTrue) {
            this.setState({
                isTrue: false,
            });
            return
        }
        this.setState({
            isTrue: true,
        })
    }

    render() {
        return (
            <Fragment>
                <hr />
                <h1>{this.props.msg}</h1>
                <hr />
                {this.state.isTrue &&
                    <Fragment>
                        <p>The current value of isTrue is true</p>
                    </Fragment>
                }
                <hr />
                {this.stateisTrue
                    ? <p>The current value of isTrue is true</p>
                    : <p>The current value of isTrue is false</p>
                }
                <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle isTrue</a>

            </Fragment>
        )
    }
}