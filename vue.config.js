module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: ({ production: '/music-list/', vercel: '/', undefined: '/' })[process.env.NODE_ENV],
};
