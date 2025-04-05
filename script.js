fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const animeGrid = document.getElementById("animeGrid");
    const searchBar = document.getElementById("searchBar");

    function renderAnimeList(list) {
      animeGrid.innerHTML = "";
      list.forEach(anime => {
        const card = document.createElement("div");
        card.className = "anime-card";
        card.innerHTML = `
          <a href="anime.html?id=${anime.id}">
            <img src="${anime.image}" alt="${anime.title}" />
            <h3>${anime.title}</h3>
          </a>
        `;
        animeGrid.appendChild(card);
      });
    }

    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = data.filter(anime => anime.title.toLowerCase().includes(query));
      renderAnimeList(filtered);
    });

    renderAnimeList(data);
  });