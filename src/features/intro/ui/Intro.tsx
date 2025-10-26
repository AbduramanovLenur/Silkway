import { useEffect, useRef } from 'react';

import { 
    Badge,
    Field, 
    SecondaryButton, 
    Selected, 
    TypographyTitle,
    houseTypes, 
    numberRooms,
    useQueryParams
} from '@/shared';

const Intro = () => {
    const { appends, queries } = useQueryParams();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const entries = Object.fromEntries(formData.entries());

        const validEntries = Object.entries(entries)
            .filter(([_, value]) => value !== '')
            .map(([key, value]) => ({ key, value: String(value) }));

        appends(validEntries, true);

        console.log('Query params updated:', validEntries);
    };

    useEffect(() => {
        const form = formRef.current;
        if (!form) return;

        const params = queries();

        Object.entries(params).forEach(([key, value]) => {
            const input = form.elements.namedItem(key) as HTMLInputElement | HTMLSelectElement | null;

            if (input) input.value = value;
        });
    }, []);

    return ( 
        <section className="bg-[url('@/features/intro/assets/images/bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="container">
                <div 
                    className="pt-[270px] pb-[120px] max-lg:pt-[220px] max-lg:pb-[100px] max-md:pt-[160px] max-md:pb-[50px] max-sm:pt-[145px] max-sm:pb-[30px]"
                >
                    <TypographyTitle 
                        className="text-white max-w-[847px] mb-[30px] max-lg:mb-[20px] max-sm:mb-[15px]" 
                        isPrimary
                    >
                        Ваш надежный партнер в мире инвестиций и недвижимости
                    </TypographyTitle>
                    <div className="hidden max-sm:block max-sm:text-[16px] leading-[1] max-sm:mb-[25px] text-white/75">
                        Работаем без комиссии и переплат
                    </div>
                    <form 
                        ref={formRef}
                        className="flex flex-col gap-[24px] bg-white rounded-[20px] p-[35px] max-lg:p-[25px] max-sm:p-[30px_25px]" 
                        method="post" 
                        onSubmit={handleSubmit}
                    >
                        <div className="flex justify-between gap-[10px] max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                            <Selected 
                                overlayClassName="h-[64px] max-w-[24.8%] max-lg:max-w-full max-md:h-[50px] max-md:text-[15px] max-sm:h-[55px] max-sm:text-[14px]" 
                                name="type"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Тип жилья
                                </option>
                                {houseTypes.map(({ value, title }) => (
                                  <option key={value}>{title}</option>
                                ))}
                            </Selected>
                            <Field 
                                className="max-w-[24.8%] h-[64px] max-lg:max-w-full max-md:h-[50px] max-md:text-[15px] max-sm:h-[55px] max-sm:text-[14px]" 
                                placeholder="Район, улица" 
                                name="address"
                            />
                            <Selected 
                                overlayClassName="h-[64px] max-w-[24.8%] max-lg:max-w-full max-md:h-[50px] max-md:text-[15px] max-md:col-start-1 max-md:col-end-3 max-sm:col-end-2 max-sm:h-[55px] max-sm:text-[14px]"
                                name="rooms"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Комнатность
                                </option>
                                {numberRooms.map(({ value, title }) => (
                                  <option key={value}>{title}</option>
                                ))}
                            </Selected>
                            <div className="flex gap-[10px] max-lg:col-start-1 max-lg:col-end-4 max-md:col-end-3 max-sm:col-end-1">
                                <Field 
                                    className="max-w-[130px] h-[64px] max-lg:max-w-full max-md:h-[50px] max-md:text-[15px] max-sm:h-[55px] max-sm:text-[14px]" 
                                    placeholder="Цена от" 
                                    name="priceFrom"
                                />
                                <Field 
                                    className="max-w-[130px] h-[64px] max-lg:max-w-full max-md:h-[50px] max-md:text-[15px] max-sm:h-[55px] max-sm:text-[14px]" 
                                    placeholder="Цена до" 
                                    name="priceTo"
                                />
                            </div>
                        </div>
                        <div 
                            className="flex justify-between gap-[20px] max-lg:items-end max-md:flex-col max-md:items-start"
                        >
                            <div className="flex items-center gap-[13px] max-lg:flex-col max-lg:items-start max-sm:mb-[50px]">
                                <div className="leading-[1] max-sm:text-[16px]">
                                    Быстрые фильтры:
                                </div>
                                <div className="flex gap-[13px] font-medium flex-wrap">
                                    <Badge>
                                        Ташкент
                                    </Badge>
                                    <Badge>
                                        Квартиры
                                    </Badge>
                                    <Badge>
                                        50м2
                                    </Badge>
                                    <Badge>
                                        60 000 у.е.
                                    </Badge>
                                </div>
                            </div>
                            <SecondaryButton 
                                className="text-[16px] leading-[1] text-white font-semibold flex items-center justify-center max-w-[21.15%] h-[44px] px-[10px] rounded-[10px] max-md:max-w-full max-sm:text-[14px]" 
                                type="submit"
                            >
                                Показать
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default Intro;