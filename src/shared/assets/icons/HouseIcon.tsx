interface IProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    overlayClassName?: string
}

const HouseIcon = ({ 
    width,
    height, 
    className,
    fill,
    overlayClassName
}: IProps) => {
    return ( 
        <div className={`flex justify-center items-center w-[85px] h-[85px] rounded-[20px] max-lg:w-[80px] max-lg:h-[80px] max-md:w-[70px] max-md:h-[70px] max-md:w-[60px] max-md:h-[60px] ${overlayClassName ?? ''}`}>
            <svg width={width ?? 40} height={height ?? 40} className={className ?? ''} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.95825 37.208H37.2083M13.7083 11.7497H15.6666M13.7083 19.583H15.6666M13.7083 27.4163H15.6666M23.4999 11.7497H25.4583M23.4999 19.583H25.4583M23.4999 27.4163H25.4583M5.87492 37.208V5.87467C5.87492 4.83591 6.28757 3.83969 7.02208 3.10517C7.7566 2.37066 8.75282 1.95801 9.79159 1.95801H29.3749C30.4137 1.95801 31.4099 2.37066 32.1444 3.10517C32.8789 3.83969 33.2916 4.83591 33.2916 5.87467V37.208" stroke={fill ?? "#1C3C8C"} strokeWidth="3.91667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}
 
export default HouseIcon;