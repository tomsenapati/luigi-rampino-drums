<template>
  <div class="home">
    <HomeBanner />
    <HomeShows class="fadeIn"/>
    <HomeReleases class="fadeIn2"/>
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
const cubes = gsap.utils.toArray('.fadeIn2');

boxes.forEach(box => {
  gsap.to(box, {
    opacity: 1, 
    scrollTrigger: {
      id: "homeScroll",
      trigger: box,
      start: "top center",
      end: "+=400",
      scrub: true
    }})})

cubes.forEach(cube => {
  gsap.to(cube, {
    opacity: 1, 
    scrollTrigger: {
      id: "homeScroll2",
      trigger: cube,
      start: "top bottom",
      end: "+=400",
      scrub: true
    }})})
    
    },
  beforeDestroy() {
	ScrollTrigger.getById("homeScroll").disable()
  ScrollTrigger.getById("homeScroll2").disable()
    },
  name: 'Home',
  components: { HomeBanner, HomeShows, HomeReleases }
}
</script>

<style scoped>

  .fadeIn {
    opacity: 0;
  }

  .fadeIn2 {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    .fadeIn {
      opacity: 1;
    }

    .fadeIn2 {
      opacity: 1;
    }
  }
</style>


