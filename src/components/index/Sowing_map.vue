<template>
  <el-carousel indicator-position="none" height="315px">
    <el-carousel-item v-for="item in imgSrc" :key="item.id">
      <!-- <h3>{{item.src}}</h3> -->
      <!-- <h3>{{ item }}</h3> -->
      <!-- <img src="{{item.src}}" /> -->
      <!-- <img :src=item.src /> -->
      <!-- <img src="../../assets/images/index/banner_1.jpg" /> -->
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import "jquery";
export default {
  data() {
    return {
      imgSrc: [
        {
          id: 1,
          src: "../../assets/images/index/banner_1.jpg"
        },
        {
          id: 2,
          src: "../../assets/images/index/banner_2.jpg"
        },
        {
          id: 3,
          src: "../../assets/images/index/banner_3.jpg"
        },
        {
          id: 4,
          src: "../assets/images/index/banner_2.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__item {
  border-radius: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 315px;
  margin: 0;
}

.el-carousel__item:nth-of-type(1) {
  background: url(../../assets/images/index/banner_1.jpg) no-repeat center;
  background-size: cover;
}
.el-carousel__item:nth-of-type(2) {
  background: url(../../assets/images/index/banner_2.jpg) no-repeat center;
  background-size: cover;
}
.el-carousel__item:nth-of-type(3) {
  background: url(../../assets/images/index/banner_1.jpg) no-repeat center;
  background-size: cover;
}
.el-carousel__item:nth-of-type(4) {
  background: url(../../assets/images/index/banner_3.jpg) no-repeat center;
  background-size: cover;
}
</style>
