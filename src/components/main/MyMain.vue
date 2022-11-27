
<template>
  <div id="main">
    <MyJumbatron />
    <ProjectSection />

  </div>
</template>

<script>
import MyJumbatron from '@/components/main/MyJumbatron.vue';
import ProjectSection from '@/components/main/ProjectSection.vue';
export default {
  name: 'MyMain',
  components: {
    MyJumbatron,
    ProjectSection

  }
}
</script>

<style lang="scss">

</style>