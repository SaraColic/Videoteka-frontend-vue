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
    searchFilmovi: [],
    searchSerije: [],
    searchAktivan: false,
    serija: {},
    epizoda: {},
    token: '',
    glumci: {},
    korpa: [],
    cena: 0,
    iznajmljeni: [],
    filmoviIstogZanra: [],
    serijeIstogZanra: [],
    sezone: [],
    epizodeIsteSezone: [],
    daLiPostojiUKorpi: false,
    daLiPostojiUIznajmljenima: false
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

    dodajSearchFilmovi(state, searchFilmovi){
      state.searchFilmovi = searchFilmovi;
    },

    dodajSearchSerije(state, searchSerije){
      state.searchSerije = searchSerije;
    },

    aktivirajSearch(state){
      state.searchAktivan = true;
    },

    deaktivirajSearch(state){
      state.searchAktivan = false;
    },

    dodajGlumiUFilmu(state, glumci){
      // state.film.glumci = glumci;
      state.glumci=glumci;
      //console.log(state.film)
      //console.log(state.film.glumci)

    },
    dodajGlumiUSeriji(state, glumci){
      // state.serija.glumci = glumci;
      state.glumci=glumci;
    },

    dodajFilmUKorpu(state, filmZaKorpu){
      state.korpa.push(filmZaKorpu);
    },

    dodajSerijuUKorpu(state, serijaZaKorpu){
      state.korpa.push(serijaZaKorpu);
    },

    kreirajKorpu(state, korpa){
      state.korpa = korpa;
    },

    cenaNula(state){
      state.cena = 0
    //  alert(state.cena);
    },

    umanjiCenu(state, broj){
      state.cena = state.cena - broj
    },

    // ukupnaCena(state,cena){
    //   state.cena = state.cena + cena;
    // },

    // briseCenuFilma(state,cena){
    //   state.cena = state.cena - cena;
    // },

    setCena(state, cena){
      state.cena = cena;
    },
     
    dodajFilmoveZanra(state, filmoviIstogZanra){
      state.filmoviIstogZanra = filmoviIstogZanra;
    },

    dodajSerijeZanra(state, serijeIstogZanra){
      state.serijeIstogZanra = serijeIstogZanra;
    },

    dodajUIznajmljene(state, iznajmljeni){
      state.iznajmljeni.push(iznajmljeni);

    },

    kreirajIznajmljene(state, iznajmljeni){
      state.iznajmljeni = iznajmljeni;
    },

    briseItemIzKorpe(state, id){
      state.korpa.splice(id, 1)
    },
    
    briseKorpu(state){
      state.korpa = [];
  //    alert(state.korpa);
    },

    dodajEpSezone(state, epizodeIsteSezone){
      state.epizodeIsteSezone = epizodeIsteSezone;
    },

    daLiPostojiUKorpi(state){
      state.daLiPostojiUKorpi = true
    },

    deakrivirajDaLiPostojiUKorpi(state){
      state.daLiPostojiUKorpi = false
    },

    daLiPostojiUIznajmljenima(state){
      state.daLiPostojiUIznajmljenima = true
    },

    deaktDaLiPostojiUIznajmljenima(state){
      state.daLiPostojiUIznajmljenima = false
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


    getFilmoviKorpa({ commit }){
        fetch(`http://127.0.0.1:8001/korpa/odKorisnika`,{
          method: 'GET',
          headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
        .then(obj => obj.json())
        .then(e => {
          commit('kreirajKorpu', e);
          var cena = 0;
          var item;
          for (item in e){
            if(e[item].serijaId == null){
              cena = cena + e[item].film.cena;
            }else if(e[item].filmId == null){
              cena = cena + e[item].serija.cena;
            }
            
          }
          commit('setCena', cena);
        })
      
    },

        getFilmIzKorpe({commit}, id){
          fetch(`http://127.0.0.1:8001/korpa/film/odKorisnika/${id}`,{
            method: 'GET',
            headers: {'Authorization': `Bearer ${localStorage.token}` }
        })
          .then(obj => obj.json())
          .then(e => {
            //console.log(e)
            if(e){
              commit('daLiPostojiUKorpi');
            }
          
          })
        
      },

      getSerijaIzKorpe({commit}, id){
        fetch(`http://127.0.0.1:8001/korpa/serija/odKorisnika/${id}`,{
          method: 'GET',
          headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
        .then(obj => obj.json())
        .then(e => {
          //console.log(e)
          if(e){
            commit('daLiPostojiUKorpi');
          }
        
        })
      
      },

      getFilmIzIznajmljenih({commit}, id){
        fetch(`http://127.0.0.1:8001/iznajmljeni/film/odKorisnika/${id}`,{
          method: 'GET',
          headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
        .then(obj => obj.json())
        .then(e => {
          console.log(e)
          if(e){
            commit('daLiPostojiUIznajmljenima');
          }
        
        })

      },

      getSerijaIzIznajmljenih({commit}, id){
        fetch(`http://127.0.0.1:8001/iznajmljeni/serija/odKorisnika/${id}`,{
          method: 'GET',
          headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
        .then(obj => obj.json())
        .then(e => {
          //console.log(e)
          if(e){
            commit('daLiPostojiUIznajmljenima');
          }
        
        })

      },

    postFilmoviKorpa({commit}, data){
      fetch(`http://127.0.0.1:8001/korpa/film`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(data)
        })
        .then(obj => obj.json())
        .then(e => {
          if(e.msg){
            alert("Nevalidni kredencijali");
          }{
            commit('dodajFilmUKorpu', e);
            alert("Dodato u korpu!");
          }
        })
        .catch(err => console.log(err))
    },

    postSerijeKorpa({commit}, data){
      fetch(`http://127.0.0.1:8001/korpa/serija`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(data)
        })
        .then(obj => obj.json())
        .then(e => {
          if(e.msg){
            alert("Nevalidni kredencijali");
          }{
            commit('dodajSerijuUKorpu', e);
            alert("Dodato u korpu!");
          }
        })
        .catch(err => console.log(err))
    },

    deleteKorpa({commit}){
      fetch(`http://127.0.0.1:8001/korpa/korisnik`,{
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
      .then(obj => obj.json())
      .then(e => {
        if(e != 1){
          alert("Greska");
        }else{
          commit('briseKorpu');
          commit('cenaNula')
         // alert("Obrisano");
        }
      })
      .catch(err => console.log(err))
    },

    ukloniItemIzKorpe({commit}, item){
        fetch(`http://127.0.0.1:8001/korpa/${item.id}`,{
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${localStorage.token}` }
      })
      .then(obj =>{ obj.json()})
      .then(e => {
        console.log(e)
     //   alert(e)
      /*  if(e != 1){

          alert("Greska");
        }else{*/
          commit('briseItemIzKorpe', item.id);
          commit('umanjiCenu', item.cena);
          alert("Obrisano");
    //    }
      })
      
      .catch(err => console.log(err))
    },

    postIznajmljeniFilm({ commit }, data){
      fetch(`http://127.0.0.1:8001/iznajmljeni/film`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(data)
        })
        .then(obj => obj.json())
        .then(e => {
          if(e.msg){
            alert("Nevalidni kredencijali");
          }{
            commit('dodajUIznajmljene', e);
          }
        })
        .catch(err => console.log(err))
    },

    postIznajmljeniSerija({ commit }, data){
      fetch(`http://127.0.0.1:8001/iznajmljeni/serija`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.token}` },
            body: JSON.stringify(data)
        })
        .then(obj => obj.json())
        .then(e => {
          if(e.msg){
            alert("Nevalidni kredencijali");
          }{
            commit('dodajUIznajmljene', e);
          }
        })
        .catch(err => console.log(err))
    },

    getIznajmljeni({ commit }){
      fetch(`http://127.0.0.1:8001/iznajmljeni/odKorisnika`,{
        method: 'GET',
        headers: {'Authorization': `Bearer ${localStorage.token}` }
    })
      .then(obj => obj.json())
      .then(e => {
        commit('kreirajIznajmljene', e);
      })
    
  },


    getFilmoviIstogZanra({ commit }, id){
      fetch(`http://127.0.0.1:8001/filmovi/zanr/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajFilmoveZanra', e);
      })
    
  },

    getSerijeIstogZanra({ commit }, id){
      fetch(`http://127.0.0.1:8001/serije/zanr/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajSerijeZanra', e);
      })
    
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
        //console.log(e)
        //console.log(state.filmovi)
        if(e != state.filmovi.length){
          fetch('http://127.0.0.1:8001/filmovi')
          .then(obj => obj.json())
          .then(ee => {
            commit('dodajFilmove', ee);
          })
        }
        
      })
    },

    getSearchFilmovi({commit}, query){
      fetch(`http://127.0.0.1:8001/filmovi/search/${query}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajSearchFilmovi', e);
      })
    },

    getSearchSerije({commit}, query){
      fetch(`http://127.0.0.1:8001/serije/search/${query}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajSearchSerije', e);
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


    getEpizodeSezone({commit}, id){
      fetch(`http://127.0.0.1:8001/epizode/sezone/${id}`)
      .then(obj => obj.json())
      .then(e => {
        commit('dodajEpSezone', e);
      })
    },
    
    // socket_comment({ commit }, msg) {
    //   const komentar = JSON.parse(msg);
    //   commit('addComment', {filmId: komentar.filmId, komentar: komentar});
    // }
  }
})
