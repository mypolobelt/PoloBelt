import BespokeBeltsGallery from '@/components/modules/bespoke_belts/Bespoke_Belts';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

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