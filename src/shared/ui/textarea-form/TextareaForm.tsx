interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: React.ReactNode;
}

const TextareaForm = ({ children, ...props }: IProps) => {
    return (
        <label className="flex flex-col gap-[10px] text-[16px] leading-[1]">
            {children}
            <textarea 
                className="h-[180px] w-full bg-platinum rounded-[15px] p-[25px_20px] placeholder:font-medium max-lg:h-[150px]" 
                {...props}
            />
        </label>
    );
};
 
export default TextareaForm;
