import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonComponent from "./Button";
import Image from "next/image";
import logo from "@/../public/logo.png";

function NavbarComponent() {
  return (
    <>
      <div className="flex justify-between items-center text-black px-[140px]">
        <div>
          <Image src={logo} alt="Logo" className="w-[156px] my-[10px]" />
        </div>
        <div className="flex text-[16px] gap-[50px]">
          <p>Services</p>
          <p>Owners</p>
          <p>Residents</p>
          <p>Properties</p>
          <p>About</p>
          <p>Login</p>
        </div>

        <div>
          <ButtonComponent text="Management Quote" />
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
