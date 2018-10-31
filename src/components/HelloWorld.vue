<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h1>Logo</h1>
      </b-col>
      <b-col cols="4">
        <!-- Links to the login / register section -->
        <h4>Links</h4>
      </b-col>
    </b-row>
    <b-row>
      <!-- google maps -->
      <b-col>
        <GmapMap ref="mapRef" :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="height: 670px">
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  /*
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    })
  }
  */
}
</script>

<style scoped>

</style>

