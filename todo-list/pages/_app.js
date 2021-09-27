import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

const MyApp =({ Component, pageProps }) =>{
  return (
    <div className="h-screen bg-gray-900 text-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
