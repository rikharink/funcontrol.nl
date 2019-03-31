<template>
  <div class="login">
    <div class="info-wrapper">
      <span>Versie:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.04.01</span>
      <a href="https://en.wikipedia.org/wiki/April_Fools%27_Day">Responsible disclosure</a>
    </div>
    <div class="login-wrapper">
      <h1 class="login-logo column-two">f<span style="color: #e9610f;">un</span>control</h1>
      <label class="column-one" for="username">Gebruikersnaam</label>
      <input class="column-two" id="username" type="text" value="fun">
      <label class="column-one" for="password">Wachtwoord</label>
      <input class="column-two" id="password" type="password" value="fun">
      <router-link to="/aandachtspunten" class="login-button column-two">Inloggen</router-link>
    </div>
    <div class="topicus-wrapper">
      <img src="../assets/topicus-wit.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
  .login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/login-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-wrapper {
    align-items: flex-start;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    top: 24px;
    left: 24px;
    line-height: 1.2rem;
    font-size: 0.9rem;

    a {
      color: #2c3e50;
    }
  }

  .topicus-wrapper {
    position: absolute;
    bottom: 6px;
    right: 12px;
  }

  .login-wrapper {
    padding: 58px;
    border-radius: 2px;
    background: white;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    grid-row-gap: 8px;
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.62);

    .login-logo {
      margin: 0;
      font-size: 2.7rem;
      letter-spacing: -2px;
      text-align: center;
      color: #616B79;
    }

    .login-button {
      background: rgb(233,97, 15);
      border-radius: 4px;
      color: white;
      text-decoration: none;
      padding: 6px 8px;
      text-align: center;

      &:hover {
        background: darken(#e9610f, 5%);
      }
    }

    input {
      color: black;
      background: white;
      outline: none;
      width: 210px;
      margin: 0;
      border: 1px solid lightgrey;
      border-radius: 2px;
      padding: 4px 8px;
      align-self: center;

      &:focus {
        border-color: #e9610f;
      }
    }

    .column-one {
      grid-column: 1;
    }

    .column-two {
      grid-column: 2;
    }
  }
</style>