<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Playfair+Display:wght@700&display=swap');

html,body, #app {
  height: 100%;
  width: 100%;

  margin: 0 !important;
  padding: 0 !important;

  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  background-color: #fafcfc;
}

h1, h2, h3, h4, h5, h6 { 
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 48px;
}

</style>
