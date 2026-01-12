const searchBtn = document.getElementById("search-btn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = document.getElementById("search").value.trim();

  if (!query) {
    results.innerHTML = "<p>Enter song name</p>";
    return;
  }

  results.innerHTML = `
    <div class="result-item">
      <p>Search "${query}" on:</p>
      <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(query)}" target="_blank">
        YouTube
      </a><br><br>
      <a href="https://soundcloud.com/search?q=${encodeURIComponent(query)}" target="_blank">
        SoundCloud
      </a><br><br>
      <a href="https://open.spotify.com/search/${encodeURIComponent(query)}" target="_blank">
        Spotify
      </a>
    </div>
  `;
});

