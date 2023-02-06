import { Icon } from '@iconify/react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='container px-6 lg:px-12 mx-auto flex items-center'>
      <div className='flex mx-auto'>
        <p className='text-sm text-grey'>theme forked from&nbsp;
          <a className='text-grey hover:text-matteBlack'
            href='https://github.com/szkkng/kengo-dev'>
            <Icon icon="akar-icons:github-fill" inline={true} className="inline" />&nbsp;szkkng/kengo-dev
          </a>
        </p>
      </div>
    </div>
  );
};
