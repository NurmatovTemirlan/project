import { Button } from "@mui/material";
import React from "react";
import instagram from "./icons/instagram.svg";
import vk from "./icons/vk.svg";
import gitHub from "./icons/gitHub.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Смотри новые Аниме вместе с нами</strong>
          </h1>
          <Button onClick={() => navigate("/anime")}>Новые Аниме</Button>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <p>
                Аниме — это японская анимация, которая характеризуется своим
                уникальным стилем, разнообразием жанров и сюжетных линий. Оно
                охватывает широкий спектр тем и часто включает элементы
                фантастики, приключений, романтики, ужасов, комедии и других
                жанров. Аниме может быть адаптацией манги (японских комиксов),
                видеоигр, новелл или оригинальных сценариев.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <header className="headerr">
        <div className="headerr__wrapper">
          <h1 className="headerr__title">
            <strong>Смотри новые Фильмы вместе с нами</strong>
          </h1>
          <Button onClick={() => navigate("/movies")}>Новые Фильмы</Button>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <p>
                Фильмы — это произведения кинематографа, представляющие собой
                серию изображений, которые создают иллюзию движущихся картин,
                сопровождаемые звуковой дорожкой. Они могут быть различных
                жанров и форматов, таких как художественные фильмы,
                документальные, анимационные и короткометражные.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <header className="headerrr">
        <div className="headerrr__wrapper">
          <h1 className="headerrr__title">
            <strong>Смотри новые Мультфильмы вместе с нами</strong>
          </h1>
          <Button onClick={() => navigate("/cartoon")}>
            Новые Мультфильмы
          </Button>
        </div>
      </header>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <p>
                Мультфильмы — это фильмы, в которых картинки двигаются, создавая
                иллюзию движения. Они могут быть нарисованными или сделанными на
                компьютере и обычно предназначены для детей, но также интересны
                и взрослым.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024 3team@JS23.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
