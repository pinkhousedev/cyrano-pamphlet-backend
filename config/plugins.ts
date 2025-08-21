export default () => ({
    'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: process.env.JWT_SECRET || 'somethingSuperSecret'
    }
  }
});
