<template>
<div class="admin">

  <h3 class="sectionTitle">ARTISTS</h3>

  <div class="artistPage">
      <div class="mobileProjectsSection">
        <div class="mobileProject" v-for="artist in currentArtists" :key="artist.id">
          <div class="project">

            <img class="projectImg" :src="artist.Banner">

            <div class="projectText">

              <h4 class="projectTitle">{{artist.Name}}</h4>

              <h5> {{ artist.Link }} </h5>

              <h5 class="deleteButton" @click="handleDelete(artist.id, artist.Name, artist.Image)">DELETE</h5>

            </div>


          </div>
        </div>
      </div>

    <div class="artistFormContainer">
      <form class="artistForm" @submit.prevent="artistSubmit">
        <h3 class="formTitle">ADD NEW ARTIST</h3>
        <p>Add a new artist to the Portfolio page, complete with banner image and link to their own web page.</p>
        <div class="formUnit">
          <label for="name">ARTIST NAME</label>
        <input class="input" type="text" name="name" v-model="name" required>
        </div>
        <div class="formUnit">
          <label for="link">ARTIST WEBSITE (MUST NOT INCLUDE HTTPS://)</label>
        <input class="input" type="text" name="link" v-model="link">
        </div>
        
        <div class="formUnit">
          <label for="image">UPLOAD BANNER IMAGE</label>
        <input class="input" type="file" name="image" @change="handleChange" required>
        </div>

        <div class="messageClass" :class="messageClass" > {{ displayMessage }} </div>
        <button>ADD ARTIST</button>

      </form>

    </div>
  </div>

  <h3 class="sectionTitle">PROJECTS</h3>

  <div class="artistPage">
      <div class="mobileProjectsSection">
        <div class="mobileProject" v-for="project in currentProjects" :key="project.id">
          <div class="project">

            <div class="projectText">

              <h4 class="projectTitle">{{project.Title}}</h4>
              <h4 class="projectArtist">{{project.Artist}}</h4>

              <p> {{ truncateDescription(project.Description)}}</p>

              <h5 class="deleteButton" @click="handleProjectDelete(project.id)">DELETE</h5>

            </div>


          </div>
        </div>
      </div>

    <div class="artistFormContainer">
      <form class="artistForm" @submit.prevent="projectSubmit">
        <h3 class="formTitle">ADD NEW PROJECT</h3>
        <p>Update your projects page with your latest work & involvements</p>
        <div class="formUnit">
          <label for="projectArtist">ARTIST</label>
        <input class="input" type="text" name="projectArtist" v-model="projectArtist" required>
        </div>
        <div class="formUnit">
          <label for="projectTitle">TITLE</label>
        <input class="input" type="text" name="projectTitle" v-model="projectTitle" required>
        </div>
        <div class="formUnit">
          <label for="projectDescription">DESCRIPTION</label>
        <textarea class="input descriptionBox" type="text" name="projectDescription" v-model="projectDescription" required></textarea>
        </div>
        <div class="formUnit">
          <label for="ProjectLink">EMBED LINK (MUST BE IN IFRAME FORMAT)</label>
        <input class="input" type="text" name="ProjectLink" v-model="ProjectLink" required>
        </div>

        <div class="messageClass" :class="messageClass" >{{projectDisplayMessage}}</div>
        <button>ADD PROJECT</button>

      </form>
    </div>

  </div>

  <h3>SHOWS</h3>

  <div class="artistPage">
      <div class="mobileProjectsSection">
        <h3 class="showTableSubtitle">UPCOMING SHOWS</h3>
<p v-if="upcoming == 0">there are no upcoming shows to list</p>
    <div class="showTableAll">
      <div class="showAll" v-for="upcomingshow in upcoming" :key="upcomingshow.id">
          <div class="showTopAll">
            <h5 class="textTrans">{{ readableDate(upcomingshow.Date) }}</h5>
            <h5 class="textTrans">{{upcomingshow.Venue}}</h5>
          </div>
          <div class="showContentAll">
            <h4 class="textTrans">{{upcomingshow.Artist}}</h4>
            <div class="showIconsAll">
              <a :href="'//'+ upcomingshow.Tickets" target="_blank">
              <div class="showIconAll">
                <h6>Buy Tickets</h6>
                <i class="fas fa-ticket-alt"></i>
              </div>
              </a>
              <a :href="'//'+ upcomingshow.Link" target="_blank">
              <div class="showIconAll">
                <h6>View Artist</h6>
                <i class="fas fa-music"></i>
              </div>
              </a>
            </div>
          </div>
          <h5 class="deleteButton" @click="handleShowDelete(upcomingshow.id)">DELETE</h5>
        </div>
    </div>

    <h3 class="showTableSubtitle">PAST SHOWS</h3>
      <p v-if="past == 0">there are no past shows to list</p>
    <div class="showTableAll">
        <div class="showAll" v-for="pastshow in past" :key="pastshow.id">
          <div class="showTopAll">
            <h5 class="textTrans">{{readableDate(pastshow.Date)}}</h5>
            <h5 class="textTrans">{{pastshow.Venue}}</h5>
          </div>
          <div class="showContentAll">
            <h4 class="textTrans">{{pastshow.Artist}}</h4>
          </div>
          <h5 class="deleteButton" @click="handleShowDelete(pastshow.id)">DELETE</h5>
        </div>
    </div>
      </div>

    <div class="artistFormContainer">
      <form class="artistForm" @submit.prevent="showSubmit">
        <h3 class="formTitle">ADD NEW SHOW</h3>
        <p>Update your shows page</p>
        <div class="formUnit">
          <label for="showsArtist">ARTIST</label>
        <input class="input" type="text" name="showsArtist" v-model="showsArtist" required>
        </div>
        <div class="formUnit">
          <label for="showsDate">DATE</label>
        <input class="input" type="date" name="showsDate" v-model="showsDate" required>
        </div>
        <div class="formUnit">
          <label for="showsVenue">VENUE</label>
        <input class="input" type="text" name="showsVenue" v-model="showsVenue" required>
        </div>
        <div class="formUnit">
          <label for="showsTickets">TICKET LINK (MUST NOT INCLUDE HTTPS://)</label>
        <input class="input" type="text" name="showsTickets" v-model="showsTickets">
        </div>
        <div class="formUnit">
          <label for="showsLink">ARTIST LINK (MUST NOT INCLUDE HTTPS://)</label>
        <input class="input" type="text" name="showsLink" v-model="showsLink">
        </div>

        <div class="messageClass" :class="messageClass" ></div>
        <button>ADD SHOW</button>

      </form>
    </div>

  </div>
</div>

</template>

<script>

import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'

import { ref } from 'vue'
import { db, storage } from '../firebase/config'
import { addDoc, collection, doc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "@firebase/storage"
import getCollection from '@/composables/getCollection'

export default {

  setup() {

    const { user } = getUser()
    const router = useRouter()

    watchEffect(() => {
      if(!user.value) {
        router.push('/')
      }
    })

    // ARTISTS FORM ////////////////////////////////////

    const artistColRef = collection(db, 'Artists')
    const { documents: currentArtists } = getCollection('Artists', 'orderBy', ["Name"])

    const displayMessage = ref(null)
    const messageClass = ref('')

    const fileTypes = ['image/png', 'image/jpeg']
    const file = ref(null)
    const name = ref('')
    const link = ref('')
    let banner = ''

    // Add New Artist

    const artistSubmit = async () => {
      if(file.value) {

        await uploadFiles(file.value, name.value)

        addDoc(artistColRef, {
          Name: name.value,
          Link: link.value,
          Banner: banner,
          Image: file.value.name
        })

        name.value = ''
        link.value = ''
        banner = ''
        messageClass.value = 'completed'
        displayMessage.value = 'Artist added!'
        
      }
    }

    const handleChange = (e) => {

      const selected = e.target.files[0]

      if(selected && fileTypes.includes(selected.type)) {
        file.value = selected
        displayMessage.value = null

      } else {

        file.value = null
        messageClass.value = 'error'
        displayMessage.value = 'Please select an image file (.png or .jpeg)'

      }
    }

    const uploadFiles = async (file, name) => {

      const storageReference = storageRef(storage, `/${name}/${file.name}`)

      if (!file) return;
 
      await uploadBytes(storageReference, file)

      await bannerLink(name, file.name);

      }

    const bannerLink = async (name, fileName) => {

      await getDownloadURL (storageRef(storage, `/${name}/${fileName}`))
      .then((url) => {
        banner = url
      })
      .catch(err => {
        console.log(err)
      })
    }

    //Delete Artist & Artist Img

    const handleDelete = (artist, name, imgFile) => {

      const docRef = doc(db, 'Artists', artist)

      const storageReference = storageRef(storage, `/${name}/${imgFile}/`)

      if (confirm(`Are you sure you want to delete ${name} from your portfolio?`)) {

        deleteDoc(docRef)

      deleteObject(storageReference)
      .then(() => {
        console.log('image deleted')
      }).catch((error) => {
        console.log(error)
      })
      } else {
        return;
      }

    } 

    // PROJECTS FORM /////////////////////////////////

    const projectColRef = collection(db, 'Releases')
    const { documents: currentProjects } = getCollection('Releases', 'orderBy',
      ["Time", "desc"])

      const projectArtist = ref('')
      const projectTitle = ref('')
      const projectDescription = ref('')
      const ProjectLink = ref('')

      const projectDisplayMessage = ref(null)

       const truncateDescription = (desc) => {
        if (desc.length > 100) {
       return desc.slice(0, 100) + "...";
      } else {
       return desc;
      }
    }


    // Add New Project

    const projectSubmit = () => {

        addDoc(projectColRef, {
          Artist: projectArtist.value,
          Title: projectTitle.value,
          Description: projectDescription.value,
          iFrame: ProjectLink.value,
          Time: serverTimestamp()
        })
        projectArtist.value = ''
        projectTitle.value = ''
        projectDescription.value = ''
        ProjectLink.value = ''
        messageClass.value = 'completed'
        projectDisplayMessage.value = 'Project added!'
        
    }

    const handleProjectDelete = (release) => {

      const projDocRef = doc(db, 'Releases', release)

      if (confirm(`Are you sure you want to delete this post from your projects page?`)) {

        deleteDoc(projDocRef)

      } else {

        return

      }


    } 

    // SHOWS FORM /////////////////////////////////
    const showsColRef = collection(db, 'Shows')

    const showsArtist = ref('')
    const showsDate = ref(null)
    const showsLink = ref('')
    const showsTickets = ref('')
    const showsVenue = ref('')

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

    const storableDate = (dateRef) => {
      const date = Math.floor(new Date(dateRef).setHours(23,59,59,0) / 1000); 
      return date;
      }

    const emptyShows = (upcoming, past) => {
      if(upcoming.length > 0) {
        upcomingLength = false
      } else if (past.length > 0) {
        pastLength = false
      } else {
        return
      }
    }

    emptyShows({documents: upcoming}, {documents: past})

    const showSubmit = () => {

      addDoc(showsColRef, {
          Artist: showsArtist.value,
          Date: storableDate(showsDate.value),
          Link: showsLink.value,
          Tickets: showsTickets.value,
          Venue: showsVenue.value
        })

        showsArtist.value = ''
        showsDate.value = null
        showsLink.value = ''
        showsTickets.value = ''
        showsVenue.value = ''

    }

    const handleShowDelete = (show) => {

      const showDocRef = doc(db, 'Shows', show)

      if (confirm(`Are you sure you want to delete this post from your shows page?`)) {

        deleteDoc(showDocRef)

      } else {

        return

      }
      }


    return { user, handleChange, handleDelete, artistSubmit, name, link, displayMessage, messageClass, currentArtists, currentProjects, truncateDescription, projectSubmit, projectDisplayMessage, projectArtist, projectTitle, projectDescription, ProjectLink, handleProjectDelete, showSubmit, upcoming, past, readableDate, storableDate, showsArtist, showsDate, showsLink, showsTickets, showsVenue, handleShowDelete, emptyShows }

  }
}
</script>

<style scoped>

.admin {
  width: 100vw;
  padding: none;
  padding-top: 5vh;
  width: 100vw;
  height: 100vh;
  margin: none;
}

h3, p, label, input, h1 {
  color:var(--primary-color-offwhite);
  background: black;
  text-align: center;
}

h3 {
  margin: 10vh auto 5vh auto;
}

h5, h4 {
  color:var(--primary-color-offwhite);
}

.sectionTitle {
  padding: 20px;

}

.error {
  color: red;
}
.completed {
  color: lightgreen;
}

.artistPage {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.mobileProjectsSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: var(--primary-color-offwhite) solid;
}

.mobileProject {
  border: var(--primary-color-offwhite) solid;
}

.artistFormContainer {
  width: 100%;
  margin: 0 0 0 10vw;
  padding: 20px;
}

.artistForm {
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
}

.project {
  display: flex;
}

.projectTitle {
  text-transform: uppercase;
}

.projectImg {
  width: 20vh;
  height: 20vh;
  padding: 20px;
  object-fit: cover;
}

.projectText {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 50px;
  width: 100%;
}

.projectArtist {
  color: var(--primary-color-offwhite);
  text-transform: uppercase;
  text-align:center;
  margin-bottom: 10px;
}

.descriptionBox {
  background: black;
  border: var(--primary-color-offwhite) solid;
  color: var(--primary-color-offwhite);
}

.deleteButton {
  color: red;
  background: none;
  margin-top: 20px;
  margin: auto;
  transition: all 0.6s;
}

.deleteButton:hover {
  color:var(--primary-color-offwhite);
  cursor: pointer;
}

.formUnit {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.formTitle {
  margin-bottom: 10px;
}

.messageClass {
  text-align: center;
  text-transform: uppercase;
}

.button {
  background-color:var(--primary-color-offwhite);
}

.showTableAll {
  width: 100%;
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

.textTrans {
  text-transform: uppercase;
}

input, .descriptionBox {
  color: var(--primary-color-offwhite);
  background-color: var(--transparent-hover-light);
  border: var(--primary-color-offwhite) solid;
  width: 50%;
  margin: 10px auto;
}

button {
  text-align: center;
  border: var(--primary-color-offwhite) solid;
  transition: 0.6s;
  color: var(--primary-color-offwhite);
  background-color: black;
  width: 20%;
  margin: auto;
}

button:hover {
  background-color: var(--primary-color-offwhite);
  color: var(--transparent-hover-light);
  cursor: pointer;
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