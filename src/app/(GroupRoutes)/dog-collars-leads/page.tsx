import DogCollarsGallery from '@/components/modules/dog_collor/Dog_Collor';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <DogCollarsGallery />
            </Suspense>
        </div>
    );
};

export default page;