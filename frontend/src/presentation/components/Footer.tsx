import { Link } from "react-router-dom";
import logoTami from "../../../public/assets/logos/logoprincipal.gif";
import whatsappIcon from "../../../public/assets/icons/WHATSAPP.svg";
import emailIcon from "../../../public/assets/icons/EMAIL.svg";
import tiktokIcon from "../../../public/assets/icons/TIKTOK.svg";
import twitterIcon from "../../../public/assets/icons/TWITTER.svg";
import facebookIcon from "../../../public/assets/icons/FACEBOOK.svg";
import instagramIcon from "../../../public/assets/icons/INSTAGRAM.svg";
import mascotaTami from "../../../public/assets/logos/mascota_tami.webp";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-evenly items-start space-y-8 lg:space-y-0 lg:space-x-4">
        {/* Logo */}
        <img
          src={logoTami}
          alt="logo-tami"
          className="self-center w-1/6 sm:w-1/12 lg:w-1/12 2xl:1/6"
        />

        {/* Línea vertical (visible solo en pantallas grandes) */}
        <div className="hidden lg:block w-px bg-white self-stretch"></div>

        {/* Links */}
        <div className="w-full lg:w-1/6">
          <ul className="space-y-4 font-bold text-sm text-center lg:text-left">
            <li>
              <Link to="/" className="hover:underline">
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link to="/shipping-policies" className="hover:underline">
                POLÍTICAS DE ENVÍOS
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                BLOGS
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:underline">
                TIENDA
              </Link>
            </li>
          </ul>
        </div>

        {/* Información */}
        <div className="w-full lg:w-2/6 text-center lg:text-left">
          <h3 className="font-bold mb-1 text-yellow-300">
            Horario de atención
          </h3>
          <p>Lunes a Viernes</p>
          <p>9:00 am a 9:00 pm</p>
          <h3 className="font-bold mt-3 mb-1 text-yellow-300">
            Para mayor información
          </h3>
          <p>informestami01@gmail.com</p>
          <p>+51 978 883 199</p>
          <div className="mt-3 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="w-6 h-6">
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-full h-full object-contain"
              />
            </a>
            <a href="#" className="w-6 h-6">
              <img
                src={emailIcon}
                alt="Email"
                className="w-full h-full object-contain"
              />
            </a>
            <a href="#" className="w-6 h-6">
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="w-full h-full object-contain"
              />
            </a>
            <a href="#" className="w-6 h-6">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-full h-full object-contain"
              />
            </a>
            <a href="#" className="w-6 h-6">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a href="#" className="w-6 h-6">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        </div>

        {/* Mascota y botón */}
        <div className="w-full lg:w-1/6 flex flex-col self-center items-center">
          <img
            src={mascotaTami}
            alt="Mascota Tami"
            className="w-2/5 sm:w-1/4 lg:w-3/4 2xl:w-4/6 mb-4"
          />
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-6 rounded-full">
            ¡CONTÁCTANOS!
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
