<template>
    <div class="film">
      <div class="filmovi d-flex "><b> FILMOVI</b></div>
      <hr>
      <ul class="list-inline">
        <li class="list-inline-item" v-for="film in filmovi" :key="film.filmoviId">
        <b-card
          :title="film.naziv"
          :img-src="film.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="mb-2"
          href="#"
          @click="idiNaFilm(film.id)"
        >
          <b-card-text>
            Ocena: {{ film.ocena }}
            <p v-if="film.besplatan">Film je besplatan</p>
            <p v-else>Cena: {{ film.cena }}</p>
            <!-- <button  @click="idiNaFilm(film.id)"  size="sm" class="my-2 my-sm-0">Idi na film</button> -->
          </b-card-text>
        </b-card>
      </li>
      </ul>
    </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Film',

    props: {
      //filmovi: Object
    },

    // data() {
    //   film: null
    // },

    computed: {
      ...mapState([
        'filmovi'
      ])
    },

    mounted(){
      this.getFilmovi();
    },

    methods: {
      ...mapActions([
          'getFilmovi'
      ]),

      idiNaFilm(id){
        this.$router.push({ name: 'Film', params: { id: id } });
      }
    }
  }
</script>

<style>

  .filmovi{
    border: outset rgb(137, 132, 132);
    padding: 8px 16px;
    color: rgb(192, 187, 187);
  }

  .mb-2{
    background-color: #201050!important;
  }

</style>