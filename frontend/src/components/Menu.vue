<script setup>
import Button from "./Button.vue"
</script>
<template>
    <div class="menu">
        <Button>
            <template #body>
                <p>Zobacz wszytskie</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Koszulki</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Spodnie</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Sukienki</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Bluzy</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Kurtki</p>
            </template>
        </Button>
    </div>
</template>
<style scoped>
.menu {
    display: flex;
    flex-direction: column;
}

.menu>* {
    margin: 10px 0 10px 0;
}
</style>