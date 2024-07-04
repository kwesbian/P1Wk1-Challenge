function netSalary(){
    let basicSalary = parseInt(prompt("Enter Basic Salary: "));
    let benefits = parseInt(prompt("Enter Benefits Received:"));

    let grossSalary = basicSalary + benefits;

//This is to calculate paye
    // Assigned the paye
    let paye = 0;
    
        // Then added connditions for respective input values
        if (grossSalary <= 24000){
            paye = grossSalary * 0.1;
        }
        else if (grossSalary >= 24001 && grossSalary <= 32333){
            paye = 2400 + grossSalary * 0.15;
        }
        else if (grossSalary >= 32334 && grossSalary <= 500000){
            paye =  6333 + grossSalary * 0.2;
        }
        else if (grossSalary >= 500001 && grossSalary <= 800000){
            paye = 11333 + grossSalary * 0.25;
        }
        else if (grossSalary > 800000){
            paye = 16333 + grossSalary * 0.3;
        }

// nhifDeductions
    let nhifDeductions = 0;
        if (nhifDeductions <= 5999){
            nhifDeductions = 150;
        }
        else if (nhifDeductions >= 6000 && nhifDeductions <= 7999){
            nhifDeductions = 300;
        }
        else if (nhifDeductions >= 8000 && nhifDeductions <= 11999){
            nhifDeductions = 400;
        }
        else if (nhifDeductions >= 12000 && nhifDeductions <= 14999){
            nhifDeductions = 500;
        }
        else if (nhifDeductions >= 15000 && nhifDeductions <= 19999){
            nhifDeductions = 600;
        }
        else if (nhifDeductions >= 20000 && nhifDeductions <= 24999){
            nhifDeductions = 750;
        }
        else if (nhifDeductions >= 25000 && nhifDeductions <= 29999){
            nhifDeductions = 850;
        }
        else if (nhifDeductions >= 30000 && nhifDeductions <= 34999){
            nhifDeductions = 900;
        }
        else if (nhifDeductions >= 35000 && nhifDeductions <= 39999){
            nhifDeductions = 950;
        }
        else if (nhifDeductions >= 40000 && nhifDeductions <= 44999){
            nhifDeductions = 1000;
        }
        else if (nhifDeductions >= 45000 && nhifDeductions <= 49999){
            nhifDeductions = 1100;
        }
        else if (nhifDeductions >= 50000 && nhifDeductions <= 59999){
            nhifDeductions = 1200;
        }
        else if (nhifDeductions >= 60000 && nhifDeductions <= 69999){
            nhifDeductions = 1300;
        }
        else if (nhifDeductions >= 70000 && nhifDeductions <= 79999){
            nhifDeductions = 1400;
        }
        else if (nhifDeductions >= 80000 && nhifDeductions <= 89999){
            nhifDeductions = 1500;
        }
        else if (nhifDeductions >= 90000 && nhifDeductions <= 99999){
            nhifDeductions = 1600;
        }
        else if (nhifDeductions >= 100000){
            nhifDeductions = 1700;
        }

// NSSF Deductions
    let nssfDeductions = grossSalary * 0.06;

// Finally
    console.log("GrossSalary: ${grossSalary}");
    console.log("PAYE: ${paye}");
    console.log("NHIF Deductions: ${nhifDeductions");
    console.log("NSSF Deductions: ${nssfDeductions");
    console.log("Net Salary: ${netSalary}");   
    }