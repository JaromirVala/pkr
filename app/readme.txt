
=======================================================================
  Originální struktura z XML-feed to Json:
=======================================================================
[
  {
    title: [ 'dopravní nehoda - se zraněním - Jizerní Vtelno' ],
    link: [ 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67197/' ],
    description: [ 'Jizerní Vtelno<br>okres Mladá Boleslav' ],
    pubDate: [ 'Tue, 24 Mar 2020 05:35:01 +0000' ],
    guid: [ 'RSS_FEED_67197' ],
    ttl: [ '3600' ]
  },
  {
    title: [ 'požár - odpad, ostatní - Kralupy nad Vltavou' ],
    link: [ 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67196/' ],
    description: [
      'ukončení: 24. března 2020, 04:52<br>Kralupy nad Vltavou<br>okres Mělník'
    ],
    pubDate: [ 'Tue, 24 Mar 2020 04:40:02 +0000' ],
    guid: [ 'RSS_FEED_67196' ],
    ttl: [ '3600' ]
  },
  {
    title: [ 'požár - odpad, ostatní - Mochov' ],
    link: [ 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67195/' ],
    description: [
      'ukončení: 24. března 2020, 04:07<br>Mochov<br>okres Praha Východ'
    ],
    pubDate: [ 'Tue, 24 Mar 2020 03:55:02 +0000' ],
    guid: [ 'RSS_FEED_67195' ],
    ttl: [ '3600' ]
  }
]



=======================================================================
 Upravená struktura objektu
=======================================================================
  # stopEventDate == 'ukončení' z description, jestli tam existuje.
  # Pozor! Jestli přibyde údaj 'ukončení', aktualisuje se i pubDate
  # To znamená že jediný údaj o zahájení, se po ukončení také změní.

[
  {
    title: 'dopravní nehoda - se zraněním - Močovice',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67094/',
    description: 'Močovice okres Kutná Hora',
    stopEventDate: '20.03.2020 15:34',
    pubDate: '20.03.2020 16:20',
    guid: 'RSS_FEED_67094'
  },
  {
    title: 'jiné - zatím neurčeno - test bez odchozích sms - tablet - Žiželice',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67093/',
    description: 'Močovice okres Kutná Hora',
    stopEventDate: '20.03.2020 15:34',
    pubDate: '20.03.2020 16:20',
    guid: 'RSS_FEED_67093'
  },
  {
    title: 'záchrana osob a zvířat - uzavřené prostory, výtah - Kladno',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67069/',
    description: 'Kladno',
    stopEventDate: '20.03.2020 06:01',
    pubDate: '20.03.2020 06:50',
    guid: 'RSS_FEED_67069'
  },
  {
    title: 'technická pomoc - monitoring - Libenice',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67050/',
    description: 'Libenice okres Kolín',
    stopEventDate: '19.03.2020 16:42',
    pubDate: '19.03.2020 17:30',
    guid: 'RSS_FEED_67050'
  },
  {
    title: 'dopravní nehoda - vyproštění osob - Kolín',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67049/',
    description: 'Libenice okres Kolín',
    stopEventDate: '19.03.2020 16:42',
    pubDate: '19.03.2020 17:30',
    guid: 'RSS_FEED_67049'
  },
  {
    title: 'planý poplach - planý poplach - Brandýs nad Labem-Stará Boleslav',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67040/',
    description: 'Brandýs nad Labem-Stará Boleslav okres Praha Východ',
    stopEventDate: '19.03.2020 13:15',
    pubDate: '19.03.2020 14:05',
    guid: 'RSS_FEED_67040'
  },
  {
    title: 'dopravní nehoda - se zraněním - Ondřejov',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67054/',
    description: 'D1 PRAHA - BRNO, číslo: D1 PRAHA - BRNO, km: 24.0 Ondřejov okres Praha Východ',
    stopEventDate: '19.03.2020 19:24',
    pubDate: '19.03.2020 20:10',
    guid: 'RSS_FEED_67054'
  },
  {
    title: 'jiné - zatím neurčeno - test bez odchozích sms - tablet - Kutná Hora',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67064/',
    description: 'Všetaty okres Mělník',
    stopEventDate: '19.03.2020 21:20',
    pubDate: '19.03.2020 22:10',
    guid: 'RSS_FEED_67064'
  },
  {
    title: 'dopravní nehoda - úklid vozovky - Cekov',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67114/',
    description: 'D5 PRAHA - PLZEŇ, číslo: D5 PRAHA - PLZEŇ, km: 46.0 Cekov okres Rokycany',
    stopEventDate: null,
    pubDate: '19.03.2020 22:15',
    guid: 'RSS_FEED_67114'
  },
  {
    title: 'dopravní nehoda - vyproštění osob - Třebotov',
    link: 'https://pkr.kr-stredocesky.cz/pkr/zasahy-jpo/67113/',
    description: 'D5 PRAHA - PLZEŇ, číslo: D5 PRAHA - PLZEŇ, km: 46.0 Cekov okres Rokycany',
    stopEventDate: null,
    pubDate: '19.03.2020 22:15',
    guid: 'RSS_FEED_67113'
  }
]



=======================================================================
 Finální model objektu
=======================================================================
  # Bylo rozparsováno 'title', separátor je ' - ', kde:
  # 1.hodnota je type, 
  # 2.hodnota je subtype,
  # poslední (bez ohledu na počet vložených separátorů), je obec
  #
  # Bylo rozparsováno 'description', separátor je ' okres ', kde:
  # 2. hodnota (key == [1]) je získán okres
  #
  # eventRegistrationDate == pubDate
{
  id: { type: 'RSS_FEED_67197', unique: true },
  eventRegistrationDate: '24.03.2020 06:35',
  originDate: null,
  statusId: null,
  typeId: { type: null, ref: 'Type' },
  type: 'dopravní nehoda',
  subtypeId: { type: null, ref: 'Subtype' },
  subtype: 'se zraněním',
  noteForMedia: 'dopravní nehoda - se zraněním - Jizerní Vtelno, Jizerní Vtelno okres Mladá Boleslav',
  regionId: { type: null, ref: 'Region' },
  region: null,
  districtId: 'Mladá Boleslav',
  village: 'Jizerní Vtelno',
  partOfVillage: null,
  ORP: null,
  street: null,
  road: null,
  detail: { detail: null }
}