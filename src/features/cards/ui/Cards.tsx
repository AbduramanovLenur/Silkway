import { CardList, TypographyTitle } from '@/shared';

const Cards = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center p-[77px_0_21px] max-lg:p-[60px_0_21px] max-md:p-[50px_0_21px] max-sm:p-[40px_0]">
                    <TypographyTitle className="text-[38px] mb-[23px] font-semibold max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] max-md:mb-[15px] text-center">
                        Лучшие предложения месяца
                    </TypographyTitle>
                    <p className="mb-[30px] text-black/60 font-medium text-center max-sm:text-[14px]">Подборка самых актуальных и выгодных предложений</p>
                    <CardList />
                </div>
            </div>
        </section>
    );
}
 
export default Cards;