<template>
    <div>
      <b-card class="zanrovi text-light" no-body header="ŽANROVI" >
          <b-list-group v-for="zanr in zanrovi" :key="zanr.zanroviId">
          <div  @click="idiNaZanr(zanr.id)"><b-list-group-item class="text-light" href="#"> {{ zanr.naziv }} </b-list-group-item></div>
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
      console.log("dfghjk")
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

.zanrovi {
  border: none;
  background-color: #201050!important;
  color: rgb(192, 187, 187) !important;
  padding: 0rem 7rem 7rem 5rem;
}

.text-light{
  background-color: #201050!important;
}
</style>