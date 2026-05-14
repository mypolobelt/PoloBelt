import { BeltCanvas } from "@/components/belt_design/BeltCanvas"

interface FixedBottomCanvasProps {
    gridData: string[][]
    leatherColor: string
}

export const FixedBottomCanvas = ({ gridData, leatherColor }: FixedBottomCanvasProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t-2 shadow-lg">
            <div className="w-full flex justify-center p-2 sm:p-3 overflow-x-auto">
                <BeltCanvas gridData={gridData} leatherColor={leatherColor} />
            </div>
        </div>
    )
}