/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { getDefaultConfig } from "metro-config";

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer"),
      experimentalImportSupport: false,
      inlineRequires: true,
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"]
    }
  };
})();