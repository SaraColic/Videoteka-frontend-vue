<template>
    <div class="home">
    <div class="atributi">
        <label class="text-muted">Izaberi sezonu</label><br/>
        <b-dropdown right split text="Sezona 1" variant="danger">
            <b-dropdown-item>Sezona 1</b-dropdown-item>
            <b-dropdown-item>Sezona 2</b-dropdown-item>
        </b-dropdown>
    </div><br/>
    <div><Epizoda/></div>
    </div>
</template>

<script>
    import Epizoda from '@/components/Epizoda.vue'

    export default {
        name: 'Sezone',
        components: {
            Epizoda
        },
    }
</script>

<style>
 .atributi{
  text-align: left ;
 }
 .home{
   background-color: #201050!important;
}

</style>