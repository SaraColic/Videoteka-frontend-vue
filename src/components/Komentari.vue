<template>
    <div class="home bg-gradient text-white">
    <b-row>
          <b-col>
            <div class="kom">
                
                <p class="text-left">Komentari <b-icon icon="messenger" class="text-center" font-scale="1" shift-v="1"></b-icon></p>
    
                
                <b-list-group v-for="kom in komentari" :key="kom.komentariId">
                    <b-list-group-item class="ko text-light">{{ kom.tekst }} </b-list-group-item>
                </b-list-group><br/>
            </div>
          </b-col>

          <div v-if="token==false" class="my-1 text-left">
            <b-col sm="11"><p class="text">Ulogujte se da biste ostavili komentar.</p>
                <input id="input-large" size="lg" placeholder="Tvoj komentar..." disabled>
            </b-col>
          </div>

          <div v-else>
            <!-- <b-form @submit="onSumbit"> -->
            <b-col>
                <div class="kom sm">
                    <p class="text-left">Ostavi komentar <b-icon icon="pencil" class="text-center" font-scale="1" shift-v="1"></b-icon></p>
                    
                    <div>
                        <b-form-textarea id="textarea" v-model="tekst" placeholder="Tvoj komentar..."
                        rows="3" max-rows="6"></b-form-textarea>
                    </div><br/>

                    <b-input-group-append>
                        <b-button size="sm" text="submit" variant="danger">Postavi</b-button>
                    </b-input-group-append>
                </div>
            </b-col>
        <!-- </b-form> -->
          </div>
        </b-row>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';

    export default {
      name: 'Komentari',
      computed: {
        ...mapState([
            'komentari',
            'film',
            'epizoda',
            'token'
        ])
        },

        data(){
            return{
                tekst:''
            }
        },

        watch: {
            film(){
                this.getKomentari(this.film.id);
            },
            epizoda(){
                this.getKomentariEpizode(this.epizoda.id);
            }
        },

        mounted(){
        },

        methods: {
            ...mapActions([
                'getKomentari',
                'getKomentariEpizode'
            ]),


            // onSubmit() {
            //     this.$socket.emit('komentar', { tekst: this.tekst, film: this.film.id, token: this.token });
            //     this.tekst = '';
            // }
        }
    }
  </script>  
  
  <style>
  
  
   .home{
      background-color: #201050!important;
   }
  
   .kom{
    color: rgb(164, 165, 165);
   }
  
   .text-light{
        background-color: #201050!important;
        
    }
    .ko{
        text-align: left;
    }
  
  </style>