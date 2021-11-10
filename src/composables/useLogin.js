import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const ispending = ref(false)

const login = async (email, password) => {
  error.value = null
  ispending.value = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    ispending.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    ispending.value = false
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login, ispending }
}

export default useLogin