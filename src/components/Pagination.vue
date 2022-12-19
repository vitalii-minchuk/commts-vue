<script lang="ts">
export default {
    props: {
        totalPages: {
            type: Number
        },
        currentPage: {
            type: Number
        }
    },
    methods: {
        changePage(pageNumber: number) {
            this.$emit('changePage', pageNumber)
        }
    }
}
</script>

<template>
    <div class="pagination">
        <div v-for="page in totalPages">
            <div :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
                {{ page }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.active {
    background-color: red;
}
</style>