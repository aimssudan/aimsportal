<template>
    <div v-if="containsError " class="alert alert-danger" @click="containsError=false">
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
    </div>
</template>

<script>
export default {
    name: 'flash-error',
    props: {
        errors: null,
        hasError : Boolean
    },
    data() {
        return {
            containsError: false
        }
    },
    created() {
        this.containsError = this.hasError
    }
}
</script>