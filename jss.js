const total_Score = parseInt(prompt(`enter total score`));
if (total_Score >= 95) {
    console.log("Grade: A");
} 
else if (total_Score >= 70) {
    console.log("Grade: B");
} 
else if (total_Score >= 65) {
    console.log("Grade: C");
}
 else if (total_Score >= 50) {
    console.log("Grade: D");
}
 else {
    console.log("Grade: F");
}
