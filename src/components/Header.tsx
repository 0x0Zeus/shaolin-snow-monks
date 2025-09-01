import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
// import SubscribeModal from "./SubscribeModal";

function Header() {

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/product"} className="text-base">
          Product
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/aboutus"} className="text-base">
          About Us
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={"/contactus"} className="text-base">
          Contact Us
        </Link>
      ),
      key: "2",
    },
  ];

  return (
    <>
      <header className="bg-white/40 shadow-lg border-b border-white/30 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between px-4 h-20">
            <Link to="/" className="flex items-center gap-3">
              {/* <img
                src="/icons/logo.png"
                alt="Logo"
                className="h-[52px] w-auto"
              />
              <p className="text-center font-inter font-black text-3xl leading-[52px] text-[#FFFFFF] w-fit max-[1200px]:hidden">
                GOAL MOON SHOOT
              </p> */}
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden h-10 items-center rounded-full  font-spaceGrotesk md:flex text-black">
              <Link
                to="/product"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-base font-bold text-[#000000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                <li className="flex h-full items-center">Product</li>
              </Link>
              <Link
                to="/aboutus"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-base font-bold text-[#000000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                <li className="flex h-full items-center">About Us</li>
              </Link>
              <Link
                to="/contactus"
                className="text-nowrap flex h-full items-center justify-center whitespace-nowrap rounded-full px-4 text-base font-bold text-[#000000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                <li className="flex h-full items-center">Contact Us</li>
              </Link>
            </ul>

            <div className="flex items-center gap-5 text-black">
              <Link to="https://www.youtube.com/@goal2moon" className="text-black max-md:hidden">
                <FaYoutube size={24} />
              </Link>
              <Link to="https://x.com/@GoalToTheMoon" className="text-black max-md:hidden">
                <FaXTwitter size={24} />
              </Link>
              <Link to="https://www.tiktok.com/@goal2moon" className="text-black max-md:hidden">
                <FaTiktok size={24} />
              </Link>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="md:hidden flex gap-5 items-center">
              <Link to="https://www.youtube.com/@goal2moon" className="text-black">
                <FaYoutube size={24} />
              </Link>
              <Link to="https://x.com/@GoalToTheMoon" className="text-black">
                <FaXTwitter size={24} />
              </Link>
              <Link to="https://www.tiktok.com/@goal2moon" className="text-black">
                <FaTiktok size={24} />
              </Link>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                overlayClassName="mt-6 bg-[#ffffff] rounded-md select-none text-white"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MenuOutlined color="white" size={24} className="text-white text-2xl" />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
