import { Play, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import Image from 'next/image';


export const FeatureSection = () => {
    return (
        <section className="bg-[#F8F5F0] py-24">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-[#0A3A2A]">
                    <h2 className="text-5xl font-serif">Celebrate life with a spoonful of spice</h2>
                    <p className="mt-6 text-gray-600 leading-relaxed">
                    Spicey-O began with dull office lunches and a jar of homemade chutney. One of our founders, who had spent years making chutney for friends and family, brought some to work and everything changed. The jars were passed around, lunches got louder, and food suddenly had flavour, excitement, and attitude.                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                    We saw an opportunity to elevate everyday meals for more people in Kenya. Our approach? Source every ingredient locally. Work with trusted Kenyan suppliers. Cook in small batches to preserve quality. Every jar is a celebration of flavour, tradition, and the hustle of Kenyan food lovers.                    </p>
                    <a href="#" className="mt-6 inline-flex items-center font-bold text-[#0A3A2A] group">
                        Our Story
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <Card className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-md">
                        <div className="relative">
                            <Image src="https://placehold.co/600x600/e2e8f0/333?text=Exquisite+Pasta" alt="Pasta dish" className="rounded-xl w-full h-auto" width={600} height={600} />
                            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-transform hover:scale-105">
                                <Play className="h-8 w-8 text-[#0A3A2A] fill-[#0A3A2A]" />
                            </button>
                        </div>
                    </Card>
                    <p className="mt-4 font-semibold text-gray-700">It all started with family traditions</p>
                </div>
            </div>
        </section>
    );
};