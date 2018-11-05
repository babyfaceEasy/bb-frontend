<template>

    <b-container>
    <b-row>
      <b-col cols="8">
        <h1>Logo</h1>
      </b-col>
      <b-col cols="4">
        <!-- Links to the login / register section -->
        <h4>
          <b-link to ="/login">Login</b-link> | <b-link to ="/register">Register</b-link>
        </h4>
      </b-col>
    </b-row>
    <b-row style="">
      <!-- google maps -->
      <b-col>
        <h4></h4>

        <b-form @submit="onSubmit">
            <b-form-group id="emailInput" label="" label-for="email">
                <b-form-input id="email" type="email" v-model="email" required placeholder="Enter Email"></b-form-input>
            </b-form-group>

            <b-form-group id="passwordInput" label="" label-for="password">
                <b-form-input id="password" type="password" v-model="password" required placeholder="Enter Password"></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-button type="submit" block="true" variant="primary">Login</b-button>
            </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
    
</template>
<script>
export default {
    data() {
        return {
            email : "", password : "", form : { email: "", password: ""}
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

                        if (this.$route.params.nextUrl != null) {
                            this.$router.push(this.$route.params.nextUrl)
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
        },
        onSubmit(e){
            e.preventDefault()
            this.$http.post('http://localhost:8088/auth/login', {
                email : this.email,
                password : this.password
            })
            .then((resp) => {
                alert(`success`)
                localStorage.setItem('user', JSON.stringify(resp.data.user))
                localStorage.setItem('jwt', resp.data.token)
                
                if (localStorage.getItem('jwt') !== null) {
                    this.$emit('loggedIn')

                    if (this.$route.params.nextUrl != null) {
                        this.$router.push(this.$route.params.nextUrl)
                    }else{
                        this.$router.push('dashboard')
                    }
                }
                
            })
            .catch( error => {
                alert(error)
            })
        }
    }// end of methods:
}// end of export default
</script>

