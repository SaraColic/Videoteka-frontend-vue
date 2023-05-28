<template>
    <div class="film">
      <div class="filmovi "><b> FILMOVI</b></div>
      <hr>
      <ul class="list-inline">
        <div v-if="searchAktivan == false">
          <li class="list-inline-item" v-for="film in filmovi" :key="film.filmoviId">
            <Card :naziv="film.naziv" :img="film.img" :tip="film.tip" :ocena="film.ocena" :cena="film.cena" :id="film.id" :besplatan="film.besplatan"></Card>
          </li></div>
        
        <div v-else>
        <li class="list-inline-item" v-for="film in searchFilmovi" :key="film.filmoviSearchId">
          <Card :naziv="film.naziv" :img="film.img" :tip="film.tip" :ocena="film.ocena" :cena="film.cena" :id="film.id" :besplatan="film.besplatan"></Card>
        </li></div>

      </ul>
    </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';
  import Card from '@/components/Card.vue'

  export default {
    name: 'Film',

    components: {
        Card
    },

    computed: {
      ...mapState([
        'filmovi',
        'searchFilmovi',
        'searchAktivan'
      ])
    },

    mounted(){
      //console.log(this.searchAktivan + " asdasdadad");
      if(this.searchAktivan == true){
        console.log("USO");
        //this.getSearchFilmovi(this.$route.query);
      }else{
        this.getFilmovi();
      }
    },

    methods: {
      ...mapActions([
          'getFilmovi',
          'getSearchFilmovi'
      ]),
    }
  }
</script>

<style>

  .filmovi{
    border: outset rgb(174, 9, 9);
    padding: 8px 16px;
    color: rgb(192, 187, 187);
  }

  .mb-2{
    background-color: #000000!important;
  }




</style>