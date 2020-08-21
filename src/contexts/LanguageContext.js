import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const LanguageProvider = (props) => {

  const language = {
    english:{
      lang: 'en',
      home:{
        first: 'Hi!',
        second: 'I\'m Igor,',
        third: 'web developer.',
        prof: 'Front End Developer',
        btn: 'CONTACT ME'
      },
      about:{
        title: 'About me',
        txt: 'Well-organised person, problem solver and quick learner, teamplayer and independent employee with high attention to details. Interested in the entire frontend spectrum and in working on different scale projects.'
      },
      skills:{
        title: 'Skills',
        txt1: 'The main area of my expertise is front end development. Hard skills in HTML, CSS and JavaScript. I prefer creating small and medium web apps with responsive and animated layouts using ReactJS as front end and Firebase as back end.',
        txt2: 'Check out my resume below for more details or just',
        txt3: 'contact me'
      },
      contacts:{
        title: 'Contact me',
        txt1: 'I am interested in a daily job as well as in freelance opportunities. If you have requests or questions, don\'t hesitate to contact me using form below. ',
        txt2: 'Also you can find me in',
        txt3: 'by adding my number',
        email: 'Your contact email',
        msg: 'Message',
        btn: 'CONTACT ME'
      }
    },
    russian:{
      lang: 'ru',
      home:{
        first: 'Привет!',
        second: 'Меня зовут Игорь,',
        third: 'я web developer.',
        prof: 'Front End Developer',
        btn: 'Связаться'
      },
      about:{
        title: 'Обо мне',
        txt: 'Хорошо организованный человек, решающий проблемы и быстро обучающийся, работающий в команде и независимый сотрудник с большим вниманием к деталям. Интересует весь спектр фронтенда и работа над проектами разного масштаба.'
      },
      skills:{
        title: 'Умения',
        txt1: 'Основная область моей компетенции - фронтенд-разработка. Навыки HTML, CSS и JavaScript. Я предпочитаю создавать небольшие и средние веб-приложения с адаптивными и анимированными макетами, используя ReactJS в качестве интерфейса и Firebase в качестве серверной части.',
        txt2: 'Ознакомьтесь с моим резюме ниже для получения более подробной информации или просто',
        txt3: 'свяжтесь со мной'
      },
      contacts:{
        title: 'Контакты',
        txt1: 'Меня интересует как повседневная работа, так и возможности фрилансера. Если у вас есть запросы или вопросы, не стесняйтесь обращаться ко мне, используя форму ниже.',
        txt2: 'Так же меня можно найти',
        txt3: ' добавив мой номер',
        email: 'Ваш контактный email',
        msg: 'Сообщение',
        btn: 'Отправить'
      }
    },
    ukranian:{
      lang: 'ua',
      home:{
        first: 'Хай!',
        second: 'Мене звати Ігор',
        third: 'я web developer.',
        prof: 'Front End Developer',
        btn: 'Зв\'язатись'
      },
      about:{
        title: 'Про себе',
        txt: 'Добре організована людина, вирішує проблеми та швидко навчається, командний гравець та незалежний працівник з великою увагою до деталей. Зацікавлений у всьому спектрі інтерфейсів та у роботі над різними масштабними проектами'
      },
      skills:{
        title: 'Вміння',
        txt1: 'Основним напрямком моєї експертизи є розробка передньої частини. Важкі навички роботи в HTML, CSS та JavaScript. Я вважаю за краще створювати невеликі та середні веб-додатки з чуйними та анімованими макетами, використовуючи ReactJS як передній та Firebase як задній.',
        txt2: 'Ознайомтеся з моїм резюме нижче для отримання більш детальної інформації або просто',
        txt3: 'зв\'яжіться зі мною'
      },
      contacts:{
        title: 'Контакти',
        txt1: 'Мене цікавлять як щоденна робота, так і можливості позаштатної роботи. Якщо у вас є запити чи запитання, не соромтеся звертатися до мене за допомогою форми нижче.',
        txt2: 'Також ви можете знайти мене',
        txt3: ' додавши мій номер',
        email: 'Ваш контактний email',
        msg: 'Повідомлення',
        btn: 'Відправити'
      }
    },
  };

  const [curLanguage, setCurLanguage] = useState(language.english);

  const languageDetect = () => {
    console.log('reload')
    switch (navigator.language.substring(0, 2)){
      case 'en':
        setCurLanguage(language.english);
        break;
      case 'ru':
        setCurLanguage(language.russian);
        break;
      case 'uk':
        setCurLanguage(language.ukranian);
        break;
      default:
        setCurLanguage(language.english);
        break;
    }
  }

  useEffect(languageDetect, []);

  const toggleLanguage = (e) => {
      switch (e.target.getAttribute('value')){
        case 'en':
          setCurLanguage(language.english);
          break;
        case 'ru':
          setCurLanguage(language.russian);
          break;
        case 'ua':
          setCurLanguage(language.ukranian);
          break;
        default:
          setCurLanguage(language.english);
      }
  }

  return (
    <LanguageContext.Provider value={{curLanguage, toggleLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
}
 
export default LanguageProvider;