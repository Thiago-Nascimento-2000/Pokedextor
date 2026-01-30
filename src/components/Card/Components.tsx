import type { ReactNode } from "react"
import { IoIosFlash } from "react-icons/io";
import { SiFireship } from "react-icons/si";
import { GiSpotedFlower } from "react-icons/gi";
import { GiPoisonBottle } from "react-icons/gi";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { GiFlyingTarget } from "react-icons/gi";
import { MdEmergency } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { IoMdFlash } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa";
import { TbDeviceUnknown } from "react-icons/tb";

const backgroundTypes: Record<string, string> = {
  fire: "bg-gradient-to-b from-transparent via-red-900/40 to-red-900/30 border border-red-700",
  water: "bg-gradient-to-b from-transparent via-blue-900/40 to-blue-900/30 border border-blue-700",
  grass: "bg-gradient-to-b from-transparent via-green-900/40 to-green-900/30 border border-green-700",
  electric: "bg-gradient-to-b from-transparent via-yellow-600/40 to-yellow-600/30 border border-yellow-500",
  psychic: "bg-gradient-to-b from-transparent via-purple-900/40 to-purple-900/30 border border-purple-700",
  normal: "bg-gradient-to-b from-transparent via-gray-600/40 to-gray-600/30 border border-gray-500",
  flying: "bg-gradient-to-b from-transparent via-sky-900/40 to-sky-900/30 border border-sky-700",
  bug: "bg-gradient-to-b from-transparent via-lime-900/40 to-lime-900/30 border border-lime-700",
  rock: "bg-gradient-to-b from-transparent via-yellow-900/40 to-yellow-900/30 border border-yellow-800",
  ghost: "bg-gradient-to-b from-transparent via-gray-800/40 to-gray-800/30 border border-gray-700",
  ice: "bg-gradient-to-b from-transparent via-cyan-900/40 to-cyan-900/30 border border-cyan-700",
  dragon: "bg-gradient-to-b from-transparent via-orange-900/40 to-orange-900/30 border border-orange-700",
  dark: "bg-gradient-to-b from-transparent via-black/40 to-black/30 border border-black",
  steel: "bg-gradient-to-b from-transparent via-gray-500/40 to-gray-500/30 border border-gray-400",
  fairy: "bg-gradient-to-b from-transparent via-pink-900/40 to-pink-900/30 border border-pink-700",
  fighting: "bg-gradient-to-b from-transparent via-red-900/40 to-red-900/30 border border-red-800",
  poison: "bg-gradient-to-b from-transparent via-violet-900/40 to-violet-900/30 border border-violet-700",
  ground: "bg-gradient-to-b from-transparent via-amber-900/40 to-amber-900/30 border border-amber-700",
  default: "bg-gradient-to-b from-transparent via-gray-700/40 to-gray-700/30 border border-gray-600",
};

type ContainerProps = { children: React.ReactNode; background?: string };
export const Container = ({ children, background = "default" }: ContainerProps) => {
  const bgClass = backgroundTypes[background] || backgroundTypes.default;

  return <div className={`bg-cover m-2 bg-center bg-no-repeat bg-blend-overlay backdrop-blur-md text-gray-900 w-65 h-fit pb-8 rounded-4xl gap-2 shadow-lg flex flex-col items-center justify-center ${bgClass}`}>{children}</div>;
};

type PokemonImageProps = {src: string, alt: string}
export const PokemonImage = ({src, alt}: PokemonImageProps) => {

    return (
        <img className="w-fill" src={src} alt={alt} />
    )
}

type PokemonNameProps = {name: string}
export const PokemonName = ({name}: PokemonNameProps) => {

    return (
        <h2 className="text-2xl font-semibold text-white capitalize">{name}</h2>
    )
}

type ContainerTypeProps = {children: React.ReactNode}
export const ContainerType = ({children}: ContainerTypeProps) => {

    return (
        <div className="flex gap-2">
            {children}
        </div>
    )
}

type Info = {icon: React.ReactNode | string; type: string; colorClass: string;};
const iconType: Record<string, Info> = {
  fire: { icon: <SiFireship />, type: "fire", colorClass: "bg-red-500 text-white font-semibold uppercase" },
  water: { icon: <IoWater />, type: "water", colorClass: "bg-blue-500 text-white font-semibold uppercase" },
  grass: { icon: <GiSpotedFlower />, type: "grass", colorClass: "bg-green-500 text-white font-semibold uppercase" },
  electric: { icon: <IoMdFlash />, type: "electric", colorClass: "bg-yellow-400 text-white text-black font-semibold uppercase" },
  psychic: { icon: "🔮", type: "psychic", colorClass: "bg-purple-500 text-white font-semibold uppercase" },
  normal: { icon: <MdEmergency />, type: "normal", colorClass: "bg-gray-400 text-black text-white font-semibold uppercase" },
  flying: { icon: <GiFlyingTarget />, type: "flying", colorClass: "bg-sky-300 text-black text-white font-semibold uppercase" },
  bug: { icon: <HiOutlineBugAnt />, type: "bug", colorClass: "bg-lime-400 text-white text-black font-semibold uppercase" },
  rock: { icon: "🪨", type: "rock", colorClass: "bg-yellow-800 text-white font-semibold uppercase" },
  ghost: { icon: "👻", type: "ghost", colorClass: "bg-gray-700 text-white font-semibold uppercase" },
  ice: { icon: <FaRegSnowflake />, type: "ice", colorClass: "bg-cyan-300 text-black text-white font-semibold uppercase" },
  dragon: { icon: "🐉", type: "dragon", colorClass: "bg-orange-500 text-white font-semibold uppercase" },
  dark: { icon: "🌑", type: "dark", colorClass: "bg-black text-white font-semibold uppercase" },
  steel: { icon: "⚙️", type: "steel", colorClass: "bg-gray-300 text-black text-white font-semibold uppercase" },
  fairy: { icon: "🧚‍♀️", type: "fairy", colorClass: "bg-pink-300 text-black text-white font-semibold uppercase" },
  fighting: { icon: "🥊", type: "fighting", colorClass: "bg-red-900 text-white font-semibold uppercase" },
  poison: { icon: <GiPoisonBottle />, type: "poison", colorClass: "bg-violet-500 text-white font-semibold uppercase" },
  ground: { icon: "🌍", type: "ground", colorClass: "bg-amber-700 text-white font-semibold uppercase" },
  default: { icon: <TbDeviceUnknown />, type: "unknown", colorClass: "bg-gray-400 text-black text-white font-semibold uppercase" },
};


type TypeProps = {type: keyof typeof iconType};
export const Type = ({ type }: TypeProps) => {
  const { icon, colorClass } = iconType[type] ? iconType[type] : iconType.default;

  return (
    <span className={`rounded-md px-2 py-0.5 flex items-center gap-1 ${colorClass}`}>
      {icon} {type}
    </span>
  );
};

type ContainerInfoProps = {children: React.ReactNode}
export const ContainerInfo = ({children}: ContainerInfoProps) => {

    return (
        <div className="flex">
            {children}
        </div>
    )
}

type InfoProps = {label: string, value: string | number, icon: ReactNode}
export const Info = ({label, value, icon}: InfoProps) => {

    return (
        <div className="w-21 flex flex-col items-center mx-2 text-white">
            <strong className="text-lg">{value}</strong>
            <span className="flex items-center gap-1">{icon} {label}</span>
        </div>
    )
}

type ButtonAboutProps = {onClick: () => void, label: string}
export const ButtonAbout = ({onClick, label}: ButtonAboutProps) => {

    return (
        <button className="bg-[#464e4a] flex items-center rounded-md px-4 py-1.5 text-white font-semibold hover:bg-[#565e5a] hover:cursor-pointer mt-2" onClick={onClick}><IoIosFlash />{label}</button>
    )
}