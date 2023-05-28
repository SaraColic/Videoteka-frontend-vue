<template>
    <div class="home">
    <div class="atributi">
        <label class="text-muted">Izaberi sezonu</label><br/>
       
        <select class="sezone" id="sezone" @change="uzimaIdSezone()">
            <option v-for="item in serija.sezone" :key="item.id"> {{ item.naziv  }}</option>
        </select>
    </div><br/>
        <Epizoda :idSezone="idSez"></Epizoda>
    </div>
</template>

<script>
    import Epizoda from '@/components/Epizoda.vue'
    import { mapState, mapActions } from 'vuex';

    export default{
        name: 'Sezone',
        components: {
            Epizoda
        },

        data() {
            return {
                id: 1,
                idSez: 1
            }
        },

        // props: {
        //     naziv: String
        // },

        computed: {
            ...mapState([
                'serija'
            ])
        },  

        // watch: {
        //     $route() {
        //         uzimaIdSezone(nazivSezone){
        //             this.id = nazivSezone.substring(nazivSezone.length() - 1)
        //         }
        //     }
        // },

        methods: {
            ...mapActions([
                'getSerija'
            ]),

            uzimaIdSezone(/*nazivSezone*/){
                //this.id = parseInt(nazivSezone.substring(nazivSezone.length - 1))
                var e = document.getElementById("sezone");
                var nazivSezone = e.options[e.selectedIndex].text;
                this.idSez = parseInt(nazivSezone.substring(nazivSezone.length - 1))
                //console.log(this.idSez)
            }

        },

        mounted() {
            this.getSerija(this.id)
        },
    }
</script>

<style>
 .atributi{
  text-align: left ;
 }
 .home{
   background-color: #000000!important;
}
.sezone{
    background-color: rgb(210, 51, 51);
    padding: 6px;
    border: none;
    color: white
}
.dropdown {
    display: inline-block;
    position: relative;
}
</style>