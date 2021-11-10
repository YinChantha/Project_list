<template>
  <form @submit.prevent="handlesubmit">
      <h1>Sing up your account here!</h1>
      <input type="text" placeholder="Diplay name" v-model="displayname">
      <input type="email" placeholder="Enter your emial" v-model="email">
      <input type="password" placeholder="Enter your passwod" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button v-if="!ispending">Login</button>
    <button v-if="ispending" disabled>Loading</button>
  </form>
</template>

<script>
import useSingup from '../../composables/useSignup'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const {error, signup, ispending } = useSingup()
        const email = ref('')
        const password = ref('')
        const displayname = ref('')

        const handlesubmit = async() => {
            const res = await signup(email.value, password.value, displayname.value)

            if(!error.value){
                console.log('User already sign up!')
            }
        }

        return{email,password,displayname, ispending, handlesubmit, error}
    }
}
</script>

<style>

</style>