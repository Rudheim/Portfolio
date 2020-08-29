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
        txt4: 'Аdditional technologies/frameworks/libraries I work with: ',
        txt5: 'Materialize CSS, Git, React-Router, React-Redux, Framer-Motion, Photoshop',
        txt2: 'Check out',
        txt6: ' my resume',
        txt7: ' below for more details or just ',
        txt3: 'contact me',
        toast: 'Telephone number has been copied',
        cv: 'https://netheim.net/cv/Resume%20ENG.png'
      },
      contacts:{
        title: 'Contact me',
        txt1: 'I am interested in a daily job as well as in freelance opportunities. If you have requests or questions, don\'t hesitate to contact me using form below. ',
        txt2: 'Also you can find me in',
        txt3: ' by adding my number ',
        email: 'Your contact email or phone',
        msg: 'Message',
        btn: 'CONTACT ME',
        toast: 'You letter has been sent, I will reply to you shortly',
        toast2: 'Write something first, please'
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
        txt: 'Собраный и организованый, люблю решать задачи разной сложности, уделяю внимание деталям, быстро обучаюсь, умею работать в команде и так же комфортно чувствую себя как независимый сотрудник. Интересует весь спектр фронтенда и работа над проектами разного масштаба.'
      },
      skills:{
        title: 'Навыки',
        txt1: 'Основная область моей компетенции - фронтенд-разработка. Уверенные знания HTML, CSS и JavaScript. Я предпочитаю создавать небольшие и средние сайты и веб-приложения с адаптивным и анимированным интерфейсом, используя ReactJS в качестве front end части и Firebase в качестве back end.',
        txt4: 'Дополнительные технологии/фреймворки/библиотеки с которыми я работаю: ',
        txt5: 'Materialize CSS, Git, React-Router, React-Redux, Framer-Motion, Photoshop',
        txt2: 'Вы так же можете ознакомиться с ',
        txt6: 'моим резюме',
        txt7: ' для получения более подробной информации обо мне, или просто ',
        txt3: 'свяжтесь со мной',
        toast: 'Телефонный номер скопирован',
        cv: 'https://netheim.net/cv/Resume%20RU.png'
      },
      contacts:{
        title: 'Контакты',
        txt1: 'Меня интересует как работа в офисе так и удаленная работа, или фриланс. Если у вас возникли вопросы, или есть предложения, не стесняйтесь обращаться используя форму ниже.',
        txt2: 'Так же меня можно найти в ',
        txt3: ' добавив мой номер ',
        email: 'Ваш контактный email или телефон',
        msg: 'Сообщение',
        btn: 'Отправить',
        toast: 'Ваше письмо отправлено, я отвечу Вам как можно скорее',
        toast2: 'Пожалуйста, сперва напишите что-то'
      }
    },
    ukranian:{
      lang: 'ua',
      home:{
        first: 'Хай!',
        second: 'Мене звати Ігор,',
        third: 'я web developer.',
        prof: 'Front End Developer',
        btn: 'Зв\'язатись'
      },
      about:{
        title: 'Про себе',
        txt: 'Зібраний та організований, подобається вирішувати завдання різної складності, приділяю увагу деталям, швидко навчаюся, вмію працювати в команді, також комфортно себе почуваю як незалежний працівник. Зацікавлений у всьому спектрі фронтенда та у роботі над проектами різного масштабу'
      },
      skills:{
        title: 'Навички',
        txt1: 'Основним напрямком моєї компетенції є фронтенд-розробка. Впевненні знання HTML, CSS та JavaScript. Я віддаю перевагу створенню невеликих та середніх сайтів і веб-додатків з адаптивним та анімованими інтерфейсом, використовуючи ReactJS як front end частину та Firebase як back end.',
        txt4: 'Додаткові технології/фрєймворки/бібліотеки з якими я працюю: ',
        txt5: 'Materialize CSS, Git, React-Router, React-Redux, Framer-Motion, Photoshop',
        txt2: 'Ознайомтеся з ',
        txt6: 'моїм резюме ',
        txt7: 'для отримання більш детальної інформації про мене або просто ',
        cv: 'https://netheim.net/cv/Resume%20UA.png',
        txt3: 'зв\'яжіться зі мною',
        toast: 'Телефонний номер скопійовано'
      },
      contacts:{
        title: 'Контакти',
        txt1: 'Мене цікавить як робота в офісі, так і віддалена робота, або фриланс. Якщо у вас є запитання, або пропозиції, не соромтеся звертатися до мене за допомогою форми нижче.',
        txt2: 'Також ви можете знайти мене в ',
        txt3: ' додавши мій номер ',
        email: 'Ваш контактний email чи телефон',
        msg: 'Повідомлення',
        btn: 'Відправити',
        toast: 'Вашого листа надіслано, я відповім Вам як найшвидше',
        toast2: 'Будь ласка, спочатку напишить щось'
      }
    },
  };

  const [curLanguage, setCurLanguage] = useState(language.english);

  const languageDetect = () => {
    switch (navigator.language.substring(0, 2)){
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