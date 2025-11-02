
import React from 'react';
import type { Stage, SubStep as SubStepType } from '../types';
import { SubStep } from './SubStep';

interface StageCardProps {
  stage: Stage;
  isExpanded: boolean;
  completedSubSteps: Set<string>;
  onToggleStage: () => void;
  onToggleSubStep: (subStepId: string) => void;
  onGetAdvice: (subStep: SubStepType) => void;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  isExpanded,
  completedSubSteps,
  onToggleStage,
  onToggleSubStep,
  onGetAdvice,
}) => {
  const completedCount = stage.subSteps.filter(ss => completedSubSteps.has(ss.id)).length;
  const totalCount = stage.subSteps.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
      <button
        className="w-full p-6 text-right flex items-center justify-between focus:outline-none"
        onClick={onToggleStage}
      >
        <div className="flex items-center">
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mr-4 ml-4">
            <stage.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{stage.title}</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">{completedCount} / {totalCount} مكتمل</span>
          </div>
        </div>
        <svg
          className={`h-6 w-6 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="px-6 pb-2">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            {stage.subSteps.map(subStep => (
              <SubStep
                key={subStep.id}
                subStep={subStep}
                isCompleted={completedSubSteps.has(subStep.id)}
                onToggle={() => onToggleSubStep(subStep.id)}
                onGetAdvice={() => onGetAdvice(subStep)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
