// src/pages/shop.jsx
export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://1e0297-a4.myshopify.com',
      permanent: false,
    },
  }
}
export default function Shop() { return null }