import { HomeIcon, MailIcon, TelIcon } from '@shared/index';

export const contactsItems = [
    {
        id: 1,
        icon: HomeIcon,
        title: 'Офис',
        description: '221B Бейкер-стрит, Лондон'
    },
    {
        id: 2,
        icon: TelIcon,
        title: 'Позвоните нам',
        description: '+ 998 90 123 4567',
        href: 'tel:+998901234567'
    },
    {
        id: 3,
        icon: MailIcon,
        title: 'Напишите нам',
        description: 'qwertyuiop@gmail.com',
        href: 'mailto:qwertyuiop@gmail.com'
    },
];
