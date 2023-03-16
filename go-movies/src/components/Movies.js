import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: 'The Shawshank Redemption',
                release_date: '1994-09-23',
                runtime: 142,
                mpaa_rating: 'R',
                description: "Some long description here"

            },
            {
                id: 2,
                title: 'Raging Bull',
                release_date: '1980-12-19',
                runtime: 129,
                mpaa_rating: 'R',
                description: "Some long description here"

            }
        ];
        setMovies(moviesList);
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