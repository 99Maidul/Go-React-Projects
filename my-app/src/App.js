import React, { Fragment, useState, useEffect } from 'react';

function App(props) {
    const [isTrue, setisTrue] = useState(true);
    const [crowd, setCrowd] = useState([]);
    const toggleTrue = () => {
        if (isTrue) {
            setisTrue(false);
        } else {
            setisTrue(true);
        }
    }

    useEffect(() => {
        console.log("useEffect is running");
        let people = [
            {
                id: 1,
                name: "John",
                age: 25,
            },
            {
                id: 2,
                name: "Jack",
                age: 21,
            }

        ]
        setCrowd(people);
    }, [])

    return (
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
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
            <hr />
            <h2>People in the crowd</h2>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.name} is {m.age} years old.</li>
                ))}
            </ul>

        </Fragment>
    )
}
export default App;