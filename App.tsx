
import React, { useState, useCallback } from 'react';
import { STAGES } from './constants';
import type { SubStep as SubStepType } from './types';
import { Header } from './components/Header';
import { StageCard } from './components/StageCard';
import { AiModal } from './components/AiModal';
import { getAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [expandedStageId, setExpandedStageId] = useState<number | null>(1);
  const [completedSubSteps, setCompletedSubSteps] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', advice: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleStage = (stageId: number) => {
    setExpandedStageId(prevId => (prevId === stageId ? null : stageId));
  };

  const handleToggleSubStep = (subStepId: string) => {
    setCompletedSubSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subStepId)) {
        newSet.delete(subStepId);
      } else {
        newSet.add(subStepId);
      }
      return newSet;
    });
  };

  const handleGetAdvice = useCallback(async (subStep: SubStepType) => {
    setModalContent({ title: `نصيحة حول: ${subStep.title}`, advice: '' });
    setIsLoading(true);
    setIsModalOpen(true);
    try {
      const advice = await getAdvice(subStep.prompt);
      setModalContent(prev => ({ ...prev, advice }));
    } catch (error) {
      console.error("Failed to get advice from Gemini:", error);
      setModalContent(prev => ({ ...prev, advice: 'عذراً، حدث خطأ أثناء جلب النصيحة. الرجاء المحاولة مرة أخرى.' }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {STAGES.map(stage => (
            <StageCard
              key={stage.id}
              stage={stage}
              isExpanded={expandedStageId === stage.id}
              completedSubSteps={completedSubSteps}
              onToggleStage={() => handleToggleStage(stage.id)}
              onToggleSubStep={handleToggleSubStep}
              onGetAdvice={handleGetAdvice}
            />
          ))}
        </div>
      </main>
      <AiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        advice={modalContent.advice}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
