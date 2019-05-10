<template>
    <div>
         <p v-if="!user">
            请先登录
            <router-link to="login">登录</router-link>
            
        </p>
        <p v-if="user" >
           {{username}}
        </p>


    </div>
</template>
<script>
export default {
    name:'mine',
    data:{
        username:"左左左"
    }
}
</script>
