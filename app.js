// Application TaskFlow — Gestion de tickets

function creerTicket(titre, priorite) {
    if (!titre) throw new Error('Le titre est obligatoire');
    if (!priorite) throw new Error('La priorité est obligatoire');
    
    return {
        id: Math.floor(Math.random() * 1000),
        titre: titre,
        priorite: priorite,
        statut: 'ouvert',
        date: new Date().toISOString()
    };
}

function fermerTicket(ticket) {
    if (!ticket) throw new Error('Ticket invalide');
    ticket.statut = 'fermé';
    return ticket;
}

module.exports = { creerTicket, fermerTicket };

console.log('TaskFlow démarré !');