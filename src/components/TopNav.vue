<template>
<div>
  <v-app-bar elevation="0">
  <v-toolbar-side-icon>
        <v-img
        class="mx-2"
        max-height="40"
        max-width="40"
        contain
        src="../assets/light2.jpeg" />
    </v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <div>
      <v-toolbar-items> 
      <v-btn  to="#" text>Home</v-btn>
      <v-btn to="#" text>About</v-btn>
      <v-btn to="#" text>Contact</v-btn>
      <v-btn to="#" text>Our Works</v-btn>
      </v-toolbar-items>
    </div>
    <v-spacer></v-spacer>
    <base-button></base-button>
    
    
    
</v-app-bar>

</div>
</template>

<script>
  export default {}
</script>

<style>
v-btn{
  font-size: 0.2em;
}

</style>
