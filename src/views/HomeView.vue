<template>
  <div class="home bg-gradient text-white">
    <br/><p class="sfp">Serije sa Prevodom | Filmovi sa Prevodom | Vaša online Videoteka</p>
    <hr>
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="8"><Film/><Serija/></b-col>
        <b-col class="zanrovi" fixed="top"><Zanrovi/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Film from '@/components/Film.vue'
import Serija from '@/components/Serija.vue'
import Zanrovi from '@/components/Zanrovi.vue'

 //import { mapActions, mapState } from 'vuex';

export default {

  name: 'HomeView',
  components: {
    Film,
    Zanrovi,
    Serija
  },

  
}
</script>

<style>
  .home{
    background-color: #201050!important;
 }
 .sfp{
  color: #6e767f;

 }
</style>




