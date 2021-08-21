import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-9/12">
      <header className="mb-12 py-4 flex justify-between items-baseline subpixel-antialiased border-b-2 border-blue-50">
        <div>
          <Link href="/">
            <a className=" text-blue-600 text-6xl font-bold line-through">
              Blog NT
            </a>
          </Link>
        </div>
        <nav className="mr-0">
          <ul className="flex justify-between space-x-4 ">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
