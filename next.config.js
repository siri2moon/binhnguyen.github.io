const isGithubActions = process.env.GH_ACTIONS || true

let assetPrefix = '/'
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GH_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: false,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
};
