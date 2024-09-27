<template>
  <div class="page">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
