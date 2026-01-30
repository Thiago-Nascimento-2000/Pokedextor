import LogoNav from "../../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {

    const Links = [
        { name: "Inicio", path: "/" },
        { name: "Series", path: "/series" },
        { name: "Filmes", path: "/filmes" },
        { name: "Personagens", path: "/personagens" },
        { name: "Sobre", path: "/sobre" },
    ]

    return (
        <nav className="w-full h-16 flex items-center justify-around pt-5">
            <img className="hover:cursor-pointer" src={LogoNav} alt="Logo" width={250} />
            <div className="flex gap-5 items-center">
                <div className="flex gap-7">
                    {Links.map((link) => (
                        <a className="uppercase text-[#5f9c7f] hover:text-[#4a7c63] font-bold hover:cursor-pointer" key={link.name}>{link.name}</a>
                    ))}
            </div>
                                <button className="w-25 h-10 text-white bg-[#5f9c7f] rounded-3xl hover:bg-[#4a7c63] hover:cursor-pointer">Registrar</button>
            </div>
        </nav>
    )
}

export default Nav;