<template>
<v-banner>
  <div>
    <img src="../assets/pexels-christina-morillo-1181359.jpg" alt="">
    <div class="hero-text">
    <h3>Hack Awesomeness</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus recusandae, beatae neque error ratione! Autem facilis quos similique blanditiis animi vel provident veniam, placeat odit consequuntur tempora non suscipit?</p>
    <base-button></base-button>
    </div>
    
  </div>
</v-banner>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap');

img{
  height: 80%;
  width: 50%;
  float: right;
}

.hero-text{
  margin-left: 4em;
  margin-top: 4em;
  margin-right: 5em;
  margin-bottom: 3em;
}

p{
  font-weight: 300;
  margin-top: 2em;
  font-size: .8em;
}
h3{
  font-weight: 400;
  font-size: 1.8em;
  
}

</style>