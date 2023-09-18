<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)

defineProps({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    cancel: {
        type: String,
        required: true
    }
})
</script>

<template>
    <el-button class="dialog-button" text @click="centerDialogVisible = true">
        <slot name="label"></slot>
    </el-button>

    <el-dialog v-model="centerDialogVisible" :title="title" width="30%" center>
        <span>
            {{ description }}
        </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">{{cancel}}</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">
                    <slot name="confirm"></slot>
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<style lang="scss" scoped>
.dialog-footer button:first-child {
    background: red;
    color: white;
    font-weight: bold;
    margin-right: 10px;
}

</style>