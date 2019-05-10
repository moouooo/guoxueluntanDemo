<template>
    <div>
        <form v-if="!user">
            <div class="form-group">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            
            </div>
           
            <mt-button type="primary">登录</mt-button>
            <mt-button type="danger" to="/zhuce">注册</mt-button>
            </form>
        <p v-else>您已经登录</p>
       
    </div>
</template>

<script>

export default {
    name:'new',
    // data:{
    //     userName: '',
    //     password: '',
    //     name:'',
    //     // user:this.existUser
    // },

//     data(){
//  return {
//       slots: [
//         {
//           flex: 1,
//           values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
//           className: 'slot1',
//           textAlign: 'right'
//         }, {
//           divider: true,
//           content: '-',
//           className: 'slot2'
//         }, {
//           flex: 1,
//           values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
//           className: 'slot3',
//           textAlign: 'left'
//         }
//       ]
//  }
//     },
    
    mounted:{
       
    },
       props:['existUser'],
        methods:{
            handleLog(){
                let _this = this;
                let content = JSON.stringify({
                        name:_this.name,
                        password:_this.password
                    });
                fetch('http://localhost:3000/log',{
                    method:'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Content-Length": content.length.toString(),
                    },
                    body: content
                    }).then(function(res){
                        if(res.ok){
                            res.json().then(function(data){
                            localStorage.setItem("token",data.token);
                            _this.user = data.user;
                            _this.$dispatch('log',data.user);
                            _this.$router.go('/');
                            });
                        } else {
                            _this.user = undefined;
                        }
                    });
            }
        },
    methods:{
        login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
 
      }
    }
}

</script>
