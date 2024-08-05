const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
