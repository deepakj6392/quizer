import React, { useState, useEffect } from "react";
import "./App.css";
import { getQuestions, Question } from "./questions";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Button, Typography, Card, CardContent, Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { blue, green, red, orange } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface QuizResult {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface Attempt {
  date: string;
  score: number;
  total: number;
  percentage: number;
  stars: number;
}

const createAppTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: blue,
    secondary: green,
    error: red,
    warning: orange,
  },
});

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [stars, setStars] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Load questions from external file
  useEffect(() => {
    const loadQuestions = async () => {
      const questionsData = await getQuestions();
      setQuestions(questionsData);
      setAnswers(new Array(questionsData.length).fill(""));
    };

    loadQuestions();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestionIndex >= 9 || currentQuestionIndex === questions.length - 1) {
      calculateResults(newAnswers);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    }
  };

  const calculateResults = (finalAnswers: string[]) => {
    let correctCount = 0;
    const maxQuestions = Math.min(10, questions.length);
    finalAnswers.slice(0, maxQuestions).forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setStars(Math.floor((correctCount / maxQuestions) * 5));
    setShowResults(true);
  };

  // ✅ Save the attempt only AFTER results are shown (and score updated)
  useEffect(() => {
    if (showResults && questions.length > 0) {
      const maxQuestions = Math.min(10, questions.length);
      const attempt: Attempt = {
        date: new Date().toLocaleString(),
        score,
        total: maxQuestions,
        percentage: Math.round((score / maxQuestions) * 100),
        stars: Math.floor((score / maxQuestions) * 5),
      };

      const previousAttempts: Attempt[] = JSON.parse(
        localStorage.getItem("quizAttempts") || "[]"
      );
      // Avoid saving duplicate of same attempt (if React renders twice)
      const last = previousAttempts[previousAttempts.length - 1];
      if (!last || last.date !== attempt.date) {
        previousAttempts.push(attempt);
        localStorage.setItem("quizAttempts", JSON.stringify(previousAttempts));
      }
    }
  }, [showResults, score, questions.length]);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setAnswers(new Array(questions.length).fill(""));
    setShowResults(false);
    setScore(0);
    setStars(0);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (i < count ? "⭐" : "☆")).join(
      ""
    );
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createAppTheme(darkMode ? 'dark' : 'light');

  if (questions.length === 0) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h4">Loading questions...</Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  // ✅ Results Screen
  if (showResults) {
    const results: QuizResult[] = questions.map((q, index) => ({
      question: q.question,
      userAnswer: answers[index],
      correctAnswer: q.correctAnswer,
      isCorrect: answers[index] === q.correctAnswer,
    }));

    // Load all previous attempts
    const allAttempts: Attempt[] = JSON.parse(
      localStorage.getItem("quizAttempts") || "[]"
    );
    // ✅ Exclude current one from “Past Attempts” display
    const previousAttempts = allAttempts.slice(0, -1);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Quiz Results
            </Typography>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          <Card sx={{ mb: 4, bgcolor: 'secondary.light' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Score: {score}/{Math.min(10, questions.length)}
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {renderStars(stars)}
              </Typography>
              <Typography variant="h6">
                Percentage: {Math.round((score / Math.min(10, questions.length)) * 100)}%
              </Typography>
            </CardContent>
          </Card>

          {previousAttempts.length === 0 && (
            <Typography variant="body1" sx={{ mb: 2 }}>
              This was your first attempt!
            </Typography>
          )}

          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Button variant="contained" color="warning" onClick={resetQuiz} size="large">
              Take Quiz Again
            </Button>
          </Box>

          <Typography variant="h5" gutterBottom>
            Detailed Results
          </Typography>
          <Grid container spacing={2}>
            {results.slice(0, 10).map((result, index) => (
              <Grid size={{xs:12, sm:6}} key={index}>
                <Card key={index} sx={{ bgcolor: result.isCorrect ? 'success.light' : 'error.light' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Question {index + 1}: {result.question}
                    </Typography>
                    <Typography variant="body1">
                      Your answer: {result.userAnswer || "No answer"}
                    </Typography>
                    <Typography variant="body1">
                      Correct answer: {result.correctAnswer}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {result.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Attempt History */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Past Attempts
            </Typography>
            {previousAttempts.length === 0 ? (
              <Typography variant="body1">No previous attempts found.</Typography>
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Score</TableCell>
                      <TableCell>Percentage</TableCell>
                      <TableCell>Stars</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {previousAttempts.map((a, index) => (
                      <TableRow key={index}>
                        <TableCell>{a.date}</TableCell>
                        <TableCell>{a.score}/{a.total}</TableCell>
                        <TableCell>{a.percentage}%</TableCell>
                        <TableCell>{renderStars(a.stars)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  // ✅ Quiz Screen
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            <Box component="img" src="/quiz.png" alt="" sx={{ height: 40, width: 40, mr: 1, verticalAlign: 'middle' }} />
            Quiz App
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Question {currentQuestionIndex + 1} of {questions.length}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {currentQuestion.question}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Topic:</strong> {currentQuestion.topic}
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{ mb: 4 }}>
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === option ? "contained" : "outlined"}
              color="primary"
              fullWidth
              size="large"
              onClick={() => handleAnswerSelect(option)}
              sx={{ py: 2, mb: 1, textTransform: 'none', display: 'block' }}
            >
              {option}
            </Button>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {currentQuestionIndex >= 9 ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleNext}
                disabled={!selectedAnswer}
              >
                Submit Quiz
              </Button>
              {currentQuestionIndex < questions.length - 1 && (
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => {
                    const newAnswers = [...answers];
                    newAnswers[currentQuestionIndex] = selectedAnswer;
                    setAnswers(newAnswers);
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setSelectedAnswer("");
                  }}
                  disabled={!selectedAnswer}
                >
                  Continue to Next
                </Button>
              )}
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Next
            </Button>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
