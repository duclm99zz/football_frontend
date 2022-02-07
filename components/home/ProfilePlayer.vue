<template>
  
  <v-card  flat >
    <v-sheet
      color='darken-2'
      class="pa-3"
      v-show="loading === true"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card-avatar, article, actions"
        v-show="loading === true"
      >
      </v-skeleton-loader>
    </v-sheet>
    <v-card-text v-show="loading===false" >
      <v-window v-model="step" v-for="(profile, i) in profiles" :key="i">
        <v-window-item 
          :value="step" 
          v-show="step === profile.id" 
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
          <div id="container">
            <v-row no-gutters> 
              <v-col cols="12" md="6" >
                <v-container > 
                  <v-row >
                    <v-col cols="12" md="1" />
                    <v-col cols="12" md="2" >
                      <v-card color="blue accent-2">
                        <v-card-title>
                          <p id="number" class="ml-1 mt-2">{{profile.number }}</p>
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                      <p id="firstname" class="mt-2 mr-3">
                        {{ profile.name.split(' ')[0]}}
                      </p>
                      <p id="lastname" class="mt-4">
                        {{ profile.name.split(' ')[1]}}
                      </p>

                    </v-col>
                    <v-col cols="12" md="12"/> <v-col cols="12" md="12" />
                  </v-row>
                  <v-row >
                    <v-col cols="12" md="3" v-for="(inf, i) in profile.info" :key="i" align="center" >
                      
                      <p id="info">
                        {{inf.appreances}}  {{inf.goals}} {{inf.assists}} {{ inf.pass_accuracy || inf.shooting_accuracy || inf.tackle_success  }}
                      </p> 
                      <p id="textinfo">{{inf.text1}}  {{inf.text2}} {{inf.text3}} {{ inf.text4}} </p>
                      
                    </v-col>
                    <v-col cols="12" md="12" />
                    <v-col cols="12" md="12" />
                    <v-col cols="auto" align-self="center" justify="center"> 
                      <div id="description">
                        {{ '"' + profile.title + '"' }}
                      </div >
                    </v-col>
                    

                  </v-row>
                </v-container>
              </v-col>
              <v-col cols="12" md="6" >
                <v-img  :src="require(`@@/static/images/${profile.imageSrc}.jpg`)" contain id="image">
                  <v-row justify="space-between">
                    <v-col cols="12" md="2" class="mt-4 ml-4">
                      <v-hover v-slot:default="{hover}">
                        <v-btn
                          :class="{ 'on-hover': hover }"
                          class="pa-2"
                          id="profile"
                          tile
                          
                          :to="'/team/' + profile.player_id"
                        >
                          Player Profile
                        </v-btn>
                      </v-hover>
                    </v-col>
                    <v-col cols="12" md="3" class="mt-4 " >
                      <v-btn 
                        @click="prevProfile()"
                        color="blue accent-2"
                        dark
                        class="ml-9"
                      >
                        <v-icon> mdi-chevron-left </v-icon>
                      </v-btn>
                      <v-btn 
                        @click="nextProfile()"
                        color="blue accent-2"
                        dark 
                        class="ml-2"
                      >
                        <v-icon> mdi-chevron-right</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>

                </v-img>
              </v-col>
            </v-row>
          </div>
        </v-window-item>
      </v-window>
      <v-col md="12" cols="12" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    profiles: [
      {id: 1, player_id: 1, name: 'Mason Mount', number: 19, info: [{appreances: 16, text1: 'Appreances'}, {goals: 7, text2: 'Goals'}, {assists: 4, text3: 'Assits'},{ pass_accuracy: '85%', text4: 'Pass Accuracy'}], title: 'I always believed that I would make it to the first team, through hard work and determination', imageSrc: 'mason'},
      {id: 2, player_id: 2, name: 'Reece James', number: 24, info: [{appreances: 15, text1: 'Appreances'}, {goals: 4, text2: 'Goals'}, {assists: 5, text3: 'Assits'}, {tackle_success: '84%', text4: 'Tackle Success'}], title: 'I have been here nearly my whole life and I would be happy to spend the rest of my career here', imageSrc: 'reece'},
      {id: 3, player_id: 3,name: 'Cesar Azpilicueta', number: 28,info: [{appreances: 12, text1: 'Appreances'},{ goals: 0, text2: 'Goals'}, {assists: 2, text3: 'Assits'}, {tackle_success: '62%', text4: 'Tackle Success'}], title: 'I am very pround to be the captain of Chelsea and to be involved with all the duties we need to take care of', imageSrc: 'cesar'},
      {id: 4, player_id: 4,name: 'Timo Werner', number: 11,info: [{appreances: 8, text1: 'Appreances'}, {goals: 1, text2: 'Goals'}, {assists: 1, text3: 'Assits'}, {shooting_accuracy: '60%', text4: 'Shooting Accuracy'}], title: 'Chelsea is big club and with this team that we have, I think we can reach a new level', imageSrc: 'timo'}
    ],
    loading: false
  }),
  watch: {
  },
  methods: {
    nextProfile () {
      this.loading = true
      if (this.step + 1 > this.profiles.length) { 
        this.step = 1
        setTimeout(() => {
          this.loading = false
          
        }, 500)
        
      } else {
        this.step += 1
        setTimeout(() => {
          this.loading = false
          
        }, 500)

      }
      
    },
    prevProfile () {
      this.loading = true
      if (this.step - 1 < 1) {
        this.step = this.profiles.length
        setTimeout(() => {
          this.loading = false
          
        }, 500)
        
      } else {
        this.step -= 1
        setTimeout(() => {
          this.loading = false
          
        }, 500)
      }
      
    }
  }
}
</script>

<style scoped>

#profile {
  border-style: solid ;
  border-color: rgb(3, 53, 109) ;
  color: rgb(3, 53, 109)  ;
  background-color: rgba(0, 0, 0, 0.897) ;
  text-decoration: none ;
  max-width: auto;
  font-size-adjust: auto;
  margin: 1px;
}
#profile:hover {
  border-color: rgb(3, 53, 109) ;
  background-color: rgb(3, 53, 109) ;
  color: white ;
}
#container {
  border-style: solid ;
  border-color: rgb(3, 53, 109) ;
}

#number {
  font-size: 3.8rem;
}
#firstname, #lastname {
  font-size: 2.6rem;
  font-family: 'Times New Roman', Times, serif;
  color: rgb(3, 53, 109);
}
#info {
  font-size: 3.5rem;
  font-family: 'Times New Roman', Times, serif;
  color: rgb(3, 53, 109);
}
#textinfo {
  font-size: 15px;
  font-family: 'Times New Roman', Times, serif;
  color: rgb(3, 53, 109);
}
#description {
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  color: rgb(3, 53, 109);
  max-width: 90%;
}
</style>