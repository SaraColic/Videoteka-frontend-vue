<template>
    <div class="serija">
      <div class="serije d-flex "><b> SERIJE</b></div>
      <hr>
      <ul class="list-inline">
        <li class="list-inline-item" v-for="ser in serije" :key="ser.serijeiId">
        <b-card
          :title="ser.naziv"
          :img-src="ser.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="mb-2"
          @click="idiNaSeriju(ser.id)"
        >
          <b-card-text>
            Ocena: {{ ser.ocena }}
          </b-card-text>
        </b-card>
      </li>
      </ul>
      <hr>
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
        'serije'
      ])
    },

    mounted(){
      this.getSerije();
    },

    methods: {
      ...mapActions([
          'getSerije'
      ]),

      idiNaSeriju(id){
        this.$router.push({ name: 'Serija', params: { id: id } });
      }
    }
  }
</script>

<style>

  .serije{
    border: outset rgb(137, 132, 132);
    padding: 8px 16px;
    background-color: #201050!important;
    color: rgb(192, 187, 187);
  }

  .list-inline{
    align-items: left;
  }

</style>