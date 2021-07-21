<template>
  <div id="app">
    <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Sample</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">Home</router-link></li> |
              <li><router-link to="/about">About</router-link></li> |
              <li><router-link to="/cats">Cats</router-link></li> |
              <li><router-link to="/dogs">Dogs</router-link></li> |
              <li><router-link to="/drivers">Drivers</router-link></li> |
              <li><router-link to="/pet/species/123">Pet</router-link></li>
            </ul>
          </div>
        </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      post: "",
      title: "",
      body: ""
    };
  },
  methods: {
    // sendPost() {
      // const postData = { title: this.title, body: this.body };
      // this.$http.post("https://jsonplaceholder.typicode.com/posts", postData)
      //   .then(res => {
      //     console.log(res.body);
      // });
    //   this.$http.post("posts", postData)
    //   .then(res => {
    //     console.log(res.body);
    //   });
    // }
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/posts/1")
    // .then(res => {
    //   this.post = res.body;
    //   console.log(res.body);
    // });
    // this.$http.get("posts/1")
    // .then(res => {
    //   this.post = res.body;
    //   console.log(res.body);
    // });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
