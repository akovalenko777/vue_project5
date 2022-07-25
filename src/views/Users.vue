<template>
    <div class="container">
        <form id="user_add" @submit.prevent="checkAndSave">
            <input type="text" v-model="user.name" placeholder="Name" />
            <br>
            <input type="text" v-model="user.email" placeholder="Email" />
            <br>
            <input type="password" v-model="user.password" placeholder="Password" />
            <br>
            <input type="password" v-model="user.password2" placeholder="Repeat password" />
            <br>
            <button type="submit" class="btn">Save</button>
        </form>
    </div>
</template>

<script>
//import {insert} from '@/helpers/db'
// import {encryptPass} from '@/helpers/functions'

export default {
    name: 'Users',
    data() {
        return {
            user: {
                name: 'Alex',
                email: 'alex@domain.com',
                password: '123',
                password2: '123'
            }
        }
    },
    methods: {
        // checkAndSave(){
        //     let valid = true
        //     if(this.user.name === ''){
        //         valid = false
        //     }
        //     if(this.user.email === ''){
        //         valid = false
        //     }
        //     if(this.user.pass === '' || this.user.pass2 === ''){
        //         valid = false
        //     }
        //     if(this.user.pass !== this.user.pass2){
        //         valid = false
        //     }
        //     if(valid){
        //         const resp = insert('users', {
        //             name: this.user.name,
        //             email: this.user.email,
        //             password: encryptPass(this.user.password)
        //         });
        //         console.log(resp)
        //     }else{
        //         alert('Fill all fields');
        //     }
        // }
    }
}
</script>