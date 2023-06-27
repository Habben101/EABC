import Logo from "./../components/Logo";
import config from "./../../config/config.json";
import menu from "./../../config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  //router
  const router = useRouter();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;
  const { enabled, labeled, linked, liveIcon } = config.nav_button_live;

  return (
    <header className="header">
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${router.asPath === menu.url ? "nav-link-active" : ""
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {enable && (
              <>
                <li className="md:hidden">
                  <Link className="btn btn-secondary z-0 py-[14px] flex flex-row justify-center" href={linked} rel="noopener noreferrer" target="_blank">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]">
                      <g clip-path="url(#clip0_53_7)">
                        <path d="M0.839966 10.5C0.839966 8.52219 1.42646 6.58879 2.52527 4.9443C3.62408 3.29981 5.18587 2.01809 7.01313 1.26121C8.84039 0.504333 10.8511 0.306299 12.7909 0.692152C14.7307 1.078 16.5125 2.03041 17.911 3.42894C19.3096 4.82746 20.262 6.60929 20.6478 8.5491C21.0337 10.4889 20.8356 12.4996 20.0788 14.3268C19.3219 16.1541 18.0402 17.7159 16.3957 18.8147C14.7512 19.9135 12.8178 20.5 10.84 20.5C8.1878 20.5 5.64426 19.4464 3.7689 17.5711C1.89353 15.6957 0.839966 13.1522 0.839966 10.5ZM8.75997 14.77C8.84133 14.7666 8.92048 14.7425 8.98997 14.7L14.84 10.85C14.8977 10.8117 14.9451 10.7597 14.9779 10.6986C15.0107 10.6375 15.0278 10.5693 15.0278 10.5C15.0278 10.4307 15.0107 10.3625 14.9779 10.3014C14.9451 10.2403 14.8977 10.1883 14.84 10.15L8.98997 6.3C8.92494 6.26126 8.85066 6.2408 8.77497 6.2408C8.69927 6.2408 8.62499 6.26126 8.55997 6.3C8.49339 6.33355 8.43752 6.38503 8.39864 6.44864C8.35977 6.51225 8.33945 6.58546 8.33997 6.66V14.36C8.33945 14.4346 8.35977 14.5078 8.39864 14.5714C8.43752 14.635 8.49339 14.6865 8.55997 14.72C8.62033 14.7558 8.68985 14.7732 8.75997 14.77Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_53_7">
                          <rect width="20" height="20" fill="white" transform="translate(0.839966 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>

                    {labeled}
                  </Link>
                </li>
                <li className="md:hidden">
                  <Link
                    className="btn btn-primary z-0 py-[14px]"
                    href={link}
                    rel=""
                  >
                    {label}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {enable && (
          <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
            <Link className="btn btn-secondary z-0 py-[14px] flex flex-row" href={linked} rel="">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]">
                <g clip-path="url(#clip0_53_7)">
                  <path d="M0.839966 10.5C0.839966 8.52219 1.42646 6.58879 2.52527 4.9443C3.62408 3.29981 5.18587 2.01809 7.01313 1.26121C8.84039 0.504333 10.8511 0.306299 12.7909 0.692152C14.7307 1.078 16.5125 2.03041 17.911 3.42894C19.3096 4.82746 20.262 6.60929 20.6478 8.5491C21.0337 10.4889 20.8356 12.4996 20.0788 14.3268C19.3219 16.1541 18.0402 17.7159 16.3957 18.8147C14.7512 19.9135 12.8178 20.5 10.84 20.5C8.1878 20.5 5.64426 19.4464 3.7689 17.5711C1.89353 15.6957 0.839966 13.1522 0.839966 10.5ZM8.75997 14.77C8.84133 14.7666 8.92048 14.7425 8.98997 14.7L14.84 10.85C14.8977 10.8117 14.9451 10.7597 14.9779 10.6986C15.0107 10.6375 15.0278 10.5693 15.0278 10.5C15.0278 10.4307 15.0107 10.3625 14.9779 10.3014C14.9451 10.2403 14.8977 10.1883 14.84 10.15L8.98997 6.3C8.92494 6.26126 8.85066 6.2408 8.77497 6.2408C8.69927 6.2408 8.62499 6.26126 8.55997 6.3C8.49339 6.33355 8.43752 6.38503 8.39864 6.44864C8.35977 6.51225 8.33945 6.58546 8.33997 6.66V14.36C8.33945 14.4346 8.35977 14.5078 8.39864 14.5714C8.43752 14.635 8.49339 14.6865 8.55997 14.72C8.62033 14.7558 8.68985 14.7732 8.75997 14.77Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_53_7">
                    <rect width="20" height="20" fill="white" transform="translate(0.839966 0.5)" />
                  </clipPath>
                </defs>
              </svg>

              {labeled}
            </Link>
            <Link className="btn btn-primary z-0 py-[14px]" href={link} rel="">
              {label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
