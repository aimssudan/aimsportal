<template>
  <main class="page about-page">
    <div class="container">
      <h1 class="text-primary">{{componentAction}}</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{name: 'organisations'}"> Organisations</router-link></li>
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
            <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>
              <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <select :disabled="editingDisabled"  class="form-select" id="floatingPersonName" v-model="organisation.category_id" >
                          <option v-for="cat in organisationCategories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
                        </select>
                        <label for="floatingCategory">Category</label>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <input :disabled="editingDisabled" type="text"  class="form-control" id="floatingName" v-model="organisation.name" placeholder="Name">
                        <label for="floatingName">Name</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <input :disabled="editingDisabled" type="text"  class="form-control" id="floatingAcronym" v-model="organisation.acronym" placeholder="Acronym">
                        <label for="floatingAcronym">Acronym</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <input :disabled="editingDisabled" type="text"  class="form-control" id="floatingPersonName" v-model="organisation.contact_person_name" placeholder="Contact Person Name">
                        <label for="floatingPersonName">Contact Person Name</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <input :disabled="editingDisabled" type="text"  class="form-control" id="floatingPersonEmail" v-model="organisation.contact_person_email" placeholder="Contact Person Email">
                        <label for="floatingPersonEmail">Contact Person Email</label>
                    </div>
                </div>
                <div v-if="admin" class="col-md-4 mb-3">
                    <div class="form-floating">
                        <select :disabled="editingDisabled" class="form-select" id="floatingPersonName" v-model="organisation.approved" >
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                        </select>
                        <label for="floatingApproved">Approved</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <textarea :disabled="editingDisabled" maxlength="20" class="form-control" v-model="organisation.contact_person_phone" placeholder="Phone" id="floatingTextarea"></textarea>
                        <label for="floatingAddress">Contact Person Phone</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <textarea  :disabled="editingDisabled" maxlength="100" class="form-control" v-model="organisation.description" placeholder="Leave Company description here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Description</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <select :disabled="editingDisabled"  class="form-select" id="floatingPersonName" v-model="organisation.iati_org_type" >
                          <option v-for="orgType in organisationTypes" :key="orgType.code" :value="orgType.code">{{orgType.name}}</option>
                        </select>
                        <label for="floatingCategory">IATI Category</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <input :disabled="editingDisabled" type="text"  class="form-control" id="floatingName" v-model="organisation.iati_org_id" placeholder="SS-RRC-000">
                        <label for="floatingName">IATI id (optional)</label>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-floating">
                        <select :disabled="editingDisabled"  class="form-select" id="floatingPersonName" v-model="organisation.country" >
                          <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
                        </select>
                        <label for="floatingCategory">Country</label>
                    </div>
                </div>
              </div>
              <button class="btn btn-primary" @click="storeOrganisation" :disabled="editingDisabled">{{ (isEdit) ? 'Update' : 'Save' }}</button>
              <hr>
              <h5>Organisation Users </h5>
              <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in organisationUsers" :key="user.id">
                    <td>{{index+1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.status}}</td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Actions">
                        <button v-if="canApprove(user)" type="button" class="btn btn-primary" @click="changeUserStatus(user.id, 'approved')">Approve</button>
                        <button v-if="canBan(user)" type="button" class="btn btn-danger" @click="changeUserStatus(user.id, 'blocked')">Ban</button>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
          </div>
        </div>
     </div>
    </div>
       
    </main>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import flashError from '../components/flashError.vue'

export default {
  components: {
    flashError,
  },

  data() {
    return {
      componentAction: " Add new Organisation",
      isLoading: false,
      isEdit: false,
      apiErrors: false,
      errors: [],
      organisation: {
        id: null,
        name: '',
        acronym: '',
        address: 'none',
        contact_person_phone: '',
        contact_person_name: '',
        contact_person_email: '',
        description: '',
        category_id: 1,
        approved: 0,
        country: 'SS'
      },
      organisationUsers: [],
      organisationTypes: [],
      countries: []
    }
  },
  computed: {
    ...mapState('global', ['organisationCategories']),
    ...mapState('auth', ['user']),
    ...mapGetters({
        admin: "auth/superadmin",
        contributor: "auth/contributor"
      }),
      editingDisabled() {
      if (this.isEdit && !this.admin) {
        return true
      }
      return false
    }, 
     
  },
  methods: {
    ...mapActions({
      addOrg: 'global/addOrganisation',
      updateOrg: 'global/updateOrganisation',
      getOrg: 'global/fetchOrganisation',
      getOrgUsers: 'global/fetchOrganisationUsers',
      updateUserStatus : 'auth/updateUserStatus',
      getCodelistOptions: "codelists/fetchCodelistOptions",
      }),
    canApprove(user) {
      if(this.admin) {
        if (user.status !== 'approved') return true
        return false
      }
      else if (!this.admin){
         if (this.user.organisation.id === user.organisation.id && user.status !== 'approved') {
          return true
        }
      }      
      return false
    },

    canBan(user) {
      if(user.status !== 'blocked' && this.admin) return true
    },

    storeOrganisation() {
      this.isLoading = true;
      if (!this.isEdit) {
        this.addOrg(this.organisation).then(
            (response) => {
              //
              this.isLoading = false;
              let org = response.data.data 
              this.$store.commit('global/ADD_ORGANISATION', org);
              this.organisation = org;
              this.$store.commit('showSnackbar', 'Success');
              this.isEdit = true
              this.isLoading = false
              this.componentAction = org.name
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
        this.updateOrg(this.organisation).then(
            (response) => {
              //
              this.isLoading = false;
              let org = response.data.data 
              this.$store.commit('global/UPDATE_ORGANISATION', org);
              this.category = org;
              this.$store.commit('showSnackbar', 'Success');
              this.isEdit = true
              this.isLoading = false
              this.componentAction = org.name
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

    changeUserStatus(id, status) {
      let payload = {
        id: id,
        status: status
      }
      this.isLoading = true
      this.updateUserStatus(payload).then(
        (response) => {
          let message = response.data.data.message ?? 'Success'
          this.$store.commit('showSnackbar', message)
          this.fetchUsers(this.organisation.id)
          this.isLoading = false

        },
        (error) => {
          const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
        }
      )
    },
    fetchUsers(org) {
        this.getOrgUsers(org).then(
            (response) => {
              //
              this.isLoading = false;
              this.organisationUsers = response.data.data;
              this.isLoading = false
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
             // this.apiErrors = true;
              this.errors = resMessage;
              
              

            }
      );
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

  this.getCodelistOptions({
      codelist: "OrganisationType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.organisationTypes = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
  );

  this.getCodelistOptions({
      codelist: "Country",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.countries = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
  );

  let editableOrg = this.$route.params.id
  if (editableOrg) {
    this.isLoading = true;
    this.getOrg(editableOrg).then(
            (response) => {
              //
              this.isLoading = false;
              let org = response.data.data
              this.organisation = org;
              this.isEdit = true
              this.componentAction = org.name
              this.isLoading = false
            },
            (error) => {
              const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
              this.isLoading = false;
              this.apiErrors = true;
              this.errors = resMessage;
              
              

            }
      );
      this.fetchUsers(editableOrg)
    
    
    
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