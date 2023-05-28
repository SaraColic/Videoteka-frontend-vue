<template>
    <div>
        <b-card
          :title="naziv"
          :img-src="img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="mb-2"
          href="#"
          @click="idiNaCard(id)"
        >
          <b-card-text>
            Ocena: {{ ocena }}
            <p v-if="besplatan">Besplatno</p>
            <p v-else>Cena: {{ cena }}</p>
          </b-card-text>
        </b-card>
    </div>
    </template>
       
    <script>


    export default {
      name: 'Card',

      props: {
        naziv: String,
        img: String,
        ocena: Number,
        cena: Number,
        id: Number,
        besplatan: Boolean,
        tip: String
      },
      
      methods: {

        idiNaCard(id){
            if(this.tip=="film"){
                this.$router.push({ name: 'Film', params: { id: id } });
            }else if(this.tip=="serija"){
                this.$router.push({ name: 'Serija', params: { id: id } });
            }
            
        }
        }
    }
    </script>