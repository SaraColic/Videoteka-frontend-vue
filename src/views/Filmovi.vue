<template>
    <div class="home bg-gradient text-white">
      <hr>
      <b-container class="fm bv-example-row" fluid>
        <b-row>
          <b-col cols="12"><Film/></b-col>
          <!-- <b-col cols="1" fixed="top"></b-col>
          <b-col class="desnaKolona" cols="3"><Zanrovi/></b-col> -->
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
import Film from '@/components/Film.vue'

  export default {
    name: 'Filmovi',
    components: {
      Film
    }
  }
  </script>

<style>
   .home{
    background-color: #000000!important;
 }

 .desnaKolona{
  padding: 0px 0px 20px 20px;
 }

 .fm{
  text-align: left;
 }
</style>