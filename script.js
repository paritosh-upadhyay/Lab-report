function generateReport() {
    const reportData = {
        patientName: document.getElementById('patientName').value,
        ageSex: document.getElementById('ageSex').value,
        referredBy: document.getElementById('referredBy').value,
        date: document.getElementById('date').value,
        cbcResults: [
            { test: "Hemoglobin", result: document.getElementById('hemoglobin').value, unit: "gm/dl", normalRange: "M(13 – 18) F(12 -16)" },
            { test: "TLC", result: document.getElementById('tlc').value, unit: "/c.mm", normalRange: "(4000 – 11000)" },
            { test: "RBC", result: document.getElementById('rbc').value, unit: "Mil/cmm", normalRange: "M(5 – 6.2) F(4.6 – 5.5)" },
            { test: "Neutrophils", result: document.getElementById('neutrophils').value, unit: "%", normalRange: "(40-75%)" },
            { test: "Lymphocytes", result: document.getElementById('lymphocytes').value, unit: "%", normalRange: "(20-45%)" },
            { test: "Eosinophils", result: document.getElementById('eosinophils').value, unit: "%", normalRange: "(1-6%)" },
            { test: "Monocytes", result: document.getElementById('monocytes').value, unit: "%", normalRange: "(2-8%)" },
            { test: "Basophils", result: document.getElementById('basophils').value, unit: "%", normalRange: "(0-1%)" },
            { test: "Platelet Count", result: document.getElementById('plateletCount').value, unit: "lakh/cmm", normalRange: "(1.5-4.0)" }
        ],
        widalResults: [
            {
                titer: "S Typhi ‘O’", results: [
                    document.getElementById('typhiO_1_20').value,
                    document.getElementById('typhiO_1_40').value,
                    document.getElementById('typhiO_1_80').value,
                    document.getElementById('typhiO_1_160').value,
                    document.getElementById('typhiO_1_320').value
                ]
            },
            {
                titer: "S Typhi ‘H’", results: [
                    document.getElementById('typhiH_1_20').value,
                    document.getElementById('typhiH_1_40').value,
                    document.getElementById('typhiH_1_80').value,
                    document.getElementById('typhiH_1_160').value,
                    document.getElementById('typhiH_1_320').value
                ]
            },
            {
                titer: "S Paratyphi ‘AH’", results: [
                    document.getElementById('paratyphiAH_1_20').value,
                    document.getElementById('paratyphiAH_1_40').value,
                    document.getElementById('paratyphiAH_1_80').value,
                    document.getElementById('paratyphiAH_1_160').value,
                    document.getElementById('paratyphiAH_1_320').value
                ]
            },
            {
                titer: "S Paratyphi ‘BH’", results: [
                    document.getElementById('paratyphiBH_1_20').value,
                    document.getElementById('paratyphiBH_1_40').value,
                    document.getElementById('paratyphiBH_1_80').value,
                    document.getElementById('paratyphiBH_1_160').value,
                    document.getElementById('paratyphiBH_1_320').value
                ]
            }
        ],
        bloodglucoseResults: [
            { test: "Random Glucose", result: document.getElementById('randomglucose').value, unit: "mg/dl", normalRange: "(80 - 160)mg" },
            { test: "Fasting Glucose", result: document.getElementById('fastingglucose').value, unit: "mg/dl", normalRange: "(65 -110)mg" },
            { test: "P.P. Glucose", result: document.getElementById('ppglucose').value, unit: "mg/dl", normalRange: "(80 - 140)mg" }
        ],
        liverfunctionResults: [
            { test: "Total Protein", result: document.getElementById('totalProtein').value, unit: "gm/dl", normalRange: "(6.4 - 8.3)gm" },
            { test: "Albumin", result: document.getElementById('albumin').value, unit: "gm/dl", normalRange: "(3.5 - 5.0)gm" },
            { test: "Globulin", result: document.getElementById('globulin').value, unit: "gm/dl", normalRange: "(2.3 - 3.5)gm" },
            { test: "Bilirubin Indirect", result: document.getElementById('bilirubinIndirect').value, unit: "gm/dl", normalRange: "(1.1 - 2.1)gm" },
            { test: "Bilirubin Total", result: document.getElementById('bilirubinTotal').value, unit: "mg/dl", normalRange: "(0.1 - 1.0)mg" },
            { test: "Bilirubin Direct", result: document.getElementById('bilirubinDirect').value, unit: "mg/dl", normalRange: "(0.1 - 0.3)mg" },
            { test: "SGOT", result: document.getElementById('sgot').value, unit: "IU/L", normalRange: "(10 - 35)IU" },
            { test: "SGPT", result: document.getElementById('sgpt').value, unit: "IU/L", normalRange: "(10 - 40)IU" },
            { test: "Alkaline Phosphatase", result: document.getElementById('alkalinePhosphatase').value, unit: "IU/L", normalRange: "(30 - 120)IU" }
        ],
        renalfunctionResults: [
            { test: "Blood Urea", result: document.getElementById('urea').value, unit: "mg/dl", normalRange: "(10 - 50)mg" },
            { test: "Serum Creatinine", result: document.getElementById('creatinine').value, unit: "mg/dl", normalRange: "(0.7 - 1.7)mg" },
            { test: "Serum Uric Acid", result: document.getElementById('uricAcid').value, unit: "mg/dl", normalRange: "(2.7 - 7.0)mg" },
            { test: "Serum Sodium", result: document.getElementById('sodium').value, unit: "mEq/L", normalRange: "(132 - 144)mEq/L" },
            { test: "Serum Potassium", result: document.getElementById('potassium').value, unit: "mEq/L", normalRange: "(3.6 - 5.0)mEq/L" },
            { test: "Serum Chloride", result: document.getElementById('chloride').value, unit: "mEq/L", normalRange: "(90 - 108)mEq/L" }
        ],
        semenAnalysisResults: [
            { test: "Color", result: document.getElementById('color').value, unit: "", normalRange: "" },
            { test: "Volume", result: document.getElementById('volume').value, unit: "", normalRange: "" },
            { test: "Appearance", result: document.getElementById('appearance').value, unit: "", normalRange: "" },
            { test: "Motility", result: document.getElementById('motility').value, unit: "%", normalRange: "(60.95%)" },
            { test: "Sperm Count", result: document.getElementById('spermCount').value, unit: "millions/ml", normalRange: "(60-180)" },
            { test: "pH", result: document.getElementById('ph').value, unit: "", normalRange: "(7.2-7.8)" },
            { test: "Fructose", result: document.getElementById('fructose').value, unit: "mg/dl", normalRange: "(150-300)" },
            { test: "Morphology", result: document.getElementById('morphology').value, unit: "", normalRange: "" }
        ],
        lipidProfileResults: [
            { test: "Serum Cholesterol", result: document.getElementById('cholesterol').value, unit: "mg/dl", normalRange: "(180-380)" },
            { test: "Triglycerides", result: document.getElementById('triglycerides').value, unit: "mg/dl", normalRange: "(35-150)" },
            { test: "HDL", result: document.getElementById('hdl').value, unit: "mg/dl", normalRange: "(35-60)" },
            { test: "LDL", result: document.getElementById('ldl').value, unit: "mg/dl", normalRange: "(0-150)" },
            { test: "VLDL", result: document.getElementById('vldl').value, unit: "mg/dl", normalRange: "(0.5-40)" },
            { test: "Total Lipid", result: document.getElementById('totalLipid').value, unit: "mg/dl", normalRange: "(400-800)" }
        ],
        urineAnalysisResults: [
            { test: "Volume", result: document.getElementById('uvolume').value, unit: "", normalRange: "" },
            { test: "Color", result: document.getElementById('ucolor').value, unit: "", normalRange: "" },
            { test: "Appearance", result: document.getElementById('uappearance').value, unit: "", normalRange: "" },
            { test: "Reaction", result: document.getElementById('reaction').value, unit: "", normalRange: "" },
            { test: "Specific Gtavity", result: document.getElementById('specificGtavity').value, unit: "", normalRange: "(1.016-1.003)" }
        ],
        chemicalUrineAnalysisResults: [
            { test: "Sugar", result: document.getElementById('sugar').value, unit: "", normalRange: "" },
            { test: "Urea", result: document.getElementById('urea').value, unit: "", normalRange: "" },
            { test: "Protein", result: document.getElementById('protein').value, unit: "", normalRange: "" },
            { test: "Bilesalt/ Bile Pegement", result: document.getElementById('bilesalt').value, unit: "", normalRange: "" },
            { test: "Urobilinogen", result: document.getElementById('urobilinogen').value, unit: "", normalRange: "" },
            { test: "Occult Blood", result: document.getElementById('occultblood').value, unit: "", normalRange: "" },
            { test: "Ketones Bodies", result: document.getElementById('ketones').value, unit: "", normalRange: "" }
        ],
        microscopicUrineAnalysisResults: [
            { test: "Leukocytes", result: document.getElementById('leukocytes').value, unit: "", normalRange: "" },
            { test: "Epithelial Cells", result: document.getElementById('epithelialCells').value, unit: "", normalRange: "" },
            { test: "Casts", result: document.getElementById('casts').value, unit: "", normalRange: "" },
            { test: "Crystals", result: document.getElementById('crystals').value, unit: "", normalRange: "" },
            { test: "Bacteria", result: document.getElementById('bacteria').value, unit: "", normalRange: "" },
            { test: "Spermotazoa", result: document.getElementById('spermotazoa').value, unit: "", normalRange: "" },
            { test: "Parasite", result: document.getElementById('parasite').value, unit: "", normalRange: "" }
        ],
        stutumResults: [
            { test: "Stain", result: document.getElementById('stain').value, unit: "", normalRange: "" },
            { test: "Result", result: document.getElementById('sresult').value, unit: "", normalRange: "" }
        ],
        stoolPhysicalResults: [
            { test: "Color", result: document.getElementById('stcolor').value, unit: "", normalRange: "" },
            { test: "Consistency", result: document.getElementById('stconsistency').value, unit: "", normalRange: "" },
            { test: "Mucus", result: document.getElementById('stmucus').value, unit: "", normalRange: "" }
        ],
        stoolChemicalResults: [
            { test: "Ph", result: document.getElementById('stph').value, unit: "", normalRange: "" },
            { test: "Occult Blood", result: document.getElementById('stocblood').value, unit: "", normalRange: "" }
        ],
        stoolMicroscopicResults: [
            { test: "Pus Cells", result: document.getElementById('stpuscell').value, unit: "", normalRange: "" },
            { test: "Macrophages", result: document.getElementById('stmacrophage').value, unit: "", normalRange: "" },
            { test: "Ova", result: document.getElementById('stova').value, unit: "", normalRange: "" },
            { test: "Red Cells", result: document.getElementById('stredcells').value, unit: "", normalRange: "" },
            { test: "Cysts", result: document.getElementById('stcysts').value, unit: "", normalRange: "" },
            { test: "Larva", result: document.getElementById('stlarva').value, unit: "", normalRange: "" },
            { test: "Fat Globules", result: document.getElementById('stftglobules').value, unit: "", normalRange: "" },
            { test: "Starch Granules", result: document.getElementById('starchgranules').value, unit: "", normalRange: "" },
            { test: "Epithelial cells", result: document.getElementById('stepithelialcells').value, unit: "", normalRange: "" },
            { test: "Veg: (Fiber)", result: document.getElementById('stveg').value, unit: "", normalRange: "" }
        ]
    };

    // Populate the report with data
    document.getElementById('reportPatientName').textContent = reportData.patientName;
    document.getElementById('reportAgeSex').textContent = reportData.ageSex;
    document.getElementById('reportReferredBy').textContent = reportData.referredBy;
    document.getElementById('reportDate').textContent = reportData.date;


    const cbcResultsContainer = document.getElementById('cbcResults');
    cbcResultsContainer.innerHTML = ''; // Clear previous results

    if (reportData.cbcResults.some(result => result.result !== '')) {
        cbcResultsContainer.innerHTML = `
            <h3>Hematology Test: CBC</h3>
            <table>
                <tr>
                    <th>Test</th>
                    <th>Result</th>
                    <th>Unit</th>
                    <th>Normal Range</th>
                </tr>
                <tbody id="cbcResultsBody"></tbody>
            </table>
        `;
    }

    const cbcResultsBody = document.getElementById('cbcResultsBody');
    reportData.cbcResults.forEach(result => {
        if (result.result !== '') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.test}</td>
                <td>${result.result}</td>
                <td>${result.unit}</td>
                <td>${result.normalRange}</td>
            `;
            cbcResultsBody.appendChild(row);
        }
    });

    const widalResultsContainer = document.getElementById('widalResults');
    widalResultsContainer.innerHTML = ''; // Clear previous results

    if (reportData.widalResults.some(result => result.results.some(r => r !== ''))) {
        widalResultsContainer.innerHTML = `
            <h3>Widal Test</h3>
            <table>
                <tr>
                    <th>Titer</th>
                    <th>1:20</th>
                    <th>1:40</th>
                    <th>1:80</th>
                    <th>1:160</th>
                    <th>1:320</th>
                </tr>
                <tbody id="widalResults"></tbody>
            </table>
        `;
    }

    reportData.widalResults.forEach(result => {
        if (result.results.some(r => r !== '')) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.titer}</td>
                ${result.results.map(r => `<td>${r}</td>`).join('')}
            `;
            widalResultsContainer.appendChild(row);
        }
    });
    //     const row = document.createElement('tr');
    //     row.innerHTML = `
    //         <td>${result.titer}</td>
    //         ${result.results.map(r => `<td>${r}</td>`).join('')}
    //     `;
    //     widalResultsContainer.appendChild(row);
    // });

    const bloodglucoseResultsContainer = document.getElementById('bloodglucoseResults');
    bloodglucoseResultsContainer.innerHTML = ''; // Clear previous results
    reportData.bloodglucoseResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        bloodglucoseResultsContainer.appendChild(row);
    });

    const liverfunctionResultsContainer = document.getElementById('lftResults');
    liverfunctionResultsContainer.innerHTML = ''; // Clear previous results
    reportData.liverfunctionResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        liverfunctionResultsContainer.appendChild(row);
    });

    const renalfunctionResultsContainer = document.getElementById('rftResults');
    renalfunctionResultsContainer.innerHTML = ''; // Clear previous results
    reportData.renalfunctionResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        renalfunctionResultsContainer.appendChild(row);
    });

    const semenAnalysisResultsContainer = document.getElementById('semenAnalysisResults');
    semenAnalysisResultsContainer.innerHTML = ''; // Clear previous results
    reportData.semenAnalysisResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        semenAnalysisResultsContainer.appendChild(row);
    });

    const lipidProfileResultsContainer = document.getElementById('lipidProfileResults');
    lipidProfileResultsContainer.innerHTML = ''; // Clear previous results
    reportData.lipidProfileResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        lipidProfileResultsContainer.appendChild(row);
    });

    const urineAnalysisResultsContainer = document.getElementById('urineAnalysisResults');
    urineAnalysisResultsContainer.innerHTML = ''; // Clear previous results
    reportData.urineAnalysisResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        urineAnalysisResultsContainer.appendChild(row);
    });

    const chemicalUrineAnalysisResultsContainer = document.getElementById('chemicalUrineAnalysisResults');
    chemicalUrineAnalysisResultsContainer.innerHTML = ''; // Clear previous results
    reportData.chemicalUrineAnalysisResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        chemicalUrineAnalysisResultsContainer.appendChild(row);
    });

    const microscopicUrineAnalysisResultsContainer = document.getElementById('microscopicUrineAnalysisResults');
    microscopicUrineAnalysisResultsContainer.innerHTML = ''; // Clear previous results
    reportData.microscopicUrineAnalysisResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        microscopicUrineAnalysisResultsContainer.appendChild(row);
    });

    const stutumAnalysisResultsContainer = document.getElementById('stutumResults');
    stutumAnalysisResultsContainer.innerHTML = ''; // Clear previous results
    reportData.stutumResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        stutumAnalysisResultsContainer.appendChild(row);
    });

    const stoolPhysicalResultsContainer = document.getElementById('stoolPhysicalResults');
    stoolPhysicalResultsContainer.innerHTML = ''; // Clear previous results
    reportData.stoolPhysicalResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        stoolPhysicalResultsContainer.appendChild(row);
    });

    const stoolChemicalResultsContainer = document.getElementById('stoolChemicalResults');
    stoolChemicalResultsContainer.innerHTML = ''; // Clear previous results
    reportData.stoolChemicalResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        stoolChemicalResultsContainer.appendChild(row);
    });

    const stoolMicroscopicResultsContainer = document.getElementById('stoolMicroscopicResults');
    stoolMicroscopicResultsContainer.innerHTML = ''; // Clear previous results
    reportData.stoolMicroscopicResults.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.test}</td>
            <td>${result.result}</td>
            <td>${result.unit}</td>
            <td>${result.normalRange}</td>
        `;
        stoolMicroscopicResultsContainer.appendChild(row);
    });

    //Show the report container
    document.getElementById('reportContainer').style.display = 'block';
}