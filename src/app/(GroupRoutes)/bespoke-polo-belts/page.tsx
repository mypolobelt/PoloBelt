import BespokeBeltsGallery from '@/components/modules/bespoke_belts/Bespoke_Belts';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Bespoke Polo Belts - Polo Belt",
    description: "Discover our range of bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <BespokeBeltsGallery />
            </Suspense>
        </div>
    );
};

export default page;