<template>
  <div id="app">
    <form>
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required />
      <button @click.prevent="sendPost()">Submit post</button>
    </form>

    <ul>
      <li>Id : {{post.id}}</li>
      <li>Title: {{post.title}}</li>
      <li>Body: {{post.body}}</li>
      <li>User ID: {{post.userId}}</li>
    </ul>
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
    sendPost() {
      const postData = { title: this.title, body: this.body };
      // this.$http.post("https://jsonplaceholder.typicode.com/posts", postData)
      //   .then(res => {
      //     console.log(res.body);
      // });
      this.$http.post("posts", postData)
      .then(res => {
        console.log(res.body);
      });
    }
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/posts/1")
    // .then(res => {
    //   this.post = res.body;
    //   console.log(res.body);
    // });
    this.$http.get("posts/1")
    .then(res => {
      this.post = res.body;
      console.log(res.body);
    });
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
