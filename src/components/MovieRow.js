import React from "react";

export default function MovieRow({ movie }) {
  // console.log(`movieRow${movie}`);
  const viewMovie = () => {
    const url = `https://www.themoviedb.org/movie/${movie.id}`;
    window.location.href = url;
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="200px" src={movie.poster_src} />
          </td>

          <td>
            <tr>
              <h2>{movie.title}</h2>
            </tr>
            <tr>
              <p>{movie.overview}</p>
            </tr>
            <tr>
              <input
                type="button"
                value="view"
                onClick={viewMovie}
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontSize: "20px",
                }}
              />
            </tr>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
