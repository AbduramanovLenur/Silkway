import { rootPaths, SecondaryButton, TypographyTitle } from '@/shared';
import decorHome from "@features/banner/assets/images/decor.png";

const Banner = () => {
    return ( 
        <section>
            <div className="container">
                <div className="pt-[50px] pb-[100px] max-md:pt-[45px] max-md:pb-[60px] max-sm:pt-[40px] max-md:pb-[40px]">
                    <div className="relative bg-light-blue p-[78px] rounded-[20px] max-lg:p-[50px] max-sm:p-[30px_30px_54px_30px] max-sm:static flex max-sm:flex-col max-sm:gap-[40px]">
                        <div>
                            <TypographyTitle 
                                className="max-w-[600px] mb-5 text-white max-md:max-w-[400px]"
                            >
                                Хотите выгодно продать свою недвижимость?
                            </TypographyTitle>
                            <p className="text-gray font-medium max-w-[92.6%] mb-[60px] max-lg:max-w-[70%] max-md:mb-[40px] max-md:text-[16px] max-sm:max-w-[100%]">
                                Наши специалисты обеспечат честную оценку, грамотную презентацию и быстрый результат
                            </p>
                            <SecondaryButton 
                                className="text-[16px] text-white font-bold flex justify-center items-center h-[64px] max-w-[400px] rounded-[10px] max-lg:h-[55px] max-lg:max-w-[350px] max-md:text-[14px] max-md:h-[50px] max-md:max-w-[300px] max-sm:h-[55px] max-sm:max-w-[100%] bg-violet" 
                                to={rootPaths.INDEX}
                            >
                                Предложить
                            </SecondaryButton>
                        </div>
                        <div className="absolute right-0 top-[50%] transform-[translateY(-50%)] max-w-[26%] max-sm:max-w-[312px] max-sm:transform-none max-sm:static max-sm:ml-auto max-sm:mr-[-30px]">
                            <img 
                                src={decorHome} 
                                alt="Home"
                                loading="lazy"
                                width={315}
                                height={412} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default Banner;