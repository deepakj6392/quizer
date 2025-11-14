
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

const questionFiles: Record<string, () => Promise<any>> = {
  "15-11-2025": () => import("./questions/questions-13112025")
};

export const getQuestions = async (): Promise<Question[]> => {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB").replace(/\//g, "-");

  const loader = questionFiles[dateStr] || (() => import("./questions/questions-default"));
  const module = await loader();
  return module.QUESTIONS_DATA;
};


