<template>
    <div class="home bg-gradient text-white">
      <br/><br/>
      <div class="korpa "><b> KORPA</b></div> <br><br>

      <div v-if="korpa[0]==null" class="placanje">! VASA KORPA JE PRAZNA</div>
      <div v-else>
      <b-container v-for="item in korpa" :key="item.id">
        <div v-if="item.filmId">
          <b-row>
            <b-col> <b-card
              :img-src="item.film.img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 14rem;"
              class="mb-2"
            ></b-card>
            </b-col>
            
            <b-col cols="9">
              <b-table-simple class="table" outlined small>
                <b-thead class="red">
                  <b-tr>
                    <b-th scope="col">Naziv</b-th>
                    <b-th scope="col">Cena</b-th>
                    <b-th scope="col">Zanr</b-th>
                    <b-th scope="col">Trajanje</b-th>
                    <b-th scope="col">Godina</b-th>
                    <b-th scope="col">Direktor</b-th>
                  </b-tr>
                </b-thead>
                <tbody>
                  <b-tr>
                    <b-th scope="row">{{ item.film.naziv }}</b-th>
                    <b-td>{{ item.film.cena }} rsd</b-td>
                    <!-- <b-td>{{ item.film.zanr.naziv }}</b-td> -->
                    <b-td>{{ item.film.trajanje }}</b-td>
                    <b-td>{{ item.film.godina }}</b-td>
                    <!-- <b-td>{{ item.film.direktor.ime }} {{ item.film.direktor.prezime }}</b-td> -->
                  </b-tr>
                </tbody>
              </b-table-simple>
            </b-col>
          
            <b-col><b-icon @click="obrisiIzKorpe(item.id, item.film.cena)" icon="x" class="trash" font-scale="2.9" shift-v="0"></b-icon></b-col>
          </b-row>
        </div>


        <div v-if="item.serijaId">
          <b-row>
            <b-col> <b-card
              :img-src="item.serija.img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 14rem;"
              class="mb-2"
            ></b-card>
            </b-col>
            
            <b-col cols="9">
              <b-table-simple class="table" outlined small>
                <b-thead class="red">
                  <b-tr>
                    <b-th scope="col">Naziv</b-th>
                    <b-th scope="col">Cena</b-th>
                    <b-th scope="col">Zanr</b-th>
                    <b-th scope="col">Trajanje</b-th>
                    <b-th scope="col">Godina</b-th>
                    <b-th scope="col">Direktor</b-th>
                  </b-tr>
                </b-thead>
                <tbody>
                  <b-tr>
                    <b-th scope="row">{{ item.serija.naziv }}</b-th>
                    <b-td>{{ item.serija.cena }} rsd</b-td>
                    <!-- <b-td>{{ item.serija.zanr.naziv }}</b-td> -->
                    <b-td>{{ item.serija.trajanje }}</b-td>
                    <b-td>{{ item.serija.godina }}</b-td>
                    <!-- <b-td>{{ item.serija.direktor.ime }} {{ item.serija.direktor.prezime }}</b-td> -->
                  </b-tr>
                </tbody>
              </b-table-simple>
            </b-col>
          
            <b-col><b-icon @click="obrisiIzKorpe(item.id, item.serija.cena)" icon="x" class="trash" font-scale="2.9" shift-v="0"></b-icon></b-col>
          </b-row>
        </div>
   
      </b-container>

      <div class="placanje">
      <p> Ukupno: {{ cena }} rsd </p>
      <b-button @click="izvrsiPlacanje" variant="dark">Izvrsi placanje</b-button></div>
    </div></div>
  </template>
  
  <script>

import { mapMutations, mapState, mapActions } from 'vuex';

  export default {
    name: 'Korpa',

    components: {
        
    },

    computed: {
      ...mapState([
        'korpa',
        'cena',
        'filmovi',
        'serije'
      ]),
     
    },

    data(){
        return{
            
        }
    },

    watch: {
      // korpa(){
      //   this.getFilmoviKorpa()
      // }
      
    },

    methods: {

      ...mapMutations([
          'briseCenuFilma',
          'briseItemIzKorpe',
          'briseKorpu'
      ]),

      ...mapActions([
        'getFilmoviKorpa',
        'postIznajmljeniFilm',
        'postIznajmljeniSerija',
        'deleteKorpa',
        'ukloniItemIzKorpe'
      ]),

      povecavaZaMjesec(date, months) {
        let d = date.getDate();
        date.setMonth(date.getMonth() + months);
        if (date.getDate() != d) {
          date.setDate(0);
        }
        return date;
      },

      izvrsiPlacanje(e) {
        e.preventDefault();

        var item
        var currentDate = new Date()

        for(item in this.korpa){
          const data={
            filmId: this.korpa[item].filmId,
            serijaId: this.korpa[item].serijaId,
          }
          if(data.serijaId == null){
            const dataFilm={filmId: this.korpa[item].filmId, datumIsteka: this.povecavaZaMjesec(currentDate, 1).toString() }
            currentDate = new Date()
            this.postIznajmljeniFilm(dataFilm);
          }else if(data.filmId == null){
            const dataSerija={serijaId: this.korpa[item].serijaId, datumIsteka: this.povecavaZaMjesec(currentDate, 1).toString()}
            currentDate = new Date()
            this.postIznajmljeniSerija(dataSerija);
          }

        }
        this.$alert("Uspjesno placanje")
        this.deleteKorpa();
      },

      obrisiIzKorpe(id, cena){
        this.$confirm("Da li ste sigurni?").then(() => {

        const item = {
          id: id,
          cena: cena
        }

          this.ukloniItemIzKorpe(item);

        });
      }
    },

    mounted() {
   //   alert(localStorage.token)
      if(!localStorage.token){
        this.$router.push({ name: 'home'});
      }
      this.getFilmoviKorpa()
    },
  }

  
  </script>


<style>
 .home{
    background-color: #000000!important;
 }

 .korpa{
    border: outset rgb(174, 9, 9);
    padding: 8px 16px;
    background-color: #000000!important;
    color: rgb(192, 187, 187);
  }
  .trash{
    padding: 5px 5px;
    border: outset rgb(202, 200, 200);
  }

  .table{
    text-align: left;
  }

  .placanje{
    text-align: left;
    padding: 50px 0px 0px 180px;
  }

  .red{
    color: rgb(174, 9, 9);
  }
</style>