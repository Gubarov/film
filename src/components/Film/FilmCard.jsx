function FilmCard({film}) {
    return (
        <div className="ticket-card">
            <img src={film.filmImage} className="film-image" alt={film.name} />
            <h3 className="film-title">{film.name}</h3>
            <p className="film-description">{film.descriptio}</p>
            <div className="film-action">
                <h5 className="ticket-price">{film.price}</h5>
                <button className="add-to-buy">Купить</button>
            </div>
        </div>
    )
}

export default FilmCard