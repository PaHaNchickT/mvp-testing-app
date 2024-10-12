export const TEXT_CONTENT = {
  header: {
    headerTitle: 'Testik',
  },
  welcome: {
    title: '«Мстители» атакуют: тест на знание Кинематографической вселенной Marvel',
    text: 'В детстве мечтали оказаться в Мстителях? Ответьте на вопросы и узнайте, подходите ли Вы для величайшей команды Земли!',
    button: 'Начать',
  },
  questions: {
    title: 'Тестирование',
    answerBtn: 'Ответить',
    endBtn: 'Закончить',
    textLowLabel: 'Введите свой ответ:',
    textHighLabel: 'Напишите развернутый ответ:',
    errorText: 'Пожалуйста, ответьте на вопрос',
    isCorrect: 'Необходима проверка вручную',
  },
  ending: {
    success: {
      title: 'Тестирование завершено!',
      text: 'Ваши ответы успешно записаны. В течение нескольких дней результат появится в вашем личном кабинете.',
      button: 'Главная страница',
    },
    failure: {
      title: 'К сожалению, время истекло!',
      text: 'Не расстраивайтесь! Вы можете попробовать пройти тест заново.',
      button: 'Попробовать еще',
    },
  } as { [key: string]: { [key: string]: string } },
};

export const ASSETS_PATH = {
  mainImage: './images/avengers-poster.jpg',
};
