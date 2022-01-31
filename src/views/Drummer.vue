<template>
<div class="drummerBanner">
    <img class="drummerImg" src="../assets/images/PortfolioWhole.jpg">
    <div class="drummerContent">
      <img 
      class="drummerBackgroundScroll" src="../assets/images/PortfolioCrowd.png">
      <div class="drummerBlack">
        <div class="fadeDrummer">
          <div class="drummerTitleCard">
            <h1 class="drummerHeader">PORTFOLIO</h1>
          </div>
          <div class="drummerBio">
            <div class="drummerBioRow">
              <div>
                <p class="quoted" ><i>“A drummer with an innovative and creative approach to drumming.”</i></p>
                <p class="quoted" ><i>“With a groove that is different from the norm and fully aware of its timing and feel.”</i></p>
                <p>Luigi (Lui) Rampino is a London based drummer, percussionist, educator and songwriter. He graduated from <i>BIMM Institute Brighton</i>, with a BA Hons. Professional Musicianship & drum studies specialisation. He also comes from a classical percussion background having studied at the <i>"D. Cimarosa" Conservatoire of Classical Music</i> in Italy alongside modern drum kit studies which he has carried out since the age of 9.</p>
                <p>The last decade has seen him take part in numerous projects as a drummer/ percussionist. He works as both a live and studio session player as well as being an active member of various original projects. </p>
              </div>
              
              <img class="descImg" src="../assets/images/Luiedited.jpg" alt="">
            </div>

            <p>Luigi has collaborated with a large variety of artists in the U.K. and across Europe, recently being busy touring and recording with artists such as Black Market Aftermath, Transatlantic Family Band, Ben Hemming and many more. Additionally he has been recording for other projects thanks to his vast fluency in many different styles. </p>
            <p>During his performing career so far, he has had the pleasure to record in various renowned studios across the U.K. and Europe. He has performed in Konk Studios (London), Miloco Studio/The Pool (London), The Blue Studios (London), Velvet Recordings (Oslo, Norway) & Masterlink Productions (U.K.)</p>
            <h5 class="contactLink" @click="openModal">INTERESTED IN WORKING TOGETHER? CONTACT ME HERE</h5>
            <h5 class="contactLinkSM" @click="openModal">CONTACT ME</h5>
          </div>
        </div>
      </div>

      <div class="panelsSection">
        <div class="panels">
          <div class="panel" v-for="artist in artists" :key="artist.id">
            <a :href="'//'+ artist.Link" target="_blank">
            <div class="panelTitleBanner">
              <h3>{{artist.Name}}</h3>
            </div>
          </a>
          </div>
        </div>
      </div>

      <div class="mobileProjectsSection">
        <div class="mobileProject" v-for="artist in artists" :key="artist.id">
          <a :href="'//'+ artist.Link" target="_blank">
          <div class="project">
          <img class="projectImg" src="../assets/images/Panelimages/transatlantic.jpg">
          <h3 class="projectTitle">{{artist.Name}}</h3>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ref } from  'vue'

//firebase imports
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export default {
  setup() {
    const artists = ref([])

    const colRef = collection(db, 'Artists')

    getDocs(colRef)
    .then(snapshot => {
      let docs = []
      snapshot.docs.forEach(doc => {
        docs.push({...doc.data(), id: doc.id})
      })
      artists.value = docs
      console.log (artists.value)
    })

    return { artists }
  },
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()
    tl.from('.fadeDrummer', {opacity:0})

    ScrollTrigger.create({
      animation: tl,
      trigger: ".fadeDrummer",
      start: "top center",
      end: "+=450",
      scrub: true
    })
  },
  methods: {
    openModal() {
      this.$emit('open')
    }
  }
}
</script>

<style scoped>

h3 {
  font-size: 4.1vw;
}

h4 {
  font-size: 2.25vw;
}

h5 {
  font-size: 1.25vw;
}

p {
  font-size: 16px;
}

.drummerHeader {
  font-size: 9vw;
  color: var(--primary-color-offwhite);
  width:90vw;
}

.drummerImg {
  width: 100vw;
  position: fixed;
  z-index: 0;
}

.descImg {
  object-fit: scale-down;
  }


.drummerContent {
  position: relative;
}

.drummerBackgroundScroll {
  width: 100vw;
  position: relative;
  margin-bottom: -54px;
  padding: 0;
}

.drummerBlack {
  z-index: 1;
  background: black;
  position: relative;
  width: 100vw;
}

.drummerTitleCard {
  z-index: 2;
  color: var(--primary-color-offwhite);
  width: 100vw;
  text-align: center;
  padding: 0 5vw;
}



.drummerBio {
  display: flex;
  flex-direction: column;
  padding: 100px 15vw;
  color: var(--primary-color-offwhite);
}

.drummerBio p {
  margin: 3vh 0;
}

.drummerBioRow {
  display: flex;
}

.drummerBioRow img {
  width: 40vw;
  height: auto;
}

.drummerBio h5 {
  padding: 20px;
  font-size: 2.5vh;
  margin: auto;
}

.quoted {
  font-size: 24px;
}


.contactLinkSM {
  display: none;
}

.panelsSection {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  background-color: black;
}

.panels {
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: all 0.6s ease-in-out;
}

.panelTitleBanner {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  transition: 1s;
  opacity: 0;
}

.panelTitleBanner h3 {
  color: var(--primary-color-offwhite);
  padding: 40vh 0;
  text-align: center;
  text-transform: uppercase;
}

.panelTitleBanner:hover {
  opacity: 1;
}

.panel {
  width: 100vw;
  height: 100vh;
  position: relative;
  transition: all 0.6s;
  filter: grayscale(100%);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95%), url('../assets/images/Panelimages/transatlantic.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.panel::after {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.6s ease-in-out;
}

.panel:hover {
  width: 200%;
  filter: grayscale(0%);
}

.panel:hover::after {
  background-color: var(--transparent-hover-light);
}

.contactLink {
  background-color: transparent;
  color: var(--primary-color-offwhite);
  transition: 0.5s;
}

.contactLink:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.mobileProjectsSection {
  display: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction:column;
}

.project {
  display: flex;
  padding: 2.5vw;
  background-color: black;
  transition: 0.3s;
}

.projectImg {
  width: 40vw;
  height: 40vw;
  object-fit: cover;
}

.projectTitle {
  padding: 0 2.5vw;
  margin: auto;
  text-align: center;
  color: var(--primary-color-offwhite);
  font-size: 4vw;
  text-transform: uppercase;
}

.project:hover {
  background-color: rgb(34, 34, 34);
}

.project {
  display: none;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {
}

/* M TABLETS */
@media screen and (max-width: 992px) {

  h3 {
    font-size: 8.5vw;
  }

  h4 {
    font-size: 6vw;
  }

  h5 {
    font-size: 3.5vw;
  }

  .drummerBanner {
    padding-top: 20vh;
  }

   .contactLink {
    display: none;
  }

  .contactLinkSM {
    display: block;
    color: var(--primary-color-offwhite);
  transition: 0.5s;
  }

  .contactLinkSM:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

  .descImg {
    display: none;
  }

  .panelsSection {
    display: none;
  }

  .mobileProjectsSection {
  display: flex;
}

.project {
  display: flex;
}
}

/* S PHONES */
@media screen and (max-width: 576px) {

  .drummerImg {
  width: 250vw;
  left: -85vw;
}

.drummerBackgroundScroll {
  width: 250vw;
  left: -85vw;
}

  .drummerBanner {
    padding-top: 10vh;
  }

  .drummerBio {
  padding: 100px 5vw;
  color: var(--primary-color-offwhite);
}

  p {
  text-align: center;
}

.quoted {
  font-size: 24px;
}
}
</style>