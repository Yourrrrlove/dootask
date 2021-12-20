"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[330],{92330:(t,a,o)=>{o.r(a),o.d(a,{default:()=>e});const s={data:function(){return{loadIng:0,formDatum:{}}},mounted:function(){this.systemSetting()},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(a){a&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.formDatum_bak)},systemSetting:function(t){var a=this;this.loadIng++,this.$store.dispatch("call",{url:"system/setting?type="+(t?"save":"get"),data:this.formDatum}).then((function(o){var s=o.data;t&&$A.messageSuccess("修改成功"),a.loadIng--,a.formDatum=s,a.formDatum_bak=$A.cloneJSON(a.formDatum)})).catch((function(o){var s=o.msg;t&&$A.modalError(s),a.loadIng--}))}}};const e=(0,o(51900).Z)(s,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"setting-item submit"},[o("Form",{ref:"formDatum",attrs:{model:t.formDatum,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[o("FormItem",{attrs:{label:t.$L("允许注册"),prop:"reg"}},[o("RadioGroup",{model:{value:t.formDatum.reg,callback:function(a){t.$set(t.formDatum,"reg",a)},expression:"formDatum.reg"}},[o("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("允许")))]),t._v(" "),o("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("禁止")))])],1)],1),t._v(" "),o("FormItem",{attrs:{label:t.$L("登录验证码"),prop:"loginCode"}},[o("RadioGroup",{model:{value:t.formDatum.login_code,callback:function(a){t.$set(t.formDatum,"login_code",a)},expression:"formDatum.login_code"}},[o("Radio",{attrs:{label:"auto"}},[t._v(t._s(t.$L("自动")))]),t._v(" "),o("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),o("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"auto"==t.formDatum.login_code?o("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("自动：密码输入错误后必须添加验证码。")))]):t._e()],1),t._v(" "),o("FormItem",{attrs:{label:t.$L("密码策略"),prop:"passwordPolicy"}},[o("RadioGroup",{model:{value:t.formDatum.password_policy,callback:function(a){t.$set(t.formDatum,"password_policy",a)},expression:"formDatum.password_policy"}},[o("Radio",{attrs:{label:"simple"}},[t._v(t._s(t.$L("简单")))]),t._v(" "),o("Radio",{attrs:{label:"complex"}},[t._v(t._s(t.$L("复杂")))])],1),t._v(" "),"simple"==t.formDatum.password_policy?o("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("简单：大于或等于6个字符。")))]):"complex"==t.formDatum.password_policy?o("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("复杂：大于或等于6个字符，包含数字、字母大小写或者特殊字符。")))]):t._e()],1),t._v(" "),o("FormItem",{attrs:{label:t.$L("聊天昵称"),prop:"chatNickname"}},[o("RadioGroup",{model:{value:t.formDatum.chat_nickname,callback:function(a){t.$set(t.formDatum,"chat_nickname",a)},expression:"formDatum.chat_nickname"}},[o("Radio",{attrs:{label:"optional"}},[t._v(t._s(t.$L("可选")))]),t._v(" "),o("Radio",{attrs:{label:"required"}},[t._v(t._s(t.$L("必填")))])],1),t._v(" "),"required"==t.formDatum.chat_nickname?o("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("必填：发送聊天内容前必须设置昵称。")))]):t._e()],1)],1),t._v(" "),o("div",{staticClass:"setting-footer"},[o("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports}}]);