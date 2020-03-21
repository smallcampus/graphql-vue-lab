<template>
  <div>
    <p>{{ projects }}</p>
  </div>
</template>
<script>
import gql from "graphql-tag";

export default {
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
