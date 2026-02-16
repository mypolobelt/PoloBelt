import IntricateStampsGallery from '@/components/modules/intricate_stamps/IntricateStamps';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

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