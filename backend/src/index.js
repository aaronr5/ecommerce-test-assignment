const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const { DATABASE_URL } = require('./config');
const { resolver, schema } = require('./graphql');

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolver,
	graphiql: true
}));

// Connect to db and start server
mongoose.connect(DATABASE_URL)
	.then(() => {
		app.listen(process.env.PORT || 8000);
	})
	.catch(err => console.log(err));