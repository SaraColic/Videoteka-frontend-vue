<template>
    <div class="home bg-gradient text-white" >
        <br/><br/>
        <div class="rezultati"> Rezultati pretrage:</div><br>
        <div class="rezultati">
            <ul class="list-inline">
                <div class="serije"><b> FILMOVI</b></div><br>
                <li class="list-inline-item" v-for="film in filmoviIstogZanra" :key="film.filmoviIstogZanraId">
                    <Card :naziv="film.naziv" :img="film.img" :tip="film.tip" :ocena="film.ocena" :cena="film.cena" :id="film.id" :besplatan="film.besplatan"></Card>
                </li>
                <hr>
                <div class="serije"><b> SERIJE</b></div><br>
                <li class="list-inline-item" v-for="ser in serijeIstogZanra" :key="ser.serijeIstogZanraId">
                    <Card :naziv="ser.naziv" :img="ser.img" :tip="ser.tip" :ocena="ser.ocena" :cena="ser.cena" :id="ser.id" :besplatan="ser.besplatan"></Card>
                </li>
            </ul>
        </div>
        
        
    </div>
</template>
       
<script>
 import { mapState, mapActions } from 'vuex';
 import Card from '@/components/Card.vue'

    export default {
        name: 'Zanr',
    //   props: {
    //     naziv: String
    //   },

        components: {
            Card
        },

        computed: {
        ...mapState([
            'zanrovi',
            'filmoviIstogZanra',
            'serijeIstogZanra'
        ])
        },
        data(){
            return{
                id: 1
            }
        },


        methods: {
            ...mapActions([
                'getFilmoviIstogZanra',
                'getSerijeIstogZanra'
            ]),
        },

        watch: {
            $route() {
                this.id = this.$route.params.id;
                this.getFilmoviIstogZanra(this.id)
                this.getSerijeIstogZanra(this.id)
            }
        },
        
        mounted() {
            this.id = this.$route.params.id
            this.getFilmoviIstogZanra(this.id)
            this.getSerijeIstogZanra(this.id)
        },
        
        
    }
</script>
    
<style>
.home{
   background-color: #000000!important;
}

.rezultati{
    text-align: left;
}

.serije{
    border: outset rgb(174, 9, 9);
    padding: 8px 16px;
    background-color: #000000!important;
    color: rgb(192, 187, 187);
  }
</style>