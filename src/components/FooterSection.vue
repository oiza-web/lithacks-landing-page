<template>
  <v-footer color="#" class="vf"> 
    <div class="display">
      <div class="logo"> 
      <v-img 
      class="mx-2"
        max-height="40"
        max-width="40"
      src="../assets/light2.jpeg"
    ></v-img>
    <v-icon color="rgb(229, 89, 53)">mdi-facebook</v-icon>
    <v-icon color='orange'>mdi-linkedin</v-icon>
    <v-icon color='orange'>mdi-instagram</v-icon>
    <v-icon color='orange'>mdi-twitter</v-icon>
    </div>
    <div class="about"> 
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Blog</p>
    </div>
    <div class="careers"> 
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Blog</p>
    </div>
    <div class="button"> 
      <base-button></base-button><br>
      <p class="copyright"><v-icon x-small>mdi-copyright</v-icon>  lithacks. All rights reserved</p>
    </div>
    </div>
    
    
  </v-footer>

</template>

<script>
export default {

}
</script>

<style>
.display{

  display: flex;
}
.about{
  margin-left: 6em;
  margin-top: 2em;

}

.logo{
  margin-left: 4em;
  margin-top: 2em;
}

.careers{
  margin-left: 4em;
  margin-top: 2em;
  
}
.button{
margin-top: 3em;
margin-left:500px;
}
p{
  font-size: .8em;
}

.copyright{
  margin-top: 10px;
}

.vf{
  padding-bottom: 10em;
  margin-top: 5em;
}
</style>