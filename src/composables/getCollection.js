import { ref, watchEffect } from 'vue'

//firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, orderBy, limit} from 'firebase/firestore'


const getCollection = (c, f, q, q2, q3) => {
  const documents = ref(null)

  //collection reference
  let colRef = collection(db, c)

  if (f) {
    if(f == 'whereOrderByLimit') {

      colRef = query(colRef, where(...q), orderBy(...q2), limit(q3))

    } else if(f == 'whereOrderBy') {

      colRef = query(colRef, where(...q), orderBy(...q2))

    } else if(f == 'where'){

      colRef = query(colRef, where(...q))
  
    } else if (f == 'orderBy') {
  
      colRef = query(colRef, orderBy(...q))
  
    }
  }


  const unsub = onSnapshot(colRef, snapshot => {
    let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })

      //update values
      documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents }
}

export default getCollection