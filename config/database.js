// Method 1

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: { 
//       host: env('DATABASE_HOST', 'db.dixjjzfbnmcizaxjhtwm.supabase.co'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD'),
//       ssl: {
//         rejectUnauthorized: false, // Required for Supabase
//       },
//     },
//     acquireConnectionTimeout: 60000,
//     pool: {
//       min: 0,
//       max: 10,
//       createTimeoutMillis: 30000,
//       acquireTimeoutMillis: 60000,
//       idleTimeoutMillis: 30000,
//       reapIntervalMillis: 1000,
//       createRetryIntervalMillis: 100,
//     },
//     debug: false,
//   },
// });












// Method 2
// const parse = require("pg-connection-string").parse;

// module.exports = ({ env }) => {
//   const config = parse(env("DATABASE_URL"));

//   console.log(config);


//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         user: config.user,
//         password: config.password,
//         ssl: {
//           rejectUnauthorized: false, // Required for Supabase
//         },
//       },
//       acquireConnectionTimeout: 60000,
//       pool: {
//         min: 0,
//         max: 10,
//         createTimeoutMillis: 30000,
//         acquireTimeoutMillis: 60000,
//         idleTimeoutMillis: 30000,
//         reapIntervalMillis: 1000,
//         createRetryIntervalMillis: 100,
//       },
//       debug: false,
//     },
//   };
// };










const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    //   mysql: {
    //     connection: {
    //       host: env('DATABASE_HOST', 'localhost'),
    //       port: env.int('DATABASE_PORT', 3306),
    //       database: env('DATABASE_NAME', 'strapi'),
    //       user: env('DATABASE_USERNAME', 'strapi'),
    //       password: env('DATABASE_PASSWORD', 'strapi'),
    //       ssl: env.bool('DATABASE_SSL', false) && {
    //         key: env('DATABASE_SSL_KEY', undefined),
    //         cert: env('DATABASE_SSL_CERT', undefined),
    //         ca: env('DATABASE_SSL_CA', undefined),
    //         capath: env('DATABASE_SSL_CAPATH', undefined),
    //         cipher: env('DATABASE_SSL_CIPHER', undefined),
    //         rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    //       },
    //     },
    //     pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    //   },



    //   postgres: {
    //     connection: {
    //       connectionString: env('DATABASE_URL'),
    //       host: env('DATABASE_HOST', 'localhost'),
    //       port: env.int('DATABASE_PORT', 5432),
    //       database: env('DATABASE_NAME', 'strapi'),
    //       user: env('DATABASE_USERNAME', 'strapi'),
    //       password: env('DATABASE_PASSWORD', 'strapi'),
    //       ssl: env.bool('DATABASE_SSL', false) && {
    //         key: env('DATABASE_SSL_KEY', undefined),
    //         cert: env('DATABASE_SSL_CERT', undefined),
    //         ca: env('DATABASE_SSL_CA', undefined),
    //         capath: env('DATABASE_SSL_CAPATH', undefined),
    //         cipher: env('DATABASE_SSL_CIPHER', undefined),
    //         rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    //       },
    //       schema: env('DATABASE_SCHEMA', 'public'),
    //     },
    //     pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    //   },

    sqlite: {
      connection: {
        // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
