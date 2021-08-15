<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import NewsView from "./routes/NewsView.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<div>
	  <Route path="/"><Home /></Route>
	  <Route path="newsview" component="{NewsView}" />
	</div>
</Router>