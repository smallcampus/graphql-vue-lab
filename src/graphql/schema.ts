import {
    IntrospectionInputObjectType,
    IntrospectionInputType,
    IntrospectionObjectType,
    IntrospectionSchema
} from "graphql";

const graphQLSchema = require("../../graphql.schema.json")

class GraphQLSchema {

    rawSchema: IntrospectionSchema

    project(): IntrospectionObjectType {
        const type = this.findObjectTypeSchemaByName('Project')

        if (!type)
            throw new Error('schema not found')

        return type
    }

    projectInput(): IntrospectionInputObjectType {
        const type = this.findInputObjectTypeSchemaByName('ProjectInput')

        if (!type)
            throw new Error('schema not found')

        return type
    }

    constructor(rawSchema: IntrospectionSchema) {
        this.rawSchema = rawSchema
    }

    findObjectTypeSchemaByName(name: string): IntrospectionObjectType | undefined {
        return this.rawSchema.types.find(obj => obj.kind === 'OBJECT' && obj.name === name) as IntrospectionObjectType
    }

    findInputObjectTypeSchemaByName(name: string): IntrospectionInputObjectType | undefined {
        return this.rawSchema.types.find(obj => obj.kind === 'INPUT_OBJECT' && obj.name === name) as IntrospectionInputObjectType
    }

    mapObjectTypeToFormSchema(inputType: IntrospectionInputObjectType): any {
        const fields = inputType.inputFields
            .map(field => {
                const type = 'input'
                let inputType, featured = false
                const readonly = false

                const model = field.name
                const label = field.name.charAt(0).toUpperCase() + field.name.substring(1)

                let curType = field.type

                if (field.type.kind === "NON_NULL") {
                    featured = true
                    curType = field.type.ofType
                }

                if (curType.kind === "SCALAR") {
                    if (curType.name === 'String') {
                        inputType = 'text'
                    } else {
                        throw new Error(`Scalar type ${curType.name} not supported yet`)
                    }
                } else {
                    throw new Error(`type.kind ${curType.kind} not supported yet`)
                }

                return {
                    type,
                    inputType,
                    readonly,
                    featured,
                    model,
                    label
                }
            })

        return {
            fields
        }
    }
}

export default new GraphQLSchema(graphQLSchema.__schema)

