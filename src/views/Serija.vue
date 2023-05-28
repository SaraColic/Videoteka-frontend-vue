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
            <br/><br/>Direktor: {{ serija.direktor.ime }} {{ serija.direktor.prezime }} | Glumci: <div style="display: inline" v-for="glumac in glumci" :key="glumac.glumacId">{{ glumac.glumac.ime }}, </div>
            <br/><br/>
            <div v-if="serija.besplatan"><b> Seriju mozete gledati besplatno. </b></div>
            <div v-else>Cena: {{ serija.cena }} rsd <div v-if="token==false"><p style="color: rgb(187, 53, 53)">Ulogujte se da biste dodali u korpu</p></div>
            <div v-else>
              <div v-if="daLiPostojiUKorpi">Vec postoji u korpi</div>
              <div v-else-if="daLiPostojiUIznajmljenima">Seriju ste vec iznajmili</div>
              <div v-else><b-button @click="dodajUKorpu" variant="danger"> Dodaj u korpu</b-button></div>
            </div></div>
          </b-col>
        </b-row> 

        <br/>
        
        <b-row>
          <b-col>
            <div v-if="token==false && serija.besplatan==false"> 
              <br>
              <p style="color: rgb(187, 53, 53)">Ulogujte se da biste gledali seriju </p>
            </div>
            <div v-else-if="token==false && serija.besplatan==true"><Sezone :id="serija.id"/></div>

            <div v-else-if="token && daLiPostojiUKorpi==true">Serija se nalazi u korpi. Morate je platiti da biste gledali </div>
            <div v-else-if="token && (serija.besplatan==true || daLiPostojiUIznajmljenima==true)"><Sezone :id="serija.id"/></div>
            <div v-else>Morate platiti seriju da biste gledali. Dodajte seriju u Vasu korpu</div>

          </b-col>
        </b-row>
      </b-container>
      </div>
    </div>
  </template>
  
<script>

import { mapState, mapActions, mapMutations  } from 'vuex';

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
        'glumci',
        'token',
        'korpa',
        'daLiPostojiUKorpi',
        'daLiPostojiUIznajmljenima'
      ])
    },

    watch: {
      $route() {
        this.id = this.$route.params.id;
        this.getSerija(this.id)
        this.getGlumiUSeriji(this.id)
        this.getSerijaIzKorpe(this.id)
        this.getSerijaIzIznajmljenih(this.id)
      }
    },
    
    mounted() {
        this.id = this.$route.params.id;
        this.getSerija(this.id)
        this.getGlumiUSeriji(this.id)
        this.getSerijaIzKorpe(this.id)
        this.getSerijaIzIznajmljenih(this.id)
    },

    methods: {
      ...mapActions([
          'getSerija',
          'getGlumiUSeriji',
          'getSerijeKorpa',
          'postSerijeKorpa',
          'getSerijaIzKorpe',
          'getSerijaIzIznajmljenih'
      ]),

      ...mapMutations([
          'ukupnaCena'
      ]),

      dodajUKorpu(e) {
        e.preventDefault();

        const data={
          serijaId: this.id
        }

        this.postSerijeKorpa(data)

        //this.ukupnaCena(this.serija.cena)
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

</style>