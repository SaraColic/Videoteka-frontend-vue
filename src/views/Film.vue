<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div>
      <b-container>
        <b-row>
          <b-col> <b-card
            :img-src="film.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 14rem;"
            class="mb-2 bg-dark"
          > <b-card-text> 
            <b-icon icon="star-fill" class="text-center" font-scale="0.8" shift-v="2"></b-icon> 
            Ocena: {{ film.ocena }} </b-card-text>
          </b-card>
          </b-col>
          <b-col class="atributi" cols="9">
            <div style="font-size: 1.80rem;">{{ film.naziv }} - Online sa prevodom </div>
            <br>Zanr: {{ film.zanr.naziv }} |
            <b-icon icon="clock" class="text-center" font-scale="0.8" shift-v="1"></b-icon> {{ film.trajanje }} |
            <b-icon icon="calendar-date" class="text-center" font-scale="0.8" shift-v="1"></b-icon> {{ film.godina }}
            <br/><br/>Opis: {{ film.opis }}
            <br/><br/>Direktor: {{ film.direktor.ime }} | Glumci: <div style="display: inline" v-for="glumac in glumci" :key="glumac.glumacId">{{ glumac.glumac.ime }}, </div>
            <br/><br/>
            <div v-if="film.besplatan"><b> Film mozete gledati besplatno. </b></div>
            <div v-else>Cena: {{ film.cena }} rsd => <b-button variant="danger"> Dodaj u korpu</b-button></div>

          </b-col>
        </b-row> <br/>

        <b-row>
          <b-col>
            <div>
              <section>
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  width="1160"
                  height="715"
                  :src="film.video"
                  title="YouTube video player"
                   frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></b-embed>
              </section>
            </div>
            <hr>
          </b-col>
        </b-row>
        <br/><hr>

        <div><Komentari/></div>
      </b-container>
      </div>
    </div>
  </template>
  
<script>

import { mapState, mapActions } from 'vuex';
import Komentari from '@/components/Komentari.vue'

  export default {
    name: 'Film',
    components: {
      Komentari
    },

    data(){
        return{
            id: 1
        }
    },

    computed: {
      ...mapState([
        'film',
        'glumci'
      ]),
     
    },

    watch: {
      $route() {
        this.id = this.$route.params.id;
        this.getFilm(this.id)
        this.getGlumiUFilmu(this.id)
      }
    },
    
    mounted() {
        this.id = this.$route.params.id
        this.getFilm(this.id);
        this.getGlumiUFilmu(this.id)
    },

    methods: {

      ...mapActions([
          'getFilm',
          'getGlumiUFilmu'
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

 .text{
  color: rgb(164, 165, 165);
}


</style>