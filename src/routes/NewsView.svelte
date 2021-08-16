<script>
    import { Link } from "svelte-routing";
    import { Player, Hls } from '@vime/svelte';
    const hlsConfig = {
    
    };

    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    export let news;


    

    let newsinfo = news.filter(n => n.id == id);

</script>

<main>
    <div class="px-4 my-5">
        <Link to="hindinews" class="btn float-end btn-lg btn-primary">
            Back to News
        </Link>
        <h1 class="fw-bold">{newsinfo[0].title}</h1>
        
    </div>
    

    <div class="m-4">
        

        {#if newsinfo[0].videotype === "m3u8"}
            <Player controls>
                <Hls version="latest" config="{hlsConfig}" poster="/media/poster.png">
                    <source data-src={newsinfo[0].link} type="application/x-mpegURL" />
                </Hls>
            </Player>
            {:else}
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="responsive-iframe" title="News" src={newsinfo[0].link} allowfullscreen></iframe>
                </div>
        {/if}

        
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