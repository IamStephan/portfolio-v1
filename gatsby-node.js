const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {   
  actions.setWebpackConfig({
   resolve: {
    alias: { "../../theme.config$": path.join(__dirname,  "src/theme/theme.config")}
   }
  });
 };