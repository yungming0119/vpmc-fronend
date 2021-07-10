<template>
    <div class="sub-baner">
        <LayerButton class="item"/>
        <MeasureButton class="item"/>
        <select class="item"><option value="測試">測試</option></select>
        <select class="item"><option value="測試">測試</option></select>
        <button class="item">測試</button>
    </div>
</template>
<script>
import LayerButton from './SubBanner/LayerButton'
import MeasureButton from './SubBanner/MeasureButton'


export default {
    name: "SubBanner",
    components:
        {
            LayerButton,
            MeasureButton
        }
}
</script>
<style scoped>
.sub-baner{
    display: flex;
    justify-content: center;
    background: #dcdcdc;
    box-shadow: 0px 5px 2px 0 #0000008c;
    z-index: 500;
}
.sub-baner .item{
    background: #ffffff6b;
    border: 1px solid #ffffff;
    margin: 0px 5px;
    padding: 5px 10px;
    border-radius: 0px;
    cursor: pointer;
    -webkit-transition: 0.5s all;
    transition: 0.3s all;
}
.sub-baner .item:hover{
    background: #2280fb69;
}
</style>