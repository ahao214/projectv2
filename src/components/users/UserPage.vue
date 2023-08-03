<template>
  <div>
    <el-tree :data="menus" show-checkbox node-key="name" :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
  },
};
</script>

<style lang="scss"></style>
