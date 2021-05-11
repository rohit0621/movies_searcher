import React from "react";

export default function Header() {
  return (
    <div>
      <table id="title-bar">
        <tbody>
          <tr>
            <td width="8">
              <img
                alt="logo"
                src="https://www.themoviedb.org/assets/2/v4/logos/256x256-dark-bg-01a111196ed89d59b90c31440b0f77523e9d9a9acac04a7bac00c27c6ce511a9.png"
                width="50px"
              />
            </td>
            <td width="8" />
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
