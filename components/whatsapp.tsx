import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {
    return (
        <>
            <div className="w-11/12 mx-auto">
                {/* Floating WhatsApp Button */}
                <FloatingWhatsApp
                    phoneNumber="6285928953264"
                    accountName={"Lumibyte"}
                    avatar="/avatar.png"
                    allowEsc
                    className="floating-whatsapp"
                />
            </div>
        </>
    );
}