import { Outlet } from 'react-router-dom';
import Header from '@app/ui/header/Header';
import Footer from '@app/ui/footer/Footer';

const MainLayout = () => {
    return ( 
        <div className="font-base text-base flex flex-col min-h-screen tracking-[0.02em]">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
 
export default MainLayout;