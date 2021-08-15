import App from './App.svelte';


let news = [
	{
		id: 1,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png",
		title: "Aaj Tak (आज तक)",
		link: "https://feeds.intoday.in/livetv/?id=livetv-at&aud_togle=1&autostart=1&t_src=live_tv_page&t_med=web&utm_medium=web&utm_source=live_tv_page&v=1.3"
	},
	{
		id: 2,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629028657/todolist/1200px-Zee_news.svg-removebg-preview_gjv3bk.png",
		title: "Zee News (ज़ी न्यूज़)",
		link: "https://zeenews.india.com/hindi/live-tv/embed"
	},
	{
		id: 3,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629030242/todolist/news-24-logo-article-removebg-preview_jelhdm.png",
		title: "News 24",
		link: "https://content.vidgyor.com/live/midroll/html/news24.html"
	},
	{
		id: 4,
		type: "hindi news",
		image: "https://www.livenewsnow.com/wp-content/uploads/2014/12/India-TV-1.png",
		title: "India TV",
		link: "https://content.vidgyor.com/live/midroll/html/indiatv.html"
	},
	{
		id: 5,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/News_nation_logo.jpg",
		title: "News Nation",
		link: "https://www.dailymotion.com/embed/video/x7t0g3i?autoplay=1&mute=0"
	},
	{
		id: 6,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629037739/todolist/images-removebg-preview_wrbjul.png",
		title: "Tez News",
		link: "https://feeds.intoday.in/livetv/?id=livetv-tez&aud_togle=1&autostart=1&t_src=live_tv_page&t_med=web&utm_medium=web&utm_source=live_tv_page&v=1.3"
	}
];

const app = new App({
	target: document.body,
	props: {
		news
	}
});

export default app;