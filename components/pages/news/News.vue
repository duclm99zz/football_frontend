<template>
<v-main>
  <div id="news" v-for="(item, i) in news" :key="i">
    <v-img id="images" :src="require(`@@/static/images/${item.imageName}.jpg`)" min-height="300" max-height="300"/>
    <v-card-actions id="title-section" style="height: 200px; overflow-y: hidden;"> 
      <v-card-text>
        <nuxt-link :to="'/news/' + item.id" style="text-decoration: none" >
          <h2 class="primary--text mt-2"> {{ item.title }} </h2> <br />
          <p v-if="item.description !== ''" class="white--text text-lg-body-1" id="description"> {{item.description}} </p>
        </nuxt-link>
        <v-divider light class="mt-4" />
        <p> {{ item.createdAt.toDateString()}} </p>
      </v-card-text> <br />
      
    </v-card-actions>
    
  </div>
</v-main>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style>

#news {
  border: 2.5px solid;
  border-color: rgba(2, 48, 100, 0.945);
  background-color: rgb(24, 26, 27);

  width: 100%;
  margin-top: 45px;
}
</style>