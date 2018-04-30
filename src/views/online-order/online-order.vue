<template >
    <div >
        <card>
        <div style="text-align: center;margin-top: 30px;margin-bottom: 60px">
            <p style="font-size: 30px;color: cadetblue;font-weight:400">ONLINE CONSULTATION</p>
            <p style="font-size: 25px;color: black;margin-top: 20px">在线咨询</p>
            <p style="margin-top: 20px;font-size: 15px;color: black">我们只需了解您对照护的需求，有助于我们针对性的提出服务建议。 感谢您的配合。</p>
        </div>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <i-col span="7">
                <Form ref="lampsValidate" :model="lampsValidate" :rules="lampsRuleValidate"
                      :label-width="100">
                        <FormItem label="您的名字是？:"  prop="poleTypeName" >
                            <Input v-model="lampsValidate.poleTypeName" placeholder="请输入姓名"/>
                        </FormItem>
                    <FormItem label="您的手机号？:" prop="angle">
                        <i-input v-model="lampsValidate.angle"  placeholder="请输入手机号码"/>
                    </FormItem>
                    <FormItem label="您为谁寻找护理人员？:" prop="angle">
                        <i-input v-model="lampsValidate.angle" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入人员姓名"/>
                    </FormItem>
                </Form>
                <i-button type="success" size="large" long>提交申请</i-button>
            </i-col>
        </Row>
            <div style="margin-left: 50px">
                <p style="font-size: 30px;color: cadetblue;font-weight:400;text-align: center;margin-top: 100px">ORDER MANNER</p>
                <p style="font-size: 25px;color: black;margin-top: 20px;text-align: center">预约方式</p>
                <p style="font-size: 20px;margin-top: 30px">1.扫描二维码进入安佳公众号</p>
                <img src="../../images/14.png" style="margin-left: 150px;margin-top: 20px"/>
                <img src="../../images/15.png" style="margin-left: 30px">
                <p style="font-size: 20px;margin-top: 30px">2.进入公众号点击会员中心可以在线客服咨询，已经注册的用户可以直接选择预约服务</p>
                <img src="../../images/17.png" style="margin-left: 150px;margin-top: 20px"/>
                <img src="../../images/16.png" style="margin-left: 30px">
            </div>

        </card>
    </div>


</template>

<script>
    export default {
        name: "online-order",
        data(){
            return{
                lampsValidate: {
                    poleTypeName: '',
                    angle: '',
                },
                lampsRuleValidate: {
                    poleTypeName:[
                        {required: true, message: '不能为空', trigger: 'blur'},
                        {type: 'string', max: 15, message: '不能超过15个字符', trigger: 'blur' }
                    ],
                    angle:[
                        {required: true,message: '不能为空' , trigger: 'blur'},
                        {type: 'string', max:3, message: '不能超过999度', trigger: 'blur'}
                    ],
                }
            }
        }
    }
</script>

<style scoped>

</style>