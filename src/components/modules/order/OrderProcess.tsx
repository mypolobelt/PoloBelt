import Image from 'next/image';
import React from 'react';

const OrderProcess = () => {
    const steps = [
        {
            number: 1,
            title: "Design & Specify",
            paragraphs: [
                "Drop us an email to describe what you want. The more detail and images of other belts/fabrics that you want to match will be a huge help.",
                "We can provide ideas and belt templates to help you design something unique.",
                "Our order form will include a breakdown of what we charge (which varies based on item, features and quantity)."
            ]
        },
        {
            number: 2,
            title: "Approval & Ordering",
            paragraphs: [
                "We will then provide you a design specification for your approval.",
                "When you are happy with the design, complete the order form to then make payment."
            ]
        },
        {
            number: 3,
            title: "Sourcing & Manufacture",
            paragraphs: [
                "Hand made guacho polo belts are of the highest quality and can take time to come together, regardless of quantity. At the time of ordering, we will advise the likely period of time before you will receive your belt.",
                "It can take a number of weeks, so do not hesitate to submit your order to avoid disappointment."
            ]
        }
    ]

    return (
        <section>
            <div className='bg-[#0f1526] p-5'>
                <div className="flex items-center justify-center">
                    <div className="bg-white border-4 border-black px-10 py-6 shadow-xl flex items-center gap-6">

                        <Image
                            src="/assets/logo.webp"
                            alt="Polo Belts Logo"
                            priority
                            className="object-cover"
                            width={80}
                            height={80}
                        />

                        {/* Brand Name */}
                        <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-800">
                            My Polo Belt
                        </h1>

                    </div>
                </div>
            </div>
            <div className='p-5'>
                <h1 className="text-5xl font-semibold text-center my-16 text-gray-900">
                    THE ORDERING PROCESS
                </h1>

                <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-5">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                                {step.number}. {step.title}
                            </h2>

                            <div className="space-y-6 text-center">
                                {step.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-gray-600 text-base">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default OrderProcess;