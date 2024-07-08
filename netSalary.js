function netSalary(){
    let basicSalary = parseInt(prompt("Enter Basic Salary: "));
    let benefits = parseInt(prompt("Enter Benefits Received:"));
    let grossSalary = basicSalary + benefits;

//This is to calculate paye
    // Assigned the paye
    let paye = 0;
        // Then added conditions for respective input values
        if (grossSalary <= 24000){
            paye = grossSalary * 0.1;
        }
        else if (grossSalary >= 24001 && grossSalary < 32334){
            paye = 2400 + grossSalary * 0.15;
        }
        else if (grossSalary >= 32334 && grossSalary < 500001){
            paye =  6333 + grossSalary * 0.2;
        }
        else if (grossSalary >= 500001 && grossSalary < 800001){
            paye = 11333 + grossSalary * 0.25;
        }
        else if (grossSalary > 800001){
            paye = 16333 + grossSalary * 0.3;
        }

// nhifDeductions
    let nhifDeductions = 0;
        if (nhifDeductions < 6000){
            nhifDeductions = 150;
        }
        else if (nhifDeductions >= 6000 && nhifDeductions < 8000){
            nhifDeductions = 300;
        }
        else if (nhifDeductions >= 8000 && nhifDeductions < 12000){
            nhifDeductions = 400;
        }
        else if (nhifDeductions >= 12000 && nhifDeductions < 15000){
            nhifDeductions = 500;
        }
        else if (nhifDeductions >= 15000 && nhifDeductions < 20000){
            nhifDeductions = 600;
        }
        else if (nhifDeductions >= 20000 && nhifDeductions < 25000){
            nhifDeductions = 750;
        }
        else if (nhifDeductions >= 25000 && nhifDeductions < 30000){
            nhifDeductions = 850;
        }
        else if (nhifDeductions >= 30000 && nhifDeductions < 35000){
            nhifDeductions = 900;
        }
        else if (nhifDeductions >= 35000 && nhifDeductions < 40000){
            nhifDeductions = 950;
        }
        else if (nhifDeductions >= 40000 && nhifDeductions < 45000){
            nhifDeductions = 1000;
        }
        else if (nhifDeductions >= 45000 && nhifDeductions < 50000){
            nhifDeductions = 1100;
        }
        else if (nhifDeductions >= 50000 && nhifDeductions < 60000){
            nhifDeductions = 1200;
        }
        else if (nhifDeductions >= 60000 && nhifDeductions < 70000){
            nhifDeductions = 1300;
        }
        else if (nhifDeductions >= 70000 && nhifDeductions < 80000){
            nhifDeductions = 1400;
        }
        else if (nhifDeductions >= 80000 && nhifDeductions < 90000){
            nhifDeductions = 1500;
        }
        else if (nhifDeductions >= 90000 && nhifDeductions < 100000){
            nhifDeductions = 1600;
        }
        else if (nhifDeductions >= 100000){
            nhifDeductions = 1700;
        }

// NSSF Deductions
    let nssfDeductions = grossSalary * 0.06;

// Calculate the net salary
    let netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

// Finally
    console.log(`GrossSalary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);   
    }

netSalary()
