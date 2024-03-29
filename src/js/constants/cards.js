const cards = [
  ['Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'argue',
      translation: 'спорить',
      image: 'argue.jpg',
      audioSrc: 'audio/argue.mp3',
    },
    {
      word: 'build',
      translation: 'строить',
      image: 'build.jpg',
      audioSrc: 'audio/build.mp3',
    },
    {
      word: 'catch',
      translation: 'ловить',
      image: 'catch.png',
      audioSrc: 'audio/catch.mp3',
    },
    {
      word: 'carry',
      translation: 'нести',
      image: 'carry.jpg',
      audioSrc: 'audio/carry.mp3',
    },
    {
      word: 'drive',
      translation: 'водить машину',
      image: 'drive.jpg',
      audioSrc: 'audio/drive.mp3',
    },
    {
      word: 'drop',
      translation: 'падать',
      image: 'drop.jpg',
      audioSrc: 'audio/drop.mp3',
    },
    {
      word: 'pull',
      translation: 'тянуть',
      image: 'pull.png',
      audioSrc: 'audio/pull.mp3',
    },
    {
      word: 'push',
      translation: 'толкать',
      image: 'push.jpg',
      audioSrc: 'audio/push.mp3',
    },
  ],
  [
    {
      word: 'big',
      translation: 'большой',
      image: 'big.jpg',
      audioSrc: 'audio/big.mp3',
    },
    {
      word: 'small',
      translation: 'маленький',
      image: 'small.jpg',
      audioSrc: 'audio/small.mp3',
    },
    {
      word: 'fast',
      translation: 'быстрый',
      image: 'fast.jpg',
      audioSrc: 'audio/fast.mp3',
    },
    {
      word: 'slow',
      translation: 'медленный',
      image: 'slow.jpg',
      audioSrc: 'audio/slow.mp3',
    },
    {
      word: 'friendly',
      translation: 'дружелюбный',
      image: 'friendly.jpg',
      audioSrc: 'audio/friendly.mp3',
    },
    {
      word: 'unfriendly',
      translation: 'недружелюбный',
      image: 'unfriendly.jpg',
      audioSrc: 'audio/unfriendly.mp3',
    },
    {
      word: 'young',
      translation: 'молодой',
      image: 'young.jpg',
      audioSrc: 'audio/young.mp3',
    },
    {
      word: 'old',
      translation: 'старый',
      image: 'old.jpg',
      audioSrc: 'audio/old.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
];

export { cards as default };
