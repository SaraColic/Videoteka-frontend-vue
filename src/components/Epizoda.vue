<template>
    <div class="epizoda">

      <ul class="list-inline">
      <li class="list-inline-item" v-for="ep in epizodeIsteSezone" :key="ep.epizodeId">
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
            Sezona {{ idSezone }}<br>
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
      idSezone: Number
    },


    computed: {
      ...mapState([
        'epizode',
        'epizodeIsteSezone'
      ])
    },

    watch: {
      idSezone() {
      //   console.log('Ep: ' + this.idSezone)
        this.getEpizodeSezone(this.idSezone);
      }
    },

    mounted(){
      this.getEpizodeSezone(this.idSezone);
    },

    methods: {
      ...mapActions([
          'getEpizode',
          'getEpizodeSezone'
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