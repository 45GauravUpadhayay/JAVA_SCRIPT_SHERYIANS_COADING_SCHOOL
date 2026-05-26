/*  

Write a Function getGrade(Score) that:
. Takes a Student's marks (0 to 100)
. Return the Grade based on this logic
90-100 A+
80-89 A
70-79 B
60-69 C
33-59 D
0-32 Fail
Anything Else     Invalid marks 

*/


function getGrade(score){
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 33 && score <= 59) return "D";
    else if (score >= 0 && score <= 32)  return "Fail";
    else return "Invalid Marks";
}


console.log(getGrade(-85));


