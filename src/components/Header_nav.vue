<template>
  <div class="header_con w">
    <router-link to="/" class="fl logo"></router-link>
    <el-menu :default-active="activeIndex" class="el-menu-demo fr" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/">星座首页<span></span></el-menu-item>
      <el-menu-item index="/sexz">十二星座<span></span></el-menu-item>
      <el-menu-item index="/fortune">星座运势<span></span></el-menu-item>
      <el-menu-item index="/masters">大师专栏<span></span></el-menu-item>
    </el-menu>  
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.header_con {
  a.logo {
    margin-top: 16px;
    display: inline-block;
    width: 194px;
    height: 49px;
    background: url(../assets/images/logo.png) no-repeat;
  }
}
.el-menu {
  li {
    width: 64px;
    height: 80px;
    line-height: 80px;
    padding: 0;
    margin: 0;
    font-size: 16px;
    margin-left: 54px;
    position: relative;
    &:hover {
      color: #4f88df;
    }
  }
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #4f88df;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  color: #4f88df;
  span {
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 64px;
    height: 1px;
    background: url(../assets/images/line.png);
    // display: none;
  }
}
</style>
