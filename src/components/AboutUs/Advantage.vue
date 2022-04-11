<template>
    <div>
        <TitleH1 :title='title' />
        <el-row class='tac adv'>
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
            title: '我们的优势',
        }
    },
}
</script>

<style>
.adv{
    background: white;
    height: 300px;
}
</style>