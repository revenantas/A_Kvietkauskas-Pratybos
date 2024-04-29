const nuolaida = 20;
const telefonokaina = 500;
const kiekkisenei = 200;

const pilnai = (telefonokaina - (telefonokaina * nuolaida) / 100);

if (kiekkisenei > pilnai) {
    console.log('gali nupirkti');
} else {
    console.log('ne labai pasiseke');
}