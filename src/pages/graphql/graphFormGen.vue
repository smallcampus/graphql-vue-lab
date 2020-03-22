import gql from "graphql-tag";
<template>
  <div style="width: 100%">
    <div style="display: flex;justify-content: center">
      <div class="panel-body">
        <h3>Form</h3>
        <vue-form-generator
          :schema="schema"
          :model="project"
          :options="formOptions"
        ></vue-form-generator>
      </div>
    </div>
    <div class="meta">
      <div>
        <h3>Data</h3>
        <pre>{{ project | pretty }}</pre>
      </div>
      <div>
        <h3>Graph Schema</h3>
        <pre>{{ graphSchema | pretty }}</pre>
      </div>
      <div>
        <h3>Form Schema</h3>
        <pre>{{ schema | pretty }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
const VueFormGenerator = require("vue-form-generator");
import gql from "graphql-tag";
import GraphQLSchema from "../../graphql/schema";

export default {
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  filters: {
    pretty: function(value) {
      if (value) {
        return JSON.stringify(value, null, 2);
      } else {
        return "";
      }
    }
  },
  apollo: {
    project: {
      query: gql`
        query getProjectDeatail($id: String!) {
          project(id: $id) {
            _id
            name
          }
        }
      `,
      variables() {
        return {
          id: "5e760f7ad6001c4804a250c5"
        };
      }
    }
  },
  data() {
    const projectInput = GraphQLSchema.projectInput();
    return {
      schema: GraphQLSchema.mapObjectTypeToFormSchema(projectInput),
      graphSchema: projectInput,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  }
};
</script>

<style scoped lang="css">
.meta {
  text-align: left;
  display: flex;
  padding: 24px;
}

.meta > div {
  flex: 1;
}

.panel-body {
  width: 700px;
}
</style>
