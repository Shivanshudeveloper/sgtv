import App from './App.svelte';


let news = [
	{
		id: 1,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png",
		title: "Aaj Tak (आज तक)",
		link: "https://feeds.intoday.in/livetv/?id=livetv-at&aud_togle=1&autostart=1&t_src=live_tv_page&t_med=web&utm_medium=web&utm_source=live_tv_page&v=1.3",
		videotype: "normal"
	},
	{
		id: 2,
		type: "hindi news",
		image: "https://exchange4media.gumlet.io/news-photo/109657-abplogo.jpg?format=webp&w=750&dpr=1.0",
		title: "ABP News",
		link: "https://abp-i.akamaihd.net/hls/live/765529/abphindi/master.m3u8",
		videotype: "m3u8"
	},
	{
		id: 3,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629028657/todolist/1200px-Zee_news.svg-removebg-preview_gjv3bk.png",
		title: "Zee News (ज़ी न्यूज़)",
		link: "https://zeenews.india.com/hindi/live-tv/embed",
		videotype: "normal"
	},
	{
		id: 4,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629030242/todolist/news-24-logo-article-removebg-preview_jelhdm.png",
		title: "News 24",
		link: "https://content.vidgyor.com/live/midroll/html/news24.html",
		videotype: "normal"
	},
	{
		id: 5,
		type: "hindi news",
		image: "https://www.livenewsnow.com/wp-content/uploads/2014/12/India-TV-1.png",
		title: "India TV",
		link: "https://content.vidgyor.com/live/midroll/html/indiatv.html",
		videotype: "normal"
	},
	{
		id: 6,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/News_nation_logo.jpg",
		title: "News Nation",
		link: "https://www.dailymotion.com/embed/video/x7t0g3i?autoplay=1&mute=0",
		videotype: "normal"
	},
	{
		id: 7,
		type: "hindi news",
		image: "https://res.cloudinary.com/dx9dnqzaj/image/upload/v1629037739/todolist/images-removebg-preview_wrbjul.png",
		title: "Tez News",
		link: "https://feeds.intoday.in/livetv/?id=livetv-tez&aud_togle=1&autostart=1&t_src=live_tv_page&t_med=web&utm_medium=web&utm_source=live_tv_page&v=1.3",
		videotype: "normal"
	},
	{
		id: 8,
		type: "hindi news",
		image: "https://akamaividz.zee5.com/image/upload/w_368,h_207,c_scale,f_auto,q_auto/resources/0-9-zeebusiness/channel_list/zeebusinessanilsinghvi.png",
		title: "Zee Business",
		link: "https://www.zeebiz.com/live-tv/embed",
		videotype: "normal"
	},
	{
		id: 9,
		type: "hindi news",
		image: "https://new-img.patrika.com/upload/images/2016/11/05/indore-press-club-protest-against-ban-on-telecast-of-ndtv-india-on-den-cable-network-1478317915_835x547.jpg",
		title: "NDTV India",
		link: "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/ndtvindiamaster.m3u8",
		videotype: "m3u8"
	},
	{
		id: 10,
		type: "hindi news",
		image: "https://www.goskribe.com/ImgSkribeExtra/b186bffc-3b11-4d4e-8899-e36b3d0c82cdRSTV.jpg",
		title: "Rajya Sabha Tv",
		link: "https://m-c16-j2apps.s.llnwi.net/hls/0285.RSTV.in.m3u8",
		videotype: "m3u8"
	},
	{
		id: 11,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lok_Sabha_TV_logo.jpg/200px-Lok_Sabha_TV_logo.jpg",
		title: "Lok Sabha Tv",
		link: "https://m-c16-j2apps.s.llnwi.net/hls/0275.LoksabhaTV.in.m3u8",
		videotype: "m3u8"
	},
	{
		id: 12,
		type: "hindi news",
		image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/DD_News.png",
		title: "DD News",
		link: "https://m-c20-j2apps.s.llnwi.net/hls/0182.DDNews.in.m3u8",
		videotype: "m3u8"
	}
];


let categories = [
	{
		id: 1,
		title: "हिंदी न्यूज़",
		link: "hindinews"
	},
	{
		id: 2,
		title: "Englsh News",
		link: "englishnews"
	},
	{
		id: 3,
		title: "Entertainment",
		link: "entertainment"
	},
	{
		id: 4,
		title: "Movies",
		link: "movies"
	},
	{
		id: 5,
		title: "Kids",
		link: "kids"
	},
	{
		id: 6,
		title: "Sports",
		link: "sports"
	},
];

const app = new App({
	target: document.body,
	props: {
		news,
		categories
	}
});

export default app;