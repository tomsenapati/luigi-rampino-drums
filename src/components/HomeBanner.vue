<template>
<div class="homeBanner">
  <div class="backgroundContainer">
    <video class="heroImg heroImgVid" autoplay muted loop id="myVideo">
  <source src="../assets/images/LuigiWebsiteSizzle.mp4" type="video/mp4">
</video>
<img class="heroImgImg" src="../assets/images/staticHome.jpg" alt="">
<img class="heroImgGrad" src="../assets/images/gradientoverlay.png" alt="">
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

.homeBanner {
  width: 100vw;
}

  .backgroundContainer {
  position: sticky;
  top: 0;
  left:0;
  height: 100%;
  width: 100%;
  background-color: black;
  pointer-events: none;
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
  padding: 10px 0px;
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

  .heroImgImg {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;

  width: 70vw;
}

   .heroImgGrad {
  display: none;
}

  .header {
    font-size:10vw;
  }
  .header2 {
     top: -35px; 
  }
  .subHeader {
    font-size:5.5vw;
    top: 405px;
  }
  .subHeader a {
    font-size: 5.5vw;
  }
  .titleCard {
  padding: 250px 140px;
}

.heroImgVid {
  display: none;
}

  
}

/* M TABLETS */
@media screen and (max-width: 768px) {

.homeBanner {
  width: 100vw;
}

.heroImgImg {
width: 80vw;
}

  .header {
    font-size: 15vw;
  }

  .header2 {
    top: -6vw;
  }

  .subHeader {
    font-size:10vw;
    top: 60vh;
  }

  .subHeader a {
    font-size: 9vw;
  }

  .titleCard {
  padding: 40vh 10vw;
  height: 200px;
}

  
}

/* S PHONES */
@media screen and (max-width: 576px) {

  .heroImgImg {
width: 100vw;
}

  .header {
    font-size: 15vw;
  }
  .header2 {
    top: -6vw;
  }
  .subHeader {
    font-size:10vw;
    top: 56vh;
  }
  .subHeader a {
    font-size: 10vw;
  }
  .titleCard {
  padding: 40vh 8vw;
  height: 100px;
} 
}

/* XS */

@media screen and (max-width: 420px) {

  .subHeader {
    top: 52vh;
  }
 
}
</style>