import ThreadChart from '@/components/modules/thread-chart/thread-chart';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: "Thread Color Chart - Polo Belt",
    description: "Browse our complete thread color chart with 200+ shade options for bespoke Argentine style polo belts.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <ThreadChart />
            </Suspense>
        </div>
    );
};

export default page;