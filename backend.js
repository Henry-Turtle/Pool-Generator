async function main() {
    let pyodide = await loadPyodide({
      indexURL : "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"
    });

    return pyodide
  };
const pyodide = main();

function update(){
    let choice = document.getElementsByName("number");
    for(let i = 0; i<3;i+=1){
        if (choice[i].checked){
            document.getElementById("a").value = choice[i].value
        }}
}
function Generate(){

    let choice = document.getElementsByName("number");
    generatePool()
        

    
}


async function python(code){
    let py = await pyodide
    console.log(py.runPython(code))
}


async function generatePool(number){
    let py = await pyodide
    results = py.runPython(`
from random import randint as R
import js
def check_for_pairs(o, t, l):
    for rounds in l:
        
        for pair in rounds:
            if o in pair and t in pair:
                return True
    return False

def get_pairs(rounds):
    p = players.copy()
    currentround = []
    for pair in range(int(num_players/2)):
        while True:
            one, two = R(0, len(p)-1), R(0, len(p)-1)
            


            if one == two:
                continue
            if check_for_pairs(p[one], p[two], rounds):
                if len(p) == 2:
                    return False
                continue
            else:    
                currentround.append((p[one], p[two]))
                r1 = p[one]
                r2 = p[two]
                p.remove(r1)
                p.remove(r2)
                        

            break

    return currentround


num_players = int(js.document.getElementById("a").value)

players = []
for num in range(num_players):
    players.append(1+num)



num_courts = num_players/2

rounds = [[],[],[]]


for i in range(3):
    while True:
        results = get_pairs(rounds)
        if results == False:
            continue
        else:
            rounds[i] = results
            break

    

reformat = ["", "", ""]
for num in range(3):
    i = 0
    while i < len(rounds[num]):
        reformat[num] += f"{rounds[num][i][0]} and {rounds[num][i][1]} vs. {rounds[num][i+1][0]} and {rounds[num][i+1][1]}, "
        i += 2

js.document.getElementById("one").innerHTML = f"Round 1: {reformat[0]}"
js.document.getElementById("two").innerHTML = f"Round 2: {reformat[1]}"
js.document.getElementById("three").innerHTML = f"Round 3: {reformat[2]}"

    `)
}

