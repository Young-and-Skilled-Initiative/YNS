import Image from "next/image";
const ContactAddress = () => {
    return (
        <div className="flex justify-between px-36 items-center py-24">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-[50px] w-[50%] leading-none">43 Akerele Street Onigbogbo Maryland Ikeja Lagos</h2>

                {/* Email */}
                <div className="flex gap-3 items-center">
                    <Image src="../images/mail.svg" alt="mail" height={100} width={20} />
                    <p>youngskilledsupport@gmail.com</p>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">
                    <Image src="../images/phone.svg" alt="phone" height={100} width={20} />
                    <p>+234 218 3236</p>
                </div>
            </div>
            <Image src="/images/bridge.png" alt="phone" height={100} width={500} />
        </div>
    );
}

export default ContactAddress;