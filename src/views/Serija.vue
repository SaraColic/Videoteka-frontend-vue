<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div>
      <b-container>
        <b-row>
          <b-col> <b-card
            :img-src="serija.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 14rem;"
            class="mb-2 bg-dark"
          > <b-card-text> 
            <b-icon icon="star-fill" class="text-center" font-scale="0.8" shift-v="2"></b-icon>
            Ocena: {{ serija.ocena }} </b-card-text>
          </b-card>
          </b-col>
          <b-col class="atributi" cols="9">
            <div style="font-size: 1.80rem;">{{ serija.naziv }} - Online sa prevodom </div>
            <br>Zanr: {{ serija.zanr.naziv }} |
            <!-- <b-icon icon="clock" class="text-center" font-scale="0.8" shift-v="1"></b-icon> {{ serija.trajanje }} | -->
            <b-icon icon="calendar-date" class="text-center" font-scale="0.8" shift-v="1"></b-icon> {{ serija.godina }}
            <br/><br/>Opis: {{ serija.opis }}
            <br/><br/>Direktor: {{ serija.direktor.ime }} | Glumci: <div style="display: inline" v-for="glumac in glumci" :key="glumac.glumacId">{{ glumac.glumac.ime }}, </div>
          </b-col>
        </b-row> 

        <br/>
        <div><Sezone/></div>
      </b-container>
      </div>
    </div>
  </template>
  
<script>

import { mapState, mapActions  } from 'vuex';

import Sezone from '@/components/Sezone.vue'

  export default {
    name: 'Serija',
    components: {
       Sezone
    },

    data(){
        return{
            id: 1
        }
    },

    computed: {
      ...mapState([
        'serija',
        'glumci'
      ])
    },

    watch: {
      $route() {
        this.id = this.$route.params.id;
        this.getSerija(this.id)
        this.getGlumiUSeriji(this.id)
      }
    },
    
    mounted() {
        this.id = this.$route.params.id;
        this.getSerija(this.id)
        this.getGlumiUSeriji(this.id)
    },

    methods: {
      ...mapActions([
          'getSerija',
          'getGlumiUSeriji'
      ]),
    }
  }
</script>

<style>
 .atributi{
  text-align: left ;
 }
 .home{
   background-color: #201050!important;
}

</style>