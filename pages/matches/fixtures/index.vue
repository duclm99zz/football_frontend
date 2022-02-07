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
          <v-row >
            <v-col cols="12" md="4">
              <div id="card-info" class="pa-2">
                <v-card-text>
                  <h3 >Next Match: <span id="next-match-info">{{matchesCurrentMonth[0].startAt}} </span> </h3>
                  <h3 >
                    <span id="next-match-info">
                      {{matchesCurrentMonth[0].competition + ' | ' + matchesCurrentMonth[0].stage + ' | ' + matchesCurrentMonth[0].type }} <br/>
                      {{matchesCurrentMonth[0].home + ' Vs ' + matchesCurrentMonth[0].away }} 
                    </span>
                  </h3>
                  <v-btn id="btn-match-center" class="mb-3 mt-3">
                    Match Center
                  </v-btn>
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="9" >
          <list-matches 
            :current-month="currentMonth"
            :current-year="currentYear"
            :matches-current-month="matchesCurrentMonth"
            :show-button="false"
            :isNextMatch="true"
          />
          <list-matches 
            :current-month="nextMonth"
            :current-year="currentYear"
            :matches-current-month="matchesCurrentMonth"
            :show-button="true"
            :isNextMatch="true"
          />
          
          
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
import ListMatches from '@@/components/pages/matches/ListMatches.vue'
import News from '@@/components/pages/news/News.vue'
export default {
  components: { ListMatches, News },
  data: () => ({
    loading: true,
    competitionSelected: 2,
    currentMonth: new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(Date.now()).getMonth()),
    nextMonth: '',
    currentYear: new Date(Date.now()).getFullYear(),
    news: [
      {id: 5, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea1', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 6, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea3', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 7, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea12', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 8, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea5', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '}
    ],
    competitions: [
      {name: 'Champion League', id: 1},
      {name: 'Premier League', id: 2},
      {name: 'FA Cup', id: 3},
      {name: 'Carabao Cup', id: 4},
    ],
    matchesCurrentMonth: [
      {
        id: 1,
        home: 'Chelsea',
        away: 'Tottenham Hotspur',
        startAt: '06 Jan 2022, 02:45 AM',
        competition: 'Carabao Cup',
        stage: 'Semi-Finals',
        type: '1st Leg',
        logoAway: 'tot',
        logoHome: 'chelsea',
        stadium: 'Stamford Bridge',
        broadcastingBy: ''
      },
      {
        id: 2,
        home: 'Chelsea',
        away: 'Chesterfield',
        startAt: '09 Jan 2022, 12:30 AM',
        competition: 'FA Cup',
        stage: 'Round 3',
        type: '',
        logoAway: 'chest',
        logoHome: 'chelsea_small',
        stadium: 'Stamford Bridge',
        broadcastingBy: 'btsport'
      },
      {
        id: 3,
        away: 'Chelsea',
        home: 'Tottenham Hotspur',
        startAt: '13 Jan 2022, 02:45 AM',
        competition: 'Carabao Cup',
        stage: 'Semi-Finals',
        type: '2nd Leg',
        logoHome: 'tot',
        logoAway: 'chelsea_small',
        stadium: 'Tottenham Hotspur Stadium',
        broadcastingBy: 'skysport'
      },
      {
        id: 4,
        away: 'Chelsea',
        home: 'Manchester City',
        startAt: '15 Jan 2022, 07:30 PM',
        competition: 'Premier League',
        stage: '',
        type: '',
        logoHome: 'mancity',
        logoAway: 'chelsea_small',
        stadium: 'Etihad Stadium',
        broadcastingBy: 'btsport'
      }
    ],
  }),
  mounted() {
    setTimeout(() => this.loading = false, 1500) 
    this.setMonth()
    this.setPath()
  },
  methods: {
    setMonth () {
      var now = new Date();
      if (now.getMonth() == 11) {
          let current = new Date(now.getFullYear() + 1, 0, 1);
          this.nextMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(current));
      } else {
          let current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          this.nextMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(current));
          
      }
    },
    setPath () {
      let path = this.$nuxt._route.path
      this.$store.commit('path/setPath', path)

    },
  }

}
</script>

<style>
#card-info {
  margin-top: 290px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 40px;
  background-color: rgb(15, 30, 48);
  border: 1px solid #e5e5e5;
  border-color: rgba(3, 66, 139, 0.945);
  height: 190px;
  color: rgba(3, 66, 139, 0.945);
  display: block;
  position: absolute;
  padding: 20px;
}
#next-match-info {
  font-size: 1.24em;
  font-weight: bold;
  font-family: Helvetica,Arial,sans-serif;
  line-height: 1.5;
  color: rgba(3, 66, 139, 0.945);
}
#btn-match-center {
  background-color: rgb(15, 30, 48);
  color: white;
  border-style: solid;
  border-color: rgba(3, 66, 139, 0.945);
  transition: background-color 0.6s ease-in-out;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#btn-match-center:hover {
  background-color: rgba(3, 66, 139, 0.945);
  border-style: none;
}

</style>
