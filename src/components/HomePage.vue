<template>
  <div class="home">
    <HeaderPage />
    <el-container class="content">
      <MenuPage />
      <el-container>
        <el-main>
          <BreadCrumb/>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><FooterPage /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderPage from "./common/HeaderPage";
import FooterPage from "./common/FooterPage";
import MenuPage from "./common/MenuPage";
import BreadCrumb from "./common/BreadCrumb";
export default {
  components: {
    HeaderPage,
    FooterPage,
    MenuPage,
    BreadCrumb
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont{
      margin:20px 0;
    }
  }
}
</style>
