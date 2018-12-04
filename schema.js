// the general principle with graphql schema is this:
// create the table type object (matching db.table) using graphql types
// , place in root query object and insert into schema

const graphql = require('graphql');
const pgp = require('pg-promise')(); //http postgres client

//url...protocol://user:password@host:port/database
const db = pgp("postgres://postgres:postgres@localhost:5432/postgres");

//types provided by graphQL
const{
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = graphql;

//studies table (replicate db table)
const StudiesType = new GraphQLObjectType ({
	name: 'studies',
	fields: () => ({
		studies_id: { type: GraphQLInt},
		name_studies: { type: GraphQLString },
		lab_studies: { type: GraphQLString },
		objective_studies: { type: GraphQLString },
		active_studies: { type: GraphQLBoolean }
	})
})

//all queries get housed within this query method
const query = new GraphQLObjectType ({
	name: 'Query',
	fields: {
		study: {
			type: StudiesType,
			args: { study_id: { type: GraphQLInt } },
			resolve(obj, args) { //parent, arguments, context, info
				return db.one ( //only expect one value to come back
					'SELECT * FROM studies WHERE studies_id = $1', [args.study_id]
				)
			}
		},         
	}
})

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addStudy: {
			type: StudiesType,
			args: {
				// studies_id: { type: GraphQLInt },
				name_studies: { type: GraphQLString },
				lab_studies: { type: GraphQLString },
				objective_studies: { type: GraphQLString },
				active_studies: { type: GraphQLBoolean }
			},
			resolve(parent, args) {
				return db.one (
					// 'INSERT INTO studies(studies_id, name_studies, lab_studies, objective_studies, active_studies) VALUES ($1, $2, $3, $4, $5) RETURNING *',
					// [args.studies_id, args.name_studies, args.lab_studies, args.objective_studies, args.active_studies]
					'INSERT INTO studies(name_studies, lab_studies, objective_studies, active_studies) VALUES ($1, $2, $3, $4) RETURNING *',
					[args.name_studies, args.lab_studies, args.objective_studies, args.active_studies]
				)
				//comment out .then for graphiql feedback
				.then(() => {
					console.log('INSERT record success: \n', args);
				})	
				.catch(error => {
					console.log('INSERT ERROR: ', error);
				})
			}
		},
		deleteStudy: {
			type: StudiesType, 
			args: {
				studies_id: { type: GraphQLInt }	
			},
			resolve(parent, args) {
				return db.result (
					'DELETE FROM studies WHERE studies_id = $1', [args.studies_id]
				)
				.then((result) => {
					if(result.rowCount === 1) {
						console.log(`Deleted study with ID ${args.studies_id}`);
					} else {
						console.log(`Record with ID ${args.studies_id} does not exist`);
					}
				})
				.catch(error => {
					console.log('DELETE ERROR: ', error);
				})	
			}
		},
	}
})

module.exports = new GraphQLSchema({ query, mutation });