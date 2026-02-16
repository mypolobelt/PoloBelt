import OrderProcess from '@/components/modules/order/OrderProcess';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

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