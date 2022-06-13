exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'idm-ant-icons': '.'
      }
    }
  });
};
