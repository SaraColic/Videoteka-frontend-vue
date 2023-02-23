<template>
    <div class="home bg-gradient text-white">
      <hr>
      <b-container class="bv-example-row" fluid>
        <b-row>
          <b-col cols="8"><Film/></b-col>
          <b-col><Zanrovi/></b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
import Film from '@/components/Film.vue'
import Zanrovi from '@/components/Zanrovi.vue'

  export default {
    name: 'Filmovi',
    components: {
      Film,
      Zanrovi
    }
  }
  </script>

<style>
   .home{
    background-color: #201050!important;
 }
</style>