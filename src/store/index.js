import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmovi: [],
    serije: [],
    zanrovi: [],
    epizode: [],
    komentari: [],
    film: {},
    serija: {},
    epizoda: {},
    token: '',
    glumci: {}
  },
  mutations: {
    dodajFilmove(state, filmovi) {
      state.filmovi = filmovi;
    },
    dodajSerije(state, serija) {
      state.serije = serija;
    },
    dodajZanrove(state, zanrovi) {
      state.zanrovi = zanrovi;
    },
    dodajEpizode(state, epizode) {
      state.epizode = epizode;
    },
    dodajKomentare(state, komentari) {
      state.komentari = komentari;
    },
    dodajKomentar(state, komentar){
      state.komentari.push(komentar);
    },
    dodajFilm(state, film){
      state.film = film;
    },
    dodajSeriju(state, serija){
      state.serija = serija;
    },
    dodajEpizodu(state, epizoda){
      state.epizoda = epizoda;
    },
    dodajEpUEpizode(state, epizoda){
      state.epizode.push(epizoda)
    },
    dodajFIlmUFilmove(state, film){
      state.filmovi.push(film)
    },
    dodajSerijuUSerije(state, serija){
      state.serije.push(serija)
    },
    dodajToken(state, token){
      state.token=token;
      localStorage.token=token;
    },
    ukloniToken(state){
      state.token='';
      localStorage.token='';
    },

    dodajGlumiUFilmu(state, glumci){
      // state.film.glumci = glumci;
      state.glumci=glumci;
      console.log(state.film)
      console.log(state.film.glumci)

    },
    dodajGlumiUSeriji(state, glumci){
      // state.serija.glumci = glumci;
      state.glumci=glumci;
    },

    // addComment(state, obj) {
    //   const film = state.filmovi.filter( film => film.filmId == obj.filmId )[0];
    //   if(!film.komentari){
    //     film.komentari=[]
    //   }
    //   film.komentari.push(obj.komentar);
    // }
  },



  actions: {

    login({ commit }, korisnik){
      return new Promise( (resolve) => {
      fetch(`http://127.0.0.1:8000/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(korisnik)
      })
      .then(obj => obj.json())
      .then(e => {
        if(e.token){
          commit('dodajToken', e.token);
          resolve(true)
        }else{
          alert(e.msg)
          resolve(false)
        }
        })
      })
    },

    singup({ commit }, korisnik){
      return new Promise( (resolve) => {
        fetch(`http://127.0.0.1:8000/register`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(korisnik)
        })
        .then(obj => obj.json())
        .then(e => {
          if(e.token){
            commit('dodajToken', e.token);
            resolve(true)
          }else{
            alert(e.msg)
            resolve(false)
          }
        })
      })
    },

    getFilm({ commit, state }, id){
      const film = state.filmovi.filter( film => film.id == id )[0];
      if(film){
        commit('dodajFilm', film);
      }else{
        fetch(`http://127.0.0.1:8001/filmovi/${id}`)
        .then(obj => obj.json())
        .then(e => {
          commit('dodajFilm', e);
          commit('dodajFIlmUFilmove', e);
        })
      }
    },

    getSerija({ commit, state }, id){
      const serija = state.serije.filter( serija => serija.id == id )[0];
      if(serija){
        commit('dodajSeriju', serija);
      }else{
        fetch(`http://127.0.0.1:8001/serije/${id}`)
        .then(obj => obj.json())
        .then(e => {
          commit('dodajSeriju', e);
          commit('dodajSerijuUSerije', e);
        })
      }
    },

    getEpizoda({ commit, state }, id){
      const ep = state.epizode.filter( ep => ep.id == id )[0];
      if(ep){
        commit('dodajEpizodu', ep);
      }else{
        fetch(`http://127.0.0.1:8001/epizode/${id}`)
        .then(obj => obj.json())
        .then(e => {
          commit('dodajEpizodu', e);
          commit('dodajEpUEpizode', e);
        })
      }
    },

    
    getGlumiUFilmu({commit}, id){
      fetch(`http://127.0.0.1:8001/glumiUFilmu/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajGlumiUFilmu', e);
      })
    },

    getGlumiUSeriji({commit}, id){
      fetch(`http://127.0.0.1:8001/glumiUSeriji/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajGlumiUSeriji', e);
      })
    },

    getZanrovi({commit}){
      fetch('http://127.0.0.1:8001/zanrovi')
      .then(obj => obj.json())
      .then(e => {
        commit('dodajZanrove', e);
      })
    },

    getFilmovi({commit, state}){
      fetch('http://127.0.0.1:8001/filmovi/broj')
      .then(obj => obj.json())
      .then(e => {
        console.log(e)
        console.log(state.filmovi)
        if(e != state.filmovi.length){
          fetch('http://127.0.0.1:8001/filmovi')
          .then(obj => obj.json())
          .then(ee => {
            commit('dodajFilmove', ee);
          })
        }
        
      })
    },

    getSerije({commit, state}){
      fetch('http://127.0.0.1:8001/serije/broj')
      .then(obj => obj.json())
      .then(e => {
        if(e != state.serije.length){
          fetch('http://127.0.0.1:8001/serije')
          .then(obj => obj.json())
          .then(ee => {
            commit('dodajSerije', ee);
          })
        }
    })
  },

    getEpizode({commit}){
      fetch('http://127.0.0.1:8001/epizode')
      .then(obj => obj.json())
      .then(e => {
        commit('dodajEpizode', e);
      })
    },

    getKomentari({commit}, id){
      fetch(`http://127.0.0.1:8001/komentari/poFIlmu/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajKomentare', e);
      })
    },

    getKomentariEpizode({commit}, id){
      fetch(`http://127.0.0.1:8001/komentari/poEpizodi/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajKomentare', e);
      })
    },
    
    // socket_comment({ commit }, msg) {
    //   const komentar = JSON.parse(msg);
    //   commit('addComment', {filmId: komentar.filmId, komentar: komentar});
    // }
  }
})
