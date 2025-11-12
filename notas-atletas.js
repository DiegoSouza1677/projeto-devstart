let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
class CalculoMedia{
    constructor(nome,notas){
        this.nome = nome;
        this.notas = notas;
    }
    obterMedia(){
        let notasOrdenadas = [...this.notas].sort((a,b) => a - b);
        let notasAjustadas = notasOrdenadas.slice(1,4);
        let soma = notasAjustadas.reduce((total,atual) => total + atual,0)
        return soma / notasAjustadas.length;

    }
}
atletas.forEach(function(item){
    let atleta = new CalculoMedia(item.nome,item.notas);
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas obtidas: ${atleta.notas.join(", ")}`);
    console.log(`Média válida: ${atleta.obterMedia().toFixed(5)}\n`);
})