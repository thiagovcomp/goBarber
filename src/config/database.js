module.exports = {
  dialect: 'postgres',
  port: '5433',
  host: 'localhost',
  username: 'postgres',
  password: '654321',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
