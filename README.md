Student Grade Generator - A simple JavaScript program to generate a student's grade based on their marks
=======================
**How to Use**
1. Open the JavaScript console in your web browser or a Node.js environment.
2. Copy and paste the code into the console.
3. Run the `studentGradeGenerator()` function by typing `studentGradeGenerator()` and pressing Enter.
4. Enter your marks (between 0 and 100) when prompted.
5. The program will log the corresponding grade (A, B, C, D, or E) to the console.
**Grading Scale**
The grading scale used is as follows:
* A: 80-100
* B: 60-79
* C: 50-59
* D: 40-49
* E: 0-39
**NB**
* Invalid input (non-numeric or out of range) will result in "Invalid" being logged to the console.
* This program does not store or track student grades; it is a simple, one-time calculation.


Speed Detector - A simple JavaScript program to detect the speed of a car and issue demerit points or                      suspend the license if the speed exceeds the limit.
==============
**How to Use**
1. Open the JavaScript console in your web browser or a Node.js environment.
2. Copy and paste the code into the console.
3. Run the `speedDetector()` function by typing `speedDetector()` and pressing Enter.
4. Enter the speed of the car (in km/h) when prompted.
5. The program will log the result to the console:
	* "Ok" if the speed is below 70 km/h.
	* The number of demerit points if the speed is above 70 km/h but below the suspension limit.
	* "License Suspended" if the speed is excessively high and warrants license suspension.
**Demerit Points System**
The demerit points system used is as follows:
* For every 5 km/h above 70 km/h, 1 demerit point is issued.
* If the total demerit points exceed 12, the license is suspended.
**Examples**
* If the input speed is 60 km/h, the output will be "Ok".
* If the input speed is 85 km/h, the output will be "You have 3 demerit points".
* If the input speed is 120 km/h, the output will be "License Suspended".
**NB**
* Invalid input (non-numeric or negative) will result in incorrect results.
* This program does not store or track driver information; it is a simple, one-time calculation.


