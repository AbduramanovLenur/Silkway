const Map = () => {
    return ( 
        <div>
            <div className="container">
                <div className="pt-[50px] pb-[50px] max-sm:pb-[40px] max-sm:pt-[15px]">
                    <div className="overflow-hidden pb-[56.25%] relative h-0 rounded-[20px]">
                        <iframe 
                            className="left-0 top-0 h-full w-full absolute"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987273547!2d69.11455992550545!3d41.28273794582425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1761432041675!5m2!1sru!2s" 
                            allowFullScreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Map;