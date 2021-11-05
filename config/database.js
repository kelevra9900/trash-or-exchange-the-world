module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-34-226-18-183.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d3a2nfrfainagt"),
        username: env("DATABASE_USERNAME", "rkkqlwcyecstku"),
        password: env("DATABASE_PASSWORD", "d75781cf403172aebb8b67aa15922ff7b9e9bd5198e2068f9fd04ca40b37b8be"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});