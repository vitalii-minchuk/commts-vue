<script lang="ts">
export default {
    data() {
        return {
            logo: "LOGO"
        }
    }
}
</script>

<template>
    <header>
        <RouterLink class="link" to="/">
            <h2>{{ logo }}</h2>
        </RouterLink>
        <nav>
            <RouterLink to="/posts">
                Posts
            </RouterLink>
            <RouterLink to="/comments">
                Comments
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.link {
    text-decoration: none;
}
</style>