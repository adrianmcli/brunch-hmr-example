module.exports = {
  hot: true,
  files: {
    javascripts: {
      joinTo: 'app.js'
      // joinTo: {
      //   'vendor.js': /^(?!app)/,
      //   'app.js': /^app/
      // }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015', 'react']}
  }
};
