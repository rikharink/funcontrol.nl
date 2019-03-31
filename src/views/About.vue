<template>
  <div class="page about">
    <article>
    <h1 class="title">Over <span>&vert; funcontrol achtergrondinformatie</span></h1>
    <p>
      F<a href="https://www.un.org">un</a>control is in een weekend ontwikkeld door <a href="https://github.com/Meidor">Rik Harink</a>.<br/>
      Het is bedoeld als parodie/1 april grap en dient dus niet al te serieus genomen te worden.<br/>
      De broncode is beschikbaar op <a href="https://github.com/Meidor/funcontrol.nl">GitHub</a>
    </p>
    <p>
      F<a href="https://www.un.org">un</a>control is ontwikkeld in <a href="https://vuejs.org/">VueJS</a>
      en was niet mogelijk geweest zonder <a href="https://gamedevelopment.tutsplus.com/articles/numbers-getting-bigger-the-design-and-math-of-incremental-games--cms-24023">dit uitstekende artikel</a>  over incrementele spellen.
    </p>
    </article>
  </div>
</template>
<style lang="scss" scoped>
  .about {
    p {
      font-size: 1.2rem;
      max-width: 75ch;
    }

    a {
      color: #e9610f;
      text-decoration: none;

      &:hover {
        color: darken(#e9610f, 15%);
      }
    }
  }
</style>

