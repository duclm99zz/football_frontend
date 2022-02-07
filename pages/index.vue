<template>
  <div  height="auto">
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
    <v-card-text v-show="loading === false" >
      <slide-news />
      
      <lastest-video />
      
      <news/>
      
      <matches />

      <profile-player />
    </v-card-text>
    
  </div>
</template>

<script>
import SlideNews from '@@/components/home/SlideNews.vue'
import LastestVideo from '@@/components/home/LastestVideo.vue'
import News from '@@/components/home/News.vue'
import Matches from '@@/components/home/Matches.vue'
import ProfilePlayer from '@@/components/home/ProfilePlayer.vue'
export default {
  components: {SlideNews, LastestVideo, News, Matches, ProfilePlayer},
  name: 'IndexPage',
  data: () => ({
    loading: true
  }),
  mounted () {
    setTimeout(() => this.loading = false, 1500)
  }
}
</script>

