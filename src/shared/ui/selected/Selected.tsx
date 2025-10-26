import ArrowIcon from '@shared/assets/icons/ArrowIcon';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  overlayClassName?: string
  selectClassName?: string
}

const Selected = ({ children, selectClassName, overlayClassName, ...props }: IProps) => {
  return (
    <div className={`relative w-full bg-grey rounded-[10px] ${overlayClassName ?? ''}`}>
      <select 
        className={`appearance-none text-[14px] leading-[1.14] px-[15px] pr-[45px] h-full w-full ${selectClassName ?? ''}`}
        {...props}
      >
        {children}
      </select>
      <ArrowIcon className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
 
export default Selected;