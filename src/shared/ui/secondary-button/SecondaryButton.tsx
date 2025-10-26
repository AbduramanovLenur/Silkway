import { Link } from 'react-router-dom';

interface IProps {
    children: React.ReactNode;
    className?: string;
    to?: string;
    type?: 'button' | 'submit';
}

const SecondaryButton = ({ children, className, to, type }: IProps) => {
    return (
        <>
            {to ? 
                <Link className={`bg-light-blue w-full cursor-pointer ${className ?? ''}`} to={to}>
                    {children}
                </Link>
                :
                <button className={`bg-light-blue w-full cursor-pointer ${className ?? ''}`} type={type}>
                    {children}
                </button>
            }
        </>
    );
}
 
export default SecondaryButton;