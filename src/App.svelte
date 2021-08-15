<script>
	export let news;
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import News from "./routes/News.svelte";
	import NewsView from "./routes/NewsView.svelte";


	export let url = "";
</script>

<Router url="{url}">
	<div>
	  	<Route path="/">
			<Home news={news} />
		</Route>
		<Route path="newsview">
			<NewsView news={news} />
		</Route>
		<Route path="news/:id" component="{News}" />
	</div>
</Router>