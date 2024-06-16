export function Pricing() {
    return (
        <section id="pricing" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Friendly Pricing</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at JSON Scrap you will only be charged on what you use. No surprise expenses.</p>
                <div className="w-full flex items-center justify-center gap-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}