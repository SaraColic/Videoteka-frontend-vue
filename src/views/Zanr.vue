<template>
    <div class="home bg-gradient text-white" >
        <br/><br/>
        <div>
            Zanr {{ id }}
        </div>
        
        
    </div>
</template>
       
<script>
 import { mapState } from 'vuex';

    export default {
        name: 'Zanr',
    //   props: {
    //     naziv: String
    //   },
        computed: {
        ...mapState([
            'zanrovi'
        ])
        },
        data(){
            return{
                id: 1
            }
        },

        watch: {
        $route() {
            this.id = this.$route.params.id;
        }
        },
        
        mounted() {
            this.id = this.$route.params.id
        },
        
        
    }
</script>
    
<style>
.home{
   background-color: #201050!important;
}
</style>