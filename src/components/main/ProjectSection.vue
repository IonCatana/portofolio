<template>
  <div id="project_section">
    <div class="container">
      <h1 class="my_projects  text-gray-600 text-center uppercase text-xl ">My Projects</h1>
      <div class="py-4 grid  gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 ">
        <div v-for="(item, index) in cardProjects" :key="index" :img="item.img" :title="item.title"
          :description="item.description" :linkGitHub="item.linkGitHub">
          <h2 class="uppercase font-bold py-2">{{ item.title }}</h2>
          <div class="card_img ">
            <img :src="item.img ? item.img : require(`../../assets/img/PlayStation.png`)" alt="">
          </div>
          <p class="over_flow_hidden   ">{{ item.description }}</p>
          <div class="flex flex-col">
            <button class="button"><a :href="item.linkGitHub">Source GitHub</a></button>
            <button class="button"><a :href="item.linkWeb">Link WebApp</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
  components: {

  },
  data() {
    return {
      cardProjects: [{
        img: require(`../../assets/img/PlayStation.png`),
        title: "PlayStation",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ex necessitatibus temporibus, incidunt in voluptatibus veniam sint, autem suscipit accusantium alias! Hic, voluptates ipsum. Illum similique excepturi quod dolorum quis.",
        linkGitHub: "https://github.com/IonCatana/htmlcss-playstation",
        linkWeb: "https://ioncatana.github.io/htmlcss-playstation/"
      },
      {
        img: require(`../../assets/img/SpotiFy.png`),
        title: "SpotiFy",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ex necessitatibus temporibus, incidunt in voluptatibus veniam sint, autem suscipit accusantium alias! Hic, voluptates ipsum. Illum similique excepturi quod dolorum quis.",
        linkGitHub: "https://github.com/IonCatana/html-css-spotifyweb",
        linkWeb: "https://ioncatana.github.io/html-css-spotifyweb/"
      },
      {
        img: require(`../../assets/img/YouTube.png`),
        title: "YouTube",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ex necessitatibus temporibus, incidunt in voluptatibus veniam sint, autem suscipit accusantium alias! Hic, voluptates ipsum. Illum similique excepturi quod dolorum quis.",
        linkGitHub: "https://github.com/IonCatana/html-css-youtube",
        linkWeb: "https://ioncatana.github.io/html-css-youtube/"
      },
      {
        img: require(`../../assets/img/ToDoList.png`),
        title: "ToDo List",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ex necessitatibus temporibus, incidunt in voluptatibus veniam sint, autem suscipit accusantium alias! Hic, voluptates ipsum. Illum similique excepturi quod dolorum quis.",
        linkGitHub: "https://github.com/IonCatana/vue-todolist",
        linkWeb: "https://ioncatana.github.io/vue-todolist/"
      },
      {
        img: require(`../../assets/img/CampoMinato.png`),
        title: "Campo Minato",
        description: "Il computer deve generare 16 numeri casuali da 1 a 100. In seguito il utente ha 84 volte la possibilitá di non beccare i numeri generati dal computer. La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. L'utente puó scegliere anche la difficoltá in base al quale viene generata una griglia di gioco quadrata in cui ogni cella contiene un numero tra quelli compresi in un range: Difficoltá 1 => tra 1 e 100, Difficoltá 2 => tra 1 e 81, Difficoltá 3 tra 1 e 49",
        linkGitHub: "https://github.com/IonCatana/js-campominato-dom",
        linkWeb: "https://ioncatana.github.io/js-campominato-dom/"
      },
      {
        img: require(`../../assets/img/StartBootstrap.png`),
        title: "Bootstrap Freelancer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ex necessitatibus temporibus, incidunt in voluptatibus veniam sint, autem suscipit accusantium alias! Hic, voluptates ipsum. Illum similique excepturi quod dolorum quis.",
        linkGitHub: "https://github.com/IonCatana/html-css-bootstrap-freelancer",
        linkWeb: "https://ioncatana.github.io/html-css-bootstrap-freelancer/"
      },]
    }
  }

}
</script>

<style lang="scss">
#project_section {

  .button {
    margin-top: 20px;
    text-transform: uppercase;
    border: none;
    padding: 11px 25px 10px 27px;
    font-size: 13px;
    text-align: center;
    color: #FFF;
    font-weight: 400;
    box-shadow: 6px 6px 25px 0px rgb(0 0 0 /35%);
    background-color: #202020;
    border-radius: 30px;
    transition: all ease 0.3s;

    &:hover {
      color: #ffffff;
      box-shadow: 10px 10px 50px 0px rgb(0 217 166 / 80%);
      transform: scale(0.95);
      background-color: #00d9a6;
      transition: all ease 0.3s;
    }
  }

  .card_img {
    height: 200px;

    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }

  .my_projects {
    margin: 50px 0px;
    text-transform: uppercase;
    border: none;
    padding: 11px 25px 10px 27px;
    font-size: 26px;
    text-align: center;
    font-weight: 900;
    background-color: #00d9a6;
    transition: all ease 0.8s;

    &:hover {
      color: #ffffff;
      cursor: pointer;
      background-color: #00d9a6;
      transition: all ease 0.8s;
    }
  }

  .over_flow_hidden {
    display: -webkit-box;

    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: auto;
    scroll-behavior: auto;
  }
}
</style>