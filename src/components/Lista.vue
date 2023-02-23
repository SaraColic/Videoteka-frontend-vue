<template>
<div>
    <div v-for="elem in niz" :key="elem">
        <Element :broj="elem"></Element>
    </div>
</div>
</template>

<script>
import Element from '@/components/Element.vue'
export default {
    name: 'Lista',
    components: {
        Element
    },
    // data(){
    //     return {
    //         niz: [1, 2, 3 ,4, 5]
    //     }
    // },
}
</script>