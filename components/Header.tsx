
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          دليل بناء التطبيقات التفاعلي
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          خطواتك نحو إطلاق تطبيق تعليمي ناجح، مدعومة بالذكاء الاصطناعي.
        </p>
      </div>
    </header>
  );
};
