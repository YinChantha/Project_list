<template>
<div>
  <form @submit.prevent="handlesubmit">
    <h1>login your account here</h1>
    <input type="email" placeholder="Enter your email here" v-model="email">
    <input type="password" placeholder="Enter your password here" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button v-if="!ispending">Login</button>
    <button v-if="ispending" disabled>Loading</button>
  </form>
</div>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const {error, login, ispending} = useLogin()

    const handlesubmit = async() => {
      const res = await login(email.value, password.value)  
    }
    if(!error.value){
      console.log('user is log in successfully!')
    }

    const email = ref('')
    const password = ref('')
    return {email, password, error, handlesubmit, ispending}
  }
}
</script>

<style>

</style>