import ContactSection from '@/components/modules/contact/ContactSection';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

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