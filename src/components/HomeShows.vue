





<template>
<!-- 
<div v-for:"show in shows">
  <div class="show">
    <a :href="'//'+ {{ show.link }}" target="_blank">
    <div class="showTop">
      <h5>{{show.date}}</h5>
      <h5>{{show.venue}}</h5>
    </div>
    <h4>{{show.artist}}</h4>
  </div> 
  </a>
  <hr style="width:100px; margin: auto;" />
</div>
-->
  <div class="homeShows">
    <div class="card">
        <router-link :to="{ name: 'allshows' }"><h3 class="CardTitle">UPCOMING SHOWS</h3></router-link>
        <a :href="'//'+ 'www.google.com'" target="_blank">
        <div class="show">
          <div class="showTop">
            <h5>24/09/21</h5>
            <h5>Colours, Hoxton</h5>
          </div>
          <h4>Transatlantic Family Band</h4>
        </div> 
        </a>
        <hr style="width:100px; margin: auto;" />
        <div class="show">
          <div class="showTop">
            <h5>25/10/22</h5>
            <h5>Brixton Academy</h5>
          </div>
          <h4>Lui's Solo Adventures</h4>
        </div>
        <hr style="width:100px; margin: auto;" />
        <div class="show">
          <div class="showTop">
            <h5>26/11/23</h5>
            <h5>Madison Sq. Garden, NYC</h5>
          </div>
          <h4>Led Zeppelin</h4>
        </div>
        <hr style="width:100px; margin: auto;" />
        <router-link :to="{ name: 'allshows' }"><h5 class="seeMore">SEE MORE</h5></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h3 {
  font-size: 3.5vw;
}

h4 {
  font-size: 2.25vw;
}

h5 {
  font-size: 1.25vw;
}

.homeShows {
  position: relative;
  color: var(--primary-color-offwhite);
}
.card {
  text-align: center;
  width: 33vw;
  margin: 50px;
  padding: 50px;
}

.CardTitle {
  margin: 0 0 100px 0;
  transition: 0.3s;
}

.show {
  padding: 20px;
  margin: 30px 0 30px 0;
  transition: 0.3s;
}

.show:hover  {
  color: var(--transparent-hover-light);

}

.showTop {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
}

.CardTitle:hover,
.seeMore:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.seeMore {
  margin: 30px;
  transition: 0.3s;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {

}

/* L LAPTOPS */
@media screen and (max-width: 992px) {

h4 {
  font-size: 2.75vw;
}

h5 {
  font-size: 1.75vw;
}

}

/* M TABLETS */
@media screen and (max-width: 768px) {

  h3 {
    font-size: 8.5vw;
  }

  h4 {
    font-size: 6vw;
  }

  h5 {
    font-size: 3.5vw;
  }

  .card {
  text-align: center;
  width: 90vw;
  margin: 0 0 0 3vw;
  padding: 5vh 2vw;
  background-color: var(--transparent-hover-dark);
}

}

/* S PHONES */
@media screen and (max-width: 576px) {
  
}
</style>