<template>
  <div class="allReleases">

      <h1 class="allReleasesTitle">PROJECTS</h1>

    
    <div class="dbRelease" v-for="release in releases" :key="release.id">

        <h5 class="releaseProjectAll">{{release.Artist}}</h5>

        <div class="releaseContentAll">
          <h4 class="releaseTitleAll">{{release.Title}}</h4>
          <div class="releaseContentFlex">
            <div v-html="release.iFrame" class="releaseMediaAll mediaElement"></div>
            <p>{{release.Description}}</p>
          </div>

          
        </div>

      <hr style="width:100px; margin: auto;" />

    </div>
    <div class="bottomSpacer"></div>

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

.allReleases {
  width:100vw;
  color: var(--primary-color-offwhite);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 10vh;
}

.allReleasesTitle {
  margin: 5vw;
}


.releaseProjectAll {
  color: var(--transparent-hover-light);
  margin: auto;
  padding-bottom: 10vh;
}

.dbRelease {
  width: 90vw;
  margin: auto;
  margin-top: 10vh;
}

.releaseContentFlex {
  display: flex;
  justify-content:space-between;
  flex-direction: row;
  padding-bottom: 10vh; 
}

.releaseContentFlex p {
  width: 40vw;
  padding: 0 5vh;
  text-align: center;
}

.releaseTitleAll {
  margin: auto;
  padding-bottom: 5vh;
}

.releaseMediaAll {
  width: 40vw;
  margin: auto;
}

.mediaElement {
  overflow: hidden;
  position: relative;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

  .releaseContentFlex {
  flex-direction: column-reverse;

}

.releaseContentFlex p {
  width: 80vw;
  padding: 5vh 0;
  margin: auto;
}

  .releaseHeaderAll {
  margin: 3vh auto;
}

  .allReleases {
  padding: 0;
  color: var(--primary-color-offwhite);
  width: 90vw;
  margin: auto;
}
  .releaseInfoAll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 90vw;
  margin-bottom: 50px;
  padding: 0;
}

.releaseInfoAll h4 {
  padding-bottom: 3vh;
}

.releaseMediaAll {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
}

.releaseInfoAll h4 {
  padding: none;
  margin: auto;
}

.releaseInfoAll p {
  margin: 0 15vw;
  padding: none;
  margin-top: 50px;
}

.mediaElement {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  margin-bottom: 10vh;
}

.mediaElement::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.mediaElement iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .releaseInfoAll p {
    margin-top: 10px;
  }

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .releaseInfoAll p {
  margin: 5vh 0;
}
.mediaElement {
margin: 0;
}

.releaseAll {
  padding: 5vh 2vw;
}

.allReleasesTitle {
  font-size: 5vw;
  margin: 10vh 0 0 0;
}
}
</style>