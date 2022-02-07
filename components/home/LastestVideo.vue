<template>
  <v-container fluid>
    <v-card flat>
      <v-card-title class="mt-3 mb-3">
        <h1> Lastest Video </h1>
      </v-card-title>
      <v-card-text>
        <v-row justify="space-around" > 
          <v-col cols="12" md="3" v-for="(item, i) in items" :key="i">
            <iframe 
              width="400" 
              height="200" 
              :src="item.videoSrc" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            
            <h2 class="primary--text"> {{ item.title }} </h2> <br/>
            <p class="text-secondary"> {{  (item.time).toDateString()}} </p>
          </v-col>
          <v-col cols="12" md="12" />
        </v-row>
        <v-row align="center" justify="center">
          <v-hover v-slot:default="{hover}">
            <v-btn 
              :class="{'on-hover': hover}" 
              :outlined="hover ? false : true" 
              min-height="60" 
              min-width="290" 
              :color="hover ? 'blue accent-1' :'primary'" 
              to='/videos'
            >
              See All Videos
            </v-btn> 
          </v-hover>
          
        </v-row><br/>
        <v-divider />
      </v-card-text>
      <v-progress-linear
        color="blue accent-1"
        v-model="progress"
      ></v-progress-linear>
      
    </v-card>
  </v-container>
</template>




<script>
export default {
  data: () => ({
    items: [
      {title: 'Aston Villa - Chelsea | Premier League Highlights', time: new Date(Date.now()), videoSrc: 'https://www.youtube.com/embed/dlcu7eZVdmk'},
      {title: 'WATFORD - CHELSEA | Premier League Highlights', time: new Date(Date.now()), videoSrc: 'https://www.youtube.com/embed/ALnomwhaMnc'},
      {title: 'CHELSEA - EVERTON | Premier League Highlights', time: new Date(Date.now()), videoSrc: 'https://www.youtube.com/embed/AHRsII2UxLk'},
      {title: 'CHELSEA - LEEDS UNITED | Premier League Highlights', time: new Date(Date.now()), videoSrc: 'https://www.youtube.com/embed/hWew5-ogqag'}

    ],
    progress: 100
  })
}
</script>