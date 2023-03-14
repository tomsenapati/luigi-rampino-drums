<template>
  <div class="tutor">

    <div class="tutorBackgroundContainer">
      <img class="tutorImg" src="../assets/images/NewTutorBackground.jpg">
    </div>

    <div class="lessonsFlex">
      <div class="lessonsTitleCard">
        <h1 class="lessonsTitle">DRUM LESSONS</h1>
        <h2 class="lessonsSubtitle">AVAILABLE NOW</h2>
      </div>
      <div class="lessonsRowBox">

        <div class="lessonsRow1">
          <div class="tutorContentPara headerPara">
                <h5 class="bullet">FOR ALL AGES & ABILITIES</h5>
                <h5 class="bullet">A VARIETY OF STYLES & INFLUENCES</h5>
                <h5 class="bullet">7+ YEARS OF TEACHING EXPERIENCE</h5>
                <div class="clickBorder" @click="openModal" > <h5 class="contactLinkTut bullet"  >CONTACT ME</h5> </div>
          </div>
        </div>
        
          <div class="arrow bounce">
            <a href="#scroll">
              <span class="fa fa-arrow-down fa-2x"></span>
            </a>
          </div>
        
         


        <div class="lessonsRow2">


          <div  class="tutorContentParaBottom" id="scroll">
                <h4 class="lessonsSubtitle" > WHAT CAN YOU EXPECT?</h4>
                <p class="text" >Detailed & customised programmes intended for students to explore all possibilities in the music industry and acquire the drumming skills needed in order to progress.</p>
                <p class="text" >A lesson programme based around learning and experiencing core drumming concepts:</p>
                <h5 class="bullet">drumming rudiments</h5>
                <h5 class="bullet">limb independence</h5>
                <h5 class="bullet">counting / timing</h5>
                <h5 class="bullet">drumming techniques</h5>
                <p  class="text" >A unique approach to teaching from a background in Progressive Rock, but with the ability to span many different styles like Rock, Pop, Funk, Jazz & Blues.</p>
              </div>


          <div class="tutorContentParaBottom">
            <h4 class="lessonsSubtitle" > WHO AM I?</h4>
                <p class="text" >Luigi is a well established and experienced tutor, having taught drums in music schools across London for over 7 years and continues to teach at many insitutes in the city and across the south east, including:</p>
                  <h5 class="bullet">Windsor Music School, London</h5>
                  <h5 class="bullet">Bsharp Studios, London</h5>
                  <h5 class="bullet">Musically Instrumental, London</h5>
                  <h5 class="bullet">Young Harmonisers Music School, Grays</h5>
                  <h5 class="bullet">Canada Estate Drumming Club, London</h5>
              </div>
        </div>
      </div>
    </div>
        


  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default {
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    ScrollTrigger
    .create({
      id: "tutorScroll",
      animation: tl,
      trigger: ".arrow",
      start: "top center",
      end: "+=350",
      scrub: true
    })

     tl
     .from('.tutorContentParaBottom', {opacity:0})
     .to('.arrow', {opacity:0}, 0)

  },
    beforeDestroy() {
	  ScrollTrigger.getById("tutorScroll").disable()
  },
  methods: {
    openModal() {
      this.$emit('open')
    }
  }
}
</script>

<style scoped>

.arrow {
  text-align: center;
}

.fa {
  margin: 5% 0;
  opacity: 100;
  color: var(--transparent-hover-light);
  transition: 0.6s;
}

.fa:hover {
  color: var(--primary-color-offwhite);
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.tutor {
  width: 100vw;
}

.tutorBackgroundContainer {
  position: fixed;
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  pointer-events: none;
  padding-top: 80px;
}

.tutorImg {
  position: fixed;
  width: 90vw;
  margin: auto;
}

.lessonsFlex {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--primary-color-offwhite);
}

.lessonsTitleCard {
  margin: 5vh auto;
  padding: 10px 20px;
  align-content: center;
  text-shadow: 3px 3px 3px var(--transparent-hover-dark);
}

.lessonsTitle {
text-align: center;
}

.lessonsSubtitle {
  text-align: center;

}

.lessonsRowBox {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
}

.lessonsRow1 {
  padding: 20px;
  text-align: center;

}

.lessonsRow2 {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.tutorContentPara {
  margin: auto;
  padding: 20px;
  background-color: var(--transparent-hover-dark);
}

.tutorContentParaBottom {
  margin: 100px 20px;
  width: 40vw;
  padding: 20px;
  background-color: var(--transparent-hover-dark);
}

.headerPara {
  width: 30vw;
}

.bullet {
  padding: 20px;
  text-transform: uppercase;
}

.text {
  padding: 20px 50px;
}

.contactLinkTut {
  transition: 0.3s;
}

.contactLinkTut:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.clickBorder {
  width: 50%;
  margin: 10px auto;
  border: var(--primary-color-offwhite) solid;
  transition: 0.6s;
}

.clickBorder:hover {
  background-color: var(--primary-color-offwhite)
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

  .arrow {
  margin: 15% 0;
}

  .tutorImg {
  width: 100vw;
  padding-top: 10vh;
}

.clickBorder {
  width: 60%;
}

.headerPara {
  width: 50vw;
}




}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .arrow {
  margin: 20% 0;
}

    .tutorImg {
      padding-top: 15vh;
    }


.clickBorder {
  width: 85%;
}

.headerPara {
  width: 60vw;
}

.lessonsRow2 {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.tutorContentParaBottom {
  margin: 50px auto;
  width: 90vw;
  padding: 20px;
  background-color: var(--transparent-hover-dark);
}

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .arrow {
  margin: 30% 0;
}

  .tutorImg {
    width: 150vw;
    padding-top: 20vh;
}

.clickBorder {
  width: 95%;
}
}

</style>