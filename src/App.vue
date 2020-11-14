<template>
  <v-app>
    <top-nav></top-nav>
    <hero-section></hero-section>
    <grid-section></grid-section>
    <article-section></article-section>
    
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'
import HeroSection from './components/HeroSection.vue'
import GridSection from './components/GridSection.vue'
import ArticleSection from './components/ArticleSection.vue'

export default {
  components:{
    TopNav,
    HeroSection,
    GridSection,
    ArticleSection
  }
  }
  
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap');
*{
  font-style: Montserrat;
}
</style>