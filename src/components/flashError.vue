<template>
    <div v-if="isError" class="alert alert-danger" @click="$emit('dismissError')">
    <template v-if="typeof errors === 'object'" >
        <ul>
            <li v-for="(verrors, field) in errors" :key="field">
                {{ field }} 
                
                <ul>
                    <li v-for="error in verrors" :key="error.message">
                        {{ error }}
                    </li>
                </ul>
            </li>
        </ul>
        
    </template>
    <template v-else >
        <p>{{errors}}</p>
    </template>
    <button  type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
    </div>
</template>

<script>
export default {
    name: 'flash-error',
    props: {
        errors: null,
        hasError : Boolean
    },
    computed: {
        isError() {
            return this.hasError
        }
    }
    
}
</script>

<style scoped>

</style>