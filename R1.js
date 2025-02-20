const personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo Americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        bonus: function() {
            return { forca: 10, resistencia: 5 };
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura",
        armaSecundaria: "Repulsores",
        velocidade: 90,
        forca: 80,
        resistencia: 70,
        bonus: function() {
            return { velocidade: 10, forca: 15, resistencia: 10 };
        }
    },
    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 80,
        forca: 95,
        resistencia: 90,
        bonus: function() {
            return { forca: 20, resistencia: 15, velocidade: 5 };
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Punhos",
        armaSecundaria: "Raiva",
        velocidade: 70,
        forca: 100,
        resistencia: 95,
        bonus: function() {
            return { forca: 25, resistencia: 20 };
        }
    }
];

// Definindo Thanos como um objeto separado
const thanos = {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada Dupla",
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    bonus: function() {
        return { forca: 20, resistencia: 15, velocidade: 5 };
    }
};

function versus(escolhido, thanos) {
    let atributos = ["velocidade", "forca", "resistencia"];
    let pontosEscolhido = 0;
    let pontosThanos = 0;
    
    let bonusEscolhido = escolhido.bonus();
    let bonusThanos = thanos.bonus();

    console.log(`\nComparação entre ${escolhido.codinome} e ${thanos.codinome}:`);

    for (let atributo of atributos) {
        let valorEscolhido = escolhido[atributo] + (bonusEscolhido[atributo] || 0);
        let valorThanos = thanos[atributo] + (bonusThanos[atributo] || 0);
        
        console.log(`${atributo}: ${escolhido.codinome} (${valorEscolhido}) x (${valorThanos}) ${thanos.codinome}`);
        
        if (valorEscolhido > valorThanos) {
            pontosEscolhido++;
        } else if (valorEscolhido < valorThanos) {
            pontosThanos++;
        }
    }

    if (pontosEscolhido > pontosThanos) {
        console.log(`\nO vencedor é: ${escolhido.codinome}!`);
    } else if (pontosThanos > pontosEscolhido) {
        console.log(`\nO vencedor é: ${thanos.codinome}!`);
    } else {
        console.log("\nEmpate!");
    }
}

// Comparar todos os personagens contra Thanos
for (let personagem of personagens) {
    versus(personagem, thanos);
}
