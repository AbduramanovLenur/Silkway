interface IProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    overlayClassName?: string
}

const ShieldIcon = ({ 
    width,
    height, 
    className,
    fill,
    overlayClassName
}: IProps) => {
    return ( 
        <div className={`flex justify-center items-center w-[85px] h-[85px] rounded-[20px] max-lg:w-[80px] max-lg:h-[80px] max-md:w-[70px] max-md:h-[70px] max-md:w-[60px] max-md:h-[60px] ${overlayClassName ?? ''}`}>
            <svg width={width ?? 40} height={height ?? 44} className={className ?? ''} viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5833 41.2311C19.5833 41.2311 1.95825 33.3978 1.95825 7.93945L19.5833 2.06445M19.5833 41.2311C19.5833 41.2311 37.2083 33.3978 37.2083 7.93945L19.5833 2.06445M19.5833 41.2311V2.06445M3.91659 19.6895H35.2499" stroke={fill ?? "#012169"} strokeWidth="3.91667"/>
            </svg>
        </div>
    );
}
 
export default ShieldIcon;