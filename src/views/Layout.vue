<template>
<div>
  <el-container>
    <el-header style="height: none;" class="w">
      <Header_nav></Header_nav>
    </el-header>
    <el-main class="w">
      <router-view></router-view>
    </el-main>
    <el-footer style="height: none;"><Foot></Foot></el-footer>
  </el-container>
</div>

</template>

<script>
import Header_nav from "../components/Header_nav";
import Foot from "../components/Foot";
export default {
  data() {
    return {
      test: "123123"
    };
  },
  components: {
    Header_nav,
    Foot
  }
};
</script>

<style lang="scss" scoped >
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.el-header,
.el-footer {
  width: 100%;
  background-color: #fff;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-header {
  height: 80px;
  line-height: 80px;
}
</style>
