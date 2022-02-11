module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3462aafe98ad15a59c9708524eb0856'),
  },
});
