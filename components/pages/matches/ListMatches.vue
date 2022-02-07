<template>
 <v-container id="wrapper" >
    
    <v-container id="container" >
      
      <div id="list-match-info">
        <v-row >
          
          <v-col cols="12" md="12">
            
            <v-card-title>
              <h2 style="color: rgba(3, 66, 139, 0.945); font-size: 2.15rem;"> {{ currentMonth }} {{ currentYear }}</h2>
            </v-card-title>
            <div id="match-info" v-for="(match, i) in data" :key="i">
              
              <v-row
                no-gutters
                style="height: 220px;"
              >
                
                <v-col 
                  cols="12"
                  md="12"
                  align-self="start"
                >
                  <v-card-text  >
                    <h2 style="color: #001489; font-family: Arial,Helvetica,sans-serif;"> {{ match.competition }} {{match.stage !== '' ? ' | ' + match.stage : ''}} {{match.type !== '' ? ' | ' + match.type : ''}}</h2>
                    <p style="color: white" class="text--secondary text-sm-body-3">
                      {{ match.stadium + ' | ' + match.startAt}}
                    </p>
                  </v-card-text>
                </v-col>
                <v-col 
                  cols="12"
                  md="12"
                >
                  <v-card-text  >
                    <v-row no-gutters>
                      <v-col cols="12" md="5" align-self="center"  align="end">
                        <span style="font-size: 1.1rem;"> {{match.home}}  </span>
                        
                        <v-avatar size="40" class="ml-2" >
                          <img :src="require(`@@/static/images/otherteam/${match.logoHome}.png`)" />
                        </v-avatar>
                      </v-col>
                      <v-col cols="12" md="" align-self="center"  align="center" v-if="isNextMatch === true">
                        <div style="font-size: 1.35rem; color: #001489;">
                          {{ parseInt(new Date(match.startAt).getDate()) > 9 ? new Date(match.startAt).getDate() : '0' + new Date(match.startAt).getDate()}}
                        </div>
                        <span style="color: #001489; font-size: 1.05rem;">
                          {{ new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date(match.startAt)) }} 
                        </span>
                      </v-col>
                      <v-col cols="12" md="" align-self="center"  align="center" v-if="isNextMatch === false">
                        <span style="font-size: 2.55rem; color: #001489;"> {{ match.goalHome }} - {{ match.goalAway }} </span>
                      </v-col>
                      <v-col cols="12" md="5" align-self="center"  align="start">
                        <v-avatar size="40" class="mr-2"   >
                          <img :src="require(`@@/static/images/otherteam/${match.logoAway}.png`)" />
                        </v-avatar>
                        
                        <span style="font-size: 1.1rem"> {{match.away}}  </span>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-row justify="space-between" >
                  <v-col md="auto" class="mb-5 ml-5">
                    
                    <v-avatar v-if="match.broadcastingBy !== ''" size="70">
                      <v-img :src="require(`@@/static/images/${match.broadcastingBy}.png`)" contain />
                    </v-avatar>
                  </v-col>
                  <v-col md="auto" class="mt-4" >
                    <nuxt-link :to="'/matches/' + match.id" style="text-decoration: none;">
                      <p style="font-size: 1.125rem;" class="primary--text" > 
                        Match Center 
                        <v-icon color="#001489">
                          mdi-chevron-right
                        </v-icon>
                      </p>
                      
                    </nuxt-link>
                  </v-col>
                </v-row>
                
              </v-row>
            </div>
          </v-col>
          
        </v-row>
      </div>
      <v-row justify="center">
        <v-btn
          v-if="showButton === true"
          outlined 
          style="background-color: rgba(3, 66, 139, 0.945);  margin-top: 40px" 
          width="30%" 
          height="50px"
          @click="showMoreMatches()"
        >
          Show More
        </v-btn>
        
      </v-row>
    </v-container>
    

  </v-container>
</template>

<script>
export default {
  props: {
    currentMonth: {
      type: String,
      default: () => ''
    },
    currentYear: {
      type: Number,
      default: () => 0
    },
    matchesCurrentMonth: {
      type: Array,
      default: () => []
    },
    showButton: {
      type: Boolean,
      default: () => false
    },
    isNextMatch: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    data: []
  }),
  mounted() {
    if (this.matchesCurrentMonth.length > 0) {
      this.data = this.matchesCurrentMonth
    }
  },
  methods: {
    showMoreMatches () {
      let matches = [...this.matchesCurrentMonth]
      matches.forEach((e) => {
        this.data.push(e)
      })
    }
  }
}
</script>

<style>

#description {
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;  
  width: 100%; 
}

#list-match-info {
  margin-top: 2rem;
  margin-right: 0px;
}
#match-info {
  border: 2.5px solid;
  border-color: rgba(2, 48, 100, 0.945);
  background-color: rgb(24, 26, 27);
  margin-top: 50px;
  width: 100%;
}


</style>