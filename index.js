const jugadores$$ = document.querySelector(".container");

const peticion = () => {
  fetch("")
    .then((res) => res.json())
    .then((players) => pintar(players));
};

const paint = (players) => {
  jugadores$$.innerHTML = "";

  for (const player of players) {
    const jugador$$ = document.createElement("div");
    const name$$ = document.createElement("h3");
    const img$$ = document.createElement("img");
    const age$$ = document.createElement("p");
    const position$$ = document.createElement("p");

    jugador$$.classList.add("container-player");
    name$$.textContent = player.name;
    img$$.src = player.img;
    age$$.textContent = player.age;
    position$$.textContent = player.position;

    jugador$$.appendChild(name$$);
    jugador$$.appendChild(img$$);
    jugadores$$.appendChild(jugador$$);
  }
};

peticion();
