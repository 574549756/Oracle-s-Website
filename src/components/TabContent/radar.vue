<template>
  <div class="skillsRadar">
    <div class="header"></div>
    <div class="skillsIcon">
      <svg class="vue" aria-hidden="true">
        <use xlink:href="#icon-vuejs"></use>
      </svg>
      <svg class="node" aria-hidden="true">
        <use xlink:href="#icon-node-js"></use>
      </svg>
      <svg class="jquery" aria-hidden="true">
        <use xlink:href="#icon-http"></use>
      </svg>
      <svg class="react" aria-hidden="true">
        <use xlink:href="#icon-minglinghang"></use>
      </svg>
      <svg class="html" aria-hidden="true">
        <use xlink:href="#icon-html"></use>
      </svg>
      <svg class="javascript" aria-hidden="true">
        <use xlink:href="#icon-socialjavascript"></use>
      </svg>
    </div>
    <div id="myChart" :style="{width: '200px', height: '200px'}"></div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts")
// 引入柱状图组件
require("echarts/lib/chart/radar")
// 引入提示框和title组件
require("echarts/lib/component/tooltip")
require("echarts/lib/component/title")
export default {
	name: "hello",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		}
	},
	mounted() {
		console.log("画图了")
		this.drawLine()
	},
	methods: {
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(
				document.getElementById("myChart"),
				"dark"
			)
			// 绘制图表
			myChart.setOption({
				backgroundColor: "#424244",
				title: {},
				tooltip: {},
				legend: {},
				radar: {
					// shape: 'circle',
					name: {
						textStyle: {
							color: "rgba(238, 197, 102,0)"
						}
					},
					shape: "circle",
					splitArea: {
						show: false
					},
					splitLine: {
						lineStyle: {
							color: [
								"rgba(238, 197, 102, 0.1)",
								"rgba(238, 197, 102, 0.2)",
								"rgba(238, 197, 102, 0.4)",
								"rgba(238, 197, 102, 0.6)",
								"rgba(238, 197, 102, 0.8)",
								"rgba(238, 197, 102, 1)"
							].reverse()
						}
					},
					axisLine: {
						lineStyle: {
							color: "rgba(238, 197, 102, 0.5)"
						}
					},
					indicator: [
						{ name: "nodejs", max: 100 },
						{ name: "react", max: 100 },
						{ name: "vue", max: 100 },
						{ name: "js", max: 100 },
						{ name: "html", max: 100 },
						{ name: "http", max: 100 }
					]
				},
				series: [
					{
						type: "radar",
						areaStyle: { normal: { opacity: 0.5 } },
						data: [
							{
								value: [30, 50, 60, 80, 85, 60],
								name: ""
							}
						]
					}
				]
			})
			console.log(myChart)
		}
	}
}
</script>

<style lang="scss">
#mychart {
	width: 400px;
	height: 400px;
}

.skillsRadar {
	margin-top: 30px;
	.header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 30px 0 20px 0;
		h3 {
			color: white;
			margin: 0 0 10px 4vw;
		}
		.breakLine {
			align-self: center;
			background-color: #bcbcbe;
			height: 1px;
			width: 25vw;
			z-index: 100;
			position: relative;

			&::before {
				position: absolute;
				top: -1px;
				display: block;
				content: "";
				align-self: flex-start;
				background: #f56c6c;
				height: 3px;
				width: 4.25vw;
			}
		}
	}
	.skillsIcon {
		position: absolute;
		z-index: 10;
		height: 300px;
		margin-left: 80px;
		svg {
			fill: #f3f3f5;
			width: 26px;
			height: 26px;
			position: absolute;
			background: #f56c6c;
			border-radius: 13px;
			border: 3px solid #f56c6c;
		}
		.vue {
			top: 132px;
			left: -42px;
		}
		.react {
			left: -42px;
			top: 42px;
		}
		.node {
			left: 39px;
			top: -3px;
		}
		.jquery {
			fill: #f3f3f5;
			left: 118px;
			top: 43px;
		}
		.javascript {
			left: 39px;
			top: 178px;
		}
		.html {
			left: 118px;
			top: 132px;
		}
		.css {
			left: 136px;
			top: 135px;
		}
	}
}
</style>