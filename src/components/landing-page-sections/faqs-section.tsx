import { HelpCircle } from "lucide-react";

// Helper: Pasta Icon SVG
const PastaIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M85.4167 29.1667C85.4167 29.1667 89.5833 41.6667 75 54.1667C60.4167 66.6667 41.6667 66.6667 33.3333 58.3333C25 50 25 37.5 37.5 29.1667C50 20.8333 62.5 20.8333 70.8333 29.1667" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70.8333 70.8333C70.8333 70.8333 66.6667 58.3333 81.25 45.8333C95.8333 33.3333 114.583 33.3333 122.917 41.6667C131.25 50 131.25 62.5 118.75 70.8333C106.25 79.1667 93.75 79.1667 85.4167 70.8333" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" transform="translate(-40, 0)"/>
    </svg>
  );

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="bg-white/60 rounded-lg p-8 text-left max-w-2xl mx-auto mb-6">
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
                <div className="absolute -top-10 left-1/4 text-[#0A3A2A]/5 -rotate-12">
                    <PastaIcon className="w-32 h-32" />
                </div>
                <div className="absolute -bottom-10 right-1/4 text-[#0A3A2A]/5 rotate-12">
                    <PastaIcon className="w-32 h-32" />
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