<template>
  <div id="jumbatron">
    <div class="container flex flex-row justify-center justify-items-center mt-8">
      <div class="info_card ">
        <div class="flex flex-col">
          <p class="experience text-lg">1 year of experience</p>
          <h2 class="text-7xl">I'm Jr Full Stack Web <span>Developer</span> </h2>
          <div class="bg_style_line">
          </div>
          <p>Mi chiamo ION CATANA e sono un Junior Full Stack Web Developer con un approccio spesso positivo e attento
            ai dettagli e
            sin da piccolo nutro una forte passione per la tecnologia.
          </p>
        </div>

        <button class="button">Read More</button>
      </div>
      <div class="jumbatron">
        <div class="img">
          <img src="https://picsum.photos/400/400.jpg" alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg_style_line {
  margin: 10px 0px;
  width: 83px;
  height: 7px;
  //border: 1px solid green;
}

#jumbatron {
  margin-top: 5px;
  //border: 1px solid black;

  .container {

    .info_card {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      align-items: flex-start;
      //border: 1px solid blue;
      width: 50%;
      height: 900px;

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

      .experience {
        color: #00d9a6;
      }

      h2 {
        span {
          color: #00d9a6;
        }
      }
    }

    .jumbatron {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 900px;
      //border: 1px solid green;

      .img {
        padding: 30px;
        background-color: #D9D9D9;
        border-radius: 50%;
        // border: 1px solid red;
      }

      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>