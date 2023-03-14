<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="iconGroup">
        <a :href="'//'+ 'www.instagram.com/luigi_rampino/'" target="_blank">
      <div class="iconCard">
        <i class="fab fa-instagram iconModal"></i>
        <h5>@luigi_rampino</h5>
      </div>
      </a>
      <a :href="'//'+ 'www.facebook.com/lui.rampino'" target="_blank">
      <div class="iconCard">
        <i class="fab fa-facebook-square iconModal"></i>
        <h5>/lui.rampino</h5>
      </div>
      </a>
      <a :href="'//'+ 'mailto:lrampinodrums@gmail.com'" target="_blank">
      <div class="iconCard">
        <i class="far fa-envelope iconModal"></i>
        <h5>lrampinodrums@gmail.com</h5>
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color:rgba(0, 0, 0, 0.9);
    
  }

  .modal {
    position: fixed;
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
    width: 100%;
    height: 14vh;
    justify-content:space-between;
    transition: 0.3s;
  }

  .iconCard i {
    padding: 3vh;
  }

  .iconCard h5 {
    margin: auto 3vw;
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

  .modal {
    width: 55vw;
  }

  .iconCard {
    width: 55vw;
  }

}

/* M TABLETS */
@media screen and (max-width: 768px) {

  .iconCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .iconCard h5 {
    margin: auto auto 3vh auto;
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