<template>
  <main class="page px-3 login-page" style="min-height: 80vh">
    <div class="col-md-6 offset-md-3">
      <h1 class="text-primary">Login</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-1">&nbsp;</div>
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">
              <h5>Authenticate</h5>
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
              <form class="needs-validation" novalidate>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="email@example.com"
                  />
                  <label for="floatingInput">Email Address</label>
                </div>
                <div class="form-floating mb-3 mt-4">
                  <input
                    type="password"
                    v-model="form.password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="*******"
                  />
                  <label for="floatingInput">Password</label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Keep me logged in or
                    <router-link :to="{ name: 'register' }"
                      >Register</router-link
                    ></label
                  >
                </div>
                <button class="btn btn-primary" @click.prevent="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import flashError from "../components/flashError.vue";

export default {
  name: "login",
  components: {
    flashError,
  },
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
      form: {
        email: "",
        password: "",
        device_name: "browser",
      },
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
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),

    submit() {
      //  this.apiErrors = false;
      //  this.generalError = false;
      this.isLoading = true;
      //  this.validationErrors = false;

      this.login(this.form).then(
        (response) => {
          //
          this.isLoading = false;
          let apiMessage = response ?? "success";
          this.$store.commit("showSnackbar", apiMessage);
          this.$router.push({ name: "dashboard" });
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
    },
  },
};
</script>
<style scoped>
.login-page {
  padding-top: 4em;
  padding-bottom: 4em;
}

/* Column 1/12 */
.offset-md-3 .col-md-1 {
  display: none;
}

/* Column 10/12 */
.offset-md-3 .col-md-10 {
  max-width: 452px;
}

/* Row */
.login-page .offset-md-3 .row {
  justify-content: center;
}

/* Heading */
.login-page .offset-md-3 h1 {
  text-align: center;
  margin-top: 30px;
}

/* List */
.offset-md-3 nav ol {
  display: none;
}

/* Card */
.offset-md-3 .card {
  box-shadow: 0px 0px 15px 0px rgba(44, 62, 80, 0.18);
  border-style: solid;
  border-color: #a2b8c7;
  border-width: 1px;
  transform: translatex(0px) translatey(0px);
}

/* Heading */
.card .card-header h5 {
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
}

@media (min-width: 768px) {
  /* Column 10/12 */
  .offset-md-3 .col-md-10 {
    width: 452px;
  }
}

/* Card header */
.offset-md-3 .card .card-header {
  background-color: rgba(0, 41, 117, 0.87);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Heading */
.card .card-header h5 {
  color: #ffffff;
}

/* Card */
.offset-md-3 .card {
  background-color: rgba(186, 218, 246, 0.82);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-style: none !important;
}

/* Card body */
.offset-md-3 .card .card-body {
  border-style: solid;
  border-color: #93c1e0;
  border-width: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-color: rgba(147, 193, 224, 0);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
}

/* Heading */
.login-page .offset-md-3 h1 {
  margin-bottom: 15px;
}
</style>
