<template>
  <v-card class="mt-5">
    <v-card-title id="page-title">
      <p> MEN </p>
    </v-card-title>
    <v-tabs
      v-model="currentItem"
      slider-color="primary"
      right
      style="margin-top: 18px"
    >
      <v-card-title v-show="currentItem === 'tab-Management'" >
        <span id="titleSection"> {{ titleSection }} </span>
      </v-card-title>
      <v-spacer />
      <v-tab
        id="tab-section"
        v-for="item in items"
        :key="item"
        :href="'#tab-' + item"
      >
        <span id="tab-title"> {{ item }} </span>
      </v-tab>
        
        <v-tabs-items v-model="currentItem">
          <v-tab-item
            v-for="item in items"
            :key="item"
            :value="'tab-' + item"
          > 
            <v-container fluid v-show="item === 'Player'">
              <v-row v-for="(t,i) in listPlayers" :key="i">
                  <v-col cols="12" md="1" />

                  <v-col cols="12" md="10" >
                    
                    <v-card-title>
                      <v-btn text @click="handleToggle(t.position)" id="position-title"> 
                        {{ t.position }} 
                      </v-btn>
                    </v-card-title>
                    <v-row justify="space-around" v-show="t.isShow === true">
                      <v-col
                        v-for="(a,b) in t.players"
                        :key="b"
                        cols="12"
                        md="3"
                        style="margin-bottom: 5rem"
                      >
                          <nuxt-link :to="`/teams/men/${a.id}`" style="text-decoration: none">
                          <v-img
                            :src="require(`@@/static/images/chelsea_player/${a.image}.png`)"
                            contain
                            id="image-player"
                          />
                          <v-row no-gutters justify="space-around">
                            <v-col cols="3">
                              <div id="number-player"> 
                                {{a.number}} 
                              </div>
                            </v-col>
                            <v-col cols="9">
                              <span id="name-player" class="ml-2"> {{a.name}} </span>
                            </v-col>
                          </v-row>
                          
                          
                            
                          </nuxt-link>
                      </v-col>
                      
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="1" />
                </v-row>
            </v-container>
            <v-container fluid v-show="item === 'Management'">
              <v-row >
                  <v-col cols="12" md="1" />
                  <v-col cols="12" md="10" >
                    <v-row justify="space-around" >
                      <v-col
                        v-for="(t,i) in listManagers" :key="i"
                        cols="12"
                        md="3"
                        style="margin-top: 30px; margin-bottom: 30px"
                      >
                        <v-img
                          :src="t.image"
                          contain
                          id="image-player"
                        ></v-img>
                        <div id="name-player"> 
                          {{t.name}} 
                        </div>
                        <span class="text-md-body-1 text--secondary"> {{t.job}} </span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="1" />
                </v-row>
            </v-container>
            <v-container>

              <matches />
            </v-container>

          </v-tab-item>
        </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import Matches from '../../../components/home/Matches.vue'
export default {
  components: { Matches },
  data: () => ({
    currentItem: 'tab-Player',
    items: [
      'Player', 'Management'
    ],
    listPlayers: [],
    listManagers: [],
    titleSection: 'Management'
  }),
  watch: {
  },
  mounted () {
    this.listPlayers = this.initData().listPlayer
    this.listManagers = this.initData().listManager
    this.setPath()
  },
  methods: {
    handleToggle (position) {
      this.listPlayers.map((e) => {
        if (e.position === position) {
          e.isShow = !e.isShow
        }
      })
    },
    setPath () {
      this.$store.commit('path/setPath', this.$nuxt._route.path)
    },
  }
}
</script>

<style>
#number-section {
  background-color: #0e2ddb;
  color: aliceblue;
  height: 70px;
  width: 90px;
  margin-top: 10rem;
}
#number-player {
  font-size: 2.5rem;
  background-color: #0e2ddb;
  height: 50px;
  width: 70px;
  color: white;
  text-align: center;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
#name-player {
  font-size: 1.35rem;
  /* color: rgb(1, 77, 145); */
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  color: #0e2ddb;
  text-transform: capitalize;

}
#position-title {
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  /* color: rgb(1, 77, 145); */
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  color: white;

}
#position-title:hover {
  color: #0e2ddb;
}
#tab-title {
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
}
#tab-section {
  height: auto;
}
#image-player {
  opacity: 0.9;
  transition: opacity 0.4s ease-in-out;
}
#image-player:hover {
  opacity: 1;
}
#page-title {
  margin-left: 10rem;
  margin-top: 0.5rem;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  font-size: 2.7rem;
}
#titleSection {
  margin-left: 10rem;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color:#0e2ddb;
  margin-bottom: 20px;
}
</style>