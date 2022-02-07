<template>
 <v-container >
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
    <v-container v-if="loading === false">
      <v-row>
        <v-img 
          src="https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_440,q_auto,w_1550,z_1.0/v1/editorial/match-reports/2021-22/tottenham-away/Silva-goal-celebration-Tottenham-away-1" 
          width="100%"
          height="100%"
        >
        </v-img>
      </v-row>
      <v-row >
        <v-col cols="12" md="9" id="wrapper-content"> 
          <v-card-title>
            <span id="section"> League table </span>
          </v-card-title>
          <div class="mt-2">
            <v-card-title style="color: #0650a8; font-weight: 700; font-size: 1.85rem">
              2021/2022
            </v-card-title>
          </div>
          <div id="wrapper-table">
            <v-data-table
              :headers="headers"
              :items="teams"
              hide-default-footer
              disable-sort
              :items-per-page="20"
              item-key="id"
            >
              <template v-slot:top>
              </template>
              <template v-slot:item.name="{ item }">
                <div  id="name-team-table">
                  <v-avatar size="40" class="mb-2">
                    <v-img :src="require(`@@/static/images/otherteam/${item.logo}.png`)" contain/>
                  </v-avatar>
                  <span 
                    :style="{'color': item.logo === 'chelsea' ? '#0650a8' : 'white', 'font-size': item.logo === 'chelsea' ? '24px' : '14px', 'font-weight': item.logo === 'chelsea' ? '600' : '400'}" 
                    class="mt-5 ml-3"
                  > 
                    {{item.name}} 
                  </span>
                </div>
              </template>
              <template v-slot:item.position="{ item }">
                <div 
                  class="py-4" 
                  id="position-table" 
                  :style="{'background-color': item.position === 1 ? '#0650a8' : '' || (item.position < 5 || item.position > 17) && item.position !== 1 ? 'rgb(220, 217, 212)' : '' || item.position === 5 ? 'hsl(210, 3%, 51%)' : ''}"
                >
                  <span style="" class="text-md-body-2 font-weight"> {{item.position}} </span>
                </div>
              </template>
            </v-data-table>
          </div>
          
          
        </v-col> 
        <v-col cols="12" md="3" >
            <v-select
              v-model="competitionSelected"
              :items="competitions"
              style="font-size: 1.25rem; color: rgba(3, 66, 139, 0.945); margin-top:57px; width: 90%"
              dark
              item-text="name"
              item-value="id"
            /> 
            <div style="width: 90%">
             <news :news="news"/>
            </div>

            
            
        </v-col>
        
      </v-row>
      
    </v-container>
    

  </v-container>
</template>

<script>
// import ListMatches from '@@/components/pages/matches/ListMatches.vue'
import News from '@@/components/pages/news/News.vue'

export default {
  components: {  News },
  data: () => ({
    loading: true,
    competitionSelected: 2,
    currentYear: new Date(Date.now()).getFullYear(),
    news: [
      {id: 5, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea1', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 6, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea3', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 7, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea12', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 8, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea5', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '}
    ],
    competitions: [
      {name: 'Champion League', id: 1},
      {name: 'Premier League', id: 2}
    ],
    teams: [],
    headers: [
      {text: 'Pos', value: 'position', align: 'center', width: '7%'},
      {text: 'Team', value: 'name', width: '40%', align: 'start'},
      {text: 'Played', value: 'gamePlayed'},
      {text: 'Win', value: 'wins'},
      {text: 'Draw', value: 'draws'},
      {text: 'Loss', value: 'losses'},
      {text: 'GF', value: 'goalFor'},
      {text: 'GA', value: 'goalAgainst'},
      {text: 'GD', value: 'goalDifference'},
      {text: 'Point', value: 'points'},

    ]

   
  }),
  mounted() {
    setTimeout(() => this.loading = false, 1500) 
    this.$store.commit('path/setPath', this.$nuxt._route.path)
    this.teams = this.initData().leagueTable
    console.log(this.initData())
  },
  methods: {
  }

}
</script>

<style>
#section {
  margin-top: 2rem;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 1.2;
  color: #0650a8;
}
#name-team-table {
  font-family: "Chelsea Basis Regular",Arial,Helvetica,sans-serif;
  font-weight: 400;
}
#wrapper-table {
  border-top: 0.5px solid;
}
#wrapper-content {
  
  font-family: Helvetica,Arial,sans-serif;
}

</style>
