const fs = require('fs');

// Read the contents of pokemon_species_names.csv
const csvData = fs.readFileSync('scripts/pokemon_species_names.csv', 'utf-8');

// Split the CSV data into rows
const rows = csvData.split('\n');

// Create an empty object to store the name translations
const nameTranslations = {};

// Iterate over each row
for (const row of rows) {
    // Split the row into columns
    const columns = row.split(',');

    // Check if the second column is 9
    if (columns[1] === '9') {
        // Find the corresponding row where the second column is 6
        const matchingRow = rows.find((r) => {
            const cols = r.split(',');
            return cols[1] === '6' && cols[0] === columns[0];
        });
        nameTranslations[columns[0]] = {"english":columns[2],"german":matchingRow.split(',')[2]};
    }

}

// Write the nameTranslations object into name-translations.json
fs.writeFileSync('scripts/name-translations.json', JSON.stringify(nameTranslations, null, 2));