/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'situswebsite.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cheryidn.sgp1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
