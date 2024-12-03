import Navbar from "../components/Navbar";
import HeroPage from "./HeroPage";
import PageForm from "./PageForm";
import FAQ from "../components/Faq/faq";
import Footer from "../components/Footer";
import ContactAddress from "./ContactAddress";

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* You can add any custom class names here for styling */}
                <HeroPage className="relative" />
                <PageForm className="relative -mt-20" /> {/* Adjust margin-top to overlap the HeroPage */}
            </div>
            <ContactAddress/>
            <FAQ className={'px-32'} />
            <Footer/>
        </div>
    );
};

export default ContactUs;
