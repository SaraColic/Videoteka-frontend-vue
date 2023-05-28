<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div class="ep d-flex" > Epizoda {{ id }}</div><br/>
      <div>   
        <b-embed
          type="iframe"
          aspect="16by9"
          width="1160"
          height="715"
          :src="epizoda.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></b-embed>
              
      </div><br/>
      <Komentari/>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import Komentari from '@/components/Komentari.vue'

  export default {
    name: 'Epizoda',

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
        'epizoda',
      ])
    },

    watch: {
      $route() {
        this.id = this.$route.params.id;
        this.getEpizoda(this.id)
      }
    },
    
    mounted() {
        this.id = this.$route.params.id;
        this.getEpizoda(this.id)
    },

    
    methods: {

    ...mapActions([
        'getEpizoda'
    ]),

    }
  }
  </script>

<style>
.home{
 background-color: #000000!important;
 padding: 2rem;
}
.ep {
    font-size: 1.5em;
    color: rgb(156, 159, 219);
  }
</style>