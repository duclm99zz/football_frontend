<template>
  <v-container id="container">
    <v-sheet
      color='darken-2'
      class="pa-3"
      v-show="loading === true"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card-avatar, article, actions"
        max-width="auto"
        height="auto"
        v-show="loading === true"
      >
      </v-skeleton-loader>
    </v-sheet>
    <latest-news v-show="loading === false"/>
    <v-container v-show="loading === false">
      <v-row class="ml-10 mr-10">
        <v-col cols="12" md="4">
          <v-card-title>
            <p style="font-size: 2.5rem;">More news...</p>
          </v-card-title> 
        </v-col>
        <v-col cols="12" md="8" />
        
        <v-col cols="12" md="3" v-for="(item, i) in news" :key="i">
          <div id="news-wrapper">
            <v-img id="images" :src="require(`@@/static/images/${item.imageName}.jpg`)" min-height="300" max-height="300"/>
            <v-card-actions id="title-section" style="height: 200px; overflow-y: hidden;"> 
              <v-card-text>
                <router-link :to="'/news/latestnews/' + item.id + '/'" style="text-decoration: none" >
                  <h2 class="primary--text mt-2"> {{ item.title }} </h2> <br />
                  <p v-if="item.description !== ''" class="white--text text-lg-body-1" id="description"> {{item.description}} </p>
                </router-link>
                <v-divider light class="mt-4" />
                <p> {{ item.createdAt.toDateString()}} hello</p>
              </v-card-text> <br />
              
            </v-card-actions>
              
          </div>
        </v-col>
        <v-col cols="12" md="12" />
        <v-row justify="center" align="center" class="mt-10">
          <v-col md="3" >
            <v-hover v-slot:default="{hover}" >
              <v-btn 
                id="btn-showmore" 
                :class="{'on-hover': hover}"
                @click="fetchItems()"
              >
                Show more
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
    

  </v-container>
</template>

<script>
import LatestNews from '@@/components/pages/news/LatestNews.vue'
import { mapMutations } from 'vuex'
export default {
  components: { LatestNews },
  data: () => ( {
    news: [
      {id: 1, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea13', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 2, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea10', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 3, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea7', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas  '},
      {id: 4, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea8', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 5, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea1', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 6, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea3', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 7, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea12', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 8, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea5', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '}
    ],
    loading: true
  }),
  computed: {
  },
  mounted () {
    setTimeout(() => this.loading = false, 1500)
    this.setPath()
  },
  methods: {
    fetchItems () {
      const temp = [...this.news]
      temp.forEach((e) =>  this.news.push(e))
      this.news.push()
    },
    setPath () {
      this.$store.commit('path/setPath', this.$nuxt._route.path)
    },
  }

}
</script>

<style scoped>

#container {
  font-family: 'Times New Roman', Times, serif;
  align-content: center;
  
}

#title-section {
  background-color: rgb(21, 32, 43);
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
#btn-showmore {
  border-style: solid;
  background-color: rgb(10, 32, 58);
  border-color:rgb(6, 77, 158);
  text-align: center;
  color: rgb(165, 192, 218);
  height: 54px;
  width: 100%;
  font-style: normal;
  transition: font-size 0.4s ease-in-out;
}
#btn-showmore:hover {
  background-color: rgb(6, 77, 158);
  color: white;
  font-size: 100%;
}
#images {
  opacity: 0.8;
  transition: opacity .4s ease-in-out;
}
#images:hover {
  opacity: 1;
}
</style>