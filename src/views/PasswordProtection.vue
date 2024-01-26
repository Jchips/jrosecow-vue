<template>
  <div class="protected container">
    <h2>Requires authorization to access</h2>
    <div class="card" style="max-width: 25rem;">
      <div class="card-body">
        <div id="failed-alert" class="alert alert-info" role="alert" style="display: none;">Incorrect site or password
        </div>
        <div id="success-alert" class="alert alert-success" role="alert" style="display: none;">Success</div>
        <form @submit="handleSubmit">
          <div class="mb-3">
            <label for="sitename" class="form-label">Site</label>
            <input type="text" class="form-control" id="sitename" name="sitename">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.protected {
  padding: 5px;
}

.protected .card {
  margin: 50px auto;
}

.protected h2 {
  margin: 20px;
  text-align: center;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      password: '',
      isAuthenticated: false
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault(); // prevents instant refresh
      let form = e.target;
      let formData = new FormData(form);
      const loginDetails = Object.fromEntries(formData.entries());
      this.login(loginDetails);
      form.reset();
    },

    // Login function
    async login(obj) {
      localStorage.setItem('token', null);
      try {
        const response = await axios.post(`${process.env.VUE_APP_SERVER}/protected`, obj);
        const token = response.data.token ? response.data.token : null;

        if (token) {
          localStorage.setItem('token', token);
          this.isAuthenticated = true;
          document.getElementById("failed-alert").style.display = 'none';
          document.getElementById("success-alert").style.display = 'block';
          this.$router.replace(this.$route.redirectedFrom);
        } else {
          console.error('incorrect site or password');
          document.getElementById("success-alert").style.display = 'none';
          document.getElementById("failed-alert").style.display = 'block';
          localStorage.setItem('token', null);
        }
      } catch (error) {
        alert('Sorry, there has been a server error :(');
        console.error(error);
        // } finally {
        //   this.checkAuthentication();
      }
    },

    // checks that user's jwt token is still valid
    // checkAuthentication() {
    //   const token = localStorage.getItem('token'); // Retrieve the token from local storage

    //   if (token) {
    //     // Includes the token in the Authorization header for authentication
    //     axios.defaults.headers.common['authorization'] = `Bearer ${token}`;

    //     // Make a request to a protected route to check if the token is valid
    //     axios.get(`${process.env.VUE_APP_SERVER}/protected/`)
    //       .then((response) => {
    //         // Token is valid, the user is authenticated
    //         this.isAuthenticated = true;
    //         console.log('login response', response.data.message);
    //         console.log('authentication:', this.isAuthenticated);
    //       })
    //       .catch((err) => {
    //         // Token is invalid or expired, the user is not authenticated
    //         console.error(err);
    //         this.isAuthenticated = false;
    //         console.log('authentication:', this.isAuthenticated);
    //         // alert('Invalid or expired session. Please refresh the page and sign in again.')
    //       });
    //   } else {
    //     // No token found, the user is not authenticated
    //     this.isAuthenticated = false;
    //     console.log('authentication:', 'no token found');
    //     alert('There has been a server error :( Please refresh the page and sign in again.')
    //   }
    // },
  },
  mounted() {
    // this.checkAuthentication();
  }
};
</script>
