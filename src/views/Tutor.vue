<template>
  <div class="tutor">

    <div class="tutorBackgroundContainer">
      <img class="tutorImg" src="../assets/images/tutor.jpg">
    </div>


        <i @click="slideDisplayDecrement" class="chevron fas fa-chevron-left"></i>
        <i @click="slideDisplayIncrement" class="chevron fas fa-chevron-right"></i>


          <div  class="tutorContentBox">
            <div class="tutorContent">

              <h3>DRUM LESSONS</h3>
              <h5>AVAILABLE NOW</h5>
                <div  class="tutorContentPara" v-if="slideDisplay === 1" key="1">
                <p>Detailed and customised programmes intended for students to explore all possibilities in the music industry and acquire drumming skills needed in order to progress</p>
                <p>Lessons  based around learning and experiencing core drumming concepts, including drumming rudiments, limb independence, counting/timing & techniques</p>
                <p>A unique approach to teaching from a background in Progressive Rock, but with the ability to span many different styles like Rock, Pop, Funk, Jazz & Blues</p>
              </div>

              <div class="tutorContentPara" v-if="slideDisplay === 2" key="2">
                <p>Luigi is a well established and experienced tutor, having taught drums in music schools across London for over 7 years, continuing to teach at many insitutes in the city and across the south east including:</p>
                  <h5>Windsor Music School, London, U.K.</h5>
                  <h5>Bsharp Studios, London, U.K.</h5>
                  <h5>Musically Instrumental, London, U.K.</h5>
                  <h5>Young Harmonisers Music School, Grays, U.K.</h5>
                  <h5>Canada Estate Drumming Club, London, U.K</h5>
              </div>

              <div class="tutorContentPara" v-if="slideDisplay === 3" key="3">
                <h5>Drum lessons for all ages & abilities</h5>
                <h5>7+ years of teaching experience</h5>
                <h5>A variety of styles & influences</h5>
                <h5 class="contactLinkTut" @click="openModal" >If you are interested in my tutoring services, please contact me here</h5>
              </div>


            </div>
          </div>
        


  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      slideDisplay: 1
    }
  },
  methods: {
    slideDisplayIncrement() {
      if (this.slideDisplay < 3) {
        this.slideDisplay = this.slideDisplay + 1;
      }
      else {
        this.slideDisplay = 1;
      }
    },

    slideDisplayDecrement() {
      if (this.slideDisplay > 1) {
        this.slideDisplay = this.slideDisplay - 1;
      }
      else {
        this.slideDisplay = 3;
      }
    },
    openModal() {
    this.$emit('open')
    }
  }
}
</script>

<style>

.tutorBackgroundContainer {
  display: flex;
  flex: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.tutorImg {
  width: 75vw;
  margin: auto;
}

.tutorContentBox {
  position: absolute;
  z-index: 1;
  top:0; 
  background-color: var(--transparent-hover-dark);
  width: 64vw;
  height: 64vh;
  margin: 18vh 18vw;
}

.tutorContent {
  padding: 20px;
  text-align: center;
  color: var(--primary-color-offwhite);
}

.tutorContentPara {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  height: 50vh;
  padding: 0 5vw;
}

.tutorContent p {
  text-align: left;
}

.chevron {
  position: fixed;
  top:0;
  z-index: 0;
  color: var(--transparent-hover-light);
  font-size: 10vh;
  margin-top: 43vh;
  transition: 0.3s;
}

.chevron:hover {
  color: var(--primary-color-offwhite);
}

.fa-chevron-left {
  left: 10vw;
}

.fa-chevron-right {
  right: 10vw;
}

.contactLinkTut {
  background-color: transparent;
  color: var(--primary-color-offwhite);
  transition: 0.5s;
}

.contactLinkTut:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {
  .tutorImg {
  width: 80vw;
}
}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .tutorImg {
  width: 85vw;
}

  .fa-chevron-left {
  left: 5vw;
}

.fa-chevron-right {
  right: 5vw;
}

.tutorContent h3 {
    font-size: 30px;
  }

  .tutorContent {
    text-align: center;
  }

  .tutorContent p {
    text-align: center;
  }

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .tutorImg {
  width: 90vw;
}

  .tutorContent h3 {
    font-size: 20px;
  }

  .tutorContent p {
  font-size: 3vw;
}

.tutorContent h5 {
  font-size: 3vw;
}
}

</style>