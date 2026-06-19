import { BeltCanvas } from "@/components/belt_design/BeltCanvas"
import { RefObject } from "react"

interface FixedBottomCanvasProps {
    gridData: string[][]
    leatherColor: string
    canvasRef?: RefObject<HTMLCanvasElement>
}

export const FixedBottomCanvas = ({ gridData, leatherColor, canvasRef }: FixedBottomCanvasProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t-2 shadow-lg">
            <div className="w-full flex justify-center p-2 sm:p-3 overflow-x-auto">
                <BeltCanvas ref={canvasRef} gridData={gridData} leatherColor={leatherColor} />
            </div>
        </div>
    )
}