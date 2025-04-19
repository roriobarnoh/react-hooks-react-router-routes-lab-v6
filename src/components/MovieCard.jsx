import { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

function MovieCard({movie}) {
  const {id, title} = movie
  console.log(title)
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${id}`}>movie</Link>
    </article>
  );
};

export default MovieCard;