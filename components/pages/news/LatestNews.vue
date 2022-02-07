<template>
  <v-container id="wrapper" >
    <div >
      <v-card-title class="ml-10">
        <p id="titlepage">Latest Chelsea FC News </p>
      </v-card-title> 
        <v-row class="ml-10 mr-10">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            
          >

            <div v-if="card.id !== -1" id="news-wrapper" >
              <v-img
                id="image"
                :src="require(`@@/static/images/${card.imageSrc}.jpg`)"
                max-height="380"
                min-height="380"
        
              />
              <v-card-actions id="title_section">
                <v-card-text style="overflow-y: hidden; height:200px" >
                    <router-link :to="'/news/latestnews/' + card.id" style="text-decoration: none" >
                      <h2 class="primary--text mt-2" style="font-style: italic">{{ card.title }} </h2> <br />
                      <div v-if="card.description !== ''" class="white--text text-lg-body-1" id="description"> {{card.description}} </div>
                    </router-link>
                    <v-divider light class="mt-5" />
                    <p class="text-secondary "> {{(card.time).toDateString()}}</p>
                  
                </v-card-text>
              </v-card-actions>
            </div>

            <v-main v-if="card.id === -1" >
                <v-card-title class="primary--text ml-7">
                  View news by date:
                </v-card-title>
                <v-row justify="center" align="center" class="ml-4 mr-2">
                  <v-date-picker
                    v-model="date"
                    :picker-date.sync="pickerDate"
                    full-width
                    id="datepicker"
                    color="blue accent-3"
                    header-color="blue accent-1"
                    ref="picker"
                  ></v-date-picker>
                </v-row>
              </v-main>
          </v-col>
          <v-col cols="12" md="12" />
          <v-col cols="12" md="12" />
        </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {title: 'The Debrief: Battling Blues run out of steam', imageSrc: 'blog1_main', time: new Date(Date.now()), flex: 5, id: 3, description: 'Christmas with our own take on a traditional advent calendar would have finished by now would have calendar would have finished by now' },
      {title: 'Jorginho are on the positives with football’s ups and downs', imageSrc: 'chelsea3', time: new Date(Date.now()), flex: 4, id: 2, description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have'},
      {id: -1},
      {title: '10 Questions with... Mason Mount - Christmas Day Special', imageSrc: 'chelsea5', time: new Date(Date.now()), flex: 4, id: 1, description: 'Christmas with our own take on a traditional advent calendar would have finished by now would have finished by now'  },
      {title: 'Chelsea team prepare for Christmas matchday with enthusiasm', imageSrc: 'chelsea12', time: new Date(Date.now()), flex: 4, id: 4, description: 'You might have thought our countdown to Christmas with our own take on a traditional' },
      {title: 'Saul work hard and completely focus on Christmas matchday with enthusiasm', imageSrc: 'chelsea1', time: new Date(Date.now()), flex: 4, id: 5, description: 'Christmas with our own take on a traditional advent calendar would have finished by now' },

    ],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    pickerDate: null
  }),

}
</script>


<style scoped>


.v-card-actions {
  color: black;
}
#title_section{
  background-color: rgb(21, 32, 43);
  
}
#titlepage {
  font-family: 'Times New Roman', Times, serif;
  font-size: 3rem;
}
#image-news {
	align-items: stretch;
	justify-content: center;
	position: relative;
	transition: transform 0.14s ease-in, text-shadow 0.1s ease-in;
}

#wrapper {
  font-family: 'Times New Roman', Times, serif;
}
#datepicker {
  border-style: solid;
  border-color: rgb(2, 114, 206);
}
#news-wrapper {

  border-style: solid;
  border-color: rgb(6, 69, 163);
}
#description {
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  width: 100%; 
}
#image {
  opacity: 0.8;
  transition: opacity .4s ease-in-out;
}

#image:hover{ 
  opacity: 1;
}

</style>
