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

                        <b-form @submit="onSumbit">

                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px; color: rgb(0, 0, 0); border: none;">Sign into your account</h5>

                        <div class="form-outline mb-4">
                            <input id="form2Example17" v-model="form.username" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example17">Username</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" v-model="form.password"  id="form2Example27" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example27">Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>

                        <a class="small text-muted" href="#!">Forgot password?</a>
                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="/singup"
                            style="color: #393f81;">Register here</a></p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
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
    

    name: 'Login',
    data(){
        return{
            form: {
                username: '',
                password: ''
            }

        }
    },

    methods: {
        ...mapActions([
            'login'
        ]),
        onSumbit(e){
            e.preventDefault();
            if(this.form.username.length == 0){
                alert("Morate uneti username");
            }else if(this.form.password.length < 5){
                alert("Password mora imati minimalno 5 karaktera");
            }else{
                this.login(this.form).then(res => {
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
   background-color: #000000!important;
}

.fw-normal{
    background-color: #ffffff!important;
}
</style>