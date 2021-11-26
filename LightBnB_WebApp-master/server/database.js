const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const comm = `SELECT * FROM users WHERE
  email = $1;`
  return pool
  .query(comm, [email])
  .then(result => result.rows[0])
  .catch(err => {
   console.log(err.message);
  })
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const comm = `SELECT * FROM users WHERE
  id = $1;`
  return pool
  .query(comm, [id])
  .then(result => result.rows[0])
  .catch(err => {
   console.log(err.message);
  })
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const comm =`INSERT INTO users (name, email, password)
   values ($1, $2, $3)
   returning *;`
  return pool
  .query(comm,[user.name, user.email, user.password])
  .then(result => result.rows[0])
  .catch(err => {
    console.log(err.message);
  })
  }
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {

  const comm = `select * from reservations join users on users.id = guest_id 
  join properties on properties.id = property_id 
  where guest_id = $1 AND start_date < now()::date
  LIMIT $2;`
  return pool
  .query(comm, [guest_id, limit])
  .then(result => result.rows)
  .catch(err => {
   console.log(err.message);
  })
  
  
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

 const getAllProperties = (options, limit = 10) => {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
  SELECT properties.*, AVG(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id WHERE 1 = 1
  `;

  // 3
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `AND city LIKE $${queryParams.length} `;
  }
  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    queryString += `AND owner_id = $${queryParams.length}`;
  }
  if (options.minimum_price_per_night) {
    queryParams.push(`${options.minimum_price_per_night*100}`);
    queryString += `AND cost_per_night >= $${queryParams.length} `;
  }
  if (options.maximum_price_per_night) {
    queryParams.push(`${options.maximum_price_per_night*100}`);
    queryString += `AND cost_per_night <=$${queryParams.length}`;
    
  }
  queryString += `GROUP BY properties.id `;

  if (options.minimum_rating) {
    queryParams.push(`${options.minimum_rating}`);
    queryString += `HAVING avg(property_reviews.rating) >= $${queryParams.length}`;
    
  }
  

  // 4
  queryParams.push(limit);
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  // 5
  console.log(queryString, queryParams);

  // 6
  return pool
  .query(queryString, queryParams)
  .then((res) => res.rows);
};

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
