<template>
  <div class="allShows">

    <div class="allShowsTitle">
      <h1>ALL SHOWS</h1>
    </div>

    <h3 class="showTableSubtitle">UPCOMING SHOWS</h3>

    <p v-if="upcoming == 0">there are no upcoming shows to list</p>

    <div class="showTableAll">
      <div class="showAll" v-for="upcomingshow in upcoming" :key="upcomingshow.id">
          <div class="showTopAll">
            <h5>{{ readableDate(upcomingshow.Date) }}</h5>
            <h5 class="venue" >{{upcomingshow.Venue}}</h5>
          </div>
          <div class="showContentAll">
            <h4>{{upcomingshow.Artist}}</h4>
            <div class="showIconsAll">
              <a :href="'//'+ upcomingshow.Tickets" target="_blank">
              <div class="showIconAll">
                <h6>Buy Tickets</h6>
                <i class="fas fa-ticket-alt"></i>
              </div>
              </a>
              <a :href="'//' + upcomingshow.Link" target="_blank">
              <div class="showIconAll">
                <h6>View Artist</h6>
                <i class="fas fa-music"></i>
              </div>
              </a>
            </div>
          </div>
        </div>
    </div>

    <h3 class="showTableSubtitle">PAST SHOWS</h3>

    <p v-if="past == 0">there are no past shows to list</p>

    <div class="showTableAll">
        <div class="showAll" v-for="pastshow in past" :key="pastshow.id">
          <div class="showTopAll">
            <h5>{{readableDate(pastshow.Date)}}</h5>
            <h5 class="venue">{{pastshow.Venue}}</h5>
          </div>
          <div class="showContentAll">
            <h4>{{pastshow.Artist}}</h4>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'


export default {

  setup() {

    const stringDay = Math.floor(new Date(Date.now()).setHours(0,0,0,0) / 1000);

    const { documents: upcoming } = getCollection('Shows',
    'whereOrderBy',
    ["Date", ">=", stringDay],
    ["Date", "asc"]
    )


    const { documents: past } = getCollection('Shows',
    'whereOrderBy',
    ["Date", "<", stringDay],
    ["Date", "desc"]
    )

    const readableDate = (unix) => {
      var reformedDate = new Date(unix * 1000)
      var reformedDay = reformedDate.getDate()
      var reformedMonth = reformedDate.getMonth() + 1
      reformedDay = reformedDay.toString()
      reformedMonth = reformedMonth.toString()

      if (reformedDay.length == 1){
        reformedDay = '0' + reformedDay
      }

      if (reformedMonth.length == 1) {
        reformedMonth = '0' + reformedMonth
      }
      const formatted = `${reformedDay} / ${reformedMonth} / ${reformedDate.getFullYear()}`
      return formatted
    }
    


    return { upcoming, past, readableDate }

  }

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
  text-align: center;
}

.allShowsTitle {
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
  justify-content: space-between;
  transition: 0.3s;
}

.showIconAll:hover {
  color: var(--transparent-hover-light);
}

.showIconAll i {
  margin: auto;
  margin-top: 1vh;
}

.showTableSubtitle {
  margin: 5vw auto;
}

.venue {
  width: 65%;
  text-align: right;
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

.showIconAll h6{
  display: none;
}

 .showIconsAll {
  width: 10vw;
}

.showIconAll i {
  margin: 0 auto;
}

}

/* S PHONES */
@media screen and (max-width: 576px) {

}
</style>