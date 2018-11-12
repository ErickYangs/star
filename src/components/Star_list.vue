<template>
  <ul class="clearfix">
    <li>
      <router-link to='/' class="icon-1" title="十二星座之白羊座"></router-link>
    </li>
    <li>
      <router-link to='/' class="icon-2" title="十二星座之金牛座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-3" title="十二星座之双子座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-4" title="十二星座之巨蟹座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-5" title="十二星座之狮子座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-6" title="十二星座之处女座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-7" title="十二星座之天秤座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-8" title="十二星座之天蝎座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-9" title="十二星座之射手座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-10" title="十二星座之摩羯座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-11" title="十二星座之水瓶座"></router-link>      
    </li>
    <li>
      <router-link to='/' class="icon-12" title="十二星座之双鱼座"></router-link>            
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  height: 107px;
  margin: 20px auto;

  li {
    float: left;
    margin-right: 10px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);

    &:hover {
      @for $i from 1 to 14 {
        .icon-#{$i} {
          background: url(../assets/images/icon_1.png) no-repeat;
          background-position-x: -($i - 1) * 84px;
          background-position-y: 0;
        }
      }
    }

    &.active {
      @for $i from 1 to 14 {
        .icon-#{$i} {
          background: url(../assets/images/icon_1.png) no-repeat;
          background-position-x: -($i - 1) * 84px;
          background-position-y: 0;
        }
      }
    }

    a {
      display: block;
      width: 74px;
      height: 98px;
    }

    @for $i from 1 to 14 {
      .icon-#{$i} {
        background: url(../assets/images/icon.png) no-repeat;
        background-position-x: -($i - 1) * 84px;
        background-position-y: 0;
      }
    }
  }

  li:last-of-type {
    margin-right: 0;
  }
}
</style>
