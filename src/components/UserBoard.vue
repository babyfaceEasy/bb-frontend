<template>
    <div class="hello">
        <h1>Welcome to the regular users page</h1>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'The Commoners'
        }
    }
}
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }a {
        color: #42b983;
    }
</style>

