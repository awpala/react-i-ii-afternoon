import React from 'react';

function Card(props) {
    const { id, name, city, country, title, employer, favoriteMovies } = props.cardData;

    return (
        <div className="card">
            <div className="card-contents">
                <h1>{`${name.first} ${name.last}`}</h1>
                <section className="card-fields">
                    <p><span className="card-field">From: </span>{`${city}, ${country}`}</p>
                    <p><span className="card-field">Job Title: </span>{title}</p>
                    <p><span className="card-field">Employer: </span>{employer}</p>
                </section>
                <section className="card-fields">
                    <p><span className="card-field">Favorite Movies:</span></p>
                    <ol>
                        <li>{favoriteMovies[0]}</li>
                        <li>{favoriteMovies[1]}</li>
                        <li>{favoriteMovies[2]}</li>
                    </ol>
                </section>
            </div>
            <div className="current-card">{`${id} / ${props.dataSize}`}</div>
        </div>
    );
}

export default Card;
