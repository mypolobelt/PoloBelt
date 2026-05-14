import BeltMaker from '@/components/modules/belt_maker/BeltMaker';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Belt Maker - Polo Belt",
    description: " Design your own custom belt with our interactive Belt Maker tool. Choose from a variety of leather colors, buckle finishes, and thread options to create a unique belt that reflects your personal style. Start designing your perfect belt today!",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <BeltMaker />
            </Suspense>
        </div>
    );
};

export default page;