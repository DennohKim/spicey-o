import { HelpCircle } from "lucide-react";
import Image from "next/image";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="bg-white rounded-lg p-8 text-left max-w-2xl mx-auto mb-6">
        <h3 className="text-xl font-semibold text-[#0A3A2A] mb-4">{question}</h3>
        <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
);

export const FaqsSection = () => {
    const faqs = [
        {
            question: "How long do the chutneys last?",
            answer: "Unopened, our chutneys last for 6-8 months. Once opened, please refrigerate and consume within 6 weeks for the best flavour and quality."
        },
        {
            question: "Do you ship across Kenya?",
            answer: "Not yet. We currently serve Nairobi only with our delivery service. However, we are actively working on expanding to national delivery, so stay tuned for updates!"
        },
        {
            question: "Do you do custom orders for events or gifting?",
            answer: "Absolutely! We love creating special orders for events, corporate gifting, or any other unique requests. Please reach out to us, and let's chat about your needs."
        }
    ];

    return (
        <section className="bg-[#F8F5F0] py-24">
            <div className="container mx-auto px-6 relative">
                <div className="absolute -top-10 left-1/4 opacity-20 -rotate-12">
                    <Image 
                        src="/images/motif/spices-leaf.png" 
                        alt="Spices leaf" 
                        width={128} 
                        height={128} 
                        className="w-32 h-32 object-contain"
                    />
                </div>
                <div className="absolute -bottom-10 right-1/4 opacity-20 rotate-12">
                    <Image 
                        src="/images/motif/leafy-spice.png" 
                        alt="Leafy spice" 
                        width={128} 
                        height={128} 
                        className="w-32 h-32 object-contain"
                    />
                </div>
                
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-8">
                        <HelpCircle className="h-16 w-16 text-[#E4A400] mx-auto" />
                    </div>
                    <h2 className="text-5xl font-serif text-[#0A3A2A] mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};