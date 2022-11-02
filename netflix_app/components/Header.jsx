import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';

import {
  HomeIcon,
  CheckBadgeIcon,
  UserIcon,
  StarIcon,
  FolderIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={StarIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={FolderIcon} />
        <HeaderItem title="SEARCH" Icon={MapIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="hulu logo"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
