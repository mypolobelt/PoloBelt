import OrderProcess from '@/components/modules/order/OrderProcess';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Ordering Process - Polo Belt",
    description: "Learn about our ordering process for bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <OrderProcess />
            </Suspense>
        </div>
    );
};

export default page;