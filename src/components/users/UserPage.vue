<template>
  <div>
    <el-tree :data="menus" show-checkbox node-key="name" :props="defaultProps">
    </el-tree>
    <el-button @click="getCheckedNodes">通过Node获取</el-button>
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
  methods:{
    getCheckedNodes(){
        let arr = this.$refs.tree.getCheckedNodes();

        console.log(arr);
    }
  }
};
</script>

<style lang="scss"></style>
