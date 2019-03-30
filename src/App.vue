<template>
  <div id="app">
    <div id="menu">
      <div id="logo">
        <h1>funcontrol</h1>
      </div>
      <nav id="nav">
        <router-link to="/aandachtspunten">Aandachtspunten</router-link>
        <router-link to="/instellingen">Instellingen</router-link>
        <router-link to="/over">Over</router-link>
      </nav>
    </div>
    <router-view id="view"/>
  </div>
</template>
<style lang="scss">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
#menu {
  background: whitesmoke;
  height: 100vh;
  width: 20vw;

  #logo {
    padding: 0 0 72px;
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
      color: orange;
    }

    &:hover {
      background: orange;
      color: white;
    }
  }
}
#view {
  flex: 1 1 auto;
}
</style>
