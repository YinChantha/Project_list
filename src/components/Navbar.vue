<template>
  <div class="navbar">
    <nav>
      <!-- <div class="logo"> -->
          <img src="@/assets/l.png">
        <h1>
          <router-link :to="{name: 'Home'}">Lis project</router-link>
        </h1>
      <!-- </div> -->
        <div class="links">
          <div v-if="user">
            <button @click="handleclick">Logout</button>
          </div>
          <div v-else>
            <router-link class="btn" :to="{name: 'Signup'}">Signup</router-link>
            <router-link class="btn" :to="{name: 'Login'}">Login</router-link>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import {useRouter} from 'vue-router'
export default {
  setup(){
      const {user} = getUser()
      const {logout} = useLogout()
      const router = useRouter()

      const handleclick = async() =>{
        await logout()
        router.push({name:'Login'})
        console.log('User is logout!')
      }
      return {handleclick, user}
  }
}
</script>

<style scoped>
  .navbar{
    padding: 16px 10px;
    margin-bottom: 70px;
    background: wheat;
  }
  nav{
    display: flex;
    align-items: center;
    max-width: 1700px;
    margin: 0 50px;
  }
  nav h1{
    margin-left: 20px;
  }
  nav .links{
    margin-left: auto;
  }
  nav .links a, button{
    margin-left: 20px ;
    font-size: 14px;
  }
  nav img{
    max-height: 70px;
    margin-right: 0px;
  }
</style>