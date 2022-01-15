<template>
  <div class="allShows">

    <div class="allShowsTitle">
      <h1>ALL SHOWS</h1>
    </div>

    <h1 class="showTableSubtitle">UPCOMING</h1>
    <p>there are no upcoming shows to list</p>
    <!-- <div class="showTableAll">
      <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
            <h5>Colours, Hoxton</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <div class="showIconsAll">
              <div class="showIconAll">
                <h6>Buy Tickets</h6>
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div class="showIconAll">
                <h6>View Artist</h6>
                <i class="fas fa-music"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
            <h5>Colours, Hoxton</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <div class="showIconsAll">
              <div class="showIconAll">
                <h6>Buy Tickets</h6>
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div class="showIconAll">
                <h6>View Artist</h6>
                <i class="fas fa-music"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
            <h5>Colours, Hoxton</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <div class="showIconsAll">
              <div class="showIconAll">
                <h6>Buy Tickets</h6>
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div class="showIconAll">
                <h6>View Artist</h6>
                <i class="fas fa-music"></i>
              </div>
            </div>
          </div>
        </div>

    </div> -->
    <h1 class="showTableSubtitle">PAST SHOWS</h1>
    <p>there are no past shows to list</p>
    <!-- <div class="showTableAll">
      <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <h4>Colours, Hoxton</h4>
          </div>
        </div>

        <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <h4>Colours, Hoxton</h4>
          </div>
        </div>

        <div class="showAll">
          <div class="showTopAll">
            <h5>24/09/21</h5>
          </div>
          <div class="showContentAll">
            <h4>Transatlantic Family Band</h4>
            <h4>Colours, Hoxton</h4>
          </div>
        </div>

    </div> -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.allShows {
  width: 100vw;
  color: var(--primary-color-offwhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10vh;

}

.allShows p {
  font-size: 2vh;
  text-align: center;
}

.allShowsTitle {
  font-size: 3vw;
  margin: 5vw auto;

}

.showTableAll {
  width: 60vw;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.showAll {
  padding: 20px;
  transition: 0.3s;
  margin: 0;
}

.showAll:nth-child(odd) {
  background-color: var(--transparent-hover-dark)
}

.showTopAll {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
}

.showContentAll {
  display: flex;
  justify-content: space-between;
}

.showIconsAll {
  display: flex;
  justify-content: space-between;
  width: 10vw;
}

.showIconAll {
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

.showIconAll:hover {
  color: var(--transparent-hover-light);
}

.showIconAll i {
  margin: auto;
}

.showTableSubtitle {
  margin: 5vw auto;
}

/* XL SCREENS */
@media screen and (max-width: 1200px) {
  .showIconsAll {
  width: 11.5vw;
}
}

/* L LAPTOPS */
@media screen and (max-width: 992px) {
  .showIconsAll {
  width: 14.5vw;
}

}

/* M TABLETS */
@media screen and (max-width: 768px) {
  .showContentAll h4 {
  font-size: 2.25vw;
}
.showTopAll h5 {
  font-size: 1.25vw;
}
.showIconAll h6{
  display: none;
}

}

/* S PHONES */
@media screen and (max-width: 576px) {
  .allShowsTitle {
  font-size: 5vw;
}
  .showTableSubtitle {
    font-size: 6vw;
}
}
</style>