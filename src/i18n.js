import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  debug: true,
  en: {
    translation: {
      team: 'OUR TEAM',
      alina: 'Alina',
      rita: 'Rita',
      artem: 'Artyom',
      anton: 'Anton',
      navbar: {
        1: "Main",
        2: "Series",
        3: 'Series of the day',
        4: 'Language'
      },
      main: {
        1: 'Series',
        2: 'Welcome to our website, where you can find a list of the most popular TV series that have ever been created. Our team has carefully selected and analyzed each series to prepare this list for you. You\'ll see shows that lasted for years and spanned multiple seasons, as well as shows that ended after just a few seasons but left unforgettable marks on television history. We hope this list helps you choose your next series to watch and enjoy. Thanks for visiting our site, and don\'t forget to share the list with your friends!',
        3: 'About us'
      },
      day: {
        1: 'Series of the day',
        2: ['Simpsons', 'Doctor Who', 'General Hospital', 'Coronation Street', 'Law & Order'],
        3: [
          'The life story of Homer Simpson and his family, which became a reflection of all the important events in the lives of ordinary Americans. The animated format allows the characters not to age, and new themes make the plot relevant for all times.',
          'A Time Lord named the Doctor from the planet Gallifrey travels through space and time, helping those he meets and regularly saving entire worlds. He often takes companions for company, who discover the many wonders of the Universe.',
          'The series, created by husband and wife team Frank and Doris Hursley, follows the staff of a hospital located in the town of Port Charles in upper New York. Most of the time is devoted to the Quartermines family, as well as the Spencers and other dynasties.',
          'The British series Coronation Street has been running for 60 seasons and it seems the authors are not going to end the story. The plot centers on the life of ordinary inhabitants of a street in one of the districts of the town of Weatherfield. Almost all of them are working class people who are trying to solve their problems.',
          'The legendary series combines police procedural and legal drama. The plot centers on detectives investigating serious crimes, as well as prosecutors proving the guilt of the accused in court.',
        ],
        4: 'Information',
      },
      search: {
        1: 'Series list',
        2: 'Search by name',
        3: 'Search',
      },
      fullInfo:{
        1:[
          'The Simpsons\' is an American animated sitcom series created by animator and cartoonist Matt Groening for the Fox Broadcasting Company. The Simpsons is the longest-running animated series in American television history, running continuously since 1989; in October 2023, the broadcast of the 35th season of the series began.',
          'The original series ran from 1963 to 1989. In 1996, the television film Doctor Who was released, which was supposed to be the pilot episode of a sequel series, but poor ratings for the film in America derailed this plan. The series was successfully renewed in 2005, and the numbering of seasons began anew. In addition, there are five spin-off series: Torchwood, The Sarah Jane Adventures, K-9 and Company (pilot episode only), the Australian K-9 and Class.',
          'General Hospital is one of the longest-running American daytime television soap operas, airing on ABC since April 1, 1963. The series is included in the Guinness Book of Records as the longest-running American soap opera - to date, after the already closed television series: "Guiding Light" - at the end of the first decade of the 2000s, but the television series is not the longest-running television series in world in terms of total presence on air - today, having lost first place in this regard to the British soap opera, which has been on television a little (five years) longer: Coronation Street.',
          'Coronation Street is a British soap opera produced by Granada Television, created by Tony Warren and broadcast on ITV on December 9, 1960. The series is the winner of six British Academy BAFTA TV awards out of nineteen nominations. The story centers on a terraced cobbled street in the fictional town of Uwerfeild, just outside Salford, England.',
          'Law & Order is an American police procedural and legal television series created by Dick Wolf. It premiered on September 13, 1990 on NBC. On May 24, 2010, the final episode of the television series was broadcast. The success of the series spawned an entire Law & Order franchise: spin-offs, a TV movie, several video games, as well as international adaptations, including in Russia. On May 14, 2010, NBC canceled the show due to low ratings.',
        ],
        2:[
          'The series was preceded by the release of several animated shorts created by Groening; The first of these episodes, "Good night", aired on The Tracey Ullman Show on April 19, 1987. Demonstration of full episodes of the animated series began on December 17, 1989 on the FOX channel. Produced by Gracie Films for 20th Century Studios. The animated series is currently known to television viewers in more than 100 countries. In 1998, Time magazine named The Simpsons the best television series of the 20th century. On July 27, 2007, the premiere of a full-length cartoon with the characters of the series, “The Simpsons at the Movies,” took place in the United States.',
          'Doctor Who first appeared on the BBC on November 23, 1963. Initially, the series was aimed at family audiences. The BBC Drama Department\'s series division produced 26 seasons, which aired on BBC One. However, a decrease in the number of viewers, a decrease in interest in the series, as well as inconvenient broadcast times led to a halt in filming the series in 1989. In fact, although informally, the series was canceled by the decision not to film the already planned 27th season for broadcast in 1990, however, the BBC regularly confirmed that the series would be returning.',
          'The show was created by screenwriters Frank and Doris Hursley and was set in a hospital in an unnamed fictional town. It wasn\'t until the 1970s that this fictional city was given the name Port Charles, New York State.',
          'The first episode of the television series was aired on December 9, 1960 at 19:00 and initially the series did not have successful reviews from critics; Daily Mirror columnist Ken Irwin argued that the series would last no more than three weeks. Granada Television had only ordered 13 episodes for production, and some within the company doubted the series would last longer than its planned production run. Despite the criticism, viewers were immediately drawn into the series, captivated by the regular Coronation Street characters.',
          'The idea for the show began in 1986, when serial killer Robert "Preppie Killer" Chambers strangled a young woman in Central Park. The story inspired the creator of the series to film the episode "Kiss the Girls and Make them Die" (which for some reason was the fourth episode) for the original series. In 1988, Dick Wolf was developing the concept of a new series about the work of the American law enforcement system. At first the name of the series was “Night & Day”, but then they settled on the name “Law and Order”.',
        ],
        3:[
          'The Simpson family first appeared in cartoon form on The Tracey Ullman Show (a weekly comedy and musical show that ran on FOX from April 1987 to May 1990) with the first episode "Good night" April 19, 1987). At first, the characters were drawn quite poorly, since Groening did not have enough time to draw them well, and the animators only copied his sketches. The mini-episodes (about two minutes long) aired on FOX for three seasons, with some of them, including "Good night", later included in the anniversary episode. In 1989, The Simpsons moved into its “own” series, broadcast by the FOX Network as a weekly show. The first full-length episode shown was "The Simpsons Roasting on an Open Fire".',
          'Despite the halt in filming, the BBC was hoping to find an independent company willing to re-launch the show. Philip Segal, an expatriate Briton who worked for the television division of Columbia Pictures in the United States, contacted the BBC about the possibility of such an agreement as early as July 1989, when the 26th season was still being filmed. These negotiations eventually led to the creation of the Doctor Who television film, which was broadcast by Fox in 1996 and was co-produced by Fox, Universal Pictures, the BBC and BBC Worldwide. Although the film was very successful in the UK (9.1 million people watched the film), it was not as successful in the US and did not lead to a TV series.',
          'General Hospital reached its ratings peak in the early 1980s thanks to the popularity of characters Luke and Laura (Anthony Geary and Janie Francis), whose wedding in 1981 was watched by more than 30 million viewers, an absolute record in soap opera history to date.' ,
          'In March 1961, Coronation Street reached number one in the television ratings and remained there until the end of the year. Earlier in 1961, Television Audience Measurement (TAM) showed that 75% of available viewers (15 million) tuned in to Corrie, and by 1964 the program had over 20 million regular viewers, with ratings peaking on 2 December 1964 at 21.36 million viewers. Despite its growing peak popularity with television viewers, some critics criticized Coronation Street for its outdated portrayal of the urban working class and its representation of a community that represented more nostalgic fantasy than reality at the time.',
          'The first 13 episodes were ordered by Fox Broadcasting Company, all episodes were built on the basic concept of the series. But network head Barry Dealer, who liked the concept, believed the series was not a good fit for the network and reversed the decision. Then Dick Wolf went to CBS with the episode "Everbody\'s Favorite Bagman", where the idea was built around corrupt city officials. But the series was not launched because there were no stars in it. In the summer of 1989, NBC heads Brandon Tartikoff and Warren Littlefield believed in the series and decided to take a chance by putting the pilot episodes on the broadcast network. In the early 1990s, the channel aired its first season.',
        ],
        4:[
          'Screenwriters often demonstrate their love of using celebrities in prominent cameo roles, as well as quoting modern and classic films. In 1995, Western Pacific Airlines painted a Boeing 737 with portraits of the main characters as part of a promotion. Creator Matt Groening and some of the writers refused to take the flight, jokingly arguing that if the plane crashed, they would die along with their characters. “The Simpsons” turned out to be more popular than the airline, since the latter went bankrupt in 1998. The Brazilian airline GOL placed figures of a running Homer along the fuselage of a Boeing 737-800 aircraft.',
          'Licensed media products such as novels and radio dramas created new stories in the Doctor Who universe, but the situation with a television series remained uncertain until 2003. In September this year, BBC Television announced it would begin filming the new seasons in-house, following years of attempts by BBC Worldwide to find support for a feature-length film production. The new incarnation of the series is executive produced by writer Russell T Davies and head of drama at BBC Cymru Wales, Julie Gardner. The new version of the series has been sold to many countries around the world.',
          'In 2003, TV Guide named the show the "Greatest Soap Opera of All Time." In 2007, the same magazine: Time included the series in the list of “The 100 Best TV Shows in History."',
          'In 1964, Coronation Street was given a new producer, Tim Aspinall. Aspinall decided on a "new broom policy" for certain characters, and the Blood Purge began in 1964, during which a total of nine actors were fired. The first actress to be written out was Lynn Carol, who had played Martha Longhurst since the second episode and since pre-promotion for the television series. Her firing was so controversial that fellow actress Violet Carson (Ana Sharples) threatened to quit, but was eventually persuaded by the writers to abandon the already planned venture. The media covered the storyline extensively, and when Lynn Carol went on a private trip to the Daily Mail\'s Ideal Home exhibition in London, she was mobbed by fans and asked to leave for public safety reasons. Many, including Coronation Street writer like Hay. In and. Kershaw, viewed Martha\'s murder as a desperate move to boost viewer ratings.',
          'On May 14, 2010, NBC announced the cancellation of the television series Law & Order and aired its final episode on May 24, 2010. Dick Wolf announced that he would try to find another television channel to continue working on the television series. If the effort failed, Wolfe promised as a last resort to film a final two-hour film and air it on NBC. The stories of some of the series\' characters have been continued in its spin-offs.',
        ],
        5:[
          'On January 14, 2010, Fox aired a 40-minute film called The Simpsons 20th Anniversary Special – In 3-D! On Ice!”, dedicated to the history of the famous series. On January 26, 2023, the animated series was renewed until season 36.',
          'Doctor Who finally returned to screens with the episode "Rose" on BBC One on 26 March 2005. Since then, it has aired ten seasons from 2005–2008 and 2010–2017, as well as a Christmas special every year since 2005. No full season was produced in 2009, although there were four special episodes starring David Tennant. In 2010, Steven Moffat replaced Russell T Davies as the series\' lead writer and executive producer. In January 2016, he announced that he would be stepping down as showrunner after season 10 and would be replaced by Chris Chibnall in 2018.',
          'Since September 17, 2010, the series has been the longest-running American soap opera. On April 14, 2011, ABC announced the cancellation of All My Children and One Life to Live, leaving General Hospital as the network\'s sole soap opera.',
          'The series won four British Soap Awards for Best Soap, four National Awards for Most Popular Drama and four TV Quick and Choice Awards for Best Soap. In September 2007, Coronation Street won the title of "Best Soap" at the Soap Opera Awards, an award it failed to win at the same ceremony a year later. In 2013, she won Best Drama Television Series at the National Television Awards.',
          'On September 14, 2004, in New York City, the road to Pier 62 at Chelsea Piers (where one of the main episodes was often filmed) was renamed "Law & Order Road" in honor of the episode and TV series. Episodes of Law & Order have won various awards, including an Emmy.',
        ],
        6:'Gallery',
        7:'Video',
      }
    },
  },
  ru: {
    translation: {
      team: 'НАША КОМАНДА',
      alina: 'Алина',
      rita: 'Рита',
      artem: 'Артём',
      anton: 'Антон',
      navbar: {
        1: "Главная",
        2: "Сериалы",
        3: 'Сериал дня',
        4: 'Язык'
      },
      main: {
        1: 'Сериалы',
        2: 'Добро пожаловать на наш сайт, где вы можете найти список самых длинных сериалов, которые когда-либо были созданы. Наша команда тщательно отобрала и проанализировала каждый сериал, чтобы составить этот список для вас. Вы узнаете о сериалах, которые продолжались годами и имели множество сезонов, а также о тех, которые завершились после нескольких сезонов, но оставили яркий след в истории телевидения. Мы надеемся, что этот список поможет вам выбрать следующий сериал для просмотра и наслаждения. Спасибо за посещение нашего сайта, и не забудьте поделиться списком с друзьями!',
        3: 'О нас'
      },
      day: {
        1: 'Сериал дня',
        2: ['Симпсоны', 'Доктор кто', 'Главная больница', 'Улица Коронации', 'Закон и порядок'],
        3: [
          'История жизни Гомера Симпсона и его семьи, ставшая отражением всех важных событий в жизни простых американцев. Анимационный формат позволяет персонажам не стареть, а новые темы делают сюжет актуальным на все времена.',
          'Повелитель времени по имени Доктор с планеты Галлифрей путешествует в пространстве и времени, помогая встречным и регулярно спасая целые миры. В компанию он часто берет спутников, которые открывают для себя множество чудес Вселенной.',
          'Сериал, придуманный супругами Франком и Дорис Херсли, рассказывает о сотрудниках больницы, расположенной в городке Порт Чарльз в верхнем Нью-Йорке. Большая часть времени уделена семье Куартермайнов, а также Спенсерам и другим династиям.',
          'Британский сериал "Улица Коронации" выходит вот уже 60 сезонов и, похоже, авторы не собираются завершать историю. В центре сюжета жизнь простых обитателей улицы одного из районов городка Уэзерфилд. Почти все они представители рабочего класса, которые пытаются решить свои проблемы.',
          'Легендарный сериал совмещает в себе полицейский процедурал и юридическую драму. В центре сюжета детективы, расследующие серьезные преступления, а также прокуроры, доказывающие виновность обвиняемых в суде.',
        ],
        4: 'Информация',
      },
      search: {
        1: 'Список сериалов',
        2: 'Поиск по названию',
        3: 'Поиск',
      },
      fullInfo:{
        1:[
          '«Си́мпсоны» (англ. The Simpsons) — американский анимационный сериал в жанре ситуационной комедии, созданный мультипликатором и карикатуристом Мэттом Грейнингом для телекомпании Fox Broadcasting Company. «Симпсоны» — самый длинный мультсериал в истории американского телевидения, непрерывно выходящий с 1989 года; в октябре 2023 года началась трансляция 35 сезона сериала.',
          'Оригинальный сериал шёл с 1963 по 1989 год. В 1996 году вышел телевизионный фильм «Доктор Кто», который должен был стать пилотной серией сериала-продолжения, но плохие рейтинги ленты в Америке сорвали этот план. Сериал был успешно возобновлён в 2005 году, при этом нумерация сезонов началась заново. Кроме того, существуют пять сериалов-ответвлений: «Торчвуд», «Приключения Сары Джейн», «K-9 и компания» (только пилотная серия), австралийский «K-9» и «Класс».',
          '«Больница общего профиля» (англ. General Hospital) — одна из самых длительных американских дневных телевизионных мыльных опер, которая выходит на канале ABC с 1 апреля 1963 года. Сериал включен в «Книгу рекордов Гиннесса» как самая продолжительная американская мыльная опера — на сегодняшний день после ушедшего уже в историю и закрытого телесериала: «Путеводный свет» — еще в конце первой декады 2000-х, однако телесериал — не является самым продолжительным телесериалом в мире по количеству общего нахождения в эфире — на сегодняшний день, уступив при этом первое место в этом плане — британской мыльной опере, находящиеся в телеэфире немного(на пять лет) больше: «Улице Коронации».',
          '«Улица Коронации» (англ. Coronation Street) — британская мыльная опера производства компании Granada Television («Гранада Телевижн»), созданная Тони Уорреном и стартовавшая и транслируемая с 9 декабря 1960 года на ITV. Сериал является обладателем шести наград Британской академии BAFTA TV из девятнадцати номинаций. В центре сюжета находится мощеная улица с террасами в вымышленном городке Уверфеилд, расположенном в пригороде Солфорда, в Англии.',
          '«Закон и порядок» (англ. Law & Order) — американский полицейский, процедуральный и юридический телесериал, созданный Диком Вульфом. Премьера состоялась 13 сентября 1990 года на канале NBC. 24 мая 2010 года был показан заключительный эпизод телесериала. Успех сериала породил целую франшизу «Закон и порядок»: спин-оффы, телефильм, несколько видеоигр, а также международные адаптации, в том числе и в России. 14 мая 2010 года NBC закрыла шоу в связи с низкими рейтингами',
        ],
        2:[
          'Сериалу предшествовал выпуск нескольких короткометражных мультфильмов, созданных Грейнингом; первая из этих серий «Good night» была показана в «Шоу Трейси Ульман» 19 апреля 1987 года. Демонстрация полноценных серий мультсериала началась 17 декабря 1989 года на канале FOX. Выпускается «Gracie Films» для кинокомпании «20th Century Studios». Мультсериал в настоящее время известен телезрителям более чем в 100 странах. Журнал Time в 1998 году назвал «Симпсонов» лучшим телевизионным сериалом XX века. 27 июля 2007 года в США прошла премьера полнометражного мультфильма с героями сериала, «Симпсоны в кино».',
          '«Доктор Кто» впервые появился на телеканале «Би-би-си» 23 ноября 1963 года. Изначально сериал был направлен на семейную аудиторию. Подразделение сериалов отдела драмы «Би-би-си» создало 26 сезонов, которые транслировались по каналу BBC One. Однако уменьшение числа зрителей, снижение интереса к сериалу, а также неудобное время трансляции привело к остановке съёмок сериала в 1989 году. Фактически, пусть и неформально, сериал был закрыт решением не снимать уже запланированный 27-й сезон для трансляции в 1990 году, тем не менее Би-би-си регулярно подтверждала, что сериал будет возвращён на экраны.',
          'Шоу было создано супружеской парой сценаристов Фрэнком и Дорис Хёрсли, их замысел был в том, что действие будет происходить в обыкновенной больнице неназванного вымышленного городка. Только в 1970-х годах этому вымышленному городу дали название — Порт Чарльз — штата Нью-Йорк.',
          'Первая серия телесериала - вышла в эфир 9 декабря 1960 года в 19:00 и изначально сериал не имел успешных отзывов от критиков; обозреватель Daily Mirror Кен Ирвин утверждал, что сериал продлится не больше трех недель. Granada Television заказала для производства лишь 13 серий, и некоторые в компании сомневались, что сериал продлится дольше запланированного срока производства. Несмотря на критику, зрители были немедленно втянуты в сериал, покоренные обычными персонажами Улицы Коронации.',
          'Идея создания шоу возникла в 1986 году, когда серийный убийца Роберт Чамберс по прозвищу «Preppie Killer» задушил молодую женщину в «Центральном парке». История вдохновила создателя сериала на съёмки эпизода «Kiss the Girls and Make them Die» (который почему-то вышел четвёртым) для оригинального сериала. В 1988 году Дик Вульф разрабатывал концепцию нового сериала о работе американской правоохранительной системы. Сначала название сериала было «Ночь и День» («Night & Day»), но потом остановились на названии «Закон и порядок».',
        ],
        3:[
          'Семья Симпсонов в мультипликационной форме впервые появилась в «Шоу Трейси Ульман» (англ. The Tracey Ullman Show) (еженедельное шоу с комедийными и музыкальными номерами, которое показывалось на канале FOX с апреля 1987 года по май 1990 года) с первой серией «Good night» 19 апреля 1987 года). Вначале персонажи были нарисованы достаточно плохо, поскольку Грейнинг не имел достаточно времени, чтобы хорошо их нарисовать, а аниматоры лишь скопировали его наброски. Мини-серии (продолжительностью около двух минут) выходили в эфир на телеканале FOX в течение трёх сезонов, позже некоторые из них, включая «Good night», были включены в юбилейную серию. В 1989 году Симпсоны перекочевали в «собственный» сериал, транслируемый телекомпанией FOX Network как еженедельное шоу. Первой показанной серией полной продолжительности была «Simpsons Roasting on an Open Fire».',
          'Несмотря на прекращение съёмок, Би-би-си надеялось найти независимую компанию, которая изъявила бы желание вновь запустить шоу. Филип Сигал (англ. Philip Segal), экспатриированный британец, работавший в телевизионном подразделении Columbia Pictures в США, связался с Би-би-си о возможности такого договора уже в июле 1989 года, когда 26-й сезон ещё только снимался. Эти переговоры в итоге привели к созданию телевизионного фильма «Доктор Кто», который был показан компанией Fox в 1996 году и был создан совместно компаниями Fox, Universal Pictures, BBC и BBC Worldwide. Хотя фильм был очень успешен в Великобритании (фильм посмотрело 9,1 миллионов человек), он не был столь успешен в США и не привёл к созданию сериала.',
          'Центральная больница достигла своей рейтинговой вершины в начале 1980-х благодаря популярности героев Люка и Лоры (Энтони Гири и Джени Фрэнсис), чью свадьбу в 1981 году смотрело более 30 миллионов зрителей, что является абсолютным рекордом в истории мыльных опер и на сегодняшний день',
          'В марте 1961 года улица Коронации достигла первого места в телевизионных рейтингах и оставалась там до конца года. Ранее, в 1961 году, измерение телевизионной аудитории (TAM) показало, что 75% доступных зрителей (15 миллионов) настроились на Corrie, и к 1964 году у программы было более 20 миллионов постоянных зрителей, а рейтинг достиг максимума 2 декабря 1964 года и составил 21,36 миллиона зрителей. Несмотря на растущую пиковую популярность у телезрителей, некоторые критики критиковали "Улицу Коронации" за устаревшее изображение городского рабочего класса и представление сообщества, которое представляло скорее ностальгическую фантазию, чем реальность на тот момент.',
          'Первые 13 серий были заказаны компании Fox Broadcasting Company, все серии были построены на основной концепции сериала. Но глава сети Барри Дилер, которому понравилась концепция, полагал, что сериал не подходит телесети и отменил решение. Тогда Дик Вульф пошёл на CBS с эпизодом «Everbody’s Favorite Bagman», где идея построена вокруг коррумпированных властей города. Но сериал не был запущен, так как в нём не было звёзд. Летом 1989 года главы NBC Брэндон Тартикофф и Уоррен Литтлефилд поверили в сериал и решили рискнуть, поставив пилотные серии в сетку вещания. В начале 1990-х на канале шёл первый сезон.',
        ],
        4:[
          'Сценаристы часто демонстрируют свою любовь к использованию знаменитостей в ярких эпизодических ролях, а также цитированию современных и классических кинофильмов. В 1995 году компания Western Pacific Airlines в рамках рекламной акции раскрасила Боинг-737 портретами главных героев. Создатель Мэтт Грейнинг и некоторые сценаристы отказались совершить полёт, в шутку мотивируя это тем, что если самолёт упадёт, они погибнут вместе со своими героями. «Симпсоны» оказались популярнее авиакомпании, так как последняя разорилась в 1998 году. Бразильская авиакомпания GOL поместила фигурки бегущего Гомера вдоль фюзеляжа самолёта Боинг-737-800.',
          'Лицензированные медийные продукты, такие как романы и радиопостановки, создавали новые истории во вселенной Доктора Кто, однако ситуация с телевизионным сериалом оставалась неопределённой вплоть до 2003 года. В сентябре этого года BBC Television объявила о начале съёмок новых сезонов своими силами после многолетних попыток BBC Worldwide найти поддержку для производства полнометражного фильма. Исполнительным продюсером новой инкарнации сериала стали писатель Расселл Ти Дейвис и глава отдела драмы в BBC Cymru Wales (отделение Би-би-си в Уэльсе) Джули Гарднер. Новая версия сериала была продана во многие страны мира.',
          'В 2003 году «TV Guide» присвоил шоу титул «Величайшей мыльной оперы всех времен». В 2007 году — тот же журнал: «Time» включил сериал в список «Ста лучших телешоу в истории».',
          'В 1964 году к "Улице Коронации" был приставлен новый продюсер, Тим Аспиналл. Аспиналл принял решение "о новой политике метлы" в отношении некоторых персонажей, и в 1964-м году - началась "Кровавая чистка" - за время которой, в общей сложности, были уволены девять актеров. Первой актрисой, которую выписали, была Линн Кэрол, которая играла Марту Лонгхерст со второго эпизода и со времени предварительного промоушена телесериала. Ее увольнение было настолько противоречивым, что ее коллега-актриса Вайолет Карсон (Эна Шарплз) пригрозила уволиться, но в конце концов сценаристы ее убедили отказаться от этой уже запланированной затеи. Средства массовой информации широко освещали сюжетную линию, и когда Линн Кэрол отправилась в частную поездку на выставку Daily Mail "Идеальный дом" в Лондоне, ее окружили фанаты и попросили удалиться по соображениям общественной безопасности. Многие, включая сценариста "Улицы Коронации", вроде Хэй. Ви. Кершоу, рассматривали произошедшее убийство Марты - также как отчаянный шаг, направленный на повышение зрительских рейтингов.',
          '14 мая 2010 года NBC объявила о закрытии телесериала «Закон и порядок» и 24 мая 2010 года была показана последняя серия. Дик Вульф объявил, что постарается найти другой телевизионный канал, чтобы продолжить работу над телесериалом. Если усилия не увенчаются успехом, Вульф пообещал в качестве последнего средства снять завершающий двухчасовой фильм и показать его на канале NBC. История некоторых из персонажей сериала была продолжена в его спин-оффах.',
        ],
        5:[
          '14 января 2010 года на канале «Fox» был показан 40-минутный фильм «The Simpsons 20th Anniversary Special – In 3-D! On Ice!», посвящённый истории знаменитого сериала. 26 января 2023 года мультсериал был продлён до 36 сезона.',
          'Доктор Кто» наконец вернулся на экраны с эпизодом «Роза» на канале BBC One 26 марта 2005 года. С того времени было показано десять сезонов в 2005—2008 и 2010—2017 годах, а также специальные рождественские выпуски каждый год, начиная с 2005 года. В 2009 году полный сезон не был снят, хотя вышло четыре специальные серии с Дэвидом Теннантом в главной роли. В 2010 году Стивен Моффат заменил Расселла Ти Дейвиса в качестве ведущего сценариста и исполнительного продюсера сериала. В январе 2016 года он объявил, что уходит с поста шоураннера после выхода 10 сезона и в 2018 году его место займёт Крис Чибнелл.',
          'С 17 сентября 2010 года сериал является старейшей американской мыльной оперой. 14 апреля 2011 года ABC объявил об закрытии сериалов «Все мои дети» и «Одна жизнь, чтобы жить», оставив лишь Центральную больницу в качестве единственной мыльной оперы канала.',
          'Сериал стал победителем четырёх британских наград для мыльных сериалов «за лучший мыльный телесериал», четырёх национальных премий «за наиболее популярный драматический сериал» и четырёх наград TV Quick and Choice Awards за «лучшую мыльную оперу». В сентябре 2007 года «Улица коронации» удостоилась титула «лучший мыльный сериал» на церемонии награждения мыльных опер, на той же церемонии год спустя он не смог завоевать награду. В 2013 году стала Лучшим драматическим телесериалом национальной телевизионной премии National Television Awards.',
          '14 сентября 2004 года, в Нью-Йорке, дорога к Пирсу 62 на Пирс Челси (где часто проходили съёмки одного из главных эпизодов), была переименована «Дорога Закон и Порядок» в честь серии и сериала. Эпизоды «Закона и порядка» награждались различными премиями, в том числе «Эмми».',
        ],
        6:'Галерея',
        7:'Видео',
      }
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;