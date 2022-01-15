<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="iconGroup">
        <a :href="'//'+ 'www.instagram.com/luigi_rampino/'" target="_blank">
      <div class="iconCard">
        <i class="fab fa-instagram iconModal"></i>
        <h4>www.instagram.com/luigi_rampino</h4>
      </div>
      </a>
      <a :href="'//'+ 'www.facebook.com/lui.rampino'" target="_blank">
      <div class="iconCard">
        <i class="fab fa-facebook-square iconModal"></i>
        <h4>www.facebook.com/lui.rampino</h4>
      </div>
      </a>
      <a :href="'//'+ 'mailto:luirampinodrums@gmail.com'" target="_blank">
      <div class="iconCard">
        <i class="far fa-envelope iconModal"></i>
        <h4>luirampinodrums@gmail.com</h4>
      </div>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color:rgba(0, 0, 0, 0.9);
    
  }

  .modal {
    position: absolute;
    width: 42vw;
    height: 42vh;
    top: 29vh;
    left: 29vw;
    margin: auto;
    padding: none;
    border: 6px solid var(--primary-color-offwhite);
    background-color:var(--transparent-hover-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .iconCard {
    display: flex;
    color: var(--primary-color-offwhite);
    width: 42vw;
    height: 14vh;
    justify-content:space-between;
    transition: 0.3s;
  }

  .iconCard i {
    padding: 3vh;
  }

  .iconCard h4 {
    margin: auto 3vw;
    font-size: 2.5vh;
  }

  .iconCard:hover {
    background-color: black;
  }

  .iconModal {
    font-size: 5vw;
  }


  /* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .iconCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .iconCard h4 {
    font-size: 2.5vw;
    margin: -20px auto auto auto;
  }

  .iconCard i {
    margin: auto;
    padding: none;
  }

}

/* S PHONES */
@media screen and (max-width: 576px) {

  .iconCard i{
    font-size: 10vw;
  }

}

</style>