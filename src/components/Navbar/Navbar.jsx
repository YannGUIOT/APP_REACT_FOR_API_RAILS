import {Link} from 'react-router-dom';
import { DarkMode } from '../DarkMode/DarkMode';
import { DisconnectButton } from "../DisconnectButton/DisconnectButton";
import { useAtomValue } from "jotai";
import { tokenAtom } from "../../atoms/atoms";

export const Navbar = () => {

  const token = useAtomValue(tokenAtom);

  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/other"> Other </Link>
      {token ? (
        <>
          <Link to="/profile">Profil </Link>
          <DisconnectButton />
        </>
      ) : (
        <>
          <Link to="/login">Connexion </Link>
          <Link to="/register">Inscription </Link>
        </>
      )}
      <DarkMode />
    </nav>
  )
}

