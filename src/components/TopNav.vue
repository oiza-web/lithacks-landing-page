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
      <v-toolbar-items > 
      <v-btn class="case" to="#" text depressed>Home</v-btn>
      <v-btn class="case" to="#" text depressed>About</v-btn>
      <v-btn class="case" to="#" text>Contact<v-icon>mdi-call</v-icon></v-btn>
      <v-btn class="case" to="#" text>Our Works</v-btn>
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

<style scoped>

.case{
  text-transform: capitalize;
  font-weight: 300 ;
  letter-spacing: -1px;
}

</style>
