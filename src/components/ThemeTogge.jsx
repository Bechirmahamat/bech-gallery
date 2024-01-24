import React from "react";
import {
    BsMoonFill,
    BsGithub,
    BsBrightnessHigh,
    BsSearch,
} from "react-icons/bs";
import { GlobalData } from "../context";
import image from "../assets/img.svg";
import imageLight from "../assets/imgLight.svg";

const links = [
    { id: 1, name: "learn" },
    { id: 2, name: "Api" },
    { id: 3, name: "Background" },
    { id: 4, name: "Blog" },
];
const ThemeTogge = () => {
    const { isDarkMode, ToggleDarkMode } = GlobalData();
    const openForm = () => {
        document.querySelector(".form-part").classList.add("form-part-active");
    };
    return (
        <header className="header">
            <nav>
                <div className="leftSide">
                    {isDarkMode ? (
                        <img src={image} alt="" />
                    ) : (
                        <img src={imageLight} alt="" />
                    )}
                    <ul className="links">
                        {links.map((link) => {
                            return (
                                <SingleLink
                                    key={link.id}
                                    id={link.id}
                                    name={link.name}
                                />
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <button className="github">
                        <BsGithub />
                    </button>

                    {isDarkMode ? (
                        <button onClick={() => ToggleDarkMode()}>
                            {" "}
                            <BsMoonFill className="dark-theme-icon" />
                        </button>
                    ) : (
                        <button onClick={() => ToggleDarkMode()}>
                            <BsBrightnessHigh className="dark-theme-icon" />
                        </button>
                    )}
                    <div className="open-form-btn" onClick={() => openForm()}>
                        <BsSearch className="search-icon" />
                        <span>search...</span>
                        <kbd>⌘</kbd>
                        <kbd>K</kbd>
                    </div>
                </div>
            </nav>
        </header>
    );
};
const SingleLink = ({ name, id }) => {
    const { activeLink, setActiveLink } = GlobalData();
    return (
        <li
            className={activeLink == id ? "active" : ""}
            onClick={() => {
                setActiveLink(id);
            }}
        >
            {name}
        </li>
    );
};

export default ThemeTogge;
