<template>
  <div id="login">
    <div class="container">
      <h2>登录</h2>
      <div class="rows100">
        <div class="col">
          <div class="inputBox">
            <input type="text" v-model="username" @keyup.enter="login" required />
            <span class="text">账号</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="password" v-model="password" @keyup.enter="login" required />
            <span class="text">密码</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <input type="submit" value="登录" @click="Sign" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { login } from "../api/api";
export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "123456"
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    Sign() {
      let params = { username: this.username, password: this.password };
      login(params).then(e => {
        console.log(e.data.msg)
        if (e.data.status == 200) {
          let token = e.data.token;
          this.changeLogin({
            token
          });
          this.$router.push({path:"/"})
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
}
.container {
  width: 320px;
  padding: 20px;
  h2 {
    width: 100%;
    color: #45f3ff;
    font-size: 28px;
    text-align: center;
    margin-bottom: 10px;
  }
  .rows100 {
    position: relative;
    width: 100%;
    display: grid;
  }
  .col {
    position: relative;
    width: 100%;
    // padding: 0 10px;
    margin: 30px 0 10px;
    transition: 0.5s;
  }
  .inputBox {
    position: relative;
    width: 100%;
    height: 40px;
    color: #45f3ff;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      box-shadow: none;
      border: none;
      outline: none;
      font-size: 14px;
      padding: 0 10px;
      color: #fff;
      z-index: 1;
      &:focus + .text,
      &:valid + .text {
        top: -35px;
        left: -10px;
      }
      &:focus ~ .line,
      &:valid ~ .line {
        height: 100%;
      }
    }
    .text {
      position: absolute;
      left: 0;
      top: 0;
      line-height: 40px;
      font-size: 14px;
      padding: 0 10px;
      display: block;
      transition: 0.5s;
      //   pointer-events: none;
    }
    .line {
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #45f3ff;
      transition: 0.5s;
      border-radius: 2px;
    }
  }
  input[type="submit"] {
    margin-top: 10px;
    width: 100%;
    border: none;
    padding: 10px 35px;
    cursor: pointer;
    outline: none;
    background-color: #45f3ff;
    color: #000;
    font-size: 14px;
    border-radius: 3px;
  }
}
</style>