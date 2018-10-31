<template>
    <div>
        <h4>Register</h4>

        <form>
            <label for="name">Name</label>

            <div>
                <input type="text" id="name" v-model="name" required autofocus>
            </div>

            <label for="email">E-mail Address</label>
            <div>
                <input type="email" name="email" id="email " v-model="email" required>
            </div>

            <label for="password">Password</label>
            <div>
                <input type="password" id="password" required v-model="password">
            </div>

            <label for="password-confirm">Confirm Password</label>
            <div>
                <input type="password" id="confirm-password" v-model="password_confirmation" required>
            </div>

            <label>Is this an administrator account?</label>
            <div>
                <select v-model="is_admin">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>

            <div>
                <button type="submit" @click="handleSubmit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props : ["nextUrl"],

    data() {
        return {
            name: "", email : "", password : "", password_confirmation : "", is_admin : null
        }
    },

    methods: {
        handleSubmit(e){
            e.preventDefault()

            if( this.password ==  this.password_confirmation && this.password.length > 0){
                let url = "http://localhost:8088/register"

                if(this.is_admin !== null || this.is_admin == 1) url = "http://localhost:8088/localhost/register/is_admin"

                this.$http.post(url, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    is_admin: this.is_admin
                })
                .then( response => {
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    localStorage.setItem('jwt', response.data.token)

                    if( localStorage.getItem('jwt') !== null){
                        this.$emit('loggedIn')
                        if(this.$route.params.nextUrl !== null){
                            this.$router.push(this.$route.params.nextUrl)
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
                .catch( error => {
                    //console.error(error)
                    alert(error)
                })
            } else {
                this.password = ""
                this.password_confirmation = ""

                return alert("Passwords do not match")
            }
        }
    }
}
</script>

