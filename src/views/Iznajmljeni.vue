<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div class="iznajmljeni "><b> IZNAJMLJENI</b></div><br/>
      <div v-if="iznajmljeni[0]==null" class="iznajmlj">! NEMATE IZNAJMLJENIH FILMOVA</div>
      <div v-else>

        <b-container class="mt-5" v-for="item in iznajmljeni" :key="item.iznajmljeniId">
          <div v-if="item.filmId">
          <b-card 
            class="mb-3" 
            :img-src="item.film.img" 
            img-left 
            style="max-width: 100rem; height: 15rem;" 
          >

          <b-card-text>
            <b-list-group class="text" >
              Naziv: {{ item.film.naziv }} <br> 
              <!-- Zanr: {{ item.film.zanr.naziv }} <br>  -->
              Trajanje: {{ item.film.trajanje }}<br> Godina: {{ item.film.godina }} <br> 
              <!-- Direktor: {{ item.film.direktor.ime }} {{ item.film.direktor.prezime }} <br> -->
              Datum isteka: {{ item.datumIsteka }}
              <b-button href="#" @click="idiNaCard(item.film.id, item.film.tip)" class="gledaj">GLEDAJ</b-button>
            </b-list-group>
          </b-card-text>
        </b-card>
      </div>

      <div v-if="item.serijaId">
            <b-card 
            class="mb-3" 
            :img-src="item.serija.img" 
            img-left 
            style="max-width: 100rem; height: 15rem;" 
          >

          <b-card-text>
            <b-list-group class="text" >
              Naziv: {{ item.serija.naziv }} <br> 
              <!-- Zanr: {{ item.serija.zanr.naziv }} <br> -->
              Trajanje: {{ item.serija.trajanje }}<br> Godina: {{ item.serija.godina }} <br>
              <!-- Direktor: {{ item.serija.direktor.ime }} {{ item.serija.direktor.prezime }} <br> -->
              Datum isteka: {{ item.datumIsteka }}
              <b-button href="#" @click="idiNaCard(item.serija.id, item.serija.tip)" class="gledaj">GLEDAJ</b-button>
            </b-list-group>
          </b-card-text>
        </b-card>
      </div>

    </b-container>
    </div></div>
  </template>
  
  <script>

import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Iznajmljeni',

    computed: {
      ...mapState([
        'iznajmljeni'
      ]),
     
    },

    methods: {

      ...mapActions([
        'getIznajmljeni'
      ]),

      idiNaCard(id, tip){
          if(tip=="film"){
              this.$router.push({ name: 'Film', params: { id: id } });
          }else if(tip=="serija"){
              this.$router.push({ name: 'Serija', params: { id: id } });
          } 
      }

    },

    mounted() {
      this.getIznajmljeni()

    }
  }
  

  
  </script>


<style>
 .home{
    background-color: #000000!important;
 }

 .iznajmljeni{
    border: outset rgb(174, 9, 9);
    padding: 8px 16px;
    background-color: #000000!important;
    color: rgb(192, 187, 187);
  }

  .iznajmlj{
    text-align: left;
    padding: 50px 0px 0px 180px;
  }

  .koldesno{
    text-align: left;
  }

  .mb-3 {
    background-color: #000000!important;
    border: outset rgb(174, 9, 9);
    text-align: left;
  }

  .text{
    font-size: 1.25rem;
  }

  .gledaj{
    border-color: #000000;
    background-color: #000000!important;
  }
</style>