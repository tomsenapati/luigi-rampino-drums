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
                <p>Described as “a drummer with an innovative and creative approach to drumming”, “with a groove that is different from the norm and fully aware of its timing and feel”, Luigi (Lui) Rampino is a London based drummer, percussionist, educator and songwriter. He graduated from the British and Irish Institute of Modern Music in Brighton, receiving a BA Hons in Professional Musicianship with drum studies specialisation. He also comes from a classical percussion background having studied at the “D. Cimarosa” Conservatoire of Classical Music in Italy alongside his modern drum kit studies which he carried out since the age of 9.</p>
                <p>The last decade has seen him as part of numerous projects which he provided with his drumming. He has been working as a live and studio session player as well as having been an active member of various original projects. </p>
              </div>
              
              <img class="descImg" src="../assets/images/Luiedited.jpg" alt="">
            </div>

            <p>Luigi has been collaborating with a big variety of artists in the U.K. and across Europe. He has recently been busy touring and recording for bands and artists, such as Black Market Aftermath, Transatlantic Family Band, Ben Hemming and many more. Additionally he has been recording for other projects thanks to his vast fluency in many different styles. </p>
            <p>During his performing career, so far, he has had the pleasure to record in various renowned studios in the U.K. and Europe. He has performed in Konk Studios (London), Miloco Studio/The Pool (London), The Blue Studios (London), Velvet Recordings (Oslo, Norway), Masterlink Productions (U.K.).</p>
            <h5 class="contactLink" @click="openModal">If you would like to work together, please feel free to contact me here</h5>
            <h5 class="contactLinkSM" @click="openModal">CONTACT ME</h5>
          </div>
        </div>
      </div>
      <div class="panelsSection">
        <div class="panels">
          <a :href="'//'+ 'www.transatlanticfamilyband.com'" target="_blank"></a>
          <a :href="'//'+ 'www.benhemming.co.uk'" target="_blank"></a>
          <a :href="'//'+ 'www.blackmarketaftermath.bandcamp.com/'" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default {
  setup() {
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

.panels a {
  width: 100vw;
  height: 100vh;
  position: relative;
  transition: all 0.6s;
  filter: grayscale(100%);
}

.panels a:nth-child(1) {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95%),
    url('../assets/images/Panelimages/transatlantic.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.panels a:nth-child(2) {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95%),
    url('../assets/images/Panelimages/benhemming.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.panels a:nth-child(3) {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95%),
    url('../assets/images/Panelimages/superblood.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.panels a::after {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.6s ease-in-out;
}

.panels a:hover {
  width: 200%;
  filter: grayscale(0%);
}

.panels a:hover::after {
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

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {
  .drummerBanner {
    padding-top: 10vh;
  }
}

/* M TABLETS */
@media screen and (max-width: 768px) {
  .drummerBanner {
    padding-top: 20vh;
  }

   .contactLink {
    display: none;
  }

  .contactLinkSM {
    display: block;
  }

  .descImg {
    display: none;
  }
}

/* S PHONES */
@media screen and (max-width: 576px) {
  .drummerBanner {
    padding-top: 30vh;
  }

  .drummerBio p {
  font-size: 2vh;
  text-align: center;
}
}
</style>