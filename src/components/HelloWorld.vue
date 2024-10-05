<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
           <!-- Usando mo template -->
      {{ $store.state.user.first_name }}
      {{ $store.state.user.last_name }} <br>
      {{ $store.state.user.email }}
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

      // Usando no script
  created() {
    console.log("hello World", this.$store.state.user.first_name)
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
