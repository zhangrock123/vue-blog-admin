<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/type-list'}">类别列表</el-breadcrumb-item>
      <el-breadcrumb-item>类别编辑</el-breadcrumb-item>
    </el-breadcrumb>
   <div class="form-item app-flex app-flex-center">
      <div>
        类别名
      </div>
      <div>
        <el-input
          v-model="typeInfo.name"
          placeholder="请输入内容"
          size="small"></el-input>
      </div>
    </div>
    <div class="form-item app-flex app-flex-center">
      <div>
        标签
      </div>
      <div>
        <el-input
          v-model="typeInfo.name"
          placeholder="请输入内容"
          size="small"></el-input>
      </div>
    </div>
    <div class="marginT-20 submit-box">
      <el-button size="small" type="success" @click="submitType">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeInfo: {
        name: "",
        icon: ""
      }
    };
  },
  methods: {
    submitType() {}
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.form-item {
  margin-bottom: 10px;
  > div {
    width: 300px;
  }
  > div:first-child {
    width: 100px;
    font-size: 13px;
    padding-right: 20px;
    text-align: right;
  }
}
.submit-box {
  padding-left: 100px;
}
</style>
