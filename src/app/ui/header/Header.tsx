import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { headerLogo, MarkIcon, rootLinks, rootPaths } from '@/shared';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <header className={`fixed w-full top-0 left-0 z-50 transition duration-300 ${scrolled ? 'bg-light-blue' : 'bg-transparent'}`}>
            <div className="container">
                <div className="relative flex items-center justify-between gap-[20px] p-[58px_0_54px_0] max-md:p-[20px_0] max-sm:p-[8px_0]">
                    <nav className="max-md:hidden">
                        <ul className="flex gap-[40px] max-lg:gap-[15px]">
                            {rootLinks.map(({ title, path }) => 
                                <li key={title}>
                                    <Link className="text-[16px] font-medium leading-[1.125] text-white max-lg:text-[14px]" to={path}>
                                        {title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <Link className="absolute left-1/2 -translate-x-1/2 max-lg:max-w-[90px] max-md:static max-md:-translate-0 max-sm:max-w-[80px]" to={rootPaths.INDEX}>
                        <img 
                            src={headerLogo} 
                            alt="Silkway capital holding" 
                            loading="lazy"
                            width={117}
                            height={130}
                        />
                    </Link>
                    <div className="flex items-center gap-[25px] max-w-[320px] w-full max-lg:max-w-[250px] max-md:max-w-[400px] max-md:justify-end">
                        <div className="flex items-center gap-[5px] cursor-pointer max-sm:hidden">
                            <div>
                                <MarkIcon />
                            </div>
                            <div className="text-white text-[16px] font-medium max-lg:text-[14px]">
                                Ташкент
                            </div>
                        </div>
                        <button 
                            className="flex justify-center items-center h-[44px] max-w-[200px] w-full rounded-[10px] text-white text-[16px] px-[10px] bg-white/20 max-lg:text-[14px] max-md:max-w-[170px] max-sm:hidden cursor-pointer" 
                            type="button"
                        >
                            Оставить заявку
                        </button>
                        <div className="hidden relative w-[40px] h-[25px] max-md:flex flex-col justify-center items-end cursor-pointer max-sm:w-[25px]">
                            <span className="absolute block rounded-[5px] w-full h-[3px] bg-white -translate-y-[10px]"></span>
                            <span className="absolute block rounded-[5px] w-[30px] h-[3px] bg-white max-sm:w-[15px]"></span>
                            <span className="absolute block rounded-[5px] w-full h-[3px] bg-white translate-y-[10px]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    );
}
 
export default Header;