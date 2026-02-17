import DogCollarsGallery from '@/components/modules/dog_collor/Dog_Collor';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Dog Collars & Leads - Polo Belt",
    description: "Discover our range of dog collars and leads made in Argentina.",
};

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