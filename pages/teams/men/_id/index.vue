<template>
  <v-card flat id="container">
    
    <v-container id="back">
      <div id="content-information">
        <v-card flat>
          <v-tabs
            v-model="currentItem"
            slider-color="primary"
            height="70px"
          >
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
                  <v-container style="height: auto" fluid v-if="item === 'BIOGRAPHY'" >
                    <v-card-title>
                      <span id="tab-name"> {{item}} </span>
                      <span class="mt-6" id="title-blog"> {{blog.title}} </span>
                      <span id="subtitle-blog"> {{blog.subtitle}} </span>
                    </v-card-title>
                    <div v-for="(content, i) in convertedBlog" :key="i">
                      <v-card-text>
                        
                        <p id="title-content">
                          {{content.titleContent}}
                        </p>
                        <div v-if="content.imageContent !== ''">
                          <v-img :src="content.imageContent" contain />
                        </div>
                        <div>
                          <p id="content-blog"> {{content.content}} </p>
                        </div>
                      </v-card-text>
                        

                    </div>
                  </v-container>
                  <v-container fluid v-show="item === 'STATISTICS'">
                  </v-container>

                </v-tab-item>
              </v-tabs-items>
          </v-tabs>
        </v-card>
      </div>
      <div>
        <div id="number-section">
          <p id="number-content"> {{player.information.number}}</p>
        </div>
        <div id="wrapper-information">
          <v-card-title>
            <span id="name-text"> {{player.information.name}} </span>
          </v-card-title>
          <v-row no-gutters>
            <v-col md="3">
              <div id="static-section">
                <span id="static-text"> {{player.statistic.appearances}} </span>
                <div class="text-md-body-1" style="color: #041daa; margin-top: 1px"> Appearances </div>
              </div>
            </v-col>
            <v-col md="3">
              <div id="static-section">
                <span id="static-text"> {{player.statistic.goals}} </span>
                <div class="text-md-body-1" style="color: #041daa; margin-top: 1px"> Goals </div>
              </div>
            </v-col>
            <v-col md="3">
              <div id="static-section">
                  <span id="static-text"> {{player.statistic.assists}} </span>
                  <div class="text-md-body-1" style="color: #041daa; margin-top: 1px"> Assists </div>
              </div>
            </v-col>
            <v-col md="3">
              <div id="static-section">
                <span id="static-text"> {{player.statistic.pass_accuracy }}<span style="font-size: 20px">%</span> </span>
                <div class="text-md-body-1" style="color: #041daa; margin-top: 1px"> Pass Accuracy </div>
              </div>
            </v-col>
          </v-row>
          <div> 
            <v-card-title>
              <h4 style="color: #041daa"> Personal Information </h4>
            </v-card-title>
            <v-progress-linear value="100" color="primary" rounded striped />
            <v-row class="mt-2 ml-2" justify="space-between" v-for="(info, i) in convertedInfor" :key="i" >
              <v-col md="6" >
                <span id="infor-text" style="text-transform: capitalize"> {{info.key}} </span>
              </v-col>
              <v-col md="6">
                <span id="infor-text" class="mr-2" style="font-weight: 700"> {{info.value}} </span>
              </v-col>  
            </v-row>
          </div>
        </div>
      </div>
      
      
    </v-container>
    
  </v-card>
</template>

<script>
export default {
  data: () => ({
    currentItem: 'tab-BIOGRAPHY',
    items: [
      'BIOGRAPHY', 'STATISTICS'
    ],
    blog: {
      title: 'Mason Mount has been training at the club since he was six years old and signed at the Under-9 age group.',
      subtitle: 'He has always been an attacking midfielder, capable of playing in any of the central midfield roles and is particularly strong at going from box-to-box',
      contentBlog: [
        {
          titleContent: 'Academy',
          content: 'He played seven times for our Under-18s in 2014/15 when still a schoolboy and, despite picking up an injury on the first day of pre-season training, the campaign as a scholar was a positive one',
          imageContent: 'https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_434,q_auto,w_650,z_1.0/v1/asia/editorial/articles/mount-2017-fayc'
        }, 
        {
          titleContent: '2019/20',
          content: 'He started the season in the team under Frank Lampard, making his Chelsea debut and impressing against Manchester United despite an eventual heavy defeat. He marked his first appearance at the Bridge by opening the scoring early on, and he followed up that maiden strike with another away to Norwich the following weekend.',
          imageContent: 'https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_434,q_auto,w_650,z_1.0/v1/editorial/match-reports/2019-20/norwich-v-chelsea/Mount-celebrates-Norwich-GettyImages-1169911389'
        },
        {
          titleContent: '2020/21',
          content: 'His second season as a senior player at Stamford Bridge started brightly for the youngster, who didn’t turn 22 until the start of 2021. He played every minute of our opening five Premier League matches, scoring our first against West Brom as we came back to draw 3-3, before remaining an unused substitute for the victory over Crystal Palace in early October as he nursed an ankle knock.',
          imageContent: 'https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_north,h_432,q_auto,w_648,z_1.0/v1/editorial/match-reports/2020-21/leicester-home/Mount_POTY_award',
        }
      ]
    },
    convertedBlog: [],
    player: {
      information: {
        name: 'Mason Mount',
        dateOfBirth: 'January 10, 1999',
        birthplace: 'Portsmouth, England',
        height: '1.80m (5 ft 11 in)',
        weight: '74kg',
        position: 'Midfielder',
        number: 19
      },
      statistic: {
        appearances: 18,
        goals: 7,
        assists: 5,
        pass_accuracy: '84'
      },
      biography: {
        title: 'Mason Mount has been training at the club since he was six years old and signed at the Under-9 age group',
        content: 'Mount scored his third Chelsea goal in four games late on in our big 5-2 win at Wolves, and it was soon clear that he would play just as important a role in Lampard’s team at the Bridge as he had during their season together at Derby, during a loan spell. He made more Premier League appearances than any other Chelsea player during 2019/20, with only Cesar Azpilicueta and Kepa Arrizabalaga playing more minutes in that competition.',
        imageContent: 'mason'
      }
    },
    convertedInfor: []
  }),
  mounted () {
    this.setPath()
    this.convertInformation()
  },
  methods: {
    convertInformation () {
      
      for (const [key, value] of Object.entries(this.player.information)){
        let temp = {}
        temp.key = key
        temp.value = value
        this.convertedInfor.push(temp)
      }
      this.convertedBlog = this.blog.contentBlog
    },
    setPath () {
      this.$store.commit('path/setPath', this.$nuxt._route.path)
    }
  }
}
</script>

<style>
#tab-name {
  font-size: 1.75rem;
  font-weight: 700;
}
#container {
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
#title-blog {
  word-break: break-word;
  font-size: 1.55rem;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #001489;
  margin-bottom: 1.875rem;
  line-height: 1.33;

}
#subtitle-blog {
  word-break: break-word;
}
#title-content {
  font-size: 1.75rem;
  font-weight: 500;
  color: #001489;
  line-height: 1.33;
}
#content-blog {
  font-size: 1.15rem;
  margin-top: 10px;
  word-break: break-word;
  font-family: Arial,Helvetica,sans-serif;
  line-height: 1.75;
  letter-spacing: .3px;
}
#number-section{
  background-color: #041daa;
  color: aliceblue;
  height: 70px;
  width: 90px;
  margin-left: 8rem;
  margin-top: 10rem;
}
#content-information {
  border-style: unset;
  height: auto;
  width: 1033px;
  float: right;
  margin-top: 30.5rem;
  }
#number-content {
  font-size: 2.85rem;
  color: white;
  margin-left: 1rem;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
#wrapper-information {
  border: 2px solid;
  border-color: navy;
  height: 600px;
  width: 600px;
  margin-left: 8rem;
  background-color: rgb(25, 29, 39);
}
#infor-text {
  font-size: 1.25rem;
  color: #041daa;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
#back {
  background-image: url('https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,h_560,q_auto,w_1550,z_1.0/v1/editorial/people/first-team/2021-22/hero/Mount_DAZ_5506');
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 500px;
  background-size: cover;
  margin-bottom: 30rem;
  margin-top: 6px;
}
#name-text {
  font-size: 2.35rem;
  color: rgb(11, 46, 141);
  margin-left: 1rem;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
#static-section {
  background-color: rgb(40, 43, 56);
  height: 100px;
  width: 120px;
  margin-left: 1rem;
  color: #041daa;
  text-align: center;
}
#static-text {
  font-size: 3rem;
  color: #041daa;
  font-family: "Chelsea Basis Bold",Arial,Helvetica,sans-serif;
}
</style>