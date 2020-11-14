<template>
  <v-container>
    <h3>Latest Articles</h3>
    <v-row align="center">
      <v-col cols="3">
        <v-card>
        <v-img src="../assets/pexels1.jpeg" contain> 
        </v-img>
        <v-card-text class="font">
            Lorem ipsum dolor sit.
        </v-card-text>
        <v-card-title>
            Lorem ipsum dolor sit.
          </v-card-title>
        <v-card-text class="fontp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis et soluta velit explicabo dolor vero.
          </v-card-text>
        </v-card>
        
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img src="../assets/pexels2.jpeg">
          </v-img>
          <v-card-text class="font">
            Lorem ipsum dolor sit.
          </v-card-text>
          <v-card-title>
            Lorem ipsum dolor sit.
          </v-card-title>
          <v-card-text class="fontp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non sit, odit corporis aperiam assumenda.
          </v-card-text>
        </v-card>
    
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img src="../assets/px3.jpg">
          </v-img>
          <v-card-text class="font"> 
            Lorem ipsum dolor sit.
          </v-card-text>
          <v-card-title>
            Lorem ipsum dolor sit.
          </v-card-title>
          <v-card-text class="fontp">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sapiente. Libero reprehenderit id laborum at!
          </v-card-text>
        </v-card>
        
      </v-col>
      <v-col cols="3">
        <v-card> 
        <v-img src="../assets/px4a.jpeg">
        </v-img>
        <v-card-text class="font">
            Lorem ipsum dolor sit.
          </v-card-text>
          <v-card-title>
            Lorem ipsum dolor sit.
          </v-card-title>
          <v-card-text class="fontp">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eius velit sed assumenda quas cumque?
          </v-card-text>
            
          
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
h3{
  font-weight: 400;
  font-size: 1.8em; 
}
.font{
  font-size: 0.8em;
  font-weight: 360;
}

.fontp {
  font-size: .8em;
  font-weight: 300;
}
</style>