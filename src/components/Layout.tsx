import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const siteTitle = 'wheatfox';

type Props = { home?: boolean };

export const Layout: React.FC<PropsWithChildren<Props>> = ({ children, home }) => {
  return (
    <>
      <Header />
      <main className='container m-auto'>{children}</main>
      <footer className='h-20'>
        {!home && (
          <div className='mt-10 pt-4 text-center'>
            <Link href='/'>
              <a className='text-cream text-lg'>Home</a>
            </Link>
          </div>
        )}
      </footer>
      <Footer />
    </>
  );
};
