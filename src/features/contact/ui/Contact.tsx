import { InputForm, SecondaryButton, socialLinks, TextareaForm, TypographyTitle } from '@/shared';
import { contactsItems } from '@features/contact/models/constants/contactsItems';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        console.log('Данные формы:', data);
    };

    return ( 
        <section>
            <div className="container">
                <div className="flex justify-between items-center gap-[20px] pt-[21px] max-md:flex-col max-sm:pt-[40px] max-sm:pb-[15px] max-sm:gap-[30px]">
                    <div className="max-w-[41.2%] w-full max-md:max-w-full">
                        <TypographyTitle className="leading-[1.5] mb-[5px] max-sm:text-[24px]">
                            Свяжитесь с нами
                        </TypographyTitle>
                        <p className=" text-black/60 mb-[72px] font-medium max-lg:mb-[55px] max-sm:text-[16px] max-sm:mb-[35px]">
                            Наши специалисты помогут вам выбрать квартиру
                        </p>
                        <ul className="flex flex-col gap-[30px] mb-[72px] max-lg:mb-[55px] max-sm:mb-[35px]">
                            {contactsItems.map(({ id, icon: Icon, title, description, href }) => (
                                <li key={id}>
                                    <div className="flex items-center gap-[22px]">
                                        <div
                                            className="flex justify-center items-center w-[55px] h-[55px] rounded-[50%] bg-grey max-sm:w-[45px] max-sm:h-[45px]"
                                        >
                                            <Icon />
                                        </div>
                                        <div>
                                            <div className="text-[21px] leading-[1.5] font-medium max-lg:text-[18px] max-sm:text-[16px]">
                                                {title}
                                            </div>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="text-[16px] leading-[1.5] font-medium max-sm:text-[14px]"
                                                >
                                                    {description}
                                                </a>
                                            ) : (
                                                <div className="text-[16px] leading-[1.5] font-medium max-sm:text-[14px]">
                                                    {description}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <h3 className="text-[21px] leading-[1.5] font-bold mb-[20px] max-lg:text-[18px] max-sm:mb-[13px]">
                                Подписывайтесь на наши соцсети
                            </h3>
                            <ul className="flex gap-[15px]">
                                {socialLinks.map(({ icon: Icon, link }, index) => (
                                    <li key={index}>
                                        <a 
                                            className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border border-black max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[45px] max-sm:h-[45px]" 
                                            href={link}
                                            target="_blank"
                                        >
                                            {<Icon fill="#000" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <form className="p-[30px_40px] rounded-[20px] bg-cultured max-w-[49.2%] w-full max-md:max-w-full max-md:p-[20px_30px] max-sm:p-[25px_20px]" method="post" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-[20px] mb-[40px] max-sm:mb-[30px] max-sm:gap-[15px]">
                            <InputForm 
                                placeholder="Введите свое имя" 
                                name="name"
                            >
                                Имя
                            </InputForm>
                            <InputForm 
                                placeholder="Введите  номер телефона" 
                                name="phone"
                            >
                                Номер телефона
                            </InputForm>
                            <TextareaForm
                                placeholder="Введите ваш текст" 
                                name="text"
                            >
                                Текст
                            </TextareaForm>
                        </div>
                        <SecondaryButton 
                            className="h-[64px] px-[30px] rounded-[15px] text-white font-bold text-[16px] leading-[1.5] max-lg:h-[50px] max-sm:text-[14px]" 
                            type="submit"
                        >
                            Отправить
                        </SecondaryButton>
                    </form>
                </div>
            </div>
        </section> 
    );
}
 
export default Contact;