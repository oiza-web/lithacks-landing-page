<template>
<div>  
    <div class="grid-align"> 
      <h3>Why Choose Lithacks</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <v-row justify="space-around" class="grid-font"> 
      <v-col cols='3'>
        <div>
          <v-avatar color="orange">
            <v-icon>mdi-home</v-icon>
          </v-avatar>
          <h4>Learning centre</h4>
        </div>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil praesentium delectus. Nemo accusamus unde soluta? Consectetur dolores suscipit delectus!
      </v-col>
      <v-col cols='3'>
        <div>
          <v-avatar color="orange"> 
            <v-icon class="outlined">mdi-laptop</v-icon>
          </v-avatar>
          <h4>Fast Connection</h4>
          
        </div>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta deleniti perferendis dolorum. Fuga voluptatem ipsam eos placeat velit rem?        </v-col>
      <v-col cols='3'>
        <div>
        <v-avatar
        color="orange"
      ><v-icon>mdi-domain</v-icon>
      </v-avatar>
      <h4>Great Partners</h4>
        </div>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus tempore placeat. Iusto nemo aut incidunt modi voluptatem magni minus.        </v-col>
      <v-col cols='3'>
          
          <div>
            <v-avatar color="orange">
              <v-icon>mdi-call-split</v-icon>
            </v-avatar>
            <h4>Networking possibilities</h4>
          
        </div>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, natus perferendis iusto minima explicabo modi fuga ea deserunt enim nam.
      </v-col>
    </v-row>   
    </div>
    
  
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

p,.grid-font{
  font-size: .8em;
  font-weight: 300;
}
h3{
  font-weight: 400;
  font-size: 1.8em;
  
}

.grid-align{
  margin-left: 5em;
  margin-right: 4em;
}

h4{
  margin-top: 2em;
  margin-bottom: 2em;
  font-weight: 400;
}




</style>