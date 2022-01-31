<template>
  <div class="home">
    <HomeBanner />
    <!-- <HomeShows class="fadeIn" /> -->
    <HomeReleases class="fadeIn"/>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeBanner from '../components/HomeBanner.vue'
import HomeReleases from '../components/HomeReleases.vue'
import HomeShows from '../components/HomeShows.vue'

export default {
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger)
    
const boxes = gsap.utils.toArray('.fadeIn');
boxes.forEach(box => {
  gsap.to(box, {
    opacity: 1, 
    scrollTrigger: {
      trigger: box,
      start: "top center",
      end: "+=400",
      scrub: true
    }
  })
});
  },
  name: 'Home',
  components: { HomeBanner, HomeShows, HomeReleases }
}
</script>

<style scoped>

  .fadeIn {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    .fadeIn {
      opacity: 1;
    }
  }
</style>


