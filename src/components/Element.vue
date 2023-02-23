<template>
<div>
    Element {{ broj }}
</div>
</template>
   
<script>
export default {
    name: 'Element',
    //kad me neko ugnijezdi proslijedice mi broj koje je Number
  props: {
    broj: Number
  },
}
</script>
