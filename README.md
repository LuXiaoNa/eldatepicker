# el-date-picker
## 说明：该组件二次封装了elementUI中el-date-picker时间日期组件，该组件只使用于原el-date-picker组件中type为datetime的类型即有”此刻“的时间组件
## 后端接口说明
```json
   QueryPath ：/pm/train/queryCurrentGroupInfo
   Method:get
   return:
   -----------------------------------------
    {
      "code": "1",
       "data": {
       "groupId": "A",
       "currentDate": "2022-08-31T10:38:05.000+0800",
       "currentDateStr": "2022-08-31 10:38:05",
       "airport": "ZSHC",
       "trainStatus": "RUNNING"
    },
     "msg": "成功"
   }
```
## 前端使用方法
### 安装方法：
    npm install eldatepicker --registry=http://192.28.4.1:4873
###  main.js文件使用如下代码：
    import eldatepicker from 'eldatepicker'
    Vue.use(eldatepicker, { baseURL: "/iis/dbms/" })
### vue.config.js文件配置如下代码：
 ```      "/iis/dbms/": {
                target: 'http://192.28.8.3:9997', // 目标代理接口地址
                secure: false,
                changeOrigin: true,// 开启代理，在本地创建一个虚拟服务端
                ws: true,
                pathRewrite: {
                    '^/iis/dbms/': "/"
                }
           }
```
###  文件中使用举例如下：
```
            <eldatepicker
                  v-model="insertForm.startTime"
                  @change="startTimeChange"
                  ref="time"           //自定义，用于回显
                  format="yyyy-MM-dd HH:mm:ss"     //默认显示格式：HH:mm
                  placeholder="选择开始时间"           //默认空
              ></eldatepicker>

```
### esdatepicker属性：
   - apiUrl：请求地址，非必填项，默认接口"/pm/train/queryCurrentGroupInfo"，请求方式为get
   - groupKeyy：请求参数,非必填项,默认A;可传A、B、C、D
   - format：默认显示格式：HH:mm，使用同el-date-picker组件，
   - size：默认"mini",使用同el-date-picker组件，
   - placeholder：使用同el-date-picker组件，
   - align：使用同el-date-picker组件，
   - disabled：使用同el-date-picker组件，
   - editable：使用同el-date-picker组件，
   - clearable：使用同el-date-picker组件，
   - 组件中通过picker-options已设置禁止选择1970年以前的日期
### esdatepicker方法：
   - change ：用户确认选定的值时触发
   -  blur：当 input 失去焦点时触发，使用方式同el-date-picker组件
   -  focus：当 input 获得焦点时触发，使用方式同el-date-picker组件
