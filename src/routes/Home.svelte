<script>
import { Link } from "svelte-routing";
</script>

<main>
    <div class="px-4 my-5 text-center">
        <h1 class="display-1 fw-bold">S.G <strong>TV</strong></h1>
    </div>

    <div class="container" id="custom-cards">
        <h2 class="pb-2 border-bottom">Hindi news</h2>
    
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          
          
            <div class="col">
                <Link style="text-decoration: none;" to="newsview">
                    <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <strong class="text-danger">LIVE</strong>
                        <center>
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <img style="width: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" />
                        </center>
                        <h2 class="pt-5 mb-4 display-6 lh-1 fw-bold">Aaj Tak (आज तक)</h2>
                    </div>
                    </div>
                </Link>
            </div>
          
    
          
        </div>
    </div>


</main>

<style>

</style>