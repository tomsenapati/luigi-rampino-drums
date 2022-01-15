<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
    </div>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click.prevent="toggle" v-if="isBurgerActive"></div>
        <transition name="slide">
            <div v-if="isBurgerActive"
                 class="sidebar-panel">
                <div class="sidebarNavigation">
                  <router-link :to="{ name: 'portfolio' }" @click.prevent="toggle">
                  <h1>PORTFOLIO</h1>
                  </router-link>
                  <router-link :to="{ name: 'tutor' }"
                  @click.prevent="toggle">
                  <h1>DRUM LESSONS</h1>
                  </router-link>
                  <router-link :to="{ name: 'allshows' }"
                  @click.prevent="toggle">
                  <h1>SHOWS</h1>
                  </router-link>
                  <router-link :to="{ name: 'allreleases' }"
                  @click.prevent="toggle">
                  <h1>PROJECTS</h1>
                  </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: () => ({
            isBurgerActive: false
        }),
        methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
            }
        }
    }
</script>
<style scoped>
   .hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    button:focus {
        outline: 0;
    }

    .burger-button {
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: var(--transparent-hover-light);
        position: absolute;
        top: 50%;
        right: 4px;
        left: 4px;
        height: 3px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar {
        background-color: var(--primary-color-offwhite);
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.3s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar {
      z-index: 999;
    }
    .sidebar-backdrop {
        z-index: 999;
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: var(--transparent-hover-dark);
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 20vw;
    }

    .sidebarNavigation {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60vh;
      padding-top:15vh;
      color: var(--primary-color-offwhite);
      font-size: 12px;
    }

    .sidebarNavigation h1:hover {
      color: var(--transparent-hover-light);
      transition: 0.4s;
    }

    /* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

}

/* M TABLETS */
@media screen and (max-width: 768px) {
    .sidebar-panel {
        width: 30vw;
    }

}

/* S PHONES */
@media screen and (max-width: 576px) {
    .sidebar-panel {
        width: 50vw;
    }
  
}
</style>