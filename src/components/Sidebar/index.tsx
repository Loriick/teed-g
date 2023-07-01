import { ReactElement } from 'react';
import { SidebarWrapper } from './index.style';
import { FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar(): ReactElement {
  return (
    <SidebarWrapper>
      <div className="logo">
        <FaMusic />
        <p>FWI MUSIC</p>
      </div>
      <nav className="sidebar__nav">
        <Link to="/teedg/songs">Songs</Link>
        <Link to="/teedg/videos">Videos</Link>
      </nav>
    </SidebarWrapper>
  );
}
