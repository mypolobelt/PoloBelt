import { DesignPresets } from "@/components/belt_design/DesignPresets"

interface Stage1ChooseDesignProps {
    onLoadPreset: (presetId: string) => void
}

export const Stage1ChooseDesign = ({ onLoadPreset }: Stage1ChooseDesignProps) => {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border p-6 rounded-none shadow-lg">
                    <DesignPresets onLoadPreset={onLoadPreset} />
                </div>
                <div className="mt-4 text-center text-sm text-charcoal">
                    Can&apos;t find the design you want?{' '}
                    <a href="mailto:sales@mypolobelt.com" className="text-primary underline hover:text-primary/80">
                        Email
                    </a>{' '}
                    us!
                </div>
            </div>
        </section>
    )
}