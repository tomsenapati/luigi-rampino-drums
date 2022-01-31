<template>

<Navbar />

<div class="content">

  <router-view v-slot="{ Component }"> 
    <transition name="route" mode="out-in" appear>
      <component :is="Component" @open="displayModal"></component>
    </transition>
  </router-view>

    <transition appear name="modal-fade" mode="out-in">
    <div v-if="isModal" >
      <SocialModal @close="displayModal"/>
    </div>
  </transition>

</div>



<Footer @open="displayModal"/>
  
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import SocialModal from './components/SocialModal.vue'

export default {
  components: { Navbar, Footer, SocialModal},
  data() {
    return {
      isModal: false
    }
  },
  methods: {
    displayModal() {
      this.isModal = !this.isModal
    }
  }
}


</script>

<style>

.content {
  max-width: 1200px;
  width: 100vw;
  height: 100vh;
}
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px)
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    .content {
  width: 100%;
  height: 100%;
}
  }
</style>
