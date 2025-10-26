import HeartIcon from '@/shared/assets/icons/HeartIcon';
import type { CardModel } from '@shared/models/types/cardModel';
import SecondaryButton from '@shared/ui/secondary-button/SecondaryButton';
import { numberToLocale } from '@shared/lib/helpers/numberToLocale';

interface IProps {
    card: CardModel
}

const CardItem = ({ card }: IProps) => {
    return (
        <li>
            <article className="flex flex-col p-[10px] bg-grey rounded-[10px] h-full">
                <div className="relative rounded-[5px] overflow-hidden mb-[12px] max-sm:h-[250px]max-sm:mb-[15px]">
                    <img 
                        className="max-w-full w-full object-cover h-full"
                        src={card.img_url}
                        alt="House"
                        loading="lazy"
                        width={380}
                        height={287} 
                    />
                    <div className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border-[1px] border-white absolute top-[15px] right-[15px] cursor-pointer max-md:w-[40px] max-md:h-[40px] max-sm:w-[35px] max-sm:h-[35px]">
                        <HeartIcon className="max-sm:w-[15px] max-sm:h-[15px]" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    {card.is_mortgage && (
                        <div 
                            className="text-[12px] leading-[1.9] flex justify-center items-center mb-[20px] bg-light-green/59 h-[29px] max-w-[143px] w-full rounded-[20px] text-white max-sm:mb-[25px]"
                        >
                            Возможна ипотека
                        </div>
                    )}
                    <div className="text-[28px] leading-[1] font-medium mb-[15px] max-lg:text-[24px] max-sm:mb-[25px]">
                        {numberToLocale(card.price)} у.е.
                    </div>
                    <div className="text-[16px] leading-[1] text-black/60 mb-[15px] max-lg:text-[15px] max-sm:mb-[10px] max-sm:text-[14px]">
                        {card.count_rooms} комн. кв. | {card.square} м2 | ${card.floor} этаж
                    </div>
                    <div className="text-[16px] leading-[1.43] mb-[47px] max-lg:text-[15px] max-md:mb-[30px] max-sm:mb-[50px]">
                        {card.address}
                    </div>
                    <SecondaryButton
                        to={card.slug}
                        className="text-[16px] leading-[1] font-medium flex justify-center items-center text-white rounded-[5px] w-full h-[44px] mt-auto max-md:text-[15px] max-md:h-[40px] max-sm:text-[14px] max-sm:h-[44px]"
                    >
                        Подробнее
                    </SecondaryButton>
                </div>
            </article>
        </li>
    );
}
 
export default CardItem;