import { assets } from "../utils";

const Foundation = () => {
    return (
        <section className="py-10 px-3">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch gap-10">
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <h2 className="text-[28px] sm:text-4xl lg:text-[32px] font-bold text-gray-800 leading-tight pb-8">
                                Nutrition is the foundation for longer, healthier lives in dogs.
                            </h2>

                            <p className="text-[#6B7280] font-light text-[16px] sm:text-[16px] text-justify tracking-tight mb-8">
                                Invest in your dog's future with our scientifically formulated
                                superfood-powered supplements. Give them the nutrition they
                                deserve and watch them thrive with vitality, energy, and the joy
                                of a longer, healthier life.
                            </p>

                            <div>
                                <h4 className="font-semibold text-[#161723] mb-4">Key Points:</h4>

                                <div className="flex items-start gap-4 border-b border-gray-300 pb-4 mb-4">
                                    <span className="text-orange-500 font-bold text-2xl min-w-[60px]">97%</span>
                                    <p className="text-[#6B7280] font-light text-sm sm:text-[15px] leading-relaxed text-justify">
                                        Dogs choose our dog food over leading brands because of its
                                        real functional ingredients and delicious flavor.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4 border-b border-gray-300 pb-4 mb-4">
                                    <span className="text-orange-500 font-bold text-2xl min-w-[60px]">84%</span>
                                    <p className="text-[#6B7280] font-light text-sm sm:text-[15px] leading-relaxed text-justify">
                                        Our dog food provides superior nutrition and a patented probiotic
                                        for optimal nutrient absorption.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4 pb-4">
                                    <span className="text-orange-500 font-bold text-2xl min-w-[60px]">92%</span>
                                    <p className="text-[#6B7280] text-justify font-light text-sm sm:text-[15px] leading-relaxed">
                                        Our dog food's high protein and fat digestibility contribute
                                        to ideal stool quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="bg-orange-500 hover:bg-orange-600 transition text-xs sm:text-sm md:text-base text-white font-semibold w-full sm:w-fit px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg shadow-md">
                                Give your furry friend the gift of wholesome nutrition
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 flex">
                        <div className="w-full rounded-2xl overflow-hidden">
                            <img
                                src={assets.happy_dog_bites}
                                alt="Happy Dog"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Foundation;