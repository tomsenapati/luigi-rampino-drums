<template>

  <div class="homeShows" v-if="upcoming != 0">
    <div class="card">
        <h3 class="CardTitle">UPCOMING SHOWS</h3>

        <div v-for="show in upcoming" :key="show.id">

          <a :href="'//' + show.Link" target="_blank">
        <div class="show">
          <div class="showTop">
            <h5>{{ readableDate(show.Date) }}</h5>
            <h5>{{show.Venue}}</h5>
          </div>
          <h4>{{show.Artist}}</h4>
        </div> 
        </a>

        <hr style="width:100px; margin: auto;" />

        </div>

        <router-link :to="{ name: 'allshows' }"><h5 class="seeMore">SEE MORE</h5></router-link>
    </div>
  </div>
</template>

<script>

import getCollection from '@/composables/getCollection'

export default {

  setup () {
    
    const stringDay = Math.floor(new Date(Date.now()).setHours(0,0,0,0) / 1000);

    const { documents: upcoming } = getCollection('Shows',
    'whereOrderBy',
    ["Date", ">=", stringDay],
    ["Date", "asc"]
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
    


    return { upcoming, readableDate }


  }

}
</script>

<style scoped>

.homeShows {
  position: relative;
  color: var(--primary-color-offwhite);
  width: 100vw;
}
.card {
  text-align: center;
  width: 33vw;
  margin: 100px;
  padding: 50px;
}

.CardTitle {
  margin: 0 0 100px 0;
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

.seeMore:hover {
  color: var(--transparent-hover-light);
  cursor: pointer;
}

.seeMore {
  margin: 30px;
  transition: 0.3s;
}



/* L LAPTOPS */
@media screen and (max-width: 992px) {

  .card {
  text-align: center;
  width: 90vw;
  margin: 0 0 0 3vw;
  padding: 5vh 2vw;
  background-color: var(--transparent-hover-dark);
}

}
</style>