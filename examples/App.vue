<template>
  <div>
    <el-button type="primary" size="mini" @click="open">打开</el-button>
    <!-- <span>模拟此刻时间</span> -->
    <el-dialog
      title="时间"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        ref="insertForm"
        :model="insertForm"
        :rules="rules"
        label-width="110px"
        size="mini"
      >
        <el-form-item label="模拟此刻时间" prop="startTime">
          <eldatepicker v-model="insertForm.startTime"></eldatepicker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
import eldatepicker from "../packages/eldatepicker/src/eldatepicker.vue";
export default {
  name: "App",
  data() {
    return {
      insertForm: {},
      dialogVisible: false,
      rules: {
        startTime: [
          {
            required: true,
            message: "请选择开始时间",
            trigger: ["blur", "change"],
          },
        ],
      },
      editStartOptions: {
        disabledDate: (time) => {
          return time.getTime() < new Date(1970 - 1 - 1).getTime();
        },
      },
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.insertForm = {};
      this.dialogVisible = false;
    },
  },
  components: {
    eldatepicker,
  },
};
</script>