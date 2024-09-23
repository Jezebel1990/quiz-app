/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Endereço de API no front-end
          destination: 'https://quizapi-4g8l.onrender.com/:path*', // URL real da API
        },
      ]
    },
  }
  
  export default nextConfig;
  