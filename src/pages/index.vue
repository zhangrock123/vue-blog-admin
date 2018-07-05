<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <header>
      <el-input class="inline" size="small" placeholder="输入关键字" v-model="searchInfo.keyword" clearable></el-input>
      <el-select size="small" v-model="searchInfo.type" placeholder="请选择类别">
        <el-option
          v-for="item in options.type"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select size="small" v-model="searchInfo.status" placeholder="请选择上架状态">
        <el-option label="不限状态" value="-1"></el-option>
        <el-option label="已上架" value="3"></el-option>
        <el-option label="未上架" value="0"></el-option>
      </el-select>
      <el-button size="mini" type="primary" @click="search(1)">
        <i class="icon-search"></i> 查询
      </el-button>
      <el-button size="mini" type="success" @click="createArticle">
        <i class="icon-plus-circle"></i> 创建文章
      </el-button>
    </header>
   <section class="marginT-10">
     <el-table
        :data="dataList"
        border
        style="width: 100%;">
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="viewCount"
          label="阅读数"
          width="90">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="220">
          <template slot-scope="scope">
            <el-button class="no-padding" size="mini" plain @click="editHotel(scope.row)">
              <span class="font-12">酒店编辑</span>
            </el-button>
            <el-button class="no-padding" size="mini" type="primary" plain @click="editRoomCountOrPrice(scope.row,'roomCount')">
              <span class="font-12">房量管理</span>
            </el-button>
            <el-button class="no-padding" size="mini" type="success" plain @click="editRoomCountOrPrice(scope.row,'roomPrice')">
              <span class="font-12">房价管理</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
   </section>
   <footer class="text-center marginT-10">
      <el-pagination
        @current-change="search"
        @size-change="changePageSize"
        :current-page.sync="page.page"
        :page-sizes="page.sizeList"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInfo: {
        keyword: "",
        status: "",
        type: ""
      },
      dataList: [],
      page: {
        page: 1,
        size: 10,
        total: 1,
        sizeList: [5, 10, 15, 20]
      },
      options: {
        type: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          }
        ]
      }
    };
  },
  methods: {
    search() {},
    changePageSize() {},
    createArticle() {
      this.$router.push("/edit-article");
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
</style>
