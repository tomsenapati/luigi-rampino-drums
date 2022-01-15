<template>
  <div class="homeReleases">
    <div class="latestReleases">
      <router-link :to="{ name: 'allreleases' }"><h3 class="CardTitle">LATEST PROJECTS</h3></router-link>
        <div class="release">
          <div class="releaseMedia">
            <div class="mediaElement">
              <iframe src="https://open.spotify.com/embed/album/3fsv0zxjhRtnRgq5SchupI?theme=0" width="80%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
          <div class="releaseInfo">
            <h4>DUALISM (2021)</h4>
            <p>Luigi has been involved in the writing process of the eight tracks included in this latest release of the band during  which an intense collaboration and exchange of ideas happened with the other four members of TFB. At the rehearsal room based in Haggerston, London U.K. the band managed to put together their work by the end of 2018. This process was filled with excitement to have created some very interesting tracks and the band felt the  need to  share them with the public. This culminated into a 1 day live recording session at the beautiful “The Pool” Studios (MIloco) in London in early 2019 with Ben Thackeray (Ben’s previous clients include Nick Cave and the Bad Seeds, My Bloody Valentine, Black Rebel Motorcycle Club, Supergrass, Engineers, Steve Mason, Jamie Cullum and Rachel Zeffira) engineering the recordings. Subsequently the album was mixed by the producer Drew Nix in New York, U.S.A. Following the release of the five singles and music videos for " Out Of The Maze", "Motorik", "Let's Bop", "Desert Caravan", "Faraday Cage", “Dualism” came out on the September 10th 2021 with a great release concert at Colours, Hoxton in London.
            </p>
          </div>
        </div>
        <hr style="width:15vw; margin: auto;" />
        <div class="release releaseReverse">
          <div class="releaseInfo2">
            <h4>BROKEN ROAD (2020)</h4>
            <p>The recordings for “Broken Road” happened at the marvellous Velvet Recording Studios Just outside Oslo, Norway. Luigi flew there in the winter of 2019 and layered the drums parts for the album during a 6 days session in this amazing live room the studio had to offer. This was the second studio album that he recorded for Ben Hemming and this time Nick Terry was in charge of the whole recording/mixing/production of the album. This was released in 2020 anticipated by the three singles "Say You Will", "Holy War" and "Dark Deals".
            </p>
          </div>
          <div class="releaseMedia">
            <div class="mediaElement">
              <iframe src="https://open.spotify.com/embed/album/3s2El7zdiVhyOQDXpXjNyQ?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
          </div>
        </div>
        <hr style="width:15vw; margin: auto;"/>
        <div class="seeMoreContainer">
          <h5 class="releaseSeeMore"><router-link :to="{ name: 'allreleases' }">SEE MORE</router-link></h5> 
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.CardTitle {
  margin: 0 0 100px 0;
  transition: 0.3s;
}

.latestReleases {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 25%);
  margin: 50px;
  padding: 50px 100px 0px 20px;
  color: var(--primary-color-offwhite);
  width: 90vw;
}

.release {
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0);
  margin: 100px 0px;
  width: 100%;
}

.releaseMedia {
  width: 700px;
  margin: auto;
}

.releaseInfo {
  text-align: right;
  width: 50%;
  padding: 0px 0px 0px 50px;
}

.releaseInfo2 {
  text-align: left;
  width: 50%;
  padding: 0px 50px 0px 0px;
}

.releaseInfo h4 {
  padding: 0px 0px 0px 50px;
}

.releaseInfo p {
  padding: 0px 0px 0px 50px;
  margin-top: 50px;
  font-size: 16px;
}

.releaseInfo2 h4 {
  padding: 0px 50px 0px 0px;
}

.releaseInfo2 p {
  padding: 0px 50px 0px 0px;
  margin-top: 50px;
  font-size: 16px;
}

.releaseSeeMore {
  z-index: 2;
  margin: 30px;
  transition: 0.3s;
  color: var(--primary-color-offwhite);
}

.releaseSeeMore:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.seeMoreContainer { 
  display: flex;
  justify-content:center;
}


/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

  .homeReleases {
    position: relative;
    background-color: black;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%);
  }

  .latestReleases {
  width: 100vw;
  background-color: var(--transparent-hover-dark);
  margin: 0 0 0 3vw;
  padding: 10vh 2vw;
  color: var(--primary-color-offwhite);
  width: 90vw;
}

  .release {
    flex-direction: column-reverse;
    justify-content: center;
    margin: 120px 0;
  }

  .releaseReverse {
    flex-direction: column;
    justify-content: center;
  }

  .releaseInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 90vw;
  margin-bottom: 50px;
  padding: 0;
  margin-left: -3vw;
}

.releaseInfo2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 90vw;
  margin-bottom: 50px;
  padding: 0;
  margin-left: 3vw;
}

.releaseMedia {
  width: 100%;
  display: flex;
  justify-content: center;
}

.CardTitle {
  text-align: center;
  margin-top: 0;
}

.releaseInfo h4 {
  padding: 0;
  margin: auto;
}

.releaseInfo p {
  margin: 0 15vw;
  padding: 0;
  margin-top: 50px;
  font-size: 16px;
}

.releaseInfo2 h4 {
  margin: 0;
  padding: 0;
}

.releaseInfo2 p {
  margin: 0 15vw;
  padding: 0;
  margin-top: 50px;
}

.mediaElement {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 10vw;
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

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .releaseInfo p {
  margin: 5vh 0;
  font-size: 12px;
}

.releaseInfo2 p {
  margin: 5vh 0;
  font-size: 12px;
}

.mediaElement {
  margin: -5vh 0vw -10vh 0vw;
}

.latestReleases {
  padding: 20vh 2vw 10vh 2vw;
}
}
</style>