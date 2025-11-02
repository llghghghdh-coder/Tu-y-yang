
import React from 'react';
import type { SubStep as SubStepType } from '../types';
import { LightbulbIcon } from './icons';

interface SubStepProps {
  subStep: SubStepType;
  isCompleted: boolean;
  onToggle: () => void;
  onGetAdvice: () => void;
}

export const SubStep: React.FC<SubStepProps> = ({ subStep, isCompleted, onToggle, onGetAdvice }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start flex-1">
        <div className="flex items-center h-5 pt-1">
          <input
            id={subStep.id}
            type="checkbox"
            checked={isCompleted}
            onChange={onToggle}
            className="sr-only"
          />
          <label
            htmlFor={subStep.id}
            className={`cursor-pointer flex items-center justify-center h-6 w-6 rounded-md border-2 transition-colors ${
              isCompleted
                ? 'bg-indigo-600 border-indigo-600'
                : 'bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
            }`}
          >
            {isCompleted && (
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </label>
        </div>
        <div className="ml-4 mr-4 text-sm">
          <h3 className={`font-bold text-gray-900 dark:text-gray-100 ${isCompleted ? 'line-through' : ''}`}>
            {subStep.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{subStep.description}</p>
        </div>
      </div>
      <button
        onClick={onGetAdvice}
        className="flex items-center gap-2 w-full sm:w-auto justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors"
      >
        <LightbulbIcon className="h-4 w-4" />
        <span>احصل على نصيحة</span>
      </button>
    </div>
  );
};
