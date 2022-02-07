<template>
  <v-container>
    <div >
      <v-row>
        <v-col cols="12" md="1"/>
        <v-col cols="12" md="10">
            <v-chip color="blue accent-1"> {{blog.category}} </v-chip>
            <p id="title"> {{ blog.title }} </p>
            <p class="ml-5 mb-5 text--secondary"> 
              {{ blog.createdAt.toDateString() }} 
              <span>
                <v-icon id="icon" color="indigo accent-1"> mdi-facebook </v-icon>
                <v-icon id="icon" color="indigo accent-1"> mdi-twitter </v-icon>
                <v-icon id="icon" color="indigo accent-1">  mdi-pencil </v-icon>
              </span>
            </p> 
        

            <v-img
              id="image" 
              :src="require(`@@/static/images/${blog.imageTitle}.jpg`)"
              max-width="100%"
              min-width="100%"
              contain
            />

        </v-col>
        <v-col cols="12" md="1"/>
      </v-row>
      
      <v-row >
        <v-col cols="12" md="12" />
        <v-col cols="12" md="1" />
        <v-col cols="12" md="10"  >
          <v-row id="content">
            <v-col cols="12" md="8" >
              <div id="news" class="ml-10">
                <v-card-text style="display: block; word-break: break-word; line-height: 1.4;">
                  <p id="subtitle" v-show="blog.subtitle !== ''" >
                    {{blog.subtitle}}
                  </p>
                </v-card-text>
              </div>
              <div v-for="(item, i) in blog.content" :key="i" class="ml-10">
                <v-card-title v-show="item.subContent !== ''" style="font-size: 1.9rem; color: rgb(3, 81, 150); line-height: 1.8; ">
                   {{ item.subContent }}
                </v-card-title>
                <v-img v-if="item.imageName !== ''" :src="require(`@@/static/images/${item.imageName}.jpg`)"  class="ml-4" />
                <p v-if="item.imageDescription !== ''" class="ml-5 primary--text"> {{ item.imageDescription }} </p>
                <v-card-text v-show="item.text" style="font-size: 1.125rem; word-break: break-word; line-height: 1.6;">
                  {{ item.text }}
                </v-card-text>
              </div>
              <br /> <br />
              <div v-if="blog.tags.length > 0" class="ml-10">
                <v-row>
                  <v-col cols="12" md="10">
                    <h3 > 
                      Tags: <span v-for="(tag, i) in blog.tags" :key="i"> <nuxt-link :to="'/news/search/tag/' + tag" style="text-decoration: none"> {{ tag + ' '}} </nuxt-link> </span>
                    </h3>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-icon id="icon" color="indigo accent-1"> mdi-facebook </v-icon>
                    <v-icon id="icon" color="indigo accent-1"> mdi-twitter </v-icon>
                    <v-icon id="icon" color="indigo accent-1">  mdi-pencil </v-icon>
                  </v-col>
                  
                </v-row>
                <v-divider dark class="mt-10"/>
              </div>
            </v-col> 
            <v-col cols="12" md="1" />
            <v-col cols="12" md="3" >
              <div id="news-wrapper" v-for="(item, i) in latestNews" :key="i" class="mt-10">
                <v-img id="images" :src="require(`@@/static/images/${item.imageName}.jpg`)" min-height="200" max-height="200"/>
                <v-card-actions id="title-section" style="height: 200px; overflow-y: hidden;"> 
                  <v-card-text>
                    <nuxt-link :to="'/news/latestnews/' + item.id" style="text-decoration: none" >
                      <h2 class="primary--text mt-2"> {{ item.title }} </h2> <br />
                      <p v-if="item.description !== ''" class="white--text text-lg-body-1" id="description"> {{item.description}} </p>
                    </nuxt-link>
                    <v-divider light class="mt-4" />
                    <p> {{ item.createdAt.toDateString()}} </p>
                  </v-card-text> <br />
                </v-card-actions>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="1" />
      </v-row>
      <v-row>
        <v-col cols="12" md="1"/>
        <v-col cols="12" md="10">
          <v-card-title style="font-size: 2rem;" >
            <p style="color: lightgrey"> More From Chelsea </p>
          </v-card-title>
          <v-row>
            <v-col cols="12" md="3" v-for="(item, i) in recomendedNews" :key="i">
              <div id="news-wrapper" >
                <v-img id="images" :src="require(`@@/static/images/${item.imageName}.jpg`)" min-height="200" max-height="200"/>
                <v-card-actions id="title-section" style="height: 200px; overflow-y: hidden;"> 
                  <v-card-text>
                    <nuxt-link :to="'/news/latestnews/' + item.id" style="text-decoration: none" >
                      <h2 class="primary--text mt-2"> {{ item.title }} </h2> <br />
                      <p v-if="item.description !== ''" class="white--text text-lg-body-1" id="description"> {{item.description}} </p>
                    </nuxt-link>
                    <v-divider light class="mt-4" />
                    <p> {{ item.createdAt.toDateString()}} </p>
                  </v-card-text> <br />
                </v-card-actions>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="1"/>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    blog: {
      title: 'The Debrief: Battling Blues run out of steam',
      id: -1,
      tags: ['Premier League', 'Men', 'Brighton'],
      category: 'Analysis',
      createdAt: new Date(Date.now()),
      imageTitle: 'blog1_main',
      subtitle: 'It was a draw that felt like a defeat as Chelsea desperately clung on to a slender lead against Brighton for over an hour before ultimately surrendering two precious Premier League points. Here, we take a closer look at the match statistics and all the talking points…',
      content: [
        {
          text:'Despite starting brightly and establishing a lead inside 30 minutes through Romelu Lukaku’s pinpoint header, Thomas Tuchel was rarely content on the touchline as his side registered less possession, fewer shots and efforts on target than our visitors from the South Coast.In fact, not since Aston Villa’s visit in gameweek four of the season has an away side had more goal attempts in SW6, though Brighton succeeded where the Villans couldn’t by turning that into a useful point.Chelsea were also left bemoaning more bad luck with injuries as both Andreas Christensen and Reece James exited the action before the second half resumption, the latter leaving the field very gingerly with what Tuchel later diagnosed as a hamstring injury.',
          imageName: '',
          subContent: ''
        },
        {
          text:'The balance of the contest swung in both directions throughout the 90 minutes, sometimes subtly but often drastically. The Blues dominated before Lukaku’s breakthrough goal, with six shots to Brighton’s two and four on target to zero from the Seagulls, while we also passed more accurately (87 per cent completion) and won more duels (70 per cent in the air, 75 per cent on the ground) during that period.',
          imageName: 'blog1_content1',
          subContent: 'A game of three acts',
        },
        {
          subContent: 'Mount hitting numbers',
          text: 'It was the 12th Premier League goal the 22-year-old has been involved in this season (seven goals, five assists), matching his best-ever tally from a single campaign in 2019/20.The midfielder is also currently our most productive attacking outlet, averaging 0.93 goals or assists per 90 minutes in the league this season. The next best are wing-backs Reece James and ',
          imageName: 'blog1_content2'
        },
        {
          subContent: 'Set-pieces to savour but harmful home form',
          text: 'In our 20th league game of 2021/22, Lukaku’s was our eighth headed goal of the campaign, more than any other side in the division.Meanwhile, no team has more than our seven goals scored from corners this term, both clearly owing to thorough planning and extensive work on the training pitches at Cobham, as well as precise deliveries and aerial prowess.',
          imageName: 'blog1_content3',
          imageDescription: 'Lukaku was an important reference point for the Blues early on, his most crucial touch coming with a front-post header for 1-0'
        }
      ]
    },
    latestNews: [
      {id: 1, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea13', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 2, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea10', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 3, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea7', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas  '},
      {id: 4, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea8', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
    ],
    recomendedNews: [
      {id: 5, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea1', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 6, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea3', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      {id: 7, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea12', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '},
      // {id: 8, title: 'Chelsea team are greatest club in the word', imageName: 'chelsea5', createdAt: new Date(Date.now()), description: 'You might have thought our countdown to Christmas with our own take on a traditional advent calendar would have finished by now '}
    ]
  }),
  mounted() {
    if (this.$route.params) {
      this.blog.id = parseInt(this.$route.params)
    }
  }

}
</script>

<style>
#title { 
  font-family: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  font-size: 2.5rem;
  color: rgb(3, 81, 150);
  margin-left: 4px;
  margin-top: 5px;
}
#subtitle {
  font-family: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  font-size: 2.25rem;
  color: rgb(3, 81, 150);
}
#content {
  font-family: Arial,Helvetica,sans-serif;
}
#icon {
  margin-bottom: 10px;
  margin-left: 8px;
}
#images {
  opacity: 0.8;
  transition: opacity .4s ease-in-out;
}
#images:hover {
  opacity: 1;
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
</style>