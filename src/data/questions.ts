import { Question, GameItem, Language } from '../types';

export const QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // ЛЮДИ (PEOPLE)
  // ----------------------------------------------------
  {
    id: 'people-ai-1',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Портрет девушки с идеальной кожей',
    titleEn: 'Portrait of a woman with flawless skin',
    explanation: 'Чрезмерно глянцевая, «пластиковая» текстура кожи без естественных пор, размытая граница волос и несимметричные блики в зрачках.',
    explanationEn: 'Overly glossy, plastic skin texture without natural pores, blurred hair boundaries, and mismatched reflections in pupils.',
    clues: [
      'Пластиковый блеск кожи без микрорельефа',
      'Нелогичные блики разной формы в глазах',
      'Размытый край прядей волос'
    ],
    cluesEn: [
      'Plastic sheen on skin without micro-pores',
      'Illogical reflections of different shapes in eyes',
      'Blurred, fused edges of hair strands'
    ]
  },
  {
    id: 'people-real-1',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Улыбающийся парень на улице',
    titleEn: 'Smiling young man on a city street',
    explanation: 'Естественные мимические морщинки, видимые поры на щеках, настоящая фактура воротника рубашки и оптическое размытие фона объективом.',
    explanationEn: 'Natural facial expression wrinkles, visible pores on cheeks, authentic shirt collar fabric texture, and authentic optical lens depth-of-field.',
    clues: [
      'Чёткая фактура ткани воротника',
      'Естественные тени от подбородка',
      'Реалистичная неидеальность зубов и улыбки'
    ],
    cluesEn: [
      'Clear weave in shirt collar fabric',
      'Natural cast shadows under the chin',
      'Realistic imperfections in smile and teeth'
    ]
  },
  {
    id: 'people-ai-2',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Девушка с украшениями в кафе',
    titleEn: 'Woman with jewelry sitting in a cafe',
    explanation: 'Серьги имеют несовпадающий рисунок и «вплавляются» в мочку уха. Линии пальцев на переднем плане неестественно изогнуты.',
    explanationEn: 'Earrings have mismatched intricate patterns and melt into the earlobe. Foreground finger joints are unnaturally curved.',
    clues: [
      'Асимметрия и странное крепление украшений',
      'Слишком гладкие переходы светотени',
      'Непонятные расплывчатые надписи на фоне'
    ],
    cluesEn: [
      'Asymmetry and weird ear attachment of jewelry',
      'Overly smooth lighting gradient transitions',
      'Indecipherable gibberish lettering in the background'
    ]
  },
  {
    id: 'people-real-2',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Мужской портрет с бородой',
    titleEn: 'Portrait of a man with a beard',
    explanation: 'Каждый волосок бороды прорисован отдельно с естественной неравномерностью. Отражение в глазах точно совпадает с источником света.',
    explanationEn: 'Every individual beard hair is crisply focused with natural irregularity. Reflections in the pupils accurately match the single real light source.',
    clues: [
      'Детализированная структура волосков',
      'Естественная пигментация и родинки',
      'Физически правильная глубина резкости'
    ],
    cluesEn: [
      'Detailed structure of individual hairs',
      'Natural skin pigmentation and moles',
      'Physically accurate lens depth of field'
    ]
  },
  {
    id: 'people-ai-3',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Парень в капюшоне в неоновом свете',
    titleEn: 'Young man in a hoodie in neon light',
    explanation: 'Ткань капюшона переходит в волосы без чёткого шва. Шнурки имеют разную толщину и теряются в складках одежды.',
    explanationEn: 'Hoodie fabric blends seamlessly into the hair without an actual seam. Drawstrings have uneven thickness and vanish into garment folds.',
    clues: [
      'Слияние разных материалов воедино',
      'Искусственный гипернасыщенный неон',
      'Исчезающие строчки швов'
    ],
    cluesEn: [
      'Uncanny blending of distinct materials',
      'Hyper-saturated artificial neon glow',
      'Stitching lines fade into nothingness'
    ]
  },

  // ----------------------------------------------------
  // ЖИВОТНЫЕ (ANIMALS)
  // ----------------------------------------------------
  {
    id: 'animals-ai-1',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Animals',
    categoryRu: 'Животные',
    categoryEn: 'Animals',
    title: 'Пушистый щенок в парке',
    titleEn: 'Fluffy puppy in a park',
    explanation: 'Шерсть образует неестественные повторяющиеся спирали («мазки кисти»), а усы на мордочке растут под хаотичными углами прямо из носа.',
    explanationEn: 'Fur forms repetitive brush-stroke spirals, and whiskers sprout at random chaotic angles directly from the nose bridge.',
    clues: [
      'Паттерн шерсти напоминает цифровой рендер',
      'Усы растут из случайных точек морды',
      'Форма лап имеет странное число когтей'
    ],
    cluesEn: [
      'Fur patterns resemble a digital render brush',
      'Whiskers sprouting from arbitrary points',
      'Paw shape has an abnormal claw arrangement'
    ]
  },
  {
    id: 'animals-real-1',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Animals',
    categoryRu: 'Животные',
    categoryEn: 'Animals',
    title: 'Рыжий кот крупным планом',
    titleEn: 'Close-up of a ginger cat',
    explanation: 'Чёткая структура зрачка, сухой рельефный носик с микротрещинками, настоящие жёсткие усы и пылинки на шерсти.',
    explanationEn: 'Crisp pupil iris fibers, textured dry nose with micro-cracks, authentic stiff whiskers, and fine dust specks on the fur.',
    clues: [
      'Рельеф кожи на кончике носа',
      'Настоящая фактура волосков разной длины',
      'Отражение фотографа в зрачке'
    ],
    cluesEn: [
      'Distinct texture on the tip of the nose',
      'Authentic hairs with varied lengths and thickness',
      'Reflection of the photographer visible in the pupil'
    ]
  },
  {
    id: 'animals-ai-2',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Animals',
    categoryRu: 'Животные',
    categoryEn: 'Animals',
    title: 'Французский бульдог в очках',
    titleEn: 'French bulldog wearing glasses',
    explanation: 'Оправа очков не имеет реального крепления за ушами и вплавлена в череп. Отражение в линзах не соответствует окружающему фону.',
    explanationEn: 'Glasses temples lack physical hinges and melt into the skull. Reflections on the lenses do not match the environment.',
    clues: [
      'Дужки очков исчезают в складках морды',
      'Невозможная геометрия оправы',
      'Слишком гладкая кожа ушей'
    ],
    cluesEn: [
      'Eyeglass temples fade into facial wrinkles',
      'Impossible frame geometry',
      'Unnaturally smooth, wax-like ear skin'
    ]
  },
  {
    id: 'animals-real-2',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Animals',
    categoryRu: 'Животные',
    categoryEn: 'Animals',
    title: 'Лиса на опушке леса',
    titleEn: 'Fox at the edge of the forest',
    explanation: 'Естественное освещение закатным солнцем, настоящие травинки перед объективом, реалистичный мокрый кончик носа.',
    explanationEn: 'Authentic golden-hour sunlight, real blades of grass foregrounding the paws, and realistic moist nose highlights.',
    clues: [
      'Травинки переднего плана перекрывают лапы',
      'Реалистичный угол падения теней',
      'Характерная для диких животных настороженность'
    ],
    cluesEn: [
      'Foreground grass blades occlude the paws naturally',
      'Realistic angle and softness of shadows',
      'Wild animal vigilance and authentic gaze'
    ]
  },

  // ----------------------------------------------------
  // ЕДА (FOOD)
  // ----------------------------------------------------
  {
    id: 'food-ai-1',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Food',
    categoryRu: 'Еда',
    categoryEn: 'Food',
    title: 'Гигантский сочный бургер',
    titleEn: 'Giant juicy hamburger',
    explanation: 'Кунжутные семечки на булочке имеют абсолютно одинаковый размер и ориентацию. Сыр плавится вопреки законам гравитации.',
    explanationEn: 'Sesame seeds on the bun are perfectly cloned with identical orientation. Cheese melts in defiance of gravity.',
    clues: [
      'Идеально клонированные семена кунжута',
      'Пластиковый, стеклянный блеск соуса',
      'Листья салата плавно переходят в помидор'
    ],
    cluesEn: [
      'Identically cloned sesame seeds',
      'Plastic, glassy sheen on sauce',
      'Lettuce leaf seamlessly morphs into tomato flesh'
    ]
  },
  {
    id: 'food-real-1',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Food',
    categoryRu: 'Еда',
    categoryEn: 'Food',
    title: 'Кусочек пиццы с сыром',
    titleEn: 'Slice of melted cheese pizza',
    explanation: 'Неровные запечённые корочки, подгоревшие пузырьки на сыре, естественные капли масла и настоящие крошки на тарелке.',
    explanationEn: 'Unevenly browned crust blisters, genuine toasted cheese bubbles, authentic oil droplets, and crumbs scattered on the plate.',
    clues: [
      'Неидеальная поджарка теста',
      'Настоящая пористая структура сыра',
      'Случайные крошки вокруг'
    ],
    cluesEn: [
      'Imperfect toasted crust with char marks',
      'Authentic porous melted cheese structure',
      'Random crumbs and grease around the crust'
    ]
  },
  {
    id: 'food-ai-2',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Food',
    categoryRu: 'Еда',
    categoryEn: 'Food',
    title: 'Пончики с разноцветной посыпкой',
    titleEn: 'Glazed donuts with colorful sprinkles',
    explanation: 'Разноцветная посыпка местами парит в воздухе, а глазурь не имеет объёма и кажется нарисованным градиентом.',
    explanationEn: 'Sprinkles float in mid-air above the pastry, and the glaze lacks 3D depth, resembling a flat digital color gradient.',
    clues: [
      'Элементы посыпки зависают вне поверхности',
      'Отверстие пончика нарушает перспективу',
      'Одинаковая форма декоративных элементов'
    ],
    cluesEn: [
      'Sprinkle bits levitating off the pastry surface',
      'Hole perspective violates 3D geometry',
      'Uniform shape of candy decorations'
    ]
  },
  {
    id: 'food-real-2',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Food',
    categoryRu: 'Еда',
    categoryEn: 'Food',
    title: 'Свежеиспечённый ржаной хлеб',
    titleEn: 'Freshly baked artisan rye bread',
    explanation: 'Глубокие естественные трещины от пара в печи, настоящая мучная пыль на доске, волокна льняного полотенца.',
    explanationEn: 'Deep organic steam crust cracks from the oven, authentic dusting of flour on the board, and real linen towel fibers.',
    clues: [
      'Органические неравномерные трещины корки',
      'Настоящие крупинки муки',
      'Чёткая текстура деревянной доски'
    ],
    cluesEn: [
      'Organic uneven crust fissures',
      'Authentic flour grains and powder',
      'Distinct wood grain texture on the cutting board'
    ]
  },

  // ----------------------------------------------------
  // ПРИРОДА (NATURE)
  // ----------------------------------------------------
  {
    id: 'nature-ai-1',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Nature',
    categoryRu: 'Природа',
    categoryEn: 'Nature',
    title: 'Фантастический водопад в горах',
    titleEn: 'Fantasy waterfall cascading in mountains',
    explanation: 'Вода падает сразу из ниоткуда на вершине скалы. Отражение гор в озере не совпадает с самими вершинами.',
    explanationEn: 'Water pours out of empty space at the cliff peak. Mountain reflections in the lake fail to mirror the peaks above.',
    clues: [
      'Нарушена физика течения воды',
      'Отражение в воде искажено и не зеркально',
      'Деревья вдалеке превращаются в размытую текстуру'
    ],
    cluesEn: [
      'Violates fluid dynamics of flowing water',
      'Water reflection is warped and mismatched',
      'Distant trees dissolve into repetitive noise'
    ]
  },
  {
    id: 'nature-real-1',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Nature',
    categoryRu: 'Природа',
    categoryEn: 'Nature',
    title: 'Альпийские пики на рассвете',
    titleEn: 'Alpine peaks at sunrise',
    explanation: 'Геологически правильные разломы скальной породы, реалистичный снежный покров в расселинах и естественная атмосферная дымка.',
    explanationEn: 'Geologically accurate rock strata fractures, authentic snow accumulation in crevices, and true atmospheric haze.',
    clues: [
      'Настоящая слоистость горных пород',
      'Реальная градация атмосферной дымки с расстоянием',
      'Физически точные тени от утреннего солнца'
    ],
    cluesEn: [
      'Authentic geological stratification of rock',
      'Gradual realistic atmospheric haze with distance',
      'Physically accurate morning sun shadows'
    ]
  },
  {
    id: 'nature-ai-2',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Nature',
    categoryRu: 'Природа',
    categoryEn: 'Nature',
    title: 'Сказочный лес с солнечными лучами',
    titleEn: 'Fairy-tale forest with sun rays',
    explanation: 'Лучи света идут под разными углами от невидимых источников. Ветви деревьев разветвляются и снова соединяются между собой.',
    explanationEn: 'Sunbeams emanate at clashing angles from invisible sources. Tree branches bifurcate and reconnect into closed loops.',
    clues: [
      'Ветви нарушают ботанику (срастаются)',
      'Световые лучи пересекаются под невозможными углами',
      'Мхи и листья имеют одинаковый повторяющийся шум'
    ],
    cluesEn: [
      'Branches violate botany by fusing back together',
      'Light rays intersect at conflicting angles',
      'Moss and foliage show repeated algorithmic noise'
    ]
  },
  {
    id: 'nature-real-2',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Nature',
    categoryRu: 'Природа',
    categoryEn: 'Nature',
    title: 'Туманное утро над хвойным лесом',
    titleEn: 'Misty morning over coniferous forest',
    explanation: 'Настоящая физика конденсации тумана в низинах, детальные верхушки елей разного возраста и естественная влажность воздуха.',
    explanationEn: 'Genuine physical condensation of mist in valley troughs, detailed fir tree crowns of varying ages, and natural humidity.',
    clues: [
      'Неравномерная плотность настоящего тумана',
      'Разная высота и состояние живых деревьев',
      'Мягкий рассеянный свет пасмурного неба'
    ],
    cluesEn: [
      'Uneven, organic density of real mist',
      'Varying tree heights and natural foliage variations',
      'Soft diffuse lighting of overcast sky'
    ]
  },

  // ----------------------------------------------------
  // КОМНАТЫ (ROOMS / INTERIORS)
  // ----------------------------------------------------
  {
    id: 'rooms-ai-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Rooms',
    categoryRu: 'Комнаты',
    categoryEn: 'Rooms',
    title: 'Минималистичная гостиная с панорамным окном',
    titleEn: 'Minimalist living room with panoramic window',
    explanation: 'Ножки журнального столика не касаются пола и висят в воздухе. Книги на полке не имеют названий и страниц.',
    explanationEn: 'Coffee table legs do not make contact with the rug and hover in mid-air. Books on the shelves lack spine text and pages.',
    clues: [
      'Книги превращены в монолитные бруски',
      'Ножки мебели не отбрасывают теней на ковер',
      'Оконные рамы не стыкуются под прямым углом'
    ],
    cluesEn: [
      'Books look like solid monolithic blocks',
      'Furniture legs cast zero contact shadows on the carpet',
      'Window mullions fail to meet at square 90-degree angles'
    ]
  },
  {
    id: 'rooms-real-1',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Rooms',
    categoryRu: 'Комнаты',
    categoryEn: 'Rooms',
    title: 'Уютный скандинавский интерьер',
    titleEn: 'Cozy Scandinavian interior',
    explanation: 'Настоящая розетка внизу стены, видимые стыки плинтуса, естественные заломы на пледе и читаемые надписи в декоре.',
    explanationEn: 'Authentic electrical wall outlet near the floor, visible baseboard joints, natural blanket creases, and legible text in posters.',
    clues: [
      'Розетка и аккуратный плинтус у пола',
      'Реальные складки и ворс на тканях',
      'Точные геометрические пропорции мебели'
    ],
    cluesEn: [
      'Real outlet and neat skirting board seams',
      'Natural folds, lint, and drape on textiles',
      'Precise geometric proportions of architectural elements'
    ]
  },
  {
    id: 'rooms-ai-2',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Rooms',
    categoryRu: 'Комнаты',
    categoryEn: 'Rooms',
    title: 'Кухня в стиле лофт',
    titleEn: 'Loft-style kitchen',
    explanation: 'Ручки шкафчиков расположены на разной высоте без логики. Смеситель раковины плавно переходит в столешницу без крепления.',
    explanationEn: 'Cabinet handles are haphazardly mounted at varying heights. The faucet spigot merges into the countertop with no mount.',
    clues: [
      'Асимметричное и хаотичное размещение ручек',
      'Кран «вырастает» прямо из камня',
      'Плитка на фартуке имеет размытую затирку'
    ],
    cluesEn: [
      'Asymmetric, illogical handle placement',
      'Faucet stem sprouts directly from stone without a base ring',
      'Backsplash tiles have blurred, nonsensical grout lines'
    ]
  },
  {
    id: 'rooms-real-2',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Rooms',
    categoryRu: 'Комнаты',
    categoryEn: 'Rooms',
    title: 'Спальня в теплых тонах',
    titleEn: 'Bedroom with warm ambient lighting',
    explanation: 'Качественная фотография: видно плетение хлопкового постельного белья, крепление бра на стене с настоящими винтами.',
    explanationEn: 'High quality photograph: visible weave of cotton bed linen, wall sconce mounting bracket with real visible screws.',
    clues: [
      'Мелкие монтажные детали светильников',
      'Естественная гравитация складок одеяла',
      'Правдоподобная фактура штукатурки на стене'
    ],
    cluesEn: [
      'Tiny hardware mounting details on light fixtures',
      'Natural gravity drape of quilt creases',
      'Plausible plaster texture on the drywall'
    ]
  },

  // ----------------------------------------------------
  // МАШИНЫ (CARS)
  // ----------------------------------------------------
  {
    id: 'cars-ai-1',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Cars',
    categoryRu: 'Машины',
    categoryEn: 'Cars',
    title: 'Спортивный концепт-кар на шоссе',
    titleEn: 'Sports concept car on a highway',
    explanation: 'Колёсные диски имеют разное количество спиц спереди и сзади. Боковые зеркала разной формы, а шильдик с логотипом размыт в пятно.',
    explanationEn: 'Front and rear wheel rims have mismatched spoke counts. Side mirrors have contradictory shapes, and the emblem is a smudge.',
    clues: [
      'Асимметрия и невозможный узор дисков',
      'Нечитаемый искажённый логотип бренда',
      'Отражение разметки на кузове не совпадает с дорогой'
    ],
    cluesEn: [
      'Asymmetric and physically impossible wheel rim design',
      'Illegible warped brand logo',
      'Road line reflection on door body does not align with the asphalt'
    ]
  },
  {
    id: 'cars-real-1',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Cars',
    categoryRu: 'Машины',
    categoryEn: 'Cars',
    title: 'Классический автомобиль на улице',
    titleEn: 'Classic car parked on a street',
    explanation: 'Чёткий рельеф протектора шин, настоящая маркировка на стеклах фар, реальные зазоры между кузовными панелями.',
    explanationEn: 'Crisp tire tread depth, authentic DOT stamping on headlight glass, and uniform factory gaps between sheet metal panels.',
    clues: [
      'Точные заводские зазоры между дверью и крылом',
      'Читаемые надписи на резине шин',
      'Реалистичное отражение окружающих домов'
    ],
    cluesEn: [
      'Accurate factory panel gaps between door and fender',
      'Legible branded lettering on tire rubber',
      'Realistic reflection of surrounding houses in paintwork'
    ]
  },
  {
    id: 'cars-ai-2',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Cars',
    categoryRu: 'Машины',
    categoryEn: 'Cars',
    title: 'Футуристический суперкар в ночном городе',
    titleEn: 'Futuristic supercar in a nighttime city',
    explanation: 'Фары имеют сложную геометрию, которая не поместилась бы в корпус. Дворники на лобовом стекле отсутствуют или слились со стеклом.',
    explanationEn: 'Headlights have impossible internal geometry that could not fit the housing. Windshield wipers are missing or melted into glass.',
    clues: [
      'Отсутствие обязательных деталей (дворники, крепления)',
      'Слишком фантастическая внутренняя оптика',
      'Номера машины состоят из псевдобукв'
    ],
    cluesEn: [
      'Missing mandatory parts (wipers, washer nozzles, hinges)',
      'Impossibly complex internal headlight optics',
      'License plate consists of alien pseudo-lettering'
    ]
  },
  {
    id: 'cars-real-2',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Cars',
    categoryRu: 'Машины',
    categoryEn: 'Cars',
    title: 'Спортивное купе на стоянке',
    titleEn: 'Sports coupe in a parking lot',
    explanation: 'Настоящая текстура асфальта под колесами, реальные тормозные суппорты за диском, физически правильные блики на лаке.',
    explanationEn: 'Authentic coarse asphalt texture under the wheels, real vented brake discs and calipers, physically accurate reflections.',
    clues: [
      'Видны тормозные колодки и вентиляция дисков',
      'Стыки бампера с кузовом выполнены по стандарту',
      'Настоящая тень под днищем автомобиля'
    ],
    cluesEn: [
      'Visible brake pads, calipers, and rotor vents',
      'Bumper-to-fender seams built to automotive standard',
      'Genuine contact shadow underneath the vehicle chassis'
    ]
  },

  // ----------------------------------------------------
  // ПРЕДМЕТЫ (OBJECTS)
  // ----------------------------------------------------
  {
    id: 'objects-ai-1',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Objects',
    categoryRu: 'Предметы',
    categoryEn: 'Objects',
    title: 'Умные часы на подставке',
    titleEn: 'Smartwatch on a display stand',
    explanation: 'Цифры на циферблате перепутаны или искажены (например, две тройки). Текстура ремешка растворяется возле застежки.',
    explanationEn: 'Dial numerals are jumbled or duplicated (e.g. two 3s). The strap texture dissolves into amorphous blob near the clasp.',
    clues: [
      'Искажённые или бессмысленные символы на шкале',
      'Нелогичная застёжка ремешка без язычка',
      'Слишком размытые гравировки на металле'
    ],
    cluesEn: [
      'Distorted, nonsensical numerals on watch dial',
      'Illogical strap buckle missing a prong',
      'Overly blurred engraved text on metal bezel'
    ]
  },
  {
    id: 'objects-real-1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Objects',
    categoryRu: 'Предметы',
    categoryEn: 'Objects',
    title: 'Беспроводные наушники',
    titleEn: 'Wireless over-ear headphones',
    explanation: 'Чётко различимые обозначения L/R, аккуратные винтики крепления оголовья, реальная перфорация амбушюр.',
    explanationEn: 'Crisply stamped L/R orientation indicators, neat screw heads holding the headband, and genuine perforation in the ear cushions.',
    clues: [
      'Читаемые фабричные маркировки',
      'Сетка динамика имеет правильный геометрический шаг',
      'Следы реального производства и швов'
    ],
    cluesEn: [
      'Legible factory markings and certifications',
      'Speaker mesh features precise geometric grid spacing',
      'Traces of authentic manufacturing seams and molds'
    ]
  },
  {
    id: 'objects-ai-2',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Objects',
    categoryRu: 'Предметы',
    categoryEn: 'Objects',
    title: 'Винтажная пленочная фотокамера',
    titleEn: 'Vintage film camera',
    explanation: 'Надписи на объективе состоят из бессвязных закорючек вместо миллиметров и диафрагмы. Кнопка спуска расположена в неудобном месте.',
    explanationEn: 'Lens barrel markings are meaningless alien squiggles instead of focal length and aperture numbers. Shutter button is misplaced.',
    clues: [
      'Псевдотекст на ободе линзы',
      'Кнопки и колесики не имеют фиксаторов',
      'Линза объектива отражает пустую студию'
    ],
    cluesEn: [
      'Pseudo-lettering on the front lens ring',
      'Dials and knurled knobs lack mechanical detents',
      'Front lens element reflects a generic blank studio'
    ]
  },
  {
    id: 'objects-real-2',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Objects',
    categoryRu: 'Предметы',
    categoryEn: 'Objects',
    title: 'Игровые наушники на микрофонной стойке',
    titleEn: 'Gaming headset on a microphone stand',
    explanation: 'Реалистичный износ провода, читаемые регуляторы громкости, микропылинки в сетке и настоящая резьба винтов.',
    explanationEn: 'Realistic cable braiding wear, crisp volume control labels, micro-dust particles in the mesh, and real threaded screw grooves.',
    clues: [
      'Физическая текстура оплётки кабеля',
      'Настоящая резьба и металлические шлицы',
      'Оптические блики от софтбокса в студии'
    ],
    cluesEn: [
      'Authentic braided cable texture and strain relief',
      'Real machined metal threads and screw slots',
      'Optical softbox studio light reflections'
    ]
  },
  {
    id: 'objects-real-3',
    image: '/images/captain_toy.jpg',
    answer: 'REAL',
    category: 'Objects',
    categoryRu: 'Предметы',
    categoryEn: 'Objects',
    title: 'Плюшевая игрушка у зимнего окна',
    titleEn: 'Plush superhero toy by a snowy window',
    explanation: 'Настоящее фото: натуральный фактурный ворс плюша, реалистичные швейные строчки и натяжение ткани, металлический зажим подвеса ёлочного шара и физически правильный расфокус городских высоток за окном.',
    explanationEn: 'Authentic photo: distinct plush fleece weave, authentic sewn seams, metal wire fastener on the glitter ornament, and genuine depth-of-field blur on the city skyline through the window.',
    clues: [
      'Фактура плюша с микроворсинками и видимыми швами',
      'Металлический зажим и нить на синем ёлочном шаре',
      'Естественная перспектива подоконника и расфокус зданий'
    ],
    cluesEn: [
      'Micro-fiber plush texture and authentic stitching lines',
      'Real metal wire cap and string on the blue ornament',
      'Natural windowsill perspective with authentic lens depth-of-field'
    ]
  },

  // ----------------------------------------------------
  // ДОПОЛНИТЕЛЬНЫЕ ИЗОБРАЖЕНИЯ (AI / REAL)
  // ----------------------------------------------------
  {
    id: 'people-ai-4',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'People',
    categoryRu: 'Люди',
    categoryEn: 'People',
    title: 'Модель в солнечных очках на пляже',
    titleEn: 'Model wearing sunglasses on a beach',
    explanation: 'В очках отражается комната с люстрой, хотя девушка находится на открытом песчаном пляже. Плечи имеют разную длину.',
    explanationEn: 'Sunglasses reflect an indoor room with a chandelier, even though the subject stands on an open outdoor sandy beach.',
    clues: [
      'Отражение в очках противоречит локации',
      'Ключицы нарисованы несимметрично',
      'Песок на переднем плане превращается в гладкий гель'
    ],
    cluesEn: [
      'Sunglasses reflection contradicts the outdoor location',
      'Collarbones are drawn with asymmetric anatomy',
      'Foreground sand dissolves into smooth waxy gel'
    ]
  },
  {
    id: 'nature-real-3',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Nature',
    categoryRu: 'Природа',
    categoryEn: 'Nature',
    title: 'Долина в национальном парке Йосемити',
    titleEn: 'Yosemite National Park valley',
    explanation: 'Знаменитый природный монолит Эль-Капитан: естественный рисунок сосен разного возраста, настоящие тени от облаков.',
    explanationEn: 'Famous El Capitan granite monolith: natural growth patterns of varying pine ages, authentic cloud shadows on the rock face.',
    clues: [
      'Узнаваемый реальный географический рельеф',
      'Неоднородный цвет хвои и высохшие ветки',
      'Физически естественное рассеяние солнечного света'
    ],
    cluesEn: [
      'Instantly recognizable authentic geological formation',
      'Non-uniform needle color and dry branches on pines',
      'Physically natural Rayleigh atmospheric scattering'
    ]
  },
  {
    id: 'food-ai-3',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    answer: 'AI',
    category: 'Food',
    categoryRu: 'Еда',
    categoryEn: 'Food',
    title: 'Шоколадный торт с ягодами клубники',
    titleEn: 'Chocolate cake garnished with strawberries',
    explanation: 'Семечки на клубнике расположены хаотично и глубоко вдавлены, некоторые ягоды срослись в одну. Свечи горят холодным зеленым пламенем.',
    explanationEn: 'Strawberry achenes are deeply indented and chaotic; some berries are melted together. Candles burn with cold greenish fire.',
    clues: [
      'Сросшиеся ягоды неправильной формы',
      'Глазурь не отбрасывает рефлексов на блюдо',
      'Шоколадная стружка имеет неестественную идеальность'
    ],
    cluesEn: [
      'Melted together berries of impossible anatomy',
      'Cake frosting casts no reflections or shadows on the dish',
      'Chocolate curls have uncanny mathematical perfection'
    ]
  },
  {
    id: 'animals-real-3',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    answer: 'REAL',
    category: 'Animals',
    categoryRu: 'Животные',
    categoryEn: 'Animals',
    title: 'Собака породы корги на газоне',
    titleEn: 'Corgi dog on a lawn',
    explanation: 'Настоящие травинки между когтями, естественно испачканные шерстинки на лапах, правильная анатомия ушей и глаз.',
    explanationEn: 'Genuine grass blades caught between claws, realistic dirt flecks on paw fur, and anatomically correct ear and eye structure.',
    clues: [
      'Реалистичная влажность языка и слюна',
      'Травинки налипают на шерсть',
      'Естественная анатомия суставов лап'
    ],
    cluesEn: [
      'Realistic moisture on tongue and authentic saliva',
      'Grass blades cling to paw fur with natural friction',
      'Natural paw joint anatomy and skeletal structure'
    ]
  },

  // ----------------------------------------------------
  // НОВЫЕ КАТЕГОРИИ: НОВОСТИ (NEWS) И РЕКЛАМА (ADS)
  // Вопросы-заглушки (title: "ЗАГЛУШКА" отфильтровываются и не попадают в игру)
  // ----------------------------------------------------
  {
    id: 'news-placeholder-1',
    image: '/images/placeholder.jpg',
    answer: 'AI',
    category: 'News',
    categoryRu: 'Новости',
    categoryEn: 'News',
    title: 'ЗАГЛУШКА',
    titleEn: 'PLACEHOLDER',
    explanation: 'Вопрос-заглушка для будущих новостных инфоповодов и фактчекинга СМИ.',
    explanationEn: 'Placeholder question for upcoming media and news fact-checking items.',
    clues: [
      'Признак 1',
      'Признак 2',
      'Признак 3'
    ],
    cluesEn: [
      'Clue 1',
      'Clue 2',
      'Clue 3'
    ]
  },
  {
    id: 'ads-placeholder-1',
    image: '/images/placeholder.jpg',
    answer: 'REAL',
    category: 'Ads',
    categoryRu: 'Реклама',
    categoryEn: 'Ads',
    title: 'ЗАГЛУШКА',
    titleEn: 'PLACEHOLDER',
    explanation: 'Вопрос-заглушка для будущих рекламных баннеров и промо-материалов.',
    explanationEn: 'Placeholder question for upcoming commercial ad banners and creative items.',
    clues: [
      'Признак 1',
      'Признак 2',
      'Признак 3'
    ],
    cluesEn: [
      'Clue 1',
      'Clue 2',
      'Clue 3'
    ]
  }
];

// Helper alias for backwards compatibility
export const GAME_ITEMS = QUESTIONS;

// Helper functions for localized access
export function getItemTitle(item: GameItem, lang: Language): string {
  if (lang === 'en' && item.titleEn) {
    return item.titleEn;
  }
  return item.title;
}

export function getItemCategory(item: GameItem, lang: Language): string {
  if (lang === 'en' && item.categoryEn) {
    return item.categoryEn;
  }
  return item.categoryRu;
}

export function getItemExplanation(item: GameItem, lang: Language): string {
  if (lang === 'en' && item.explanationEn) {
    return item.explanationEn;
  }
  return item.explanation;
}

export function getItemClues(item: GameItem, lang: Language): string[] {
  if (lang === 'en' && item.cluesEn && item.cluesEn.length > 0) {
    return item.cluesEn;
  }
  return item.clues;
}

/**
 * Выбирает 10 случайных вопросов для одного раунда:
 * - Исключает все вопросы-заглушки (title === "ЗАГЛУШКА")
 * - Балансирует раунд: примерно поровну AI (5) и REAL (5)
 * - Перемешивает итоговую колоду
 */
export function getRandomGameDeck(count: number = 10): GameItem[] {
  // Фильтруем все заглушки
  const validQuestions = QUESTIONS.filter((item) => item.title !== 'ЗАГЛУШКА');

  const aiItems = validQuestions.filter((item) => item.answer === 'AI').sort(() => Math.random() - 0.5);
  const realItems = validQuestions.filter((item) => item.answer === 'REAL').sort(() => Math.random() - 0.5);

  const half = Math.floor(count / 2);
  const targetAi = half;
  const targetReal = count - half;

  const selectedAi = aiItems.slice(0, targetAi);
  const selectedReal = realItems.slice(0, targetReal);

  const deck = [...selectedAi, ...selectedReal];

  // Если в одной из групп не хватило вопросов, добираем из оставшихся валидных
  if (deck.length < count) {
    const pickedIds = new Set(deck.map((item) => item.id));
    const leftovers = validQuestions.filter((item) => !pickedIds.has(item.id)).sort(() => Math.random() - 0.5);
    deck.push(...leftovers.slice(0, count - deck.length));
  }

  // Финальное перемешивание
  return deck.sort(() => Math.random() - 0.5);
}

// Alias for getRandomGameDeck
export const getRandomQuestions = getRandomGameDeck;
