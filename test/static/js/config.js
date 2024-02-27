
const COLOR = [
    "#EE6A66", "#6BC588", "#FFC300", "#24ABFD"
];

var ISCANVAS2D = true;

switch (uni.getSystemInfoSync().platform) {
	case 'android':
		ISCANVAS2D = true
		break;
	case 'ios':
		ISCANVAS2D = true
		break;
	default:
		ISCANVAS2D = false
		break;
}

const RESPOND = {
    success: 0,
    warn: 301,
    error: 500,
};

const TIMEARRAY = [
	{
	    text: '指定日期',
	    value: 'auto'
	},
    {
        text: '天',
        value: 'day'
    },
    {
        text: '月',
        value: 'month'
    },
    {
        text: '季度',
        value: 'monthMore'
    },
    {
        text: '年',
        value: 'year'
    }
   
];
const TABLIST = [
    {name:"渔船种类",type:"WECHAT"},
    {name:"捕捞许可证种类",type:"OPERATE"},
    {name:"港籍",type:"GJJK"},
];

const CARD_MENU = [
	{title:"会员报表中心",author:"howcode",img:"https://s1.ax1x.com/2023/03/31/ppRp4iV.jpg",url:"/myPackageA/pages/main/index"},
	{title:"智慧教育报表中心",author:"howcode",img:"https://s1.ax1x.com/2023/03/31/ppRp5GT.jpg",url:"/myPackageA/pages/school/index"},
	{title:"差旅报表中心",author:"秋云",img:"https://s1.ax1x.com/2023/03/31/ppRpfI0.jpg",url:""},
	{title:"运动报表中心",author:"howcode",img:"https://s1.ax1x.com/2023/03/31/ppRpWaq.jpg",url:"/myPackageA/pages/sport/index"},
	{title:"财务报表中心",author:"howcode",img:"https://s1.ax1x.com/2023/03/31/ppRpozF.jpg",url:"/myPackageA/pages/finance/index"},
]


module.exports = {
    COLOR,
    TIMEARRAY,
    TABLIST,
    RESPOND,
		ISCANVAS2D,
		CARD_MENU
}