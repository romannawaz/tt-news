export interface INews {
  id: string; // '202646';
  title: string; // 'В форму Личной карточки госслужащего внесены изменения';
  description: string; // 'Вниманию кадровых служб госорганов!';
  date: string; // '2021-04-02T10:50:00Z';
  link?: string; // '/ru/news/202646_v-formu-lichnoy-kartochki-gossluzhashchego-vneseny-izmeneniya';
  isTop?: boolean; // true;
  commentsCount?: number; // 0;
  viewCount?: number; // 112;
  tags?: INewsTag[];
  image?: string; // 'https://ligazakon.net/static_liga_net/IMAGES/NZ204998.jpg';
  imageSource?: string; // 'https://ligazakon.net/static_liga_net/IMAGES/NZ204998.jpg';
  imageSmall?: string; // 'https://ligazakon.net/static_liga_net/THUMB/NZ204998_166x166.jpg';
  imageMiddle?: string; // 'https://ligazakon.net/static_liga_net/THUMB/NZ204998_433x433.jpg';
}

export interface INewsTag {
  id: string; // 'dc5e9712-4348-4cc9-a4fb-9859e8cf3e03';
  title: string; // 'Зарплата и кадры';
  url: string; // '/ru/temy/zarplata-i-kadry';
}
