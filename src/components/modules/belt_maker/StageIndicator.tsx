import { Stage } from "./useBeltDesign"

interface StageIndicatorProps {
    currentStage: Stage
}

const labels = ['Choose Design', 'Customise', 'Project Specification', 'Your Details']

export const StageIndicator = ({ currentStage }: StageIndicatorProps) => {
    return (
        <div>
            <div className="flex justify-center items-center gap-2 sm:gap-4 mb-8">
                {[1, 2, 3, 4].map((stage) => (
                    <div key={stage} className="flex items-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${currentStage > stage
                                ? 'bg-primary text-white'
                                : currentStage === stage
                                    ? 'border border-primary text-primary'
                                    : 'bg-gray-200 text-gray-500'
                            }`}>
                            {currentStage > stage ? (
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                stage
                            )}
                        </div>
                        {stage < 4 && (
                            <div className={`w-8 sm:w-12 h-1 mx-1 sm:mx-2 transition-all ${currentStage > stage ? 'bg-primary' : 'bg-gray-200'
                                }`} />
                        )}
                    </div>
                ))}
            </div>
            <div className="text-center mb-6">
                <span className="text-lg md:text-xl font-bold">
                    Stage {currentStage}: {labels[currentStage - 1]}
                </span>
            </div>
        </div>
    )
}