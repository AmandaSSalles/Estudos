console.log(`Horários para Consulta: \n`);

const listaDeHorarios = new Array (
    `10h`,
    `11h`,
    `13h30`,
    `14h`,
    `16h`
);

console.log(listaDeHorarios);

const escolhaDaHora = `10h30`;
let planoDeSaude = true;
let contador = 0;
let consultaMarcada = false;

while (contador < 5) {
    if (listaDeHorarios[contador] == escolhaDaHora) {
        planoDeSaude = true;
        console.log("\n Consulta marcada com sucesso");
    } else{
        console.log("Horário não disponível. Tente novamente!");
        break;
    }
    contador += 1;
}

console.log("Consulta Marcada: ", consultaMarcada);

for(let cont = 0; contador < 5; cont++) {
    if(listaDeHorarios[contador] == escolhaDaHora);
    consultaMarcada = true;
}
