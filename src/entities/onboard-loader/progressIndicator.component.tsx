import React from 'react';
import clsx from 'clsx';

interface ProgressIndicatorProps {
    steps: number;
    currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: steps }, (_, index) => (
                <div
                    key={index}
                    className={clsx(
                        'w-3 h-3 rounded-full',
                        index <= currentStep ? 'bg-[#F3AF81]' : 'bg-[#E8E8EA]',
                        ''

                    )}
                />
            ))}
        </div>
    );
};

export default ProgressIndicator;
