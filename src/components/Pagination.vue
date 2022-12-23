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
            <div class="page-btn" :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
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
    flex-wrap: wrap;
    margin: 20px 0 40px;
}

.page-btn {
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
}

.page-btn:hover {
    cursor: pointer;
    background-color: aquamarine;
}

.active {
    border: 1px solid teal;
}
</style>