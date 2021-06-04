<template>
    <form @submit="submit">
        <my-button
            background='midnightblue'
            color='white'
            :disabled='!valid'
        
        />
        <my-input
            name='Username'
            :value="username.value"
            :rules="{required:true, min:5}"
            @update="update"
            :error="username.error"
        />
        <my-input
            name='Password'
            :value="password.value"
            :rules="{required:true, min:10}"
            type="password"
            @update="update"
            :error="password.error"
        />
    </form>
</template>

<script>
import myButton from './myButton.vue'
import myInput from './myInput.vue'
export default {
    components:{
        myButton,
        myInput,
    },
    data(){
        
        return{
            username:{
                value:'user',
                valid: false,
                error:''
            },
            password:{
                value:'pass',
                valid: false,
                error:''
            }
        }
    },
    computed:{
        valid(){
            return(
                !this.username.error && 
                !this.password.error)
        }
    },
    methods:{
        update({name,value,error}){
            this[name].value=value
            this[name].error=error
        },
        submit($event){
            $event.preventDefault()
            console.log($event)
        }
    }
}
</script>

<style scoped>

</style>
