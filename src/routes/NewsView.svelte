<script>
    import { Link } from "svelte-routing";
</script>

<main>
    <div class="px-4 my-5 text-center">
        <h1 class="fw-bold">Aaj Tak (आज तक)</h1>
    </div>

    <div class="m-4">
        <center>
            <Link to="/" class="btn mb-4 btn-lg btn-primary">
                Back to Home
            </Link>
        </center>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" title="News" src="https://feeds.intoday.in/livetv/?id=livetv-at&aud_togle=1&autostart=1&t_src=live_tv_page&t_med=web&utm_medium=web&utm_source=live_tv_page&v=1.3" allowfullscreen></iframe>
        </div>
    </div>
</main>

<style>
    iframe {
        height: 750px;
        width: 100%;
    }
</style>