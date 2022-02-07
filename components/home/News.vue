<template>
   <v-card
    class="mx-auto"
    flat
    
  >
    <v-card-title>
      <h1> News </h1>
    </v-card-title>
    <v-container fluid >
      <v-row justify="space-around">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-hover v-slot:default="{ hover }">
            <div :class="{ 'on-hover': hover }"  id="wrapper">
              <v-card flat  >
                <v-img
                  :class="{ 'on-hover': hover }"
                  :src="require(`@@/static/images/${card.imageSrc}.jpg`)"
                  :min-height="hover ? 405 : 400"
                  :max-height="hover ? 405 : 400"
                />

                <v-card-actions id="cardactions" style="overflow-y: hidden; height: 200px">
                  <v-card-text>
                    <nuxt-link :to="'/news/latestnews/' + card.id" style="text-decoration: none" >
                      <p style="font-style: italic; font-size: 1.5rem " class="primary--text mt-2"> {{ card.title }} </p> <br />
                      <p v-if="card.description !== ''" class="white--text text-lg-body-1" id="description"> {{card.description}} </p>
                    </nuxt-link>
                    <p class="text-secondary "> {{(card.time).toDateString()}}</p>
                  </v-card-text>
                </v-card-actions>

              </v-card>
              
              
            </div>
          </v-hover>
          
        </v-col>
        <v-col cols="12" md="12" />
        <v-col cols="12" md="12" />
      </v-row>
      
      <v-row align="center" justify="center">
        <v-hover v-slot:default="{hover}">
          
            <v-btn 
              :class="{ 'on-hover': hover}" 
              :outlined="hover === true ? false : true" 
              min-height="60" 
              min-width="290" 
              :color="hover ? 'blue accent-1' : 'primary'" 
              to='/news'
            >
              See All News
            </v-btn> 
          
        </v-hover>
      </v-row><br/>
    </v-container>

  </v-card>
</template>



<script>
export default {
  data: () => ({
    cards: [
      {title: '10 Questions with... Mason Mount - Christmas Day Special', imageSrc: 'chelsea5', time: new Date(Date.now()), flex: 6, id: 1 },
      {title: 'Werner are on the positives with football’s ups and downs', imageSrc: 'chelsea6', time: new Date(Date.now()), flex: 3, id: 2, description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now, but we just had to bring you you one more player-based' },
      {title: 'Chilwell confirmed to miss England game', imageSrc: 'chelsea11', time: new Date(Date.now()), flex: 3, id: 3, description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now, but we just had to bring you one more player-based quiz' },
      {title: 'Shock over Mendy Ballon dOr omission', imageSrc: 'chelsea13', time: new Date(Date.now()), flex: 3, id: 4, description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now, but we just had to bring you one more player-based quiz' },
      {title: 'Tuchel rules four out of Juventus trip', imageSrc: 'chelsea7', time: new Date(Date.now()), flex: 6, id: 5 },
      {title: 'Azpilicueta on recovering form and  milestone', imageSrc: 'chelsea9', time: new Date(Date.now()), flex: 3, id: 6, description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now, but we just had to bring you one more player-based quiz' }
    ]
  })

}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.v-card-actions {
  color: black;
}
#container {
  border-style: solid ;
  border-bottom-style: none;
  border-color: rgb(3, 53, 109) ;
}

#wrapper {
  font-family: Georgia, 'Times New Roman', Times, serif;
  border-style: solid;
  border-color: rgb(6, 69, 163);
}
#description {
  /* overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  width: 100%;  */
  /* -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box; */
  display: inline-block;
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

}
#cardactions{ 
  background-color: rgb(21, 32, 43);
}


</style>