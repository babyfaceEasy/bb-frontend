<template>
    <div>
        <h4>Login</h4>

        <form>
            <label for="email">E-mail Address</label>
            <div>
                <input type="email" id="email" v-model="email" required autofocus>
            </div>

            <div>
                <label for="password">Password</label>
                <div>
                    <input type="password" v-model="password" id="password">
                </div>
            </div>

            <div>
                <button type="submit" @click="handleSubmit">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email : "", password : ""
        }
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            if(this.password.length > 0){
                this.$http.post('http://localhost:8088/login', {
                    email: this.email,
                    password: this.password
                })
                .then (response => {
                    //let is_admin = response.data.user.role
                    let is_admin = false
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    localStorage.setItem('jwt', response.data.token)

                    if (localStorage.getItem('jwt') != null) {
                        this.$emit('loggedIn')

                        if (this.$router.params.nextUrl != null) {
                            this.$router.push(this.$router.params.nextUrl)
                        } else {
                            if( is_admin == 1){
                                this.$router.push('admin')
                            }else{
                                this.$router.push('dashboard')
                            }
                        }
                    }
                })
                .catch(function(error){
                   // console.error(error.response)
                   alert (error.response)
                })
            }
        }
    }// end of methods:
}// end of export default
</script>

