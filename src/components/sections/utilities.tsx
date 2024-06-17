import { ArrowDown, ArrowDown01, ArrowRight, Check } from "lucide-react";

export function Utilities() {
    return (
        <section id="utilities" className="px-4 bg-base-300 items-center w-full justify-center flex pb-40">
            <main className="flex flex-col max-w-4xl w-full">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-accent-content font-bold md:mb-4">Integrate systems</h1>
                <p className="py-6 max-w-2xl text-base-content text-sm md:text-lg lg:text-xl">With AI help, JSON Scrap can understand what you want and help your integration!</p>
                <div className="flex-col md:flex-row flex w-full justify-between items-start pt-8">
                    <div className="w-full">
                        <h1 className=" text-2xl text-neutral font-bold mb-4">Dirty Data</h1>
                        <div className="rounded-xl  text-neutral ">
                            <p>"Hello JSON SCRAP! I am sergio and i need a costomizable enterprise plan. My business has 10 developers and i want to know the best price you can do for me."</p>
                        </div>
                    </div>
                    <ArrowRight className="hidden md:block mx-8 translate-y-4 text-primary" size={128}/>
                    <ArrowDown className="block md:hidden my-8 self-center text-primary" size={32}/>
                    <div  className="w-full">
                        <h1 className=" text-2xl text-neutral font-bold mb-4">Structured data</h1>
                        <div className="rounded-xl text-neutral">
                            <div>
                                <pre>
                                    {
                                        JSON.stringify({
                                            name: "Sergio",
                                            subject: "Custom plan"
                                        }, null, 4)
                                    }
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}