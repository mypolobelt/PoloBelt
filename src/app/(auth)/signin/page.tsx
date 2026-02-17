import SignIn from '@/components/modules/auth/SignInForm';
import { Spinner } from '@/components/ui/spinner';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
    title: "Sign In - Polo Belt",
    description: "Sign in to your Polo Belt account.",
};

const page = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-64"><Spinner /></div>}>
                <SignIn />
            </Suspense>
        </div>
    );
};

export default page;