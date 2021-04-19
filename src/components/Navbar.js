import React from "react";
import MenuItem from "./navbar/MenuItem";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-green-600 ") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-green-100") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
            }
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Código Mix
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-green-100") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-gray-800 lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="https://www.twitch.tv/codigomix"
                title="Lives"
                icon="fab fa-twitch"
                newTab
              />
            </li>
            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="https://www.youtube.com/channel/UCO4nRlDMDn7iwlyr_XGsPgQ"
                title="YouTube"
                icon="fab fa-youtube"
                newTab
              />
            </li>
            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="mailto:ticodigomix@gmail.com"
                title="Mentoria"
                icon="fas fa-brain"
              />
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="https://www.facebook.com/codigomixti"
                title={navbarOpen ? "curta nossa página!" : ""}
                icon="fab fa-facebook"
                newTab
              />
            </li>

            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="https://twitter.com/codigomix"
                title={navbarOpen ? "nos siga no twitter!" : ""}
                icon="fab fa-twitter"
                newTab
              />
            </li>

            <li className="flex items-center">
              <MenuItem
                transparent={props.transparent}
                link="https://github.com/codigomix-lives/"
                title={navbarOpen ? "show me the code!" : ""}
                icon="fab fa-github"
                newTab
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
