<template>
  <div name="eldatepicker">
    <el-date-picker
      :value="value"
      type="datetime"
      @input="inputChange($event)"
      @change="change"
      @blur="timeBlur"
      @focus="timeFocus"
      :placeholder="placeholder"
      :value-format="valueFormat"
      :format="format"
      :picker-options="pickerOptions"
      :size="size"
      :disabled="disabled"
      :editable="editable"
      :clearable="clearable"
      :align="align"
    ></el-date-picker>
  </div>
</template>
<script>
import lesFrontUtils from "les-front-utils";
import options from "./options";
import axios from "axios";
export default {
  name: "eldatepicker",
  props: {
    value: {
      type: [String, Object, Date],
      default: null,
      required: false
    },
    apiUrl: {
      required: false,
      type: String,
      default: options.defaultURL
    },
    valueFormat: {
      type: String,
      required: false
    },
    format: {
      type: String,
      default: "HHmm",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    size: {
      type: String,
      default: "mini",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    editable: {
      type: Boolean,
      default: false,
      required: false
    },
    clearable: {
      type: Boolean,
      default: true,
      required: false
    },
    align: {
      type: String,
      default: "left",
      required: false
    },
    //传参
    groupKey: {
      type: String,
      default: "A",
      required: false
    }
  },
  data() {
    return {
      nowTime: "",
      pickerOptions: {
        disabledDate: time => {
          return time.getTime() < new Date(1970 - 1 - 1).getTime();
        }
      }
    };
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    },
    inputChange(val) {
      let date = lesFrontUtils.Common.date2Str(new Date(), "yyyy-MM-DD HH:mm");
      let time = lesFrontUtils.Common.date2Str(val, "yyyy-MM-DD HH:mm");
      //val和真实时间的此刻相等，就取模拟时间的此刻，否则取选择的时间
      this.$emit("input", time == date ? this.nowTime : val);
    },
    timeBlur() {
      this.$emit("blur");
    },
    timeFocus(val) {
      this.load();
      this.$emit("focus");
    },
    load() {
      axios
        .get(options.baseURL + this.apiUrl, {
          params: {
            groupId: this.groupKey
          }
        })
        .then(res => {
          this.nowTime = res.data.data.currentDate;
        });
    }
  },
};
</script>