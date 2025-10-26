interface IProps {
    children: React.ReactNode;
    className?: string;
    isPrimary?: boolean;
}

const TypographyTitle = ({ children, className, isPrimary }: IProps) => {
    return (
        <>
            {isPrimary ? 
                <h1 className={`text-[45px] font-bold leading-[1.4] max-lg:text-[32px] max-md:text-[28px] ${className}`}>
                    {children}
                </h1>
                :
                <h2 className={`text-[36px] font-bold leading-[1.3] max-lg:text-[28px] max-md:text-[24px] ${className}`}>
                    {children}
                </h2>
            }
        </>
    );
}
 
export default TypographyTitle;