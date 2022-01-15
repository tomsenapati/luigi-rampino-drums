<template>
<div class="footer">
  <div class="socials" @click="openModal">
    <div class="socialsIcons">
      <i class="fab fa-instagram icon"></i>
      <i class="fab fa-facebook-square icon"></i>
      <i class="far fa-envelope icon"></i>
    </div>
  </div> 
</div>
</template>

<script>

export default {
  methods: {
    openModal() {
      this.$emit('open')
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 1px;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  background-color: black;
  height: 84px;
  width: 100%;
  color: var(--transparent-hover-light);
  background-color: transparent;
}

.socials {
  text-align: right;
  bottom: 0;
  margin: 50px;
  transition: 0.1s;
}

.socialsIcons {
  position: absolute;
  width: 100px;
  right: 10px;
  bottom: 10px;
  transition: 0.3s;
}

.socialsIcons:hover {
  color: var(--primary-color-offwhite);
  cursor: pointer;
}

.icon {
  font-size: 28px;
  margin: 0px 3px;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

}

/* M TABLETS */
@media screen and (max-width: 768px) {

}

/* S PHONES */
@media screen and (max-width: 576px) {
  .icon {
  font-size: 20px;
  margin: 0px 2px;
}
}

</style>