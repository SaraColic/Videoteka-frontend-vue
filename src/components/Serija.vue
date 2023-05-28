<template>
    <div class="serija">
      <div class="serije "><b> SERIJE</b></div>
      <hr>
      <ul class="list-inline">
        <div v-if="searchAktivan == false">
          <li class="list-inline-item" v-for="ser in serije" :key="ser.serijeiId">
            <Card :naziv="ser.naziv" :img="ser.img" :tip="ser.tip" :ocena="ser.ocena" :cena="ser.cena" :id="ser.id" :besplatan="ser.besplatan"></Card>
        </li></div>

        <div v-else>
          <li class="list-inline-item" v-for="ser in searchSerije" :key="ser.searchSerijeId">
            <Card :naziv="ser.naziv" :img="ser.img" :tip="ser.tip" :ocena="ser.ocena" :cena="ser.cena" :id="ser.id" :besplatan="ser.besplatan"></Card>
        </li></div>
      </ul>
      <hr>
    </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';
  import Card from '@/components/Card.vue'

  export default {
    name: 'Serija',
   
    components: {
        Card
    },

    computed: {
      ...mapState([
        'serije',
        'searchSerije',
        'searchAktivan'
      ])
    },

    mounted(){
      if(this.searchAktivan == true){
        console.log("USO");
        //this.getSearchFilmovi(this.$route.query);
      }else{
        this.getSerije();
      }
    },

    methods: {
      ...mapActions([
          'getSerije'
      ]),

    }
  }
</script>

<style>

  .serije{
    border: outset rgb(174, 9, 9);
    padding: 8px 16px;
    background-color: #000000!important;
    color: rgb(192, 187, 187);
  }

  .list-inline{
    align-items: left;
  }

</style>