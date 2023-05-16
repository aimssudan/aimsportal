<template>
  <main class="page project-page" style="min-height: 80vh">
    <div class="container">
      <h1 class="text-primary">Audit Project</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'dashboard' }"> Dashboard</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'projects' }"> Projects</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Audit Project
          </li>
        </ol>
      </nav>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>{{ componentAction }}</h5>
          </div>
          <div class="card-body">
            <div
              v-if="isLoading"
              class="spinner-border text-warning"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <flash-error
              :hasError="apiErrors"
              :errors="errors"
              @dismissError="apiErrors = false"
            ></flash-error>
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-basic-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-basic"
                  type="button"
                  role="tab"
                  aria-controls="nav-basic"
                  aria-selected="true"
                >
                  Project Basic Info
                </button>
                <button
                  class="nav-link"
                  id="nav-funding-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-funding"
                  type="button"
                  role="tab"
                  aria-controls="nav-funding"
                  aria-selected="false"
                >
                  Financials
                </button>
                <button
                  class="nav-link"
                  id="nav-sector-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-sector"
                  type="button"
                  role="tab"
                  aria-controls="nav-sector"
                  aria-selected="false"
                >
                  Sector Contribution
                </button>
                <button
                  class="nav-link"
                  id="nav-geographic-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-geographic"
                  type="button"
                  role="tab"
                  aria-controls="nav-geographic"
                  aria-selected="false"
                >
                  Geographic Contribution
                </button>
                <button
                  class="nav-link"
                  id="nav-attachments-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-attachments"
                  type="button"
                  role="tab"
                  aria-controls="nav-attachments"
                  aria-selected="false"
                >
                  Additional Information
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <!-- <form action="" method="post"> -->
              <div
                class="tab-pane fade show active"
                id="nav-basic"
                role="tabpanel"
                aria-labelledby="nav-basic-tab"
              >
              <div class="mb-3 row mt-3">
                  <div
                    class="accordion"
                    id="audits_basic_info_accordion"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="audits_basic_info_list"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#audits_basic_info_collapse"
                          aria-expanded="true"
                          aria-controls="audits_basic_info_collapse"
                        >
                        changes to info <span class="badge bg-secondary"> {{ currentProject.audits.length }}</span>
                        </button>
                      </h2>
                      <div
                        id="audits_basic_info_collapse"
                        class="accordion-collapse collapse show"
                        aria-labelledby="geographic_allocation_list"
                        data-bs-parent="#audits_basic_info_accordion"
                      >
                        <div class="accordion-body">
                          <table class="table table-striped">
                            <thead>
                            <th>ID</th>
                            <th>Change Type</th>
                            <th>Date</th>
                            <th>changed by</th>
                            <th>old values</th>
                            <th>new values</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            <tr v-for="change in currentProject.audits" :key="change.id">
                              <td>{{change.id}}</td>
                              <td>{{change.event}}</td>
                              <td>{{ formatDate(change.updated_at)}}</td>
                              <td>{{ change.user_id }}</td>
                              <td>
                                <ul>
                                  <li v-for="(old, index) in change.old_values" :key="index">
                                    <b>{{index}}: </b>{{old}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  <li v-for="(newValue, index) in change.new_values" :key="index">
                                    <b>{{index}}: </b>{{newValue}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <button
                                  v-if="currentProject.auditable"
                                  @click="restoreChange(change.id)"
                                  class="btn btn-danger btn-sm"
                                >
                                  Restore to this change
                                </button>
                              </td>

                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 

                <div class="mb-3 row mt-3">
                  <div
                    class="accordion"
                    id="audits_activity_dates_accordion"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="audits_activity_dates_list"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#audits_activity_dates_collapse"
                          aria-expanded="true"
                          aria-controls="audits_activity_dates_collapse"
                        >
                        changes to project dates <span class="badge bg-secondary"> {{ currentProject.activity_date?.audits?.length }}</span>
                        </button>
                      </h2>
                      <div
                        id="audits_activity_dates_collapse"
                        class="accordion-collapse collapse "
                        aria-labelledby="audits_activity_dates_list"
                        data-bs-parent="#audits_activity_dates_accordion"
                      >
                        <div class="accordion-body">
                          <table class="table table-striped">
                            <thead>
                            <th>ID</th>
                            <th>Change Type</th>
                            <th>Date</th>
                            <th>changed by</th>
                            <th>old values</th>
                            <th>new values</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            <tr v-for="change in currentProject.activity_date.audits" :key="change.id">
                              <td>{{change.id}}</td>
                              <td>{{change.event}}</td>
                              <td>{{ formatDate(change.updated_at)}}</td>
                              <td>{{ change.user_id }}</td>
                              <td>
                                <ul>
                                  <li v-for="(old, index) in change.old_values" :key="index">
                                    <b>{{index}}: </b>{{old}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  <li v-for="(newValue, index) in change.new_values" :key="index">
                                    <b>{{index}}: </b>{{newValue}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <button
                                  v-if="currentProject.auditable"
                                  @click="restoreChange(change.id)"
                                  class="btn btn-danger btn-sm"
                                >
                                  Restore to this change
                                </button>
                              </td>

                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 


                <div class="mb-3 row mt-3">
                  <div
                    class="accordion"
                    id="audits_participating_organisations_accordion"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="audits_participating_organisations_list"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#audits_participating_organisations_collapse"
                          aria-expanded="true"
                          aria-controls="audits_participating_organisations_collapse"
                        >
                        changes to participating organisation <span class="badge bg-secondary"> {{ currentProject.participating_org?.audits?.length }}</span>
                        </button>
                      </h2>
                      <div
                        id="audits_participating_organisations_collapse"
                        class="accordion-collapse collapse "
                        aria-labelledby="audits_participating_organisations_list"
                        data-bs-parent="#audits_participating_organisations_accordion"
                      >
                        <div class="accordion-body">
                          <table class="table table-striped">
                            <thead>
                            <th>ID</th>
                            <th>Change Type</th>
                            <th>Date</th>
                            <th>changed by</th>
                            <th>old values</th>
                            <th>new values</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            <tr v-for="change in currentProject.participating_org.audits" :key="change.id">
                              <td>{{change.id}}</td>
                              <td>{{change.event}}</td>
                              <td>{{ formatDate(change.updated_at)}}</td>
                              <td>{{ change.user_id }}</td>
                              <td>
                                <ul>
                                  <li v-for="(old, index) in change.old_values" :key="index">
                                    <b>{{index}}: </b>{{old}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  <li v-for="(newValue, index) in change.new_values" :key="index">
                                    <b>{{index}}: </b>{{newValue}}
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <button
                                  v-if="currentProject.auditable"
                                  @click="restoreChange(change.id)"
                                  class="btn btn-danger btn-sm"
                                >
                                  Restore to this change
                                </button>
                              </td>

                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              
              
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-info"
            @click="
              this.$router.push({
                name: 'project',
                params: { id: currentProject.id },
              })
            "
            > Back to project</button>
          </div>
          </div>
          </div>
      </div>
  </main>
</template>





<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "ProjectChanges",
  components: {},
  data() {
    return {
      showAlert: false,
      alertMessage: "",
      componentAction: "",
      valid: false,
      isLoading: false,
      apiErrors: false,
      generalError: false,
      validationErrors: false,
      apiLoading: true,
      audits: [],
      currentProject: null,
      errors: [],
    };
  },

  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      //put user and translations to vuex state
      let token = localStorage.getItem("token");
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("auth/SET_TOKEN", token);
      this.$store.commit("auth/SET_USER", loggedInUser);
    }
    let idParam = this.$route.params.id;
    if (idParam) {
      this.getProject(idParam).then(
        (response) => {
          //
          this.isLoading = false;
          let currentProject = response.data.data;
          this.currentProject = currentProject;
          this.componentAction = "Project: " + currentProject.default_title;
          this.audits = currentProject.audits
          this.isLoading = false;
          
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
          this.$store.commit("showSnackbar", "Error Fetching Project");
        }
      );
    }
    
  },
  computed: {
    ...mapState("auth", ["user"]),    
    ...mapGetters({
      admin: "auth/superadmin",
      contributor: "auth/contributor",
    }),
    isadmin() {
      return this.admin;
    }
  },

  methods: {
    ...mapActions({
      revertChange: "admin/revertChange",
      getProject: "project/fetchProject",
    }),

    formatDate(dateString) {
      //return dateString
      let fDate = new Date(`${dateString}`)
      const month = parseInt(fDate.getMonth())+1
      return fDate.getDate()+"/"+month+"/"+fDate.getFullYear()
    },
    restoreChange(id) {
      if (confirm("Are you sure ?")) {
        this.revertChange(id).then(
          (response) => {
            this.$store.commit("showSnackbar", response.data.data);
            this.fetchProjects();
          },
          (error) => {
            const errorMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.$store.commit("showSnackbar", errorMessage);
          }
        );
      }
    },
    
  },
};
</script>
<style scoped>
.login-page {
  padding-top: 4em;
  padding-bottom: 4em;
}

/* Card header */
.card-header {
  background-color: rgba(0, 41, 117, 0.87);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}



/* Heading */
.card .card-header h5 {
  color: #ffffff;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  
}

/* Card */
.card {
  box-shadow: 0px 0px 18px 0px rgba(44, 62, 80, 0.13);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.project-page {
  padding-top: 4em;
  padding-bottom: 4em;
}

</style>
