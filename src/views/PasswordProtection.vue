<template>
  <div class="protected container">
    <h2>Please sign in to access</h2>
    <div class="card" style="width: 25rem;">
      <div class="card-body">
        <div id="alert" class="alert alert-info" role="alert" style="display: none;">Incorrect username or password</div>
        <form @submit="handleSubmit">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username">
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
.protected .card {
  margin: 30px auto;
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
      const formJson = Object.fromEntries(formData.entries());
      this.login(formJson);
      form.reset();
    },

    // Login function
    async login(obj) {
      localStorage.setItem('token', null);
      try {
        const response = await axios.post(`${process.env.VUE_APP_SERVER}/protected`, obj);
        const token = response.data.token ? response.data.token : null;
        console.log(token);

        if (token) {
          localStorage.setItem('token', token);
          this.isAuthenticated = true;
          document.getElementById("alert").style.display = 'none';
          this.$router.push('/protected/blog');
        } else {
          console.log('incorrect username or password');
          document.getElementById("alert").style.display = 'block';
          localStorage.setItem('token', null);
        }
      } catch (error) {
        alert('Incorrect password');
        console.error(error);
      } finally {
        this.checkAuthentication();
      }
    },

    // checks that user's jwt token is still valid
    checkAuthentication() {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage

      if (token) {
        // Includes the token in the Authorization header for authentication
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;

        // Make a request to a protected route to check if the token is valid
        axios.get(`${process.env.VUE_APP_SERVER}/protected/blog`)
          .then((response) => {
            // Token is valid, the user is authenticated
            this.isAuthenticated = true;
            console.log('login response', response.data.message);
            console.log('authentication:', this.isAuthenticated);
            // this.$router.push('/login/blog');
          })
          .catch((err) => {
            // Token is invalid or expired, the user is not authenticated
            console.error(err);
            this.isAuthenticated = false;
            console.log('authentication:', this.isAuthenticated);
          });
      } else {
        // No token found, the user is not authenticated
        this.isAuthenticated = false;
        console.log('authentication:', 'no token found');
      }
    },
  },
  mounted() {
    this.checkAuthentication();
  }
};
</script>
