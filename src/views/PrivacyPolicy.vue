<template>
  <main class="page about-page">
    <div class="container" style="min-height: 80vh">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h2 class="text-primary">Privacy Policy</h2>
            <p class="lead">
              South Sudan Aid Information Management System (AIMS) Application
            </p>
            <p>
              The South Sudan Aid Information Management System (AIMS)
              Application is managed by the Ministry of Finance and Planning -
              Government of South Sudan. Protecting the privacy and personal
              information of our users is a top priority for us. This privacy
              policy outlines how we collect, use, and protect personal
              information collected through the AIMS application.
            </p>
            <hr />
            <h5 class="text-primary">Personal Information Collection</h5>
            <p>
              We collect personal information such as name, email address, phone
              number, organization name, and other relevant information to
              verify the identity of users and to facilitate communication
              related to the use of the AIMS application.
            </p>
            <p>
              We collect information from users who voluntarily provide it to us
              when creating an account, updating user profile information,
              submitting data to the system, and when communicating with us
              through the application.
            </p>

            <h5 class="text-primary">Information Use and Sharing</h5>
            <p>
              We use personal information to provide services and support to
              users of the AIMS application. This includes communication related
              to the application, access to relevant data, and updates about the
              system.
            </p>
            <p>
              We may share personal information with other government entities,
              development partners, and other relevant stakeholders for the
              purpose of providing information and support related to the
              application.
            </p>
            <p>
              We may also disclose personal information as required by law,
              regulation, court order, or other legal process, or to protect our
              rights, property, or safety or that of others.
            </p>

            <h5 class="text-primary">Data Security</h5>
            <p>
              We take reasonable measures to protect the personal information we
              collect through the AIMS application from unauthorized access,
              use, or disclosure. We maintain physical, technical, and
              administrative safeguards to protect the confidentiality and
              integrity of personal information.
            </p>
            <p>
              We restrict access to personal information to authorized personnel
              who need access to perform their job responsibilities.
            </p>

            <h5 class="text-primary">Data Retention</h5>
            <p>
              We retain personal information collected through the AIMS
              application for as long as necessary to provide services and
              support related to the application, or as required by law.
            </p>

            <h5 class="text-primary">Access and Control</h5>
            <p>
              Users can access and modify their personal information stored in
              the AIMS application by logging in and accessing their user
              profile. Users can also request the deletion of their personal
              information by contacting us at the address below.
            </p>

            <h5 class="text-primary">Contact Information</h5>
            <p>
              If you have any questions, comments, or concerns about this
              Privacy Policy, please contact us at: Ministry of Finance and
              Planning Juba, South Sudan Email:
              <a href="mailto:info@aims.gov.ss">info@aims.gov.ss</a>
            </p>

            <h5 class="text-primary">Changes to this Privacy Policy</h5>
            <p>
              We reserve the right to update this Privacy Policy at any time. We
              will post the updated Privacy Policy on the AIMS application and
              indicate the effective date of the updated policy. Your continued
              use of the AIMS application after the effective date of any
              changes to this Privacy Policy constitutes your acceptance of
              those changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      let token = localStorage.getItem("token");
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("auth/SET_TOKEN", token);
      this.$store.commit("auth/SET_USER", loggedInUser);
    }
  },
};
</script>

<style>
.about-page {
  padding-top: 5em;
}

/* --------------- new look --------------- */

/* Card body */
.about-page .card .card-body {
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 40px;
  transform: translatex(0px) translatey(0px);
  text-align: justify;
}

/* Lead */
.card .card-body .lead {
  font-size: 18px;
  font-weight: 500;
}

/* Text primary */
.card .card-body h2.text-primary {
  font-weight: 600;
}

/* About page */
#app-content .about-page {
  padding-bottom: 60px;
  transform: translatex(0px) translatey(0px);
}

/* Card */
.about-page .card {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 19px 0px rgba(44, 62, 80, 0.21);
}

/* Horizontal Rule */
.card .card-body hr {
  margin-top: 25px;
  margin-bottom: 30px;
  border-color: #d8d8d8;
}

@media (max-width: 1199px) {
  /* Horizontal Rule */
  .card .card-body hr {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}

@media (max-width: 450px) {
  /* Card body */
  .about-page .card .card-body {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* Lead */
  .card .card-body .lead {
    font-size: 13px;
  }

  /* Paragraph */
  .card .card-body p {
    font-size: 12px !important;
  }

  /* Text primary */
  .card .card-body h5.text-primary {
    font-size: 17px;
  }

  /* Horizontal Rule */
  .card .card-body hr {
    margin-bottom: 30px;
    margin-top: 20px;
  }
}
</style>
