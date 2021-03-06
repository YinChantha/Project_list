import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

  const error = ref(null)
  const ispending = false

  // add a new document
  const addDoc = async (doc) => {
    error.value = null

    try {
      ispending.value = false
      await projectFirestore.collection(collection).add(doc)
    }
    catch(err) {
      ispending.value = false
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc, ispending }

}

export default useCollection