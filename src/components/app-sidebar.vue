<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <router-link active-class="active" tag="li" :to="{ name: 'in_theaters' }">
                <a>正在热播</a>
            </router-link>
            <router-link active-class="active" tag="li" :to="{ name: 'coming_soon' }">
                <a>即将上映</a>
            </router-link>
            <router-link active-class="active" tag="li" :to="{ name: 'top250' }">
                <a>TOP250</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
