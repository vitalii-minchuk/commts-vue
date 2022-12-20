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
    <header class="header">
        <div class="container">
            <div class="header-wrapper">

                <RouterLink class="link" to="/">
                    <h2>{{ logo }}</h2>
                </RouterLink>
                <nav class="nav">
                    <RouterLink class="link" to="/posts">
                        Posts
                    </RouterLink>
                    <RouterLink class="link" to="/comments">
                        Comments
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: teal;
    width: 100%;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 40px;
}

.header-wrapper {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.link {
    text-decoration: none;
    color: #fff;
}

.router-link-active {
    text-decoration: underline;
}
</style>