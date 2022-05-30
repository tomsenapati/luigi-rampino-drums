<template>
<div class="navbar">
  <div class="navbarItems">
    <router-link :to="{ name: 'home' }">
      <div class="navHome">
        <h1>LUIGI</h1>
        <h1 class="navSpacer">RAMPINO</h1>
      </div>
    </router-link>
    <div class="admin" v-if="user">
      <h4>ADMIN MODE</h4>
      <button @click="handleClick">LOGOUT</button>
    </div>
    <div class="burgerIcon">
      <Burger></Burger>
    </div>
  </div>
</div>
</template>

<script>

import getUser from '../composables/getUser'

import Burger from './Burger.vue'

import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export default {
  setup() {

    const { user } = getUser()

    const handleClick = () => {

      signOut(auth)

    }

    return { handleClick, user }
  },
 name: 'app',
 components: {
   Burger
 }
}
</script>

<style scoped>
.navbar {
  z-index: 20;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  padding: 1vh 2vh;
  pointer-events: none;
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
  pointer-events: auto;
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

.admin {
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  pointer-events:none;
}

.admin h4 {
  margin: auto;
  color: red;
}

.admin button {
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  background-color: black;
  color: var(--primary-color-offwhite);
  border: var(--primary-color-offwhite) solid;
  transition: 0.6s;
  pointer-events: auto;
}

.admin button:hover {
  background-color: var(--primary-color-offwhite);
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.burgerIcon {
top: 0;
pointer-events: auto;
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