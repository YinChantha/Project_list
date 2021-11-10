import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)
const ispending = ref(false)

// logout function
const logout = async () => {
  error.value = null
  ispending.value = true

  try {
    await projectAuth.signOut()
    ispending.value = false
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    ispending.value = false
  }
}

const useLogout = () => {
  return { error, logout, ispending }
}

export default useLogout