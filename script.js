const searchBtn = document.getElementById("search-btn");
const results = document.getElementById("results");

const songs = [
  { title: "1", file: "Napalm_Death_-_Legacy_Was_Yesterday-world79.spcs.bio.mp3" },
  { title: "", file: "Без названия.mp3" }
];

searchBtn.addEventListener("click", () => {
  const query = document.getElementById("search").value.toLowerCase();
  results.innerHTML = ""; 
  
  const found = songs.filter(song => song.title.toLowerCase().includes(query));
  
  if (found.length === 0) {
    results.innerHTML = "<p>No songs found.</p>";
  } else {
    found.forEach(song => {
      const div = document.createElement("div");
      div.className = "result-item"
      div.innerHTML = `
        <p>${song.title}</p>
        <audio controls src="${song.file}"></audio>
        <a href="${song.file}" download>⬇️ Download</a>
      `;
      results.appendChild(div);
    });
  }
});