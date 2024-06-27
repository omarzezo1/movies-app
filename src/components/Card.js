import React from "react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
  return (
    <div className="card">
      <Link to={`/movie/${data.id}`}>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Card;
