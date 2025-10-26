import { TypographyTitle } from '@/shared';
import { aboutItems } from '@features/about-desktop/models/constants/aboutItems';

const AboutDesktop = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center py-[22px] max-sm:py-[40px]">
                    <TypographyTitle className="font-semibold mb-[20px] max-md:mb-[15px] text-center">
                        Почему выбирают нас!
                    </TypographyTitle>
                    <p className="text-[24px] font-medium leading-[1.25] max-w-[950px] w-full text-center mb-[50px] max-lg:text-[20px] max-md:text-[18px] max-md:mb-[40px] max-sm:text-[16px]">
                        Мы предлагаем полный цикл услуг — от подбора и оценки объектов до сопровождения иностранных инвестиций и юридической поддержки
                    </p>
                    <ul className="grid grid-cols-4 gap-[50px_20px] max-lg:gap-[30px_20px] max-md:grid-cols-2 max-md:gap-[40px_20px] max-sm:grid-cols-1">
                        {aboutItems.map(({ id, icon: Icon, label, overlayClassName, fill, className }) => (
                            <li key={id}>
                                <div className="flex flex-col justify-center items-center gap-[20px] max-sm:gap-[15px]">
                                    <Icon 
                                        overlayClassName={overlayClassName} 
                                        fill={fill} 
                                        className={className}
                                    />
                                    <p className="text-[24px] font-medium leading-[1.25] text-center max-lg:text-[20px] max-md:text-[18px]">
                                        {label}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default AboutDesktop;