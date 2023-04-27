<template>
  <div class="container">
    <Headers/>
    <router-view/>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import DataTitle from '@/components/DataTitle'

export default {
  components:{
    Headers
  }
}
</script>

<style>
</style>
