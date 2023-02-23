<template>
    <div class="epizoda">

      <ul class="list-inline">
      <li class="list-inline-item" v-for="ep in epizode" :key="ep.epizodeiId">
        <b-card
          :img-src="ep.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 12rem;"
          class="mb-2 bg-dark"
          @click="idiNaEpizodu(ep.id)"
        >
          <b-card-text>
            Epizoda {{ ep.naziv }}
          </b-card-text>

        </b-card>
      </li>
      </ul>
    </div>
</template>


<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Epizoda',

    props: {
      //filmovi: Object
    },


    computed: {
      ...mapState([
        'epizode'
      ])
    },

    mounted(){
      this.getEpizode();
    },

    methods: {
      ...mapActions([
          'getEpizode'
      ]),

      idiNaEpizodu(id){
        this.$router.push({ name: 'Epizoda', params: { id: id } });
      }
    }
  }
</script>

<style>

  .epizoda{
    padding: 8px 16px;
  }


</style>