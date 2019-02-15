const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Janosch Müller', // Navigation and Site Title
  siteTitleAlt: 'Jaynetics', // Alternative Site title for SEO
  siteTitleShort: 'Jaynetics', // short_name for manifest
  siteHeadline: 'Janosch Müller - Sofware Developer', // Headline for schema.org JSONLD
  siteUrl: 'https://jaynetics.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Website of Janosch Müller',
  author: 'Janosch Müller', // Author for schema.org JSONLD

  ogSiteName: 'jaynetics', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors['green-darkest'],
  backgroundColor: tailwind.colors['grey-dark'],
}
