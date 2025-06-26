import { Truck, Wallet, ShoppingBag, Lightbulb } from "lucide-react"
import { Button } from "../ui/button"

export const AppCtaSection = () => {
    return (
        <section className="bg-[#FBF9F7] py-20">
            <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-primary font-serif text-3xl tracking-tighter sm:text-4xl md:text-5xl">
                            Find Spicey-O Near You
                        </h2>
                        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We're keeping it simple and personal for now. Browse our range and
                            place your order directly via WhatsApp.
                        </p>
                        <a
                            href="#"
                            className="inline-block font-medium text-green-600 hover:underline"
                        >
                            Order via WhatsApp
                        </a>
                    </div>
                    <ul className="grid gap-4">
                        <li className="flex items-center gap-3">
                            <Wallet className="h-6 w-6 text-primary" />
                            <span className="font-medium text-primary ">Pay easily with M-Pesa.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Truck className="h-6 w-6 text-primary" />
                            <span className="font-medium text-primary">
                                We deliver in select Nairobi areas.
                            </span>
                        </li>
                    </ul>
                    <div className="space-y-2">
                        <p className="font-semibold">
                            Markets coming soon—follow us for updates!
                        </p>
                        <Button className="bg-[#EDA337] text-black hover:bg-[#EDA337]/90">
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Browse Products
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Wholesale & Trade: Open to enquiries. Get in touch to stock
                        Spicey-O.
                    </p>
                </div>
                <div className="rounded-xl bg-yellow-300 p-6">
                    <div className="relative overflow-hidden rounded-lg bg-orange-100 p-6">
                        <div className="absolute right-4 top-4 rounded-full bg-white p-2">
                            <Lightbulb className="h-6 w-6 text-orange-400" />
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <img
                                alt="Image"
                                className="mx-auto aspect-[1/2] overflow-hidden rounded-lg border-4 border-gray-800 object-cover object-center"
                                height="500"
                                src="https://placehold.co/250x500/F9E4C8/333?text=Spicey-O"
                                width="250"
                            />
                            <div className="space-y-2">
                                <p className="text-lg font-semibold">
                                    Easy Ordering on WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}