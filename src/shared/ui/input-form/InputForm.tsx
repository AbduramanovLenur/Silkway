interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
}

const InputForm = ({ children, ...props }: IProps) => {
    return (
        <label className="flex flex-col gap-[10px] text-[16px] leading-[1]">
            {children}
            <input 
                className="h-[67px] w-full bg-platinum rounded-[15px] px-[25px] placeholder:font-medium max-lg:h-[50px]" 
                {...props}
            />
        </label>
    );
}
 
export default InputForm;