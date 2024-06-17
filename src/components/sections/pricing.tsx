import { Check, X } from "lucide-react";
import { CheckoutButton } from "../../app/_components/checkout-button";

export function Pricing() {
    return (
        <section id="pricing" className="bg-base-300">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Get Started</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at JSON Scrap you will only be charged on what you use.<br/> No surprise expenses.</p>
                <div className="w-full flex-col md:flex-row flex items-start justify-center gap-4">
                    <PricingPlan plan={{
                        title: "Free",
                        price: {
                            new: "0"
                        },
                        features: [
                            {
                                have: true,
                                feature: "30 requests for test"
                            },
                            {
                                have: false,
                                feature: "http web scrapping" 
                            }
                        ]
                    }}/>
                    <PricingPlan plan={{
                        title: "Monthly plan",
                        price: {
                            old: "39.90",
                            new: "19.90"
                        },
                        features: [
                            {
                                have: true,
                                feature: "unlimited requests"
                            },
                            {
                                have: true,
                                feature: "http web scrapping" 
                            }
                        ]
                    }}/>
                    <PricingPlan plan={{
                        title: "Anual plan",
                        price: {
                            old: "439.90",
                            new: "129.90"
                        },
                        features: [
                            {
                                have: true,
                                feature: "unlimited requests"
                            },
                            {
                                have: true,
                                feature: "http web scrapping" 
                            }
                        ]
                    }}/>        
                </div>
            </div>
        </section>
    )
}

type Plan = {
    title: string;
    price: {
        old?: string;
        new: string;
    },
    features: {
        have: boolean;
        feature: string;
    }[]
}

function PricingPlan({ plan: { title, price, features } }: { plan: Plan }) {
    return (
        <div className="card w-full text-left bg-base-100 shadow-xl text-accent-content">
            <div className="card-body">
                <h2 className="card-title mb-2">{ title }</h2>
                <h1 className=" text-5xl font-semibold">
                    {
                        price.old && (
                            <span className="text-sm mr-2 line-through">${price.old}</span>
                        )
                    }
                    ${ price.new }
                </h1>
                <div>
                    {
                        features.map(feature => {
                            return (
                                <div key={feature.feature} className="flex flex-row gap-2 pt-4">
                                    {
                                        feature.have ? (
                                            <Check/>
                                        ) : (
                                            <X/>
                                        )
                                    }
                                    <p>{ feature.feature }</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="card-actions justify-end mt-16">
                    <CheckoutButton priceId="price_1PSTsxFKCHQNNnlKx56FsCPz"/>
                    <button className="btn btn-primary btn-outline">Buy Now</button>
                </div>
            </div>
        </div>
    )
}