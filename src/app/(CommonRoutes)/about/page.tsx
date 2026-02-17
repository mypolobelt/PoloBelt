import AboutSection from '@/components/modules/about/AboutSection';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "About - Polo Belt",
    description: " Learn about Polo Belt, our mission, and the team behind the brand. Discover our commitment to quality, style, and customer satisfaction. Get to know us better and see why Polo Belt is the perfect choice for your fashion needs.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <AboutSection />
            </Suspense>
        </div>
    );
};

export default page;