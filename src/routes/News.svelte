<script>
	export let news;
    import { Link } from "svelte-routing";
</script>


<main>
    <div class="px-4 my-5 text-center">
        <h1 class="display-1 fw-bold">SD <strong>TV</strong></h1>
    </div>
    <div class="container" id="custom-cards">
        <h2 class="pb-2 border-bottom">Hindi news</h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {#if news.length === 0}
                <p>No Players</p>
            {:else}
                {#each news as newscomp}
                    <div class="col">
                        <Link style="text-decoration: none;" to={`newsview?id=${newscomp.id}`}>
                            <div style="height: 250px" class="card card-body rounded-5 shadow-lg">
                            <strong class="text-danger">LIVE</strong>
                            <div class="d-flex flex-column h-100 p-4 text-white text-shadow-1">
                                <center>
                                    <!-- svelte-ignore a11y-missing-attribute -->
                                    <img style="width: 200px; height: 150px" src={newscomp.image} />
                                </center>
                            </div>
                            </div>
                        </Link>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</main>

<style>

</style>