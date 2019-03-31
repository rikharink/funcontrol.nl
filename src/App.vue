<template>
  <div id="app">
    <div id="menu">
      <div id="logo">
        <h1>f<span style="color: #e9610f;">un</span>control</h1>
      </div>
      <nav id="nav">
        <router-link to="/aandachtspunten">Aandachtspunten</router-link>
        <router-link to="/rapportages">Rapportages</router-link>
        <router-link to="/over">Over</router-link>
      </nav>
    </div>
    <router-view id="view"/>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
body {
  padding: 0;
  margin: 0;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  font-family: "Fira Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
#menu {
  background: whitesmoke;
  min-height: 100vh;
  width: 20vw;
  text-align: center;

  #logo {
    padding: 0 0 72px;
    color: #616B79;
    letter-spacing: -1px;
    font-size: 1.5rem;
  }

  #nav {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
  }

  a {
    margin: 4px 0;
    width: 100%;
    background: white;
    text-decoration: none;
    padding: 8px 16px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #e9610f;
    }

    &:hover {
      background: #e9610f;
      color: white;
    }
  }
}
#view {
  flex: 1 1 auto;
}
.title {
      color: lighten(#2c3e50, 5%);
      font-size: 1.5rem;

      span {
        color: lighten(#2c3e50, 20%);
        font-weight: lighter;
      }
}
.page {
    padding: 32px 147px;
}

.btn {
    height: 36px;
    width: 128px;
    background: none;
    margin: 8px 0 0 0;
    padding: 4px 8px;
    border: 1px solid #e9610f;
    align-self: flex-end;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #e9610f;
      color: white;
    }
  }

</style>
