<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <div class="form-head">
        <img src="@/assets/logo_index.png" alt="黑马头条" />
      </div>
      <el-form class="form-content" ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- el-col 栅格布局，一共 24 列，:span 用来指定占用的大小，:offset 用来指定偏移量 -->
          <el-col :span="16">
            <el-input v-model="form.code" placeholder="验证码"></el-input>
          </el-col>
          <el-col :offset="1" :span="7">
            <!-- <el-button @click="handleSendCode">获取验证码</el-button> -->
            <el-button
              @click="handleSendCode"
              :disabled="!!codeTimer"
            >{{ codeTimer ? `剩余${codeTimeSeconds}秒` : '获取验证码'}}</el-button>
          </el-col>
        </el-form-item>
        <el-form-item>
          <!-- 给组件加class,会作用到它的根元素 -->
          <el-button class="btn-login" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AppLogin',
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSendCode () {
      // 解构赋值
      const { mobile } = this.form
      axios({
        // 在后端给的接口文档上查看 获取人机验证码的方式
        // 接口文档上的获取方法
        method: 'GET',
        // 接口文档上的在线地址
        url: `http://ttapi.research.itcast.cn/mp/v1_0/captchas/${mobile}`
      }).then(res => {
        // 输出接口文档需要返回的数据 文档中写着返回 message data 数据
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  background: url(../../assets/login_bg.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  .form-head {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 200px;
    }
  }
  .form-wrap {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    .btn-login {
      width: 100%;
    }
  }
}
</style>
