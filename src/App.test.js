import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the questions module
jest.mock('./questions', () => ({
  getQuestions: jest.fn()
}));

test('renders quiz app title', async () => {
  const mockQuestions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      topic: 'Math'
    }
  ];
  require('./questions').getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Quiz App')).toBeInTheDocument();
  });
});

test('displays first question', async () => {
  const mockQuestions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      topic: 'Math'
    }
  ];
  require('./questions').getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
  });
});

test('allows selecting an answer', async () => {
  const mockQuestions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      topic: 'Math'
    }
  ];
  require('./questions').getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);
  await waitFor(() => {
    const optionButton = screen.getByText('4');
    fireEvent.click(optionButton);
    expect(optionButton).toHaveClass('MuiButton-contained');
  });
});

test('shows submit button after 10 questions or at end', async () => {
  // Mock more questions for testing
  const mockQuestions = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    question: `Question ${i + 1}?`,
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    topic: 'Test'
  }));

  require('./questions').getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Question 1 of 12')).toBeInTheDocument();
  });

  // Answer first 9 questions
  for (let i = 0; i < 9; i++) {
    const optionButton = screen.getByText('A');
    fireEvent.click(optionButton);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
  }

  // Answer 10th question
  const optionButton = screen.getByText('A');
  fireEvent.click(optionButton);

  // Should show Submit Quiz button now
  expect(screen.getByText('Submit Quiz')).toBeInTheDocument();
  // Should also show Continue to Next button since there are more questions
  expect(screen.getByText('Continue to Next')).toBeInTheDocument();
});

test('calculates results correctly for first 10 questions', async () => {
  const mockQuestions = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    question: `Question ${i + 1}?`,
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    topic: 'Test'
  }));

  require('./questions').getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Question 1 of 15')).toBeInTheDocument();
  });

  // Answer 10 questions correctly
  for (let i = 0; i < 10; i++) {
    const optionButton = screen.getByText('A');
    fireEvent.click(optionButton);
    const button = screen.getByRole('button', { name: i === 9 ? 'Submit Quiz' : 'Next' });
    fireEvent.click(button);
  }

  // Check results
  await waitFor(() => {
    expect(screen.getByText('Score: 10/10')).toBeInTheDocument();
  });
});
