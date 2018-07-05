<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <header>
      <el-select size="small" v-model="searchInfo.status" placeholder="请选择上架状态">
        <el-option label="不限状态" value="-1"></el-option>
        <el-option label="已上架" value="3"></el-option>
        <el-option label="未上架" value="0"></el-option>
      </el-select>
      <el-button size="mini" type="success" @click="createType">
        <i class="icon-plus-circle"></i> 创建类别
      </el-button>
    </header>
    <section class="marginT-10">
      <el-table
        :data="dataList"
        border
        style="width: 100%;">
        <el-table-column
          prop="title"
          label="类别名">
        </el-table-column>
        <el-table-column
          prop="icon"
          label="图标"
          width="100">
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
        status: ""
      },
      dataList: [],
      page: {
        page: 1,
        size: 10,
        total: 1,
        sizeList: [5, 10, 15, 20]
      }
    };
  },
  methods: {
    search() {},
    changePageSize() {},
    createType() {
      this.$router.push("/edit-type");
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
</style>
