import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopBtn() {
    const [show, setShow] = useState(false);
    const location = useLocation();

    // 👇 Allowed pages
    const allowedRoutes = ["/", "/about", "/academics", "/achievement"];

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 👇 Check if current route is allowed
    if (!allowedRoutes.includes(location.pathname)) return null;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (

        <>
            {show && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6  bg-blue-900 hover:bg-blue-900
                 text-white w-14 h-14 rounded-full shadow-lg 
                 flex items-center justify-center"
                >
                    <ArrowUp size={26} />
                </button>
            )}
        </>
    );
}