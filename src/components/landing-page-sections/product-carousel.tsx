import Image from "next/image";
import { Button } from "../ui/button";

export const ProductCarousel = () => {
  const products = [
    {
      name: "Tomato & Chilli Chutney - Low",
      img: "https://placehold.co/300x400/e4a400/fff?text=Spaghetti",
      description: "Signature base with garlic and ginger. Mildly spicy.",
    },
    {
      name: "Tomato & Chilli Chutney - Medium",
      img: "https://placehold.co/300x400/0A3A2A/fff?text=Cavatelli",
      description: "A balanced kick for those who like it warm.",
    },
    {
      name: "Tomato & Chilli Chutney - Hot",
      img: "https://placehold.co/300x400/e4a400/fff?text=Rigatoni",
      description: "Seriously spicy for the heat seekers.",
    },
    {
      name: "Tomato & Chilli Chutney - Very Freakin Hot",
      img: "https://placehold.co/300x400/0A3A2A/fff?text=Fusilli",
      description: "For the full-blown chili fiends. Extreme heat!",
    },
  ];
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#0A3A2A]">
          Spicey O products
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  width={300}
                  height={400}
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800 tracking-widest">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-4 text-gray-600 leading-relaxed">
          We&apos;re also developing a line of dipping sauces and trialling new
          seasonal condiments. Stay tuned!
        </div>
        <div className="mt-12">
          <Button
            size="lg"
            className="bg-[#0A3A2A] text-white hover:bg-[#0A3A2A]/90 font-bold rounded-full px-10 py-6 text-base"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};
