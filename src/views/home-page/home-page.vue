<template>
    <div id="app">
        <carousel autoplay v-model="value2" loop>
            <carousel-item >
                <img  style="width: 100%;height: 400px" src="../../images/4.jpg"/>
            </carousel-item>
            <carousel-item>
                <img  style="width: 100%;height: 400px" src="../../images/5.jpg"/>
            </carousel-item>
            <carousel-item>
                <img  style="width: 100%;height: 400px" src="../../images/6.jpg"/>
            </carousel-item>
        </carousel>
        <p style="color: cadetblue;font-size: 30px;text-align: center;margin-top: 50px">SERVICE PROJECT</p>
        <p style="color: black;font-size: 20px;text-align: center;margin-top: 5px">安佳延续护理平台为您服务</p>
        <Row style="margin-top: 50px">
            <Col span="12">
            <img src="../../images/7.png"/>
            </Col>
            <Col span="12">
            <div style="text-align: center;margin-top: 50px">
                <p style="color: cadetblue;margin-top: 50px;font-size: 40px">为什么选择安佳:</p>
                <p style="color: cadetblue;font-size: 25px">出院后的患者仍然有很高的健康照顾需求。</p>
                <p style="color: cadetblue;font-size: 25px">我公司就以延续性护理为重点，使出院患者能在的恢复期中得到持续的卫生保健，促进患者的康复。</p>
                <div style="margin-top: 25px;">
                    <i-button  type="warning"> <span style="font-size: 15px">立即预约 </span>  </i-button>
                </div>
            </div>
            </Col>
        </Row >
        <Row style="margin-top: 40px">
            <Col span="12">
            <img src="../../images/9.png"/>
            </Col>
            <Col span="12">
            <div style="text-align: center;margin-top: 50px">
                <p style="color: cadetblue;margin-top: 50px;font-size: 40px">安佳的服务模式：</p>
                <p style="color: cadetblue;font-size: 25px">通过首次评估为用户指定一对一专业的护理计划，</p>
                <p style="color: cadetblue;font-size: 25px">并实施计划的同时随时监测用户的状态并依据情况更改</p>
                <p style="color: cadetblue;font-size: 25px">同时我公司拥有完善服务体系，为用户全程服务。</p>
                <div style="margin-top: 25px;">
                    <i-button  type="warning"> <span style="font-size: 15px">立即预约 </span>  </i-button>
                </div>
            </div>
            </Col>
        </Row>
        <Row style="margin-top: 40px">
            <Col span="12">
            <img src="../../images/10.png"/>
            </Col>
            <Col span="12">
            <div style="text-align: center;margin-top: 50px">
                <p style="color: cadetblue;margin-top: 50px;font-size: 40px">安佳的联系方式：</p>
                <p style="color: cadetblue;font-size: 25px">扫一扫二维码进入安佳,咨询客服获得更多安佳咨询。</p>
                <p style="color: cadetblue;font-size: 25px">在公众号直接注册即可立即享有安佳公司的护理服务。</p>
                <p style="color: cadetblue;font-size: 25px">或者咨询我们的热线电话：0791-94316750</p>
                <div style="margin-top: 25px;">
                    <i-button  type="warning"> <span style="font-size: 15px">立即预约 </span>  </i-button>
                </div>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "home-page",
        data(){
            return{
                value2:0
            }

        }
    }
</script>

<style scoped>

</style>