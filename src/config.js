module.exports = {
  PORT: process.env.PORT || 5432,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql//postgres:1111@localhost/go-wilmo',
  TEST_DB_URL: process.env.DATABASE_URL || 'postgresql//postgres:1111@localhost/go-wilmo_test',
  JWT_SECRET: process.env.JWT_SECRET || 'ughjkffhhjkufhgdhsdtfjyj',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '20s',
}
