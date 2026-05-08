// Tests unitaires — TaskFlow
const { creerTicket, fermerTicket } = require('./app');

let tests = 0;
let reussis = 0;

function test(nom, fn) {
    tests++;
    try {
        fn();
        console.log('✓ ' + nom);
        reussis++;
    } catch(e) {
        console.log('✗ ' + nom + ' — ' + e.message);
    }
}

// Tests
test('Créer un ticket valide', () => {
    const t = creerTicket('Bug login', 'haute');
    if (!t.id) throw new Error('ID manquant');
    if (t.statut !== 'ouvert') throw new Error('Statut incorrect');
});

test('Ticket sans titre doit échouer', () => {
    try {
        creerTicket('', 'haute');
        throw new Error('Aurait dû échouer');
    } catch(e) {
        if (e.message !== 'Le titre est obligatoire') throw e;
    }
});

test('Fermer un ticket', () => {
    const t = creerTicket('Test', 'basse');
    fermerTicket(t);
    if (t.statut !== 'fermé') throw new Error('Statut incorrect');
});

// Résultat
console.log('\n' + reussis + '/' + tests + ' tests réussis');
if (reussis !== tests) process.exit(1);