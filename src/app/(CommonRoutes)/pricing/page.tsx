import PriceInfo from '@/components/modules/price/PriceInfo';
// import MyPoloBeltInfo from '@/components/modules/price/Pricing';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Customer Information - Polo Belt",
    description: "Learn about our customer information for bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <PriceInfo />
                {/* <MyPoloBeltInfo /> */}
            </Suspense>
        </div>
    );
};

export default page;