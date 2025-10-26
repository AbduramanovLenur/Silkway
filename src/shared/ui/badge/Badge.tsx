interface IProps {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ className, children }: IProps) => {
    return ( 
        <div className={`text-[14px] leading-[1.14] bg-grey flex justify-center items-center rounded-[10px] h-[36px] px-[25px] max-sm:text-[12px] max-sm:px-[20px] max-sm:h-[32px] ${className}`}>
            {children}
        </div>
    );
}
 
export default Badge;