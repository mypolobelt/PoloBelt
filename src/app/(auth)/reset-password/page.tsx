import ResetPassword from '@/components/modules/auth/ResetForm';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <ResetPassword />
            </Suspense>
        </div>
    );
};

export default page;