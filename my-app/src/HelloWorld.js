import React, { Fragment, useState } from 'react';

function HelloWorld(props) {
    const [isTrue, setisTrue] = useState(true)
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
        </Fragment>
    )
}
export default HelloWorld;