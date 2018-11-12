<template>
  <div class="home_container">
    <div class="star-list">
      <Starlist></Starlist>
    </div>
    <div class="layout">
      <div class="left-con fl">
        <!-- 轮播图插件 -->
        <Sowingmap></Sowingmap>
      </div>
      <div class="right-con fr">12313</div>
    </div>
  </div>
</template>

<script>
import Starlist from "../components/Star_list";
import Sowingmap from "../components/index/Sowing_map";
export default {
  components: {
    Starlist,
    Sowingmap
  }
};
</script>

<style lang="scss" scoped>
</style>
