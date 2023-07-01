import { ReactElement } from 'react';
import { SidebarWrapper } from './index.style';
import { FaMusic } from 'react-icons/fa';

export default function Sidebar(): ReactElement {
  return (
    <SidebarWrapper>
      <div className="logo">
        <FaMusic />
        <p>FWI MUSIC</p>
      </div>
      <nav className="sidebar__nav">
        <p>Songs</p>
        <p>Videos</p>
      </nav>
    </SidebarWrapper>
  );
}
