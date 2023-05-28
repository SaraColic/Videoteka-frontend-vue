<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div v-if="film!==undefined">
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
            <br/><br/>Direktor: {{ film.direktor.ime }} {{ film.direktor.prezime }} | Glumci: <div style="display: inline" v-for="glumac in glumci" :key="glumac.glumacId">{{ glumac.glumac.ime }}, </div>
            <br/><br/>
            <div v-if="film.besplatan"><b> Film mozete gledati besplatno. </b></div>
            <div v-else>Cena: {{ film.cena }} rsd <div v-if="token==false"><p style="color: rgb(187, 53, 53)">Ulogujte se da biste dodali u korpu</p></div>
            <div v-else>
              <div v-if="daLiPostojiUKorpi">Vec postoji u korpi</div>
              <div v-else-if="daLiPostojiUIznajmljenima">Film ste vec iznajmili</div>
              <div v-else><b-button @click="dodajUKorpu" variant="danger"> Dodaj u korpu</b-button></div>
            </div>
          </div>

          </b-col>
        </b-row> <br/>

        <b-row>
          <b-col>
            <div v-if="token==false && film.besplatan==false">
              <br>
              <p style="color: rgb(187, 53, 53)">Ulogujte se da biste gledali film </p>
            </div>
            <div v-else-if="token==false && film.besplatan==true">
              <section>
                <b-embed
                  type="iframe" aspect="16by9" width="1160" height="715"
                  :src="film.video"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></b-embed>
              </section>
            </div>
            
            <div v-else-if="token && daLiPostojiUKorpi==true">Film se nalazi u korpi. Morate ga platiti da biste gledali </div>
            <div v-else-if="token && (film.besplatan==true || daLiPostojiUIznajmljenima==true)">
              <section>
                <b-embed
                  type="iframe" aspect="16by9" width="1160" height="715"
                  :src="film.video"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></b-embed>
              </section>
            </div>
            <div v-else>Morate platiti film da biste gledali. Dodajte film u Vasu korpu</div>
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

import { mapState, mapActions, mapMutations} from 'vuex';
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
        'glumci',
        'token',
        'korisnik',
        'korpa',
        'daLiPostojiUKorpi',
        'daLiPostojiUIznajmljenima'
      ]),
     
    },

    watch: {
      $route() {
        this.id = this.$route.params.id;
        this.getFilm(this.id)
        this.getGlumiUFilmu(this.id)
        this.getFilmIzKorpe(this.id)
        this.getFilmIzIznajmljenih(this.id)
      }
    },
    
    mounted() {
        this.id = this.$route.params.id
        this.getFilm(this.id);
        this.getGlumiUFilmu(this.id)
        this.getFilmIzKorpe(this.id)
        this.getFilmIzIznajmljenih(this.id)
    },

    methods: {

      ...mapActions([
          'getFilm',
          'getGlumiUFilmu',
          'getFilmoviKorpa',
          'postFilmoviKorpa',
          'getFilmIzKorpe',
          'getFilmIzIznajmljenih'
      ]),

      ...mapMutations([
          'ukupnaCena'
      ]),

      dodajUKorpu(e) {
        e.preventDefault();
        
        const data={
          filmId: this.id
        }
     // console.log(this.daLiPostojiUKorpi)
        // if(this.daLiPostojiUKorpi==true){

        //   alert('Vec ste dodali u korpu')
        // }else{
          this.postFilmoviKorpa(data)
        //}
        
        
      },

      

    }
  }
</script>

<style>
 .atributi{
  text-align: left ;
 }

 .home{
    background-color: #000000!important;

 }

 .text{
  color: rgb(164, 165, 165);
}


</style>