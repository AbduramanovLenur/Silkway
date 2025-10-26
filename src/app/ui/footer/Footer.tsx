import { Link } from 'react-router-dom';

import { footerLogo, rootLinks, rootPaths, socialLinks } from '@/shared';

const Footer = () => {
    return ( 
        <footer className="bg-dark-blue">
            <div className="container">
                <div className="flex flex-col gap-[47px] py-[52px] max-sm:py-[60px]">
                    <div className="flex justify-between items-end gap-[50px] max-md:flex-col max-md:items-center">
                        <Link to={rootPaths.INDEX}>
                            <img 
                                src={footerLogo} 
                                alt="Silkway capital holding" 
                                loading="lazy"
                                width={150}
                                height={170}
                            />
                        </Link>
                        <div className="flex flex-col max-md:items-center">
                            <nav className="mb-[30px]">
                                <ul className="flex gap-[50px] max-lg:gap-[15px]">
                                    {rootLinks.map(({ title, path }, index) => 
                                        <li key={index}>
                                            <Link className="text-[16px] font-medium leading-[1.125] text-white max-md:text-[14px]" to={path}>
                                                {title}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                            <ul className="flex gap-[15px]">
                                {socialLinks.map(({ icon: Icon, link }, index) => (
                                    <li key={index}>
                                        <a 
                                            className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border border-white max-lg:w-[40px] max-lg:h-[40px]" 
                                            href={link}
                                            target="_blank"
                                        >
                                            {<Icon />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto max-w-[1120px] w-full border-t border-white"></div>
                    <div className="flex justify-between gap-[50px] flex-wrap max-w-[770px] mx-auto w-full max-sm:gap-[13px] max-sm:flex-col max-sm:items-center">
                        <a className="text-[16px] font-medium text-white max-md:text-[14px] max-sm:text-[16px]" href="https://google.com" target="_blank">
                            221B Бейкер-стрит, Лондон
                        </a>
                        <a className="text-[16px] font-medium text-white max-md:text-[14px] max-sm:text-[16px]" href="tel:+998901234567" target="_blank">
                            + 998 90 123 4567
                        </a>
                        <a className="text-[16px] font-medium text-white max-md:text-[14px] max-sm:text-[16px]" href="mailto:qwertyuiop@gmail.com" target="_blank">
                            qwertyuiop@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer> 
    );
}
 
export default Footer;