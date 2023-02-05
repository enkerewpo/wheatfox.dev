import { Icon } from '@iconify/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='py-5 border-b border-matteBlack sticky top-0 bg-cream bg-opacity-90 z-10'>
      <div className='container px-6 lg:px-12 mx-auto flex items-center'>
        <Link href='/'>
          <a className='text-matteBlack text-2xl font-semibold'>wheatfox</a>
        </Link>
        <div className='flex ml-auto'>
          <a
            className='text-midGrey mr-5 text-2xl hover:text-matteBlack'
            href='https://github.com/enkerewpo'
          >
            <Icon icon="akar-icons:github-fill" />
          </a>
          {/* <a
            className='text-midGrey mr-5 text-2xl hover:text-cream'
            href='https://linktr.ee/kng_dev'
          >
            <Icon icon="simple-icons:linktree" />
          </a> */}
          {/* <a className='text-midGrey text-2xl hover:text-cream' href='https://www.kentaro.tools'>
            <Icon icon="simple-icons:gumroad" />
          </a> */}
        </div>
      </div>
    </header>
  );
};
