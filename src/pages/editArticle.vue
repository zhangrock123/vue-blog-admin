<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/index'}">文章列表</el-breadcrumb-item>
        <el-breadcrumb-item>文章编辑</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form-item app-flex app-flex-center">
        <div>
          标题
        </div>
        <div class="col-1">
          <el-input
            v-model="articleInfo.title"
            placeholder="请输入内容"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2}"></el-input>
        </div>
      </div>
      <div class="form-item app-flex app-flex-center">
        <div>类别</div>
        <div class="col-1">
          <el-select size="small" v-model="articleInfo.type" placeholder="请选择">
            <el-option
              v-for="item in options.type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="form-item app-flex">
        <div>封面图</div>
        <div class="col-1">
          <div class="image-upload-item">
            <el-upload
              class="box-center"
              :action="upload.url"
              :name="upload.fileName"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <i class="el-icon-upload"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="form-item app-flex">
        <div>文章内容</div>
        <div class="col-1">
          <quill-editor
            v-model="articleInfo.content"
            ref="myTextEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            @change="onEditorChange($event)"></quill-editor>
        </div>
      </div>
      <div class="submit-box marginT-20">
        <el-button size="small" type="success" @click="submitArticle">提交</el-button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      articleInfo: {
        title: "",
        content: "",
        type: "",
        coverImg: ""
      },
      upload: {
        url: "",
        fileName: "imgFile"
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
      },
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image"]
          ]
        }
      }
    };
  },
  components: {},
  methods: {
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      // this.content = html
      // console.log(html);
    },
    // 上传成功，显示图片剪切
    handleAvatarSuccess(res, file) {
      this.$loading.close();
    },
    // 图片格式和大小判断
    beforeAvatarUpload(file) {
      const limitFileTypeList = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif"
      ];
      const limitSize = 2;
      const isLimitFileType = limitFileTypeList.indexOf(file.type) != -1;
      const isLimitSize = file.size / 1024 / 1024 < limitSize;

      if (!isLimitFileType) {
        this.$message.error("上传图片格式不合法!");
      }
      if (!isLimitSize) {
        this.$message.error(`上传图片大小不能超过 ${limitSize}MB!`);
      }
      let isValid = isLimitFileType && isLimitSize;
      if (isValid) {
        this.$loading.open();
      }
      return isValid;
    },
    submitArticle() {
      console.log(this.articleInfo);
    }
  }
};
</script>

<style lang="less" scoped>
.image-upload-item {
  border-width: 1px;
  border-style: dashed;
  border-color: #e0e0e0;
  transition: all 0.3s ease;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  i {
    width: 100px;
    height: 100px;
    font-size: 34px;
    color: #c0c4cc;
    line-height: 100px;
    transition: all 0.3s ease;
  }
  &:hover {
    border-color: #409eff;
    background-color: #ecf5ff;
    transition: all 0.3s ease;
    i {
      color: #409eff;
      transition: all 0.3s ease;
    }
  }
}
.form-item {
  margin-bottom: 10px;
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
<style lang="less">
.quill-editor {
  .ql-toolbar {
    border: 1px solid #dcdfe6;
    border-radius: 4px 4px 0 0;
  }
  .ql-container {
    border: 1px solid #dcdfe6;
    border-radius: 0 0 4px 4px;
  }
}
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 300px;
}
</style>

