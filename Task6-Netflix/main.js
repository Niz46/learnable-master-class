// api key From TMDB
const api = "api_key=0d7fcb538472b4a248392fdaf9ae8532";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";

// requests for movies data
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.results);

    const setMovies =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovies.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovies.overview, 150);
    banner_title.innerText = setMovies.name;
  });

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "NEFLIX ORIGINALS";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      var s = movie.name.replace(/\s+/g, "");

      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchPopular)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("popularrow");
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Trending Now";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Top Rated";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie, index) => {
      const rankingDiv = document.createElement("div");
      rankingDiv.className = "movie-ranking";
      rankingDiv.textContent = `${index + 1}`;
      row_posters.appendChild(rankingDiv);

      const poster = document.createElement("img");
      poster.className = "row_posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Action Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");
    row.className = "row";
    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Documentries";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);

      const poster = document.createElement("img");
      poster.className = "row_poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });






// Toggle Btn

const primaryNav = document.querySelector(".navbar-mobie");
const navToggle = document.querySelector(".toggle-btn");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if(visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  }else{
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});