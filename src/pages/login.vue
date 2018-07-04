<template>
<div class="login-container">
  <div class="login-box box-center">
    <header class="text-center font-16">
      用户登录
    </header>
    <section>
      <ul class="input-section-box">
        <li>
          <el-input placeholder="请输入登录账号" v-model="loginInfo.j_username">
            <template slot="prepend">
              <div class="width-20 text-center">
                <i class="icon-user font-18"></i>
              </div>
            </template>
          </el-input>
        </li>
        <li>
          <el-input type="password" placeholder="请输入登录密码" v-model="loginInfo.j_password">
            <template slot="prepend">
              <div class="width-20 text-center">
                <i class="icon-lock font-18"></i>
              </div>
            </template>
          </el-input>
        </li>
        <li>
          <el-input class="verify-image" placeholder="请输入验证码" v-model="loginInfo.j_captcha">
            <template slot="append">
              <img src="" alt="">
            </template>
          </el-input>
        </li>
      </ul>
    </section>
    <footer class="text-center">
      <el-button size="small" type="success">
        <div class="width-100 font-14">登 录</div>
      </el-button>
    </footer>
  </div>
</div>
</template>

<script>
import service from "@/service";
import { mapActions } from "vuex";
import utils from "@/utils";
export default {
  data() {
    return {
      redirectInfo: {
        name: this.$route.query.redirect || "index",
        query: this.$route.query.query || "{}",
        params: this.$route.query.params || "{}"
      },
      loginInfo: {
        j_username: "",
        j_password: "",
        j_captcha: ""
      },
      isEnterLogin: false
    };
  },
  methods: {},
  mounted() {
    this.isEnterLogin = true;
    // 添加回车登录事件
    document.onkeydown = event => {
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 13) {
        this.isEnterLogin && this.$router.push("/index");
      }
    };
  },
  beforeDestroy() {
    this.isEnterLogin = false;
  }
};
</script>

<style lang="less" scoped>
.login-container {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("~@/assets/images/login-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .login-box {
    width: 320px;
    height: auto;
    padding: 30px 25px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #eee;
    border-radius: 6px;
    > header {
      margin-bottom: 25px;
      font-size: 20px;
      color: #666;
      text-shadow: 0 1px 1px #fff;
    }
    .input-section-box {
      li {
        + li {
          margin-top: 15px;
        }
      }
    }
    > footer {
      margin-top: 25px;
    }
  }
}
</style>
