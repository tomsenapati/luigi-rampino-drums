<template>
<div class="navbar">
  <div class="navbarItems">
    <router-link :to="{ name: 'home' }">
      <div class="navHome">
        <h1>LUIGI</h1>
        <h1 class="navSpacer">RAMPINO</h1>
      </div>
    </router-link>
    <div class="burgerIcon">
      <Burger></Burger>
    </div>
  </div>
</div>
</template>

<script>
import Burger from './Burger.vue';

export default {
 name: 'app',
 components: {
   Burger
 }
}
</script>

<style scoped>
.navbar {
  z-index: 10;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  padding: 1vh 2vh;
}

.navbarItems {
  width: 98vw;
  display: flex;
  justify-content: space-between;
}
.navHome {
  top: 20px;
  left: 20px;
  color: var(--transparent-hover-light);
  transition: 0.3s;
}

.burgerIcon {
  position: relative;
  width: 32px;
}

.navHome h1 {
  font-size: 16px;
}

.navHome:hover {
  color: var(--primary-color-offwhite);
}

.navSpacer {
  position: absolute;
  margin-top: -6px;
  background-color: transparent;
}

  /* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

  .burgerIcon {
  margin-right: 2vw;
}

}

/* M TABLETS */
@media screen and (max-width: 768px) {

}

/* S PHONES */
@media screen and (max-width: 576px) {
  
}
</style>