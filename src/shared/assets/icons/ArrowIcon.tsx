interface IProps {
    width?: number;
    height?: number;
    className?: string;
}

const ArrowIcon = ({ 
    width,
    height,
    className
}: IProps) => {
    return ( 
        <svg width={width ?? 12} height={height ?? 7} className={className} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0193 0L12 1.04108L6.65505 6.71157C6.56941 6.80297 6.46756 6.87551 6.35538 6.92502C6.2432 6.97452 6.12289 7 6.00139 7C5.87988 7 5.75958 6.97452 5.6474 6.92502C5.53521 6.87551 5.43337 6.80297 5.34773 6.71157L0 1.04108L0.980725 0.000980854L6 5.32314L11.0193 0Z" fill="black" fillOpacity="0.8"/>
        </svg>
    );
}
 
export default ArrowIcon;