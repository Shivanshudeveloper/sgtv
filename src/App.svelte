<script>
	export let news;
	export let categories;
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import News from "./routes/News.svelte";
	import NewsView from "./routes/NewsView.svelte";


	export let url = "";
</script>

<Router url="{url}">
	<div>
	  	<Route path="/">
			<Home categories={categories} />
		</Route>
		<Route path="/hindinews">
			<News news={news} />
		</Route>
		<Route path="newsview">
			<NewsView news={news} />
		</Route>
	</div>
</Router>