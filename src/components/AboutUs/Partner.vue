<template>
    <div>
        <TitleH1 :title='title' />
        <el-row class='tac ptn'>
        </el-row>
    </div>
</template>

<script>
import TitleH1 from '../Shared/TitleH1'

export default {
    components: {
        TitleH1,
    },
    data() {
        return {
            title: '合作伙伴',
        }
    },
}
</script>

<style>
.ptn{
    background: white;
    height: 300px;
}
</style>