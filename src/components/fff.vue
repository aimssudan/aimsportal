<template>
    <div v-show="$store.state.snackbar.show" aria-live="polite" aria-atomic="true" class="bg-dark position-relative ">
        <div class="toast-container top-0 end-0 p-3" >
            <div class="toast">
                <div class="toast-header">                    
                    <strong class="me-auto">Information</strong>
                    <small>now</small>
                    <button @click="$store.commit('hideSnackbar')" type="button" class="btn-close"  aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ $store.state.snackbar.text }}
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Snackbar'
}
</script>

<style scoped>

</style>