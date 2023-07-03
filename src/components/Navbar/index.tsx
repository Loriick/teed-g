import { ReactElement } from 'react';
import { NavBarWrapper } from './index.style';
import { FaUser, FaRegSun } from 'react-icons/fa';

export default function NavBar(): ReactElement {
  return (
    <NavBarWrapper>
      <form>
        <input type="text" />
      </form>
      <div className="icon__container">
        <FaUser />
        <FaRegSun />
      </div>
    </NavBarWrapper>
  );
}
