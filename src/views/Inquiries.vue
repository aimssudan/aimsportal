<template>
  <main class="page about-page">
    <div class="container" style="min-height: 80vh">
      <div class="col-md-12">
        <div class="container">
          <form id="contact" action="" method="post">
            <h2 class="text-primary">Inquiries</h2>
            <h4>Contact us for custom quote</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabindex="3"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
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
#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #004369da;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #004369da;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

/* ------------------ new ------------------- */
/* Contact */
#contact {
  width: 40% !important;
  display: flex;
  float: none;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: translatex(0px) translatey(0px);
  background-color: #f1f1f8;
}

/* Container */
.about-page .container .container {
  display: flex;
  justify-content: center;
  transform: translatex(0px) translatey(0px);
}

/* Contact submit */
#contact-submit {
  background-color: #4caf50;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-weight: 600;
}

/* Input */
#contact fieldset input[type="text"] {
  color: #f14040;
  transform: translatex(0px) translatey(0px);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

/* Input */
#contact fieldset input[type="email"] {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-bottom: 10px;
}

/* Input */
#contact fieldset input[type="tel"] {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-bottom: 10px;
}

/* Text Area */
#contact fieldset textarea {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-bottom: 10px;
}

/* Heading */
#contact h2 {
  font-weight: 600;
}

/* Heading */
#contact h4 {
  color: #777777;
  font-weight: 600;
}
</style>
