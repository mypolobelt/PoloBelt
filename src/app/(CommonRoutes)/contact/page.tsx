import ContactSection from '@/components/modules/contact/ContactSection';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: "Contact - Polo Belt",
    description: "Contact us for more information about our bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <ContactSection />
            </Suspense>
        </div>
    );
};

export default page;