
import type React from 'react';

export interface SubStep {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export interface Stage {
  id: number;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subSteps: SubStep[];
}
