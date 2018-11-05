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
        <!--
        <GmapMap ref="mapRef" :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="height: 670px">
          
        </GmapMap>
        -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  /*
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 10, lng: 10})
    })
  }
  */
  
}
</script>

<style scoped>

</style>

