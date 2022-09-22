<template>
  <main class="page about-page">
    <div class="container">
      <h1 class="text-primary">{{componentAction}}</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{name: 'organisations'}"> Organisations</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{name: 'organisation-categories'}"> Categories</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">View</li>
        </ol>
      </nav>
     <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h5 class="float-start"> {{componentAction}}</h5>
                
            </div>
          <div class="card-body">
            <div v-if="isLoading" class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <flash-error :hasError="apiErrors" :errors="errors"></flash-error>
              <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="text"  class="form-control" id="floatingInput" v-model="category.name" placeholder="Name">
                        <label for="floatingInput">Name</label>
                    </div>
                </div>
              </div>
              <button class="btn btn-primary" @click="storeCategory" :disabled="isLoading">{{ (isEdit) ? 'Update' : 'Save' }}</button>
          </div>
        </div>
     </div>
    </div>
       
    </main>
</template>

<script>
import {mapActions} from 'vuex'
import flashError from '../components/flashError.vue'

export default {
  components: {
    flashError,
  },

  data() {
    return {
      componentAction: " Add new Category",
      isLoading: false,
      isEdit: false,
      apiErrors: false,
      errors: [],
      category: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addCat: 'global/addOrganisationCategory',
      updateCat: 'global/updateOrganisationCategory',
      getCategory: 'global/fetchOrganisationCategory'
      }),
     

    storeCategory() {
      this.isLoading = true;
      if (!this.isEdit) {
        this.addCat(this.category).then(
            (response) => {
              //
              this.isLoading = false;
              let newCategory = response.data.data 
              this.$store.commit('ADD_CATEGORY', newCategory);
              this.category = newCategory;
              this.$store.commit('showSnackbar', 'Success');
              this.isEdit = true
              this.isLoading = false
              this.componentAction = "Edit: "+newCategory.name
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
              
              

            }
          );
      }
      else {
        this.updateCat(this.category).then(
            (response) => {
              //
              this.isLoading = false;
              let newCategory = response.data.data 
              this.$store.commit('UPDATE_CATEGORY', newCategory);
              this.category = newCategory;
              this.$store.commit('showSnackbar', 'Success');
              this.isEdit = true
              this.isLoading = false
              this.componentAction = "Edit: "+newCategory.name
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
              
              

            }
          );
      }
    }
  },
  created() {
  let isLoggedIn = !!localStorage.getItem("token");
  if(isLoggedIn){
    //put user and translations to vuex state 
    let token = localStorage.getItem("token")
    let loggedInUser = JSON.parse(localStorage.getItem('user'))
    this.$store.commit('auth/SET_TOKEN', token);
    this.$store.commit('auth/SET_USER', loggedInUser);
  }
  let editableCategory = this.$route.params.id
  if (editableCategory) {
    
    this.getCategory(editableCategory).then(
            (response) => {
              //
              this.isLoading = false;
              let newCategory = response.data.data              
              this.category = newCategory;              
              this.isEdit = true
              this.componentAction = "Edit: "+newCategory.name
              this.isLoading = false
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
              
              

            }
          );
    
    
  }
},
}
</script>

<style  scoped>
 .page {
  padding-top: 4em;
  padding-bottom: 4em;
 }
</style>