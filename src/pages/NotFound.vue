<template>
    <div class="not-found">
        <div class="card row">
            <div class="txt col">
                <span class="f-b">404</span>
                <span class="msg">page not found</span>
                <button @click="handleHomeClick">首頁</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NotFound",
    data()
        {
            return {
                bg_img: require('@/assets/logo.png')
            }
        },
    methods:
        {
            handleHomeClick()
            {
                this.$router.push({name:'Login'})
            }
        }
}
</script>
<style scoped>
.not-found{
    background: rgb(179 184 190);
    height: 100vh;
    width: 100vw;
}
.card{
    position: absolute;
    width: 70%;
    height: 70%;
    background: rgb(246 247 255);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
}
.card .txt{
    justify-content: center;
    
}
.f-b{
    font-size: 200px;
}
.msg{
    font-size: 15px;
    text-align: center;
}
</style>