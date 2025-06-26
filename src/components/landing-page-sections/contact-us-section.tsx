import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "../ui/button";

export const ContactUsSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl  text-[#0A3A2A] font-serif mb-8">Get in Touch</h2>
                
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    Got questions? Want to place an order, collaborate, or make a trade enquiry? 
                    We'd love to hear from you!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Button 
                        className="bg-[#E6B17A] hover:bg-[#D4A068] text-white px-8 py-3 rounded-lg text-lg font-medium"
                        onClick={() => window.open('https://wa.me/', '_blank')}
                    >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                    </Button>
                    
                    <Button 
                        variant="outline" 
                        className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-medium"
                        onClick={() => window.open('mailto:contact@spicey-o.com', '_blank')}
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us
                    </Button>
                </div>
                
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Follow us on Social Media:</p>
                    <button 
                        className="inline-flex items-center justify-center w-12 h-12 bg-[#E6B17A] hover:bg-[#D4A068] rounded-full transition-colors"
                        onClick={() => window.open('https://instagram.com/', '_blank')}
                    >
                        <Instagram className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
