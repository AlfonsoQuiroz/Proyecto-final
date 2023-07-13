import { Link, NavLink } from "react-router-dom";

const Header = () => {

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header")
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#00000095";
        } else {
            header.style.backgroundColor = "#00000015";
        }
    })

    const links = [
        {
            href: '/Movies',
            content: 'Peliculas'
        },
        {
            href: '/Tv',
            content: 'Series'
        }
    ];


    return (

        <header className="fixed z-50 top-0 left-0 w-full ">
            <nav className="py-4">
                <div className="container px-2 mx-auto flex items-center justify-between">
                    <h1 className="title">
                        <Link to="/" className="text-xl font-extrabold">FlickZone</Link>
                    </h1>
                    <ul className="list" >
                        {links.map((element, index) => {
                            return (
                                <li key={index} className="list__item">
                                    <NavLink to={element.href} className={({ isActive }) => `font-semibold transition-colors hover:text-teal-500 no-underline ${isActive ? 'no-underline' : ''}`}>{element.content}</NavLink>
                                </li>
                            );
                        })}
                    </ul>

                </div>

            </nav>
        </header>
    );
}

export default Header;