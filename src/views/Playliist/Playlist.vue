<template>
    <h1>This is the play list page !</h1>
  <form @submit.prevent="handlesubmit">
      <input type="text" required placeholder="Enter your text title here" v-model="title">
      <textarea required placeholder="Enter your detail here" v-model="describetion"></textarea>
      <label> Upload your cover image bellow</label>
      <input type="file" @change="handlechange">       
      <div class="error">{{fileError}}</div>
      <button>Submit</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
export default {
    setup(){
        const {filePath, url,uploadImage} = useStorage()

        const title = ref('')
        const describetion = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handlesubmit  = async () => {
            if(file.value){
                await uploadImage(file.value)
                console.log('image upload URL',url.value)
            }
        }
        // allow files types 
        const types = ['image/jpeg', 'image/png']

        const handlechange = (e) => {
            const slected = e.target.files[0]
            console.log(title.value,describetion.value)
            if(slected && types.includes(slected.type)){
                file.value = slected
                fileError.value = null
            }
            else{
                file.value = null
                fileError.value = 'Please select the file type (png or jpg)'
            }
        }
        return {title,describetion, handlesubmit, handlechange, fileError}
    }
}
</script>

<style>
input[type= 'file']{
    max-width: 180px;
    margin-left: 0%;
    border: 0;
    padding: 0;
    cursor: pointer;            
}
label{
    display: block;
    margin-top: 30px;
    font-size: 20px;
}
h1{
    text-align: center;
}
button{
    margin-top: 20px;
}

</style>