<script>
	export let categories;
    import { Link } from "svelte-routing";

</script>

<main>
    <div class="px-4 my-5 text-center">
        <h1 class="display-1 fw-bold">SD <strong>TV</strong></h1>
    </div>

    <div class="container" id="custom-cards">
        <h2 class="pb-2 border-bottom">Categories</h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            
            {#if categories.length === 0}
                <p>No Categories</p>
            {:else}
                {#each categories as category}
                    <div class="col">
                        <Link style="text-decoration: none;" to={`${category.link}`}>
                            <div style="height: 250px; color: #ffffff" class="card card-body rounded-5 shadow-lg text-center p-5">
                                <h1 class="mt-5 fw-bold">
                                    {category.title}
                                </h1>
                                <small style="color: red;" class="fw-bold mt-2">LIVE</small>
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