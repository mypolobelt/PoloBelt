import Sizing from '@/components/modules/size/Sizing';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Sizing - Polo Belt",
    description: "Learn about sizing for our bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <Sizing />
            </Suspense>
        </div>
    );
};

export default page;