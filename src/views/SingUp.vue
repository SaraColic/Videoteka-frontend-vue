<template>
    <div class="home bg-gradient">
        <section class="vh-100" style="background-color: dark;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
                <div class="card" style="border-radius: 1rem;">
                <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://clipground.com/images/movie-popcorn-clip-art-10.png"
                        alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

                    <b-form @submit="onSubmit">
                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Register to your account</h5>

                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                <input type="text" id="form3Example1" v-model="form.ime" class="form-control" />
                                <label class="form-label" for="form3Example1">First name</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                <input type="text" id="form3Example2" v-model="form.prezime" class="form-control" />
                                <label class="form-label" for="form3Example2">Last name</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <input id="form2Example17" v-model="form.username" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example17">Username</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="form2Example27" v-model="form.password" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example27">Password</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="email" id="form2Example18" v-model="form.email" class="form-control form-control-lg" required  />
                            <label class="form-label" for="form2Example18">Email address</label>
                        </div>

                        <div class="pt-1 mb-4">
                            <button class="btn btn-dark btn-lg btn-block" type="submit">Sing Up</button>
                        </div>
                        </b-form>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';

  export default {
    name: 'SingUp',
    data(){
        return{
            form: {
                ime: '',
                prezime: '',
                username: '',
                password: '',
                email: ''
            }

        }
    },

    methods: {
        ...mapActions([
            'singup'
        ]),

        onSubmit(e){
            e.preventDefault();
            if(this.form.ime.length == 0){
                alert("Unesite vase ime");
            }else if(this.form.prezime.length == 0){
                alert("Unesite vase prezime");
            }else if(this.form.username.length == 0){
                alert("Morate uneti username");
            }else if(this.form.password.length < 5){
                alert("Password mora imati minimalno 5 karaktera");
            }else{
                this.singup(this.form).then(res => {
                    if(res==true){
                        this.$router.push({ name: 'home'});
                    }
                });
            }
        }
    }

  }
  </script>

<style>
.home{
   background-color: #201050!important;
}
</style>