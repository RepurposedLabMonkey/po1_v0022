// the general principle with graphql schema is this:
// create the table type object (matching db.table) using graphql types
// , place in root query object and insert into schema
const dbSchema = "po1dev_v0022";


const graphql = require('graphql');
const pgp = require('pg-promise')(); //http postgres client

//url...protocol://user:password@host:port/database
const db = pgp("postgres://postgres:postgres@localhost:5432/postgres");

//types provided by graphQL
const{
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = graphql;

//studies table (replicate db table)
const StudiesTypeQL = new GraphQLObjectType ({
	name: 'studies',
	fields: () => ({
		studies_id: { type: GraphQLInt},
		name_studies: { type: GraphQLString },
		lab_studies: { type: GraphQLString },
		objective_studies: { type: GraphQLString },
		active_studies: { type: GraphQLString }
	})
})

//all queries get housed within this query method
const query = new GraphQLObjectType ({
	name: 'Query',
	fields: {
		study: {
			type: StudiesTypeQL,
			args: { study_id: { type: GraphQLInt } },
			resolve(obj, args) { //parent, arguments, context, info
				return db.one ( //only expect one value to come back
					'SELECT * FROM studies WHERE studies_id = $1', [args.study_id]
				)
			}
		},         
	}
})

module.exports = new GraphQLSchema({ query });