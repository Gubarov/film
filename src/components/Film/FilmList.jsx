import { useState, useEffect } from "react"
import FilmCard from "./FilmCard"
import Loading from "../Loading";
import Error from "../Error";

function FilmList() {

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect (() => {
        async function fetchFilms(){
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://66269b61052332d553237121.mockapi.io/film"
                );
                const data = await res.json();
                setFilms(data);
            } catch(error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchFilms();
    }, []);

    return (
        <section class="tickets">
            <div class="container">
                <h1 class="title">Билеты</h1>
                <div class="tickets-row">
                {
                    isLoading ? (<Loading/>) : (films.map((film) => <FilmCard film={film} key={film.id} />))
                }
                {
                    isError && <Error />
                }
                </div>
            </div>
        </section>
    )
}

export default FilmList