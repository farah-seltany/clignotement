<template>
  <div class="container">
    <h1>Prêt ?</h1>
    <router-link class="redirection" to="/blinking">Lancer l'animation</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .redirection {
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 100px;
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    color: white;
    cursor: pointer;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .redirection:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transform: scale(1.05) rotate(-1deg);
  }
</style>