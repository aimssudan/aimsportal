<template>
  <main class="page about-page">
    <div class="container" style="min-height: 80vh">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h2 class="text-primary">Terms of Use</h2>
            <p class="lead">
              South Sudan Aid Information Management System (AIMS) Application
              The South Sudan Aid Information Management System (AIMS)
              Application is an online platform designed and managed by the
              Ministry of Finance and Planning - Government of South Sudan to
              help coordinate and manage aid activities in the country. The
              following Terms of Use govern your use of the AIMS Application. By
              using the AIMS Application, you agree to be bound by these Terms
              of Use.
            </p>
            <hr />
            <h5 class="text-primary">Use of AIMS Application</h5>
            <p>
              The AIMS Application is intended solely for use by authorized
              users who have been granted access by the Ministry of Finance and
              Planning - Government of South Sudan. Users must be registered and
              have a valid username and password to access the AIMS Application.
              Users must use the AIMS Application only for the purposes for
              which it was intended.
            </p>

            <h5 class="text-primary">User Obligations</h5>
            <p>
              Users of the AIMS Application must comply with all applicable laws
              and regulations, as well as these Terms of Use. Users must not use
              the AIMS Application in any way that could damage or interfere
              with its operation, or that could damage the reputation of the
              Ministry of Finance and Planning - Government of South Sudan.
              Users must also take reasonable steps to ensure the security of
              their login credentials, and to report any suspected security
              breaches to the Ministry of Finance and Planning - Government of
              South Sudan.
            </p>

            <h5 class="text-primary">Intellectual Property</h5>
            <p>
              The AIMS Application and all of its content, including but not
              limited to text, graphics, logos, images, and software, are the
              property of the Ministry of Finance and Planning - Government of
              South Sudan, and are protected by copyright and other intellectual
              property laws. Users may not reproduce, modify, distribute, or
              otherwise use any content from the AIMS Application without the
              prior written consent of the Ministry of Finance and Planning -
              Government of South Sudan.
            </p>

            <h5 class="text-primary">Confidentiality</h5>
            <p>
              Users of the AIMS Application must treat all information obtained
              through the application as confidential. Users must not disclose
              any confidential information obtained through the AIMS Application
              to any unauthorized person or entity, and must take reasonable
              steps to prevent any unauthorized access to such information.
            </p>

            <h5 class="text-primary">Termination</h5>
            <p>
              The Ministry of Finance and Planning - Government of South Sudan
              reserves the right to terminate a user's access to the AIMS
              Application at any time, without notice or liability, for any
              reason or no reason. Users may also terminate their use of the
              AIMS Application at any time by notifying the Ministry of Finance
              and Planning - Government of South Sudan in writing.
            </p>

            <h5 class="text-primary">Limitation of Liability</h5>
            <p>
              The Ministry of Finance and Planning - Government of South Sudan
              is not liable for any damages or losses arising from the use of
              the AIMS Application, including but not limited to direct,
              indirect, incidental, punitive, or consequential damages. The
              Ministry of Finance and Planning - Government of South Sudan does
              not warrant that the AIMS Application will be error-free or
              uninterrupted, or that any defects will be corrected.
            </p>

            <h5 class="text-primary">Changes to Terms of Use</h5>
            <p>
              The Ministry of Finance and Planning - Government of South Sudan
              reserves the right to modify these Terms of Use at any time,
              without notice. Users should periodically review the Terms of Use
              to ensure that they are aware of any changes.
            </p>

            <h5 class="text-primary">Governing Law</h5>
            <p>
              These Terms of Use are governed by the laws of the Republic of
              South Sudan. Any disputes arising from the use of the AIMS
              Application will be resolved by the courts of the Republic of
              South Sudan. By using the AIMS Application, you acknowledge that
              you have read and understand these Terms of Use, and agree to be
              bound by them. If you do not agree to these Terms of Use, you may
              not use the AIMS Application. If you have any questions about
              these Terms of Use, please contact the Ministry of Finance and
              Planning - Government of South Sudan.
            </p>

            <h5 class="text-primary">Disclaimer</h5>
            <p>
              The information contained on the AIMS Application is provided for
              general information purposes only. While every effort has been
              made to ensure that the information provided is accurate and up to
              date, the Ministry of Finance and Planning - Government of South
              Sudan makes no representations or warranties of any kind, express
              or implied, about the completeness, accuracy, reliability,
              suitability, or availability of the information, products,
              services, or related graphics contained on the AIMS Application.
              Any reliance you place on such information is therefore strictly
              at your own risk.
            </p>

            <h5 class="text-primary">Indemnification</h5>
            <p>
              Users of the AIMS Application agree to indemnify and hold harmless
              the Ministry of Finance and Planning - Government of South Sudan
              and its affiliates, officers, agents, and employees from and
              against any claims, damages, losses, liabilities, costs, and
              expenses, including reasonable attorneys' fees, arising out of or
              in connection with the user's use of the AIMS Application or any
              breach of these Terms of Use.
            </p>

            <h5 class="text-primary">Entire Agreement</h5>
            <p>
              These Terms of Use constitute the entire agreement between the
              user and the Ministry of Finance and Planning - Government of
              South Sudan regarding the use of the AIMS Application, and
              supersede all prior or contemporaneous communications and
              proposals, whether oral or written, between the user and the
              Ministry of Finance and Planning - Government of South Sudan.
            </p>

            <p>Thank you for considering these Terms of Use.</p>

            <hr />
            <p><b>Last Update: May 2023</b></p>

            <p class="text-danger">
              <i
                >(Please note that this is a draft, and the
                <u
                  >final version of the Terms of Use may need to be reviewed and
                  revised by legal experts</u
                >
                to ensure that they are legally enforceable and appropriate.)</i
              >
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
