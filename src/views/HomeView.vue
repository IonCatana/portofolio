<template>
  <div>
    <MyMain />
    <MyFooter />
  </div>
</template>

<script>
// @ is an alias to /src


import MyMain from '@/components/main/MyMain.vue'
import MyFooter from '@/components/footer/MyFooter.vue'
export default {
  name: 'HomeView',
  components: {
    MyMain,
    MyFooter
  }
}
</script>

<style lang="scss">

</style>
