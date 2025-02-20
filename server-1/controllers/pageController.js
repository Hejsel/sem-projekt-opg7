const fs = require('fs');
const path = require('path');

// Håndterer forespørgsler til hovedsiden
exports.indexPage = (req, res) => {
    res.render('index');
};

// Håndterer forespørgsler til dynamiske sider
exports.dynamicPage = (req, res) => {
    const page = req.params.filename;
    const filePath = path.join(__dirname, '../views', `${page}.ejs`);

    console.log('Page:', page);
    
    // Tjek om filen findes i views-mappen
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`Filen ${page}.ejs findes ikke.`);
            res.status(404).render('404', { pageTitle: 'Side ikke fundet' }); // Render en 404-side
            return; // Stop yderligere behandling
        }

        console.log(`Filen ${page}.ejs blev fundet.`);
        
        // Dynamisk data afhængig af siden
        let title = '';
        switch (page) {
            case 'sporgeskema':
                title = 'Spørgeskema';
                break;
            case 'test':
                title = 'Test';
                break;
            default:
                title = 'Side ikke fundet';
                break;
        }

        // Render den dynamiske side med den passende titel
        res.render(page, { title: title });
    });
};
