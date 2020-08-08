import java.util.ArrayList;
import java.util.List;

public class Quiz {
    List<Question> questions = new ArrayList<>(5);
    int score = 0;
    int index = 0;

    public Quiz(){
        questions.add(new Question("[3, 1, 4, 1, 5, <font style=\"color:red\"><b> ? </b></font> ]", "9"));
        questions.add(new Question("[1, 1, 2, 3, 5, <font style=\"color:red\"><b> ? </b></font> ]", "8"));
        questions.add(new Question("[1, 4, 9, 16, 25, <font style=\"color:red\"><b> ? </b></font> ]", "36"));
        questions.add(new Question("[2, 3, 5, 7, 11, <font style=\"color:red\"><b> ? </b></font> ]", "13"));
        questions.add(new Question("[1, 2, 4, 8, 16, <font style=\"color:red\"><b> ? </b></font> ]", "32"));
    }

    public int getNumCorrect() {
        return this.score;
    }

    public String getCurrentQuestion() {
        return this.questions.get(index).getQuestion();
    }

    public boolean isCorrect(String answer) {
        if(answer.equals(this.questions.get(index).getAnswer())) return true;

        return false;
    }

    public void scoreAnswer() {
        this.index ++;
        this.score ++;
    }

    public int getNumQuestions() {
        return this.questions.size();
    }

    public int getCurrentQuestionIndex() {
        return this.index;
    }
}
