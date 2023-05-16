<template>
  <main class="page login-page" style="min-height: 80vh">
    <div class="col-md-6 offset-md-3">
      <h1 class="text-primary">{{ this.getTranslation("Super Administrator") }}</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/dashboard">{{ this.getTranslation("dashboard") }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ this.getTranslation("Super Admin") }}
          </li>
        </ol>
      </nav>
      <div class="card">
        <div class="card-header">
          <h5>{{ (isEdit) ? admin.name : 'New Administrator' }} </h5>
        </div>
        <div class="card-body">
          <div
            v-if="isLoading"
            class="spinner-border text-warning"
            role="status"
          >
            <span class="visually-hidden"
              >{{ this.getTranslation("loading") }}...</span
            >
          </div>
          <div
            v-if="apiErrors"
            class="alert alert-danger"
            @click="apiErrors = false"
          >
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
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="form.name"
                  placeholder="Joe Doe"
                />
                <label for="floatingInput">{{
                  this.getTranslation("name")
                }}</label>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingPassword"
                  v-model="form.email"
                  placeholder="Email"
                />
                <label for="floatingPassword">{{
                  this.getTranslation("email-address")
                }}</label>
              </div>
            </div>
            <div v-if="!isEdit" class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  v-model="form.password"
                  placeholder="Password"
                />
                <label for="floatingPassword">{{
                  this.getTranslation("Password")
                }}</label>
              </div>
            </div>
            <div v-if="!isEdit" class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  v-model="form.password_confirmation"
                  placeholder="Password"
                />
                <label for="floatingPassword">{{
                  this.getTranslation("Password Confirmation")
                }}</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <select class="form-control" v-model="form.status"
                :disabled="!isEdit"
                >
                  <option
                    v-for="status in statuses"
                    :key="status.id"
                    :value="status.id"
                  >
                    {{ status.name }}
                  </option>
                </select>

                <label for="floatingPassword">{{
                  this.getTranslation("Status")
                }}</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <select class="form-control" v-model="form.role"
                :disabled="!isEdit"
                >
                  <option
                    v-for="role in roles"
                    :key="role.id"
                    :value="role.id"
                  >
                    {{ role.name }}
                  </option>
                </select>

                <label for="floatingPassword">{{
                  this.getTranslation("Roles")
                }}</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <select class="form-control" v-model="form.language">
                  <option
                    v-for="lang in languages"
                    :key="lang.id"
                    :value="lang.code"
                  >
                    {{ lang.name }}
                  </option>
                </select>

                <label for="floatingPassword">{{
                  this.getTranslation("language")
                }}</label>
              </div>
            </div>
          </div>
          <button v-if="isadmin" @click="submit" class="btn btn-primary">
            {{ (isEdit) ? this.getTranslation("update") : 'Save' }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "SuperAdminUser",
  components: {},
  data() {
    return {
      showAlert: false,
      alertMessage: "",
      valid: false,
      isLoading: false,
      apiErrors: false,
      generalError: false,
      validationErrors: false,
      apiLoading: true,
      isEdit: false,
      form: {
        id: null,
        name: "",
        email: "",
        status: 'approved',
        organisation: null,
        role: 'Super Administrator',
        language: "en",
        password: "",
        password_confirmation: ""
      },
      admin: null,
      statuses: [
        {
          id: 'approved',
          name: 'Approved',
        },
        {
          id: 'blocked',
          name: 'Banned',
        }
      ],
      roles: [
        {
          id: 'Super Administrator',
          name: 'Super Administrator',
        },
        {
          id: 'Manager',
          name: 'Manager',
        }
      ],
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
    this.getLanguages();
    this.getTranslations();
    
    const userId = this.$route.params.id;
    if (userId) {
      this.getUser(userId).then(
        (response) => {
          this.admin = response.data.data
          this.isEdit = true;
          this.updateForm();
        },
        (error) => {
          const errorMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(errorMessage);
        }
      )
    }
    
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("global", ["languages", "translations"]),
    
    ...mapGetters({
      superadmin: "auth/superadmin",
      authenticated: "auth/authenticated",
      getTranslation: "global/getTranslation",
    }),
    isadmin() {
      return this.superadmin;
    }
  },

  methods: {
    ...mapActions({
      updateUser: "auth/updateUser",
      getUser: "auth/fetchUser",
      createSuper: "auth/createSuper",
      getLanguages: "global/getLanguages",
      getTranslations: "global/getTranslations",
    }),

    updateForm() {
      this.form.id = this.admin.id;
      this.form.name = this.admin.name;
      this.form.email = this.admin.email;
      this.form.organisation = this.admin?.organisation?.id;
      this.form.role = this.admin?.roles[0]?.name;
      this.form.language = this.admin.language;
    },
    submit() {
      this.apiErrors = false;
      this.generalError = false;
      this.isLoading = true;
      this.validationErrors = false;


      if (this.isEdit) {
        this.updateUser(this.form).then(
          (response) => {
            //
            this.isLoading = false;
            this.$store.commit("showSnackbar", "success");
            this.admin = response.data.data;
            this.getLanguages();
            this.getTranslations();
            this.updateForm();
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
            this.generalError = true;
            this.errors = resMessage;
            this.$store.commit("showSnackbar", resMessage);
          }
        );
      }

      if (!this.isEdit) {
        this.createSuper(this.form).then(
          (response) => {
            //
            this.isLoading = false;
            this.$store.commit("showSnackbar", "success");
            this.admin = response.data.data;
            this.isEdit = true;
            this.getLanguages();
            this.getTranslations();
            this.updateForm();
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
            this.generalError = true;
            this.errors = resMessage;
            
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
.offset-md-3 .card .card-header {
  background-color: rgba(0, 41, 117, 0.87);
}

/* Card body */
.offset-md-3 .card .card-body {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
  padding-bottom: 30px;
}

/* Heading */
.card .card-header h5 {
  color: #ffffff;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* Card */
.login-page .offset-md-3 .card {
  box-shadow: 0px 0px 18px 0px rgba(44, 62, 80, 0.13);
  width: 620px;
}

/* List */
.offset-md-3 nav ol {
  display: none;
}

/* Heading */
.login-page .offset-md-3 h1 {
  text-align: center;
  margin-top: 20px;
}

/* Column 6/12 */
#app-content .login-page .offset-md-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  /* Card */
  .login-page .offset-md-3 .card {
    width: 408px;
  }
}

@media (max-width: 450px) {
  /* Card */
  .login-page .offset-md-3 .card {
    width: 100%;
  }

  /* Column 6/12 */
  #app-content .login-page .offset-md-3 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

/* Card */
.login-page .offset-md-3 .card {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Card header */
.offset-md-3 .card .card-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
