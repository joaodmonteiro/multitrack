module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3154fd66ab2df31095f3d6e89f6feedd'),
  },
});
