<template>
<div class="homeBanner">
  <div class="backgroundContainer">
    <video class="heroImg heroImgVid" autoplay muted loop id="myVideo">
  <source src="../assets/images/LuigiWebsiteSizzle.mp4" type="video/mp4">
</video>
<img class="heroImg heroImgImg" src="../assets/images/staticHome.jpg" alt="">
<img class="heroImgGrad" src="../assets/images/gradientoverlay.png" alt="">
<img class="heroImgGrad2" src="../assets/images/gradientoverlay2.png" alt="">
  </div>
    <div class="titleCard">
      <div class="titleBox"></div>
      <h1 class="header">LUIGI</h1>
      <h1 class="header header2">RAMPINO</h1>
        <p class="subHeader"><router-link :to="{ name: 'portfolio' }">DRUMMER</router-link> | <router-link :to="{ name: 'tutor' }">TUTOR</router-link></p>
    </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>

  .backgroundContainer {
  position: sticky;
  top: 0;
  left:0;
  height: 100%;
  width: 100%;
  background-color: black;
}

.heroImg {
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: 70vw;
}

.heroImgGrad {
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: 70.5vw;
}

.heroImgGrad2 {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: 70.5vw;
}

.titleCard {
  position: relative;
  height: 230px;
  padding: 30vh 170px;
}

.header {
  font-size: 110px;
  color: var(--primary-color-offwhite);
}

.header2 {
  position: relative;
  top: -45px;
}

.subHeader {
  position: absolute;
  top: 420px;
  margin: 0 1px;
  color: var(--transparent-hover-light);
  font-size: 56px;
}

.subHeader a {
  color: var(--transparent-hover-light);
  font-size: 56px;
  text-decoration: none;
  transition: 0.3s;
}

.subHeader a:hover {
  color: var(--primary-color-offwhite);
}

.heroImgImg {
  display: none;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {
  .heroImg {
    width: 55vw;
  }
  .heroImgGrad {
  width: 55.5vw;
}
  .header {
    font-size:90px;
  }
  .header2 {
    top: -37px;
  }
  .subHeader {
    font-size:46px;
    top: 380px;
  }
  .subHeader a {
    font-size: 46px;
  }
  .titleCard {
  padding: 230px 180px;
  height: 166px;
}

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {
  .heroImg {
    width: 63vw;
  }

   .heroImgGrad {
  width: 63.5vw;
}

  .header {
    font-size:65px;
  }
  .header2 {
     top: -25px; 
  }
  .subHeader {
    font-size:34px;
    top: 360px;
  }
  .subHeader a {
    font-size: 33px;
  }
  .titleCard {
  padding: 250px 140px;
}

.heroImgVid {
  display: none;
}

.heroImgImg {
  display: block;
}
  
}

/* M TABLETS */
@media screen and (max-width: 768px) {
  .heroImg {
    width: auto;
    height: 50vh;
    right: auto;
  }

   .heroImgGrad {
  width: auto;
    height: 50.5vh;
    right: auto;
}

  .header {
    font-size: 15vw;
  }
  .header2 {
    top: -6vw;
  }
  .subHeader {
    font-size:10vw;
    top: 59vh;
  }
  .subHeader a {
    font-size: 9vw;
  }
  .titleCard {
  padding: 40vh 10vw;
  height: 320px;
}

  
}

/* S PHONES */
@media screen and (max-width: 576px) {

  .heroImgGrad {
    display: none;
}

.heroImgGrad2 {
  width: auto;
    height: 50.5vh;
    right: auto;
  display: block;
}

  .header {
    font-size: 15vw;
  }
  .header2 {
    top: -6vw;
  }
  .subHeader {
    font-size:10vw;
    top: 54vh;
  }
  .subHeader a {
    font-size: 10vw;
  }
  .titleCard {
  padding: 40vh 8vw;
  top: 0;
}  
}
</style>