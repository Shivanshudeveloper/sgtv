<script>
    import { Link } from "svelte-routing";
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    export let news;


    

    let newsinfo = news.filter(n => n.id == id);

</script>

<main>
    <div class="px-4 my-5 text-center">
        <h1 class="fw-bold">{newsinfo[0].title}</h1>
    </div>

    <div class="m-4">
        <center>
            <Link to="/" class="btn mb-4 btn-lg btn-primary">
                Back to Home
            </Link>
        </center>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="responsive-iframe" title="News" src={newsinfo[0].link} allowfullscreen></iframe>
        </div>
    </div>
</main>

<style>
    .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
</style>