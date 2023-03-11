<template>
    <div class="home bg-gradient text-white">
      <br/><p class="sfp">Serije sa Prevodom | Filmovi sa Prevodom | Vaša online Videoteka</p>
      <hr>
      <b-container class="bv-example-row" fluid>
        <b-row>
          <b-col cols="8"><Film v-if="filmoviId" :objects="filmoviId"/><Serija v-if="serijeiId" :objects="serijeiId"/></b-col>
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
  
    name: 'Search',
    components: {
      Film,
      Zanrovi,
      Serija
    },
    data() {
        return {
            filmoviId: null,
            serijeiId: null
        }
    },
    
    mounted() {
        fetch(`http://localhost:8080/search?q=${this.$route.query.q}`)
          .then( obj => obj.json() )
          .then( res => {
            this.filmoviId = res.id;
            this.serijeiId = res.id;
          });
    }

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
  