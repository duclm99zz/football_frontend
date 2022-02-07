<template>
  <v-app >
    <v-hover v-slot:default="{ hover }" v-model="isHoverAppBar">
      <v-app-bar
        id="app-bar"
        elevate-on-scroll
        :class="{ 'on-hover': hover }"
        extension-height="40px"
      >
        <template v-slot:extension >
            <div 
              v-for="(item, i) in navigation" 
              :key="i" id="extension-style"   
              v-show="item.isShow === true || item.name === navigationActive" 
            >
            <!-- item.isShow to handle toggle subTitle || item.name === navigationActive to handle style at any pagee -->
              <span v-for="n in item.items" :key="n.title" >
                <nuxt-link id="sub-app-bar"  :style="n.style"  :to="n.link" >
                  <span @click="handleSubNavigation(n.text, n.link)" :style="{'color': n.text === subNavigationActive ? '#0650a8' : 'white'}"> {{n.title}}
                  </span>
                </nuxt-link>
                
              </span>
            </div>
        </template>
        <v-row  >
          <v-col cols="12" md="1">
            <v-avatar size="67"  class="mt-2" @click="goHomePage()">
              <img 
                src='@@/static/images/otherteam/chelsea.png' 
              />
            </v-avatar>
          </v-col>
          
            <v-col cols="12" md="11" >
              <v-row  justify="start" class="mt-1">
                <v-hover v-slot:default="{ hover}" v-model="isHoverNews">

                  <nuxt-link
                    :to="'/news'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"
                  > 
                    
                      <v-card-text 
                        id="title-nav" 
                        @click="handleNavigate('news')" 
                        :style="{'color': isHoverSubTitle === 'news' || navigationActive === 'news' ? '#0650a8' : 'white'}" 
                        :class="{ 'on-hover': hover }"  
                      > 
                        <!-- isHoverSubTitle to show subtitle when Title is on hover || navigationActive to make text color-->
                        NEWS
                        <v-progress-linear 
                          :value="100" 
                          color="#0650a8" 
                          rounded 
                          striped 
                          v-show="isHoverNews || isHoverSubTitle === 'news' || navigationActive === 'news'"
                        />
                        <!-- isHoverNews, isHoverSubTitle, navigationActive to show line under text-->
                      </v-card-text>
                    
                  </nuxt-link>
                  
                </v-hover>
                <v-hover v-slot:default="{ hover}" v-model="isHoverMatches">
                  <nuxt-link
                    :to="'/matches'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"
                  > 
                    <v-card-text 
                      id="title-nav" 
                      @click="handleNavigate('matches')" 
                      :style="{'color': isHoverSubTitle === 'matches' ||  navigationActive === 'matches' ? '#0650a8' : 'white'}"  
                      :class="{ 'on-hover': hover }" 
                    > 
                      MATCHES 
                      <v-progress-linear 
                        :value="100" 
                        color="#0650a8" 
                        rounded striped 
                        v-show="isHoverMatches || isHoverSubTitle === 'matches' || navigationActive === 'matches'"
                      />
                    </v-card-text>
                  </nuxt-link>
                </v-hover>
                <v-hover v-slot:default="{ hover}" v-model="isHoverTeams">
                  <nuxt-link
                    :to="'/teams'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"

                  > 
                    <v-card-text 
                      id="title-nav"  
                      @click="handleNavigate('teams')" 
                      :style="{'color': isHoverSubTitle === 'teams' ? '#0650a8' : 'white'}" 
                      :class="{ 'on-hover': hover }" 
                    > 
                      TEAMS
                      <v-progress-linear :value="100" color="#0650a8" rounded striped v-show="isHoverTeams || isHoverSubTitle === 'teams'"/>
                    </v-card-text>
                  </nuxt-link>
                </v-hover>
                <v-hover v-slot:default="{ hover}" v-model="isHoverMembership">
                  <nuxt-link
                    :to="'/membership'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"
                  > 
                    <v-card-text 
                      id="title-nav"  
                      :style="{'color': isHoverSubTitle === 'membership' ? '#0650a8' : 'white'}" 
                      :class="{ 'on-hover': hover }" 
                      @click="handleNavigate('membership')"
                    > 
                      TICKETS & MEMBERSHIP 
                      <v-progress-linear :value="100" color="#0650a8" rounded striped v-show="isHoverMembership || isHoverSubTitle === 'membership'"/>
                    </v-card-text>
                  </nuxt-link>
                </v-hover>
                <v-hover v-slot:default="{ hover}" v-model="isHoverClub">
                  <nuxt-link
                    :to="'/club'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"

                  > 
                    <v-card-text 
                      id="title-nav" 
                      :style="{'color': isHoverSubTitle === 'club' ? '#0650a8' : 'white'}" 
                      :class="{ 'on-hover': hover }" 
                      @click="handleNavigate('club')"
                    > 
                      CLUB CHELSEA 
                      <v-progress-linear :value="100" color="#0650a8" rounded striped v-show="isHoverClub || isHoverSubTitle === 'club'"/>
                    </v-card-text>
                  </nuxt-link>
                </v-hover>
                <v-hover v-slot:default="{ hover}" v-model="isHoverShop">
                  <nuxt-link
                    :to="'/shop'"
                    class="white--text text-md-body-1 font-weight-medium "
                    style="text-decoration: none"
                  > 
                    <v-card-text 
                      id="title-nav" 
                      :style="{'color': isHoverSubTitle === 'shop' ? '#0650a8' : 'white'}" 
                      :class="{ 'on-hover': hover }" 
                    >
                       SHOP 
                       <v-progress-linear :value="100" color="#0650a8" rounded striped v-show="hover || isHoverSubTitle === 'shop'" />
                    </v-card-text>
                  </nuxt-link>
                </v-hover>
                <v-spacer />
                <div style="margin-top: 1.2rem">
                  <authentication :title="'login'" />
                  <authentication :title="'join us'" />
                  <authentication :title="'forgot'" />
                </div>
              </v-row>
            </v-col>
          
      </v-row>
      </v-app-bar> 
    </v-hover>
    <v-main 
      width="auto"
      id="container"
    >
      <Nuxt />
    </v-main>
    <v-footer
      class="mt-10"
      id="footer"
      width="auto"
    >
      <v-container>
        <v-row>
          <v-col md="12" cols="12" align="center" justify="space-around">
            <v-avatar min-height="100" min-width="150" class="mx-4"  v-for="item in sponsors" :key="item" >
              <v-img
                :src="require('@@/static/images/sponsor/'+item+'.png')"
                class="py-4"
                contain
              />
              <v-col cols="12" md="2" />
            </v-avatar>
          </v-col>
          <v-divider />
          <v-col cols="12" md="12" >
            <v-card flat id="footer"> 
              <v-card-text class="text-center">
                <div>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </div>
                <br/>
                <v-btn
                  v-for="link in links"
                  :key="link"
                  color="white"
                  text
                  rounded
                  class="my-2  text-sm-body-2 font-weight-medium"
                >
                  {{ link }}
                </v-btn>
                <v-col
                  class=" py-4 text-md-body-2 text-center white--text"
                  cols="12"
                >
                  &copy; 2021 Chelsea FC. All rights reserved. No part of this site may be reproduced without our written permission.
                </v-col>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Authentication from '@@/components/pages/auth/Authentication.vue';
import Login from '@@/components/pages/auth/Login.vue';

export default {
  components: {Login, Authentication  },
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
      isHoverSubTitle: '',
      isHoverNews: false,
      isHoverVideos: false,
      isHoverMatches: false,
      isHoverTeams: false,
      isHoverMembership: false,
      isHoverClub: false,
      isHoverAppBar: false,
      isHoverShop: false,
      navigation: this.initData().subNavigate,
      links: this.initData().links,
      icons: this.initData().icons,
      sponsors: this.initData().sponsors,
      mainSponsors: [
        'nike',
        'three',
        'trivago'
      ],
      navigationActive: '',
      subNavigationActive: ''
    }
    
  },
  computed: {
    pathQuery () {
      return this.$store.state.path.currentPath
    },
    pathQuery: {
    // getter
      get: function () {
        return this.$store.state.path.currentPath
      },
      // setter
      set: function (newValue) {
        if (newValue === '/') {
          this.navigationActive = ''
          this.subNavigationActive = ''
          this.isHoverSubTitle = ''
        } else {
          this.navigationActive = newValue.split('/')[1]
          this.subNavigationActive = newValue.split('/')[2]
        }
      }
  
    }
  },
  watch: {
    isHoverShop (v) {
      this.isHoverSubTitle = 'shop'
      if (v) {
        this.navigation.forEach((e) => {
          e.isShow = false
        })
      }
    },
    isHoverNews (v) {
      if (v === true) {
        this.isHoverSubTitle = 'news'
        this.navigationActive = ''
        this.navigation.forEach((e) => {
          e.isShow = false
          if (e.name === 'news') {
            e.isShow = true
            
          }

        })
      }
    },
    isHoverMatches (v) {
      if (v === true) {
        this.isHoverSubTitle = 'matches'
        this.navigationActive = ''
        this.navigation.forEach((e) => {
          e.isShow = false
          if (e.name === 'matches') {
            e.isShow = true
          }

        })
      }
    },
    isHoverTeams (v) {
      if (v === true) {
        this.isHoverSubTitle = 'teams'
        this.navigationActive = ''
        this.navigation.forEach((e) => {
          e.isShow = false
          if (e.name === 'teams') {
            e.isShow = true
          }

        })
      }
    },
    isHoverMembership (v) {
      if (v === true) {
        this.isHoverSubTitle = 'membership'
        this.navigationActive = ''
        this.navigation.forEach((e) => {
          e.isShow = false
          if (e.name === 'membership') {
            e.isShow = true
          }

        })
      }
    },
    isHoverClub (v) {
      if (v === true) {
        this.isHoverSubTitle = 'club'
        this.navigationActive = ''
        this.navigation.forEach((e) => {
          e.isShow = false
          if (e.name === 'club') {
            e.isShow = true
          }

        })
      }
    },
    isHoverAppBar (v) {
      if (v === false && this.navigationActive === '') {
        this.isHoverSubTitle = ''
        this.navigationActive = this.pathQuery.split('/')[1] ? this.pathQuery.split('/')[1] : ''
        this.subNavigationActive = this.pathQuery.split('/')[2] ?  this.pathQuery.split('/')[2] : ''
        this.navigation.forEach((e) => {
          e.isShow = false
        })
      }
    }
  },
  mounted () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    goHomePage () {
      this.$store.commit('path/setPath', '/')
      this.$nuxt._router.push('/')
      this.navigationActive = ''
      this.subNavigationActive = ''
      this.isHoverSubTitle = ''
    },
    handleNavigate (name) {
      if (name !== '') {
        this.navigationActive = name
        this.navigation.forEach((e) => {
          if (e.name === name) {
            this.subNavigationActive = e.items[0].text
          }
        })
      }
    },
    handleSubNavigation (name, link) {
      this.$store.commit('path/setPath',link)
      this.subNavigationActive = name
      this.navigationActive = link.split('/')[1]
    }
  }
}
</script>

<style scoped>
#title-nav {
  font-family: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  font-size: 1.25rem;
  margin-top: 10px;
  margin-bottom: 1rem;
  transition: color 0.6s ease-in-out;
}
#title-nav:hover {
  
  color: #0650a8;
}
#app-bar {
  
  background-color: rgb(24, 26, 27);
  min-height: 95px;
  max-height: 95px;
}
#container {
  font-style: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  
}
#footer {
  background-color: #0650a8;
}
#extension-style {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-top: 1px solid;
  border-bottom: 1px solid;
  background-color: rgb(24, 26, 27);
  width: 100%;
  text-decoration: none;
  height: 100%;
  margin-bottom: 3px;
}
#sub-app-bar {
  font-family: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 0.95rem;
  margin-top: 2px;
  margin-right: 1rem;
  transition: color 0.6s ease-in-out;
}
#sub-app-bar:hover {
  text-transform: uppercase;
  text-decoration: none;
  color: #064fa8c5;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: #f4f6f8;
  font-family: "Chelsea Basis Medium",Arial,Helvetica,sans-serif;
  
}
</style>