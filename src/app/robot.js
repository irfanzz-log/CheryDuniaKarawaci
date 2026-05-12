export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },

    sitemap: 'https://cheryduniakarawaciofficial.com/sitemap.xml',
  }
}