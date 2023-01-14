const questions = [
    "Qual o seu peso em kg (exemplo: 78.6)?",
    "Qual a sua altura em metros (exemplo: 1.75) ?",
]


const criar = (index = 0) => {
    process.stdout.write("\n" + questions[index] + "> ")
}
criar()

const answers = []

process.stdin.on("data", data => {
    let x = parseFloat(data.toString().trim())
     if (typeof x === "number" && x>0){
        answers.push(x)

        if (answers.length<questions.length) {
        criar(answers.length)    
        } else {
            process.exit()
        }
    }
    else
    {
        console.log("Valores inválidos!!")
        criar(answers.length)    
    }

})
process.on("exit", () => {
    let imc = 1
    imc = answers[0]/(answers[1]*answers[1])
    let classificacao = "abaixo do peso normal!!"
if(imc>=18.5 && imc<25){
    classificacao = "com o peso normal"}
    if(imc>=25 && imc<30){
        classificacao = "com sobrepeso"}
        if(imc>=30 && imc<35){
            classificacao = "com obesidade classe I"}
            if(imc>=35 && imc<40){
                classificacao = "com obesidade classe II"}
                if(imc>=40){
                    classificacao = "com obesidade classe III ou Mórbida"}
let pesoIdeal01 = 1
pesoIdeal01 = 18.5*(answers[1]*answers[1])
let pesoIdeal02 = 1
pesoIdeal02 = 25*(answers[1]*answers[1])

    console.log(`

------------------------------    

Olá Prezada (o)
    Seu peso é de: ${answers[0]} kg.
    Sua altura é de: ${answers[1]} m.
    Seu índice de massa corporal (IMC) é de ${imc.toFixed(2)} !
    Você está ${classificacao}.
    Seu peso ideal é entre ${pesoIdeal01.toFixed(1)} kg e ${pesoIdeal02.toFixed(1)} kg.
    Cuidar da sua saúde é fundamental para uma melhor qualidade de vida!!
    Sejam felizes.
`)
})
