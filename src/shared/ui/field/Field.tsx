interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Field = ({ className, ...props }: IProps) => {
    return (
        <input 
            className={`text-[14px] leading-[1.14] px-[15px] bg-grey rounded-[10px] w-full placeholder:text-black ${className}`} 
            {...props}
        />
    );
}
 
export default Field;