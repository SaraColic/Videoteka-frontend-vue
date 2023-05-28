<template>
    <div>
      <b-card class="text-light" no-body>
          <div class="zanr"><b>ŽANROVI</b></div>
          <b-list-group class="zanrovi" v-for="zanr in zanrovi" :key="zanr.zanroviId">
          <div  @click="idiNaZanr(zanr.id)"><b-list-group-item class="text-light" to="#"> {{ zanr.naziv }} </b-list-group-item></div>
          </b-list-group>
      </b-card>
    </div>
  </template>

<script>
  
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Zanrovi',

  components: {
    
  },

  props: {
    //zanrovi: String
  },


  watch: {

  },

  computed: {
    ...mapState([
        'zanrovi'
    ])
  },

  mounted(){
    this.getZanrovi();
  },

  methods: {
    ...mapActions([
        'getZanrovi'
    ]),

    idiNaZanr(id){
        this.$router.push({ name: 'Zanr', params: { id: id } });

    }
  }
  

}

</script>

<style scoped>
.pagination {
  justify-content: center;
}

.table {
  width: 80%;
  margin-left: 10%;
}

.zanr{
  border: outset rgb(174, 9, 9);
  padding: 8px 0px;
  color: rgb(192, 187, 187);
  
}

.text-light{
  background-color: #000000!important;
}

.zanrovi{
  font-style: italic;
  text-align: center;
}
</style>