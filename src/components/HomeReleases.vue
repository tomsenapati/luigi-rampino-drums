<template>
  <div class="homeReleases">
    <div class="latestReleases">

          <h3 class="CardTitle">LATEST PROJECTS</h3>


          <div class="release" v-for="(release, i) in releases" :key="release.id">
            <div class="releaseOnly" v-if="i <= 1">

              <h4>{{release.Title}}</h4>

              <div class="releaseOnlyFlex">

                <div class="releaseMedia">
                <div v-html="release.iFrame" class="mediaElement"></div>
              </div>
            


                <p class="releaseInfo" >{{release.Description}}</p>


              </div>

              <hr style="width:100px; margin: auto;" />
          
            </div>
          </div>

    
        <div class="seeMoreContainer">
          <router-link :to="{ name: 'allreleases' }"><h5 class="releaseSeeMore">SEE MORE</h5></router-link>
        </div>

    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {

  setup() {

    const { documents: releases } = getCollection(
      'Releases',
      'orderBy',
      ["Time", "desc"])
      
    return { releases }

  }
}
</script>

<style scoped>

.homeReleases {
  width: 100vw;
}

.latestReleases {
  position: relative;
  margin: auto;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 25%);
  color: var(--primary-color-offwhite);
}

.CardTitle {
  margin: auto 10vw;
}

.release {
  width: 90vw;
  margin: auto;
}

.releaseOnly {
  margin: 10vh auto;
}

.releaseOnly h4 {
  margin: 10vh auto;
  text-align: center;
}

.releaseOnlyFlex {
  display: flex;
  justify-content: space-between;
  padding: 5vh 0;

}


.releaseMedia {
  width: 700px;
  margin: auto;
}

.releaseInfo {
  width: 50%;
  padding: 0px 0px 0px 50px;
  text-align: center;
}

.releaseSeeMore:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.seeMoreContainer { 
  display: flex;
  justify-content:center;
  width: 100%;
  padding-bottom: 5vh;
}

.releaseSeeMore {
  z-index: 3;
  margin: auto;
  transition: 0.3s;
  color: var(--primary-color-offwhite);
}

/* L TABLETS */
@media screen and (max-width: 992px) {

  .homeReleases {
    position: relative;
    background-color: black;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%);
  }

  .latestReleases {
  background-color: var(--transparent-hover-dark);
  padding: 10vh 2vw;
  width: 90vw;
}

  .releaseOnlyFlex {
    flex-direction: column-reverse;
    justify-content: center;
  }

  .releaseInfo {
  text-align: center;
  width: 75%;
  margin: 5vh auto 10vh auto;
  padding: 0;
}


.releaseMedia {
  width: 100%;
  display: flex;
  justify-content: center;
}

.CardTitle {
  text-align: center;
}

.releaseOnly h4 {
  padding: 0;
  margin: auto;
}

.mediaElement {
  width: 100%;
  margin: 0 10vw;
}

.seeMoreContainer { 
  padding-bottom: 0.5vh;
}



}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .releaseInfo {
  width: 100%;
}

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .releaseInfo p {
  margin: 5vh 0;
  font-size: 12px;
}

.mediaElement {
  margin: 0;
}

.seeMoreContainer { 
  padding-bottom: 0;
}
}
</style>