interface IProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    overlayClassName?: string
}

const PeopleIcon = ({ 
    width,
    height, 
    className,
    fill,
    overlayClassName
}: IProps) => {
    return ( 
        <div className={`flex justify-center items-center w-[85px] h-[85px] rounded-[20px] max-lg:w-[80px] max-lg:h-[80px] max-md:w-[70px] max-md:h-[70px] max-md:w-[60px] max-md:h-[60px] ${overlayClassName ?? ''}`}>
            <svg width={width ?? 44} height={height ?? 40} className={className ?? ''} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.2916 37.2077C33.2916 33.0526 31.641 29.0677 28.7029 26.1297C25.7649 23.1916 21.78 21.541 17.6249 21.541C13.4699 21.541 9.48498 23.1916 6.54691 26.1297C3.60884 29.0677 1.95825 33.0526 1.95825 37.2077" stroke={fill ?? "#FFC110"} strokeWidth="3.91667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.6249 21.5413C23.0327 21.5413 27.4166 17.1575 27.4166 11.7497C27.4166 6.34189 23.0327 1.95801 17.6249 1.95801C12.2171 1.95801 7.83325 6.34189 7.83325 11.7497C7.83325 17.1575 12.2171 21.5413 17.6249 21.5413Z" stroke={fill ?? "#FFC110"} strokeWidth="3.91667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M41.125 35.2499C41.125 28.6504 37.2083 22.5208 33.2917 19.5833C34.5791 18.6174 35.6086 17.349 36.289 15.8904C36.9694 14.4318 37.2798 12.8279 37.1927 11.2208C37.1056 9.61365 36.6236 8.05277 35.7895 6.67628C34.9553 5.2998 33.7947 4.15016 32.4104 3.3291" stroke={fill ?? "#FFC110"} strokeWidth="3.91667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}
 
export default PeopleIcon;