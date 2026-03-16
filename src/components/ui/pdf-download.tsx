'use client';

import { Download } from 'lucide-react';
import { Button } from './button';

interface PDFDownloadProps {
    fileName: string;
    label?: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    className?: string;
}

export const PDFDownload = ({
    fileName,
    label = 'Download PDF',
    variant = 'default',
    className = '',
}: PDFDownloadProps) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/assets/${fileName}`;
        link.download = fileName;
        link.click();
    };

    return (
        <Button
            onClick={handleDownload}
            variant={variant}
            className={className}
        >
            <Download className="mr-2 h-4 w-4" />
            {label}
        </Button>
    );
};
