import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const API_KEY = '6b6b4d8285a49ce753cf1ed9382a2a8f';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setCast(data.cast))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.map(member => (
        <div key={member.cast_id}>
          <h2>{member.name}</h2>
          <p>{member.character}</p>
        </div>
      ))}
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
