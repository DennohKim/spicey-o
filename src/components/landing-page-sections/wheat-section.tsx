export const WheatSection = () => {
  return (
    <section className="bg-[#F8F5F0] pb-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://placehold.co/600x800/e0e0e0/333?text=Raw+Pasta+Varieties"
            alt="Various types of uncooked pasta"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <h2 className="text-5xl font-serif text-[#0A3A2A]">
            Local is powerful
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We take pride in supporting local farmers and sourcing the freshest
            ingredients, ensuring that every jar of Spicey-O embodies the
            essence of authenticity and deliciousness.{" "}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our commitment to quality means using 100% locally sourced Kenyan
            ingredients. Each product is handcrafted with care, knowing that it
            is made with respect for the environment and the communities we work
            with.{" "}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This appears to be another section from the same Spicey-O brand
            website, focusing on their commitment to local sourcing and
            community support. The image shows their product jars with labels,
            emphasizing their locally-made spices and chutneys.
          </p>
        </div>
      </div>
    </section>
  );
};
