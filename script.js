
const Pessoa ={
    id: undefined,
    nome: undefined,
    telefone: undefined
}


let dataBase = new Array;

dataBase.push({id: '1',nome: 'fabio', telefone: '1111'},{id: '2',nome: 'a', telefone:'2222'});

let id;

function loadLista(){
    dataBase.sort(function (a,b){
        let textA = a.nome.toUpperCase();
        let textB = b.nome.toUpperCase();
        return (textA< textB)? -1 : (textA > textB)? 1 : 0;
    })  
    document.getElementById('list').innerHTML = ``;
    let screen = document.getElementById('list').innerHTML;
    screen += `<p> ID \t\t Nome \t Telefone </p>` 
    for(let person in dataBase){
        screen += `<p> ${dataBase[person].id}  ${dataBase[person].nome} ${dataBase[person].telefone}</p>`
    }
    document.getElementById('list').innerHTML = screen;
}

function search(){
    let searchBox = document.getElementById('nome').value;
    for(let person in dataBase){
        if (dataBase[person].nome === searchBox){
            alert('ID:' + dataBase[person].id + '\tNome:'+ dataBase[person].nome + '\tTelefone:' + dataBase[person].telefone);
            return
        }
    }
    alert('Pessoa não cadastrada');
}

function remove(){
    screen = `<p> Nome </p> <input type="text" id="remNome" class="cadText"><br></br> 
    <input type ="button" id="remBtt" onclick="remConfirm()" class="cadButton" value="Remove">`;
    document.getElementById('list').innerHTML = screen;

}

function remConfirm(){
    let nome = document.getElementById('remNome').value;
    for(let person in dataBase){
        if(dataBase[person].nome === nome){
            delete dataBase[person];
            alert('Pessoa removida com sucesso');
            return
        }
    }
    alert('Pessoa não encontrada');
}

function register(){
    screen = `<p> Nome </p> <input type="text" id="cadNome" class="cadText"><br><p> Telefone </p> <input type="text" id="cadTelefone" class="cadText"><br> 
              <input type ="button" id="cadBtt" onclick="cadConfirm()" class="cadButton" value="Cadastrar">`
    document.getElementById('list').innerHTML = screen;
}

function cadConfirm(){
    let nome = document.getElementById('cadNome').value;
    let telefone = document.getElementById('cadTelefone').value;
    let person = Object.create(Pessoa);
    person.nome = nome;
    person.telefone = telefone;
    person.id = ++id;
    dataBase.push(person);
    alert('Pessoa cadastrada com sucesso');
}

function onLoad(){
    loadLista();
    id = dataBase.length;
}