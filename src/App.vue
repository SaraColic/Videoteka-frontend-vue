
<template>
  <div id="app">
    <div>
    <b-navbar fixed="top" type="dark" variant="dark">
      <b-navbar-brand href="/">Home </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/filmovi">Filmovi </b-nav-item>
          <b-nav-item href="/serije">Serije </b-nav-item>
          <div v-if="token==false"></div>
          <div v-else><b-nav-item href="/iznajmljeni">Iznajmljeni</b-nav-item></div>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <!-- <b-collapse-brand id="nav-collapse" is-nav> -->
            <div v-if="token==false">
            <b-navbar-nav>
              <b-nav-item href="/singup">Sing Up</b-nav-item>
              <b-nav-item href="/login">Log In</b-nav-item>
            </b-navbar-nav>
            </div>
            <div v-else>
              <b-nav-item href="/" @click="uklanjaToken()">Sing Out</b-nav-item>
            </div>
          <!-- </b-collapse-brand> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br/><br/>
  </div>  
    <router-view/>
    
    <div class="footer bg-dark bg-gradient text-muted">
      <section>
        <p><br/>
          Filmovi i serije online s prevodom. Gledajte filmove i serije u visokoj HD kvaliteti.
          © 2021. All Rights Reserved. Videoteka.com je forma pretraživača interneta koja služi
          za pretragu linkova filmova koji se nalaze na drugim web stranicama ili serverima. 
          Za povredu DMCA kontaktirajte servere (openload.co,verystream.com i dr).
        </p>
      </section>
      <div class="text-center p-3"> © 2021
      <a class="text-muted" href="https://mdbootstrap.com/">Videoteka.com</a>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
  export default {
      name: 'App',
  
      components: {
    },

      data() {
        return {
        }
      },

    computed: {
      ...mapState([
        'token'
      ])
    },

    watch: {

    },

    mounted(){
      if(localStorage.token){
        this.dodajToken(localStorage.token)
      }
    },

    methods: {
      ...mapMutations([
          'dodajToken'
      ]),
      ...mapMutations([
          'ukloniToken'
      ]),

      uklanjaToken(){
        this.ukloniToken();
      }

    },
    
    sockets: {
      error(err) {
        alert(err);
      }
    }
  
    }
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #172a3d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #6e767f;
}
.footer{
  padding: 25px 170px;
  background-color: #201050!important;
}

 .navbar.navbar-dark.bg-dark{
    background-color: #201050!important;
 }


</style>
