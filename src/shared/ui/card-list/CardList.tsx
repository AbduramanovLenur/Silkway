import { cards } from '@shared/models/constants/cards';
import CardItem from '@shared/ui/card-list/card-item/CardItem';

const CardList = () => {
    return (
        <ul className="w-full grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
            {cards.map((card) => <CardItem key={card.id} card={card} />)}
        </ul>
    );
}
 
export default CardList;