<template>
 <v-hover v-slot="{ hover }">
    <v-card
      :height="windowSize.height" :width="windowSize.width"
      :class="{ 'on-hover': hover }"
    >
      <v-carousel :height="windowSize.height-40" :width="windowSize.width"  cycle>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
          show-arrows
          
        >
          <v-img :src="require(`@@/static/images/${item.name}.jpg`) " >
            <br /> <br/> <br/><br /> <br/> <br/><br /> <br/> <br/><br />
            <v-row align="center" justify="center" class="fill-height">

                <nuxt-link :to="'/news/' + item.id" style="text-decoration: none " class="mt-1 white--text font-class-name" >
                  <span> {{item.title }} </span>
                </nuxt-link>
                
            </v-row>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-progress-linear
        color="blue accent-1"
        v-model="progress"
      ></v-progress-linear>
    </v-card>
 </v-hover>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    items: [
      {name: 'chelsea1', title: 'Saul Niguez love to stay and do not afraid of fiercely compitetions', to: '/news/', id: 1},
      {name: 'chelsea2', title: 'The important victory at Stamford Bridge', to: '/news/', id: 2},
      {name: 'chelsea3', title: 'How Gorginho play key role in Chelsea?', to: '/news/', id: 3},
      {name: 'chelsea4', title: 'A interesting story of Ben Chili', to: '/news/', id: 4}
    ],
    windowSize: {
      height: 0,
      width: 0
    },
    progress: 100
  }),
  mounted () {
    this.windowSize = {
      height:document.documentElement.clientHeight,
      width: document.documentElement.clientWidth
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.font-class-name * {
   font-size: 39px;
}
</style>