<template>
    <div class="banner row">
        <div class="logo group">
            <img :src="require('@/assets/logo.png')">
        </div>
        <div class="push-notification  group">
            <span>焦點要聞:  眾所矚目的旋轉豪宅「陶朱隱園」傳每坪 8百萬天價全棟完售</span>
        </div>
        <div class="user  group">
            <img :src="require('@/assets/img/unknown-user.jpg')">
            <span>{{userState.username}}</span>
            <router-link style="color:#44b2ff;" v-if="!userState.isLogin" to="/">登入</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Banner",
    data() 
        {
            return {
                userState:
                {}
            }
        },
    mounted()
        {
            this.userState = 
            {
                username: this.$store.state.user.username || '未知',
                isLogin: this.$store.state.user.isLogin
            }
        }
}
</script>
<style scoped>
.banner{
    justify-content: space-between;
    background: #0e3c63;
    padding: 5px 0px;
        color: white;
}
.group{
    padding: 0px 10px;
    margin: 5px 0px;
    height: 80%;
    border-left: 2px solid rgba(255, 255, 255, 0.335);
}
.logo{
    height: 40px;
    background: #ffffffd9;
    border-radius: 0px 0px 10px 0px;
}
.logo img{
    height: inherit;
}
.push-notification{
    display: flex;
    align-items: center;
    background: #ffffff3b;
    border-radius: 0px 10px 5px 0px;
    width: 400px;
}
.push-notification span{
    white-space: nowrap;
    overflow: hidden;
}

.user{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0px 10px;
    /* padding: 10px; */
}
.user img{
    height:20px
}
.user span{
    margin: 0px 5px;
}
</style>