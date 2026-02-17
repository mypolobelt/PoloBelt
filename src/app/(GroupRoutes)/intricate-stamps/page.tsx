import IntricateStampsGallery from '@/components/modules/intricate_stamps/IntricateStamps';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Intricate Stamps - Polo Belt",
    description: "Discover our range of intricate stamps for bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <IntricateStampsGallery />
            </Suspense>
        </div>
    );
};

export default page;