<template>
  <div>
    <h1>{{ projects }}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "graphql-test",
  apollo: {
    projects: gql`
      query {
        projects {
          _id
          name
        }
      }
    `
  }
};
</script>
