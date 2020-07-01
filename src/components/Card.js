import React from 'react';

function Card(props) {
    const { id, name, city, country, title, employer, favoriteMovies } = props.cardData;

    return (
        <div>
            <h1>{`${name.first} ${name.last}`}</h1>
            <section>
                <p><span>From: </span>{`${city}, ${country}`}</p>
                <p><span>Job Title: </span>{title}</p>
                <p><span>Employer: </span>{employer}</p>
            </section>
            <section>
                <p>Favorite Movies:</p>
                <ol>
                    <li>{favoriteMovies[0]}</li>
                    <li>{favoriteMovies[1]}</li>
                    <li>{favoriteMovies[2]}</li>
                </ol>
            </section>
            <div>{`${id} / ${props.dataSize}`}</div>
        </div>
    );
}

export default Card;
