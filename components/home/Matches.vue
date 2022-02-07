<template>
  <v-card flat class="mt-10" >
    <v-card-title >
      <v-row>
        <v-col cols="12" md="5" class="mt-2">
          <v-progress-linear
              color="blue accent-1"
              v-model="progress"
              height="10px"
              striped
              rounded
            />
        </v-col>
        <v-col cols="12" md="2" align="center" justify="center">
            <h1> Matches </h1>

            <v-btn
              class="white--text"
              color="error"
              depressed
              dense x-small
            >
              Next match:
              <h3> {{dayLeft + ' Day'}} </h3>
            </v-btn>
            
              
              
        </v-col>
        <v-col cols="12" md="5" class="mt-2">
          <v-progress-linear
              color="blue accent-1"
              v-model="progress"
              height="10px"
              striped
              rounded
            />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row >
          <!-- Last Match Info -->
          <v-col cols="12" md="4"  > 
            <v-card flat outlined  >
              <v-card-title >
                <div> 
                  <h4 class="primary--text "> Premier League</h4>
                  <p class="text-caption text--secondary"> 
                      {{lastMatch.stadium}}
                      {{lastMatch.time}}
                  </p>
                </div>
                <v-spacer />
                <v-chip label color="indigo accent-1" class="mb-4" >
                  Last Match
                </v-chip>
                
                <v-col cols="12" md="12" />
                <v-row>
                  <v-col cols="12" md="1" >
                    <v-avatar size="60" >
                      <v-img :src="require('@@/static/images/otherteam/aston.png')" contain />
                      
                    </v-avatar>
                    
                  </v-col>
                  <v-col cols="12" md="9">
                    <p class="mt-4 ml-6 text-md-body-1 text--secondary"> {{lastMatch.home}} </p>
                  </v-col>
                  <v-col cols="12" md="2">
                    <h3 class="mt-1 ml-3 text--secondary "> {{lastMatch.goalOfHome}} </h3>
                  </v-col>
                  <v-col cols="12" md="1" >
                    <v-avatar size="60" >
                      <v-img :src="require('@@/static/images/otherteam/chelsea.png')" contain />
                      
                    </v-avatar>
                    
                  </v-col>
                  <v-col cols="12" md="9">
                    <p class="mt-4 ml-6 text-md-body-1 text--secondary "> {{lastMatch.away}} </p>
                  </v-col>
                  <v-col cols="12" md="2">
                    <h3 class="mt-1 ml-3 primary--text"> {{lastMatch.goalOfAway}} </h3>
                  </v-col>
                  <v-col cols="12" md="8" />
                  <v-col cols="12" md="4" >
                    <nuxt-link text :to="'/matches/' + lastMatch.id " style="text-decoration: none" class="text-md-body-1 " >
                      <strong> Match Center </strong> <v-icon color="primary">  mdi-arrow-right</v-icon>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </v-card-title>
            </v-card>
          </v-col>  

          <!-- Next Match Info -->
          <v-col cols="12" md="4">
            <v-card flat outlined  >
              <v-card-title >
                <div> 
                  <h4 class="primary--text "> Premier League</h4>
                  <p class="text-caption text--secondary"> 
                      {{nextMatch.stadium}}
                      {{nextMatch.time}}
                  </p>
                </div>
                <v-spacer />
                <v-chip label color="indigo accent-1" class="mb-4" >
                  Next Match
                </v-chip>
                
                <v-col cols="12" md="12" />
                <v-row>
                    <v-col cols="12" md="2" class="" >
                      <v-avatar size="70" >
                        <v-img :src="require(`@@/static/images/otherteam/${nextMatch.home.toLowerCase()}.png`)" contain />
                      </v-avatar>
                    </v-col>
                    <v-col cols="12" md="3">
                      <p class="mt-6   text-md-body-1 font-weight-medium"> {{nextMatch.home}} </p>
                    </v-col>
                    <v-col cols="12" md="2" >
                      <p class="mt-5 text--secondary"> VS </p>
                    </v-col>
                    
                    <v-col cols="12" md="3">
                      <p class="mt-6 ml-8 text-md-body-1 font-weight-medium "> {{nextMatch.away}} </p>
                    </v-col>
                    <v-col cols="12" md="1"  >
                      <v-avatar size="70" >
                        <v-img :src="require(`@@/static/images/otherteam/${nextMatch.away.toLowerCase()}.png`)" contain />
                      </v-avatar>
                    </v-col>
                </v-row>
                <v-card-text class="mt-4" align="center" justify="center">
                  <p class="white--text mt-5 text-md-body-2"> {{nextMatch.time}}  </p> 
                  <nuxt-link text :to="'/matches/' + nextMatch.id " style="text-decoration: none" class="text-md-body-1" >
                      <strong> Match Center </strong> <v-icon color="primary">  mdi-arrow-right</v-icon>
                    </nuxt-link>
                </v-card-text>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" align="center" justify="center">
            <v-card flat outlined  >
              <v-card-title >
                <p class="primary--text"> {{ 'Premier League ' + nextMatch.season }} </p>
              </v-card-title>
              <v-card-text>
                <v-data-table
                  :items="items"
                  :headers="headers"
                  hide-default-footer
                />
                <v-divider class="mb-2" />
                <nuxt-link to='/matches/league-table' style="text-decoration: none" class="text-md-body-1">
                  <strong > Full Table </strong>
                  <v-icon color="primary"> mdi-arrow-right</v-icon>
                </nuxt-link>
              </v-card-text>
            </v-card>
            
          </v-col>
          
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="5" class="mt-14">
          <v-progress-linear
              color="blue accent-1"
              v-model="progress"
              height="10px"
              striped
              rounded
            />
        </v-col>
        <v-col cols="12" md="2" align="center" justify="center">
          <v-avatar size="120" >
            <v-img :src="require('@@/static/images/sponsor/hublot.png')" contain/>
          </v-avatar>
          <v-avatar size="120" >
            <v-img :src="require('@@/static/images/sponsor/hublot1.png')" contain/>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="5" class="mt-14">
          <v-progress-linear
              color="blue accent-1"
              v-model="progress"
              height="10px"
              striped
              rounded
            />
        </v-col>
        <v-col cols="12" md="12"/> <v-col cols="12" md="12"/>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dayLeft: 0,
    progress: 100,
    lastMatch: {
      id: 1,
      home: 'Aston Villa',
      time: '27 Dec 2021, 12:30 AM',
      stadium: 'Villa Park',
      away: 'Chelsea',
      season: '2021/2022',
      goalOfHome: 1,
      goalOfAway: 3
    },
    nextMatch: {
      id: 2,
      home: 'Chelsea',
      away: 'Brighton',
      time: '30 Dec 2021, 02:30 AM',
      stadium: 'Stamford Bridge',
      season: '2021/2022',
      goalOfHome: -1,
      goalOfAway: -1
    },
    headers: [
      {text: 'Pos', value: 'position', align: 'start'},
      {text: 'Team', value: 'team', align:'start', width: '45%'},
      {text: 'PM', value: 'played_matches'},
      {text: 'GD', value: 'goal_difference'},
      {text: 'PTS', value: 'points'}
    ],
    items: [
      {team: 'Manchester City', position: 1, played_matches: 19, goal_difference: 38, points: 47},
      {team: 'Liverpool', position: 2, played_matches: 18, goal_difference: 35, points: 41},
      {team: 'Chelsea', position: 3, played_matches: 19, goal_difference: 29, points: 41}
    ]
  }),
  mounted () {
    this.getDayLeft()
  },
  methods: {
    getDayLeft () {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(Date.now());
      const secondDate = new Date(this.nextMatch.time);
      const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
      this.dayLeft =  diffDays
    }
  }
}
</script>
<style scoped>
#container {
  border-style: solid ;
  border-color: rgb(3, 53, 109) ;
}
</style>