import React, { Fragment, useState } from 'react';

function HelloWorld(props) {
    const [isTrue, setisTrue] = useState(true);
    const toggleTrue = () => {
        if (isTrue) {
            setisTrue(false);
        } else {
            setisTrue(true);
        }
    }
    return (
        <Fragment>
            <hr />
            <h1>{props.msg}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                </Fragment>
            }
            <hr />
            {isTrue
                ? <p>The current value of isTrue is true</p>
                : <p>The current value of isTrue is false</p>
            }
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>

        </Fragment>
    )
}
export default HelloWorld;