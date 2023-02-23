<template>
  <div class="home bg-gradient text-white">
    <hr>
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="8"><Serija/></b-col>
        <b-col><Zanrovi/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Serija from '@/components/Serija.vue'
import Zanrovi from '@/components/Zanrovi.vue'

export default {
  name: 'Filmovi',
  components: {
    Serija,
    Zanrovi
  }
}
</script>

<style>
.home{
   background-color: #201050!important;
}
</style>