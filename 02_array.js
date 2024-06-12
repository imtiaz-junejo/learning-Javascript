
let myHeros = ["Amir Khan", "Shahrukh Khan", "Salman Khan", "Akhsay Kumar", "Varun"]
let marvalHeros = ["Thor", "Iron man", "Spider man"]

// myHeros.push(marvalHeros)
// console.log(myHeros);
// ['Amir Khan', 'Shahrukh Khan', 'Salman Khan', 'Akhsay Kumar', 'Varun', [ 'Thor', 'Iron man', 'Spider man' ]]

// let allHeros = myHeros.concat(marvalHeros)
// console.log(allHeros);
// ['Amir Khan', 'Shahrukh Khan', 'Salman Khan', 'Akhsay Kumar', 'Varun', 'Thor', 'Iron man', 'Spider man']

let all_new_heros = [...myHeros, ...marvalHeros, ...["Flash", "Batman", "Super Hero"]]
console.log(all_new_heros);

// ['Amir Khan','Shahrukh Khan','Salman Khan','Akhsay Kumar','Varun','Thor','Iron man','Spider man','Flash','Batman','Super Hero']