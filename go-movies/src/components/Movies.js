import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`http://localhost:8080/movies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <div>
            <h2>Movies</h2>
            <hr />
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Runtime</th>
                        <th>MPAA Rating</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.runtime}</td>
                            <td>{m.mpaa_rating}</td>
                            <td>{m.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Movies;