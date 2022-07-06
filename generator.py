from random import randint as R


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


num_players = int(input("12, 16, or 20 players?\n=>"))

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

    


print(rounds[0])
print(rounds[1])
print(rounds[2])

while True:
    pass