import { Link } from "react-router-dom";
import Ticket from "./../images/movie_tickets.jpg"
const Home = () => {


    return (
        <div className="text-cemter">
            <h2>Find a movie to watch tonight</h2>
            <hr />
            <Link to="/movies">
                <img src={Ticket} alt="movie ticket" />
            </Link>
        </div>
    )
}
export default Home;