import Sizing from '@/components/modules/size/Sizing';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <Sizing/>
            </Suspense>
        </div>
    );
};

export default page;