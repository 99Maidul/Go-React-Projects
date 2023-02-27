import React, { Fragment, useState, useEffect } from 'react';
import Input from "./Input"

function App(props) {
    const [isTrue, setisTrue] = useState(true);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [dob, setdob] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (lastName !== "") {
            addPerson(firstName, lastName, dob);
        }
    }
    const addPerson = (newFirst, newLast, newDOB) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,
        }
        const newList = crowd.concat(newPerson);

        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })
        setCrowd(sorted);
        setfirstName("");
        setlastName("");
        setdob("");
    }



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
            <form autoComplete="off" onSubmit={handleSubmit}>

                <div className="mb=3">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="first-name-new"
                        className="form-control"
                        onChange={(event) => setfirstName(event.target.value)}
                    ></input>
                </div>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    autoComplete="last-name-new"
                    className="form-control"
                    onChange={(event) => setlastName(event.target.value)}
                ></Input>
                <Input
                    title="Date of Birth"
                    type="date"
                    name="dob"
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(event) => setdob(event.target.value)}
                ></Input>
                <input type="submit" value="Submit" className="btn btn-primary"></input>
                <div>
                    First Name: {firstName}<br />
                    Last Name: {lastName}<br />
                    DOB:{dob}<br />
                </div>
            </form>
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