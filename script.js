function generateMarksheet() {
    // Get marks from input fields
    var marks1 = parseFloat(document.getElementById('subject1').value) || 0;
    var marks2 = parseFloat(document.getElementById('subject2').value) || 0;
    var marks3 = parseFloat(document.getElementById('subject3').value) || 0;
    var marks4 = parseFloat(document.getElementById('subject4').value) || 0;
    var marks5 = parseFloat(document.getElementById('subject5').value) || 0;
    
    // Total marks
    var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    
    // Calculate percentage
    var percentage = (totalMarks / 500) * 100;
    
    // Determine grade based on percentage
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    // Display result
    document.getElementById('result').innerHTML = `
        Total Marks: ${totalMarks}/500<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: <span class="grade">${grade}</span>
    `;
}