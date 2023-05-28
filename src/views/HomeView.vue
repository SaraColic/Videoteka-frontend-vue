<template>
  <div class="home bg-gradient text-white">
    <br/><p class="sfp">Serije sa Prevodom | Filmovi sa Prevodom | Vaša online Videoteka</p>
    <hr>
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="8"><Film/><Serija/></b-col>
        <b-col cols="1" fixed="top"></b-col>
        <b-col class="desnaKolona" cols="3" fixed="top"><Zanrovi/>
        
          <br><div class="uskoro"><b>USKORO:</b></div>
          <br/><img height="190" src="../assets/maxresdefault.jpg"/>
          <p class="uskoro"> Juzni vetar 2 - Ubrzanje</p>
          <br/><img height="190" src="../assets/ant-man.jpg"/>
          <p class="uskoro"> Ant-Man and the Wasp: Quantumania</p>
        </b-col>
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
    background-color: #000000!important;
 }
 .sfp{
  color: #6e767f;
 }

 .uskoro{
  text-align: left;
  color: rgb(192, 187, 187);
 }

 .desnaKolona{
  padding: 0px 0px 20px 20px;
 }
</style>




