import { AboutDesktop } from '@/features/about-desktop';
import { Contact } from '@/features/contact';
import { Banner } from '@features/banner';
import { Cards } from '@features/cards';
import { Intro } from '@features/intro';
import { Map } from '@features/map';

export const HomePage = () => {
    return (
        <>
            <Intro />
            <Cards />
            <AboutDesktop />
            <Contact />
            <Map />
            <Banner />
        </>
    );
}
 
export default HomePage;