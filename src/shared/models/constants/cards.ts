import type { CardModel } from '@shared/models/types/cardModel';
import HouseImg from '@shared/assets/images/img.jpg';

export const cards: CardModel[] = [
  {
    id: 1,
    img_url: HouseImg,
    is_mortgage: true,
    price: 85000,
    count_rooms: 2,
    square: 65,
    floor: '3/9',
    address: 'Ташкент, Юнусабадский район, массив Юнусабад, 5-й квартал',
    slug: '#'
  },
  {
    id: 2,
    img_url: HouseImg,
    is_mortgage: true,
    price: 120000,
    count_rooms: 3,
    square: 90,
    floor: '5/9',
    address: 'Ташкент, Мирзо-Улугбекский район, массив Ялангач, 12-й квартал',
    slug: '#'
  },
  {
    id: 3,
    img_url: HouseImg,
    is_mortgage: true,
    price: 67000,
    count_rooms: 1,
    square: 48,
    floor: '2/6',
    address: 'Ташкент, Шайхантахурский район, улица Навои, дом 15',
    slug: '#'
  },
  {
    id: 4,
    img_url: HouseImg,
    is_mortgage: true,
    price: 150000,
    count_rooms: 4,
    square: 110,
    floor: '7/9',
    address: 'Ташкент, Мирабадский район, улица Фидокор, дом 22',
    slug: '#'
  },
  {
    id: 5,
    img_url: HouseImg,
    is_mortgage: true,
    price: 95000,
    count_rooms: 3,
    square: 78,
    floor: '6/8',
    address: 'Ташкент, Чиланзарский район, 19-й квартал, дом 7',
    slug: '#'
  },
  {
    id: 6,
    img_url: HouseImg,
    is_mortgage: true,
    price: 72000,
    count_rooms: 2,
    square: 60,
    floor: '4/9',
    address: 'Ташкент, Алмазарский район, улица Беруний, дом 10',
    slug: '#'
  },
];
