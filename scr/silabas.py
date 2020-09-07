def main():
    lista = lê_arquivo()
    nome1 = input("Digite um nome: ")
    nome2 = input("Digite outro nome: ")
    nome1 = nome1.lower()
    nome2 = nome2.lower()
    nome1 = separa_silaba(nome1, lista)
    nome2 = separa_silaba(nome2, lista)
    nome_final = aleatorio(nome1, nome2)
    print(nome_final)

def aleatorio(N1, N2):
    from random import randint
    L = []
    for i in N1:
        L.append(i)
    for i in N2:
        L.append(i)
    nome = ''
    numeros = []
    silabas = []
    i = 0
    quant = 4
    terminou = False
    esta_N1 = 0
    esta_N2 = 0
    while i < quant and not terminou:
        num = randint(0, len(L)-1)
        if num not in numeros:
            if i == 0:
                nome+=L[num].lower().capitalize()
                silabas.append(L[num])
            else:
                nome+=L[num]
                silabas.append(L[num])
            numeros.append(num)
            i+=1
        if i == quant:
            for i in range(len(silabas)):
                if silabas[i] in N1:
                    esta_N1 += 1
                else:
                    esta_N2 += 1
            if esta_N1 == esta_N2:
                terminou = True
            else:
                esta_N1 = 0
                esta_N2 = 0
                i = 0
                nome = ''
                numeros = []
                silabas = []
        
    return nome


def separa_silaba(N, L):
    """
    C+V+R+S: se R for C, com C != L = ['l', 'r', 'n', 'm', 's', 'z', 'x'] cortar
    em V. Se C e L, continuar lendo. Se R == C, CeL e S == V, formar duas silabas, C+V
    e R+S, caso contrario formar C+V e ler a partir de R.
    V+C+R+S: se C != L, cortar em V, caso contrário, continuar lendo. Se R == V,
    cortar em R, se R == C, continuar lendo, se S==V, cortar em R e formar as sila-
    bas V e C+R+S (c+c+v). Se R == V
    
    
    Exemplo: palhaço - Formato C+V+C+C+V+C+V
    Leitura: C + V, R = CeL -> continua lendo. S = C, forma C+V -> Le a partir de R.
    Silaba formada: 'pa-'
    """
    V = ['a','e','i','o','u']
    E = ['l','m','n','r','s','x','z']
    silaba = ''
    palavra = []
    if N[0] in V: #COMEÇA COM VOGAL
        for i in range(len(N)):
            #print(silaba+N[i], "nada", silaba+N[i] in L)
            if silaba+N[i] in L:
                silaba+=N[i]
                #print(silaba, 'IF')
                if i == len(N)-1:
                    #print(silaba, "IF IF")
                    palavra.append(silaba)
            elif len(silaba+N[i]) == 3 and silaba+N[i] not in L:
                if silaba[0] in V and silaba[1]+N[i] in L:
                    #print(silaba[0], silaba[1]+N[i], 'ELIF')
                    palavra.append(silaba[0])
                    silaba = silaba[1]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba[0] in L and silaba[1]+N[i] not in L:#PODERIA SER ELSE
                    #print(silaba, N[i], "ELIF ELIF")
                    palavra.append(silaba)
                    silaba=''
                    silaba+=N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
            elif len(silaba+N[i]) == 4:
                if silaba[0]+silaba[1] in L and silaba[2]+N[i] in L:
                    #print(silaba[0]+silaba[1], silaba[2]+N[i], "ELIF IF")
                    palavra.append(silaba[0]+silaba[1])
                    silaba=silaba[2]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba in L and N[i] in L:
                    #print(silaba, N[i], "ELIF ELIF2")
                    palavra.append(silaba)
                    silaba=N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
            elif len(silaba+N[i]) == 5:
                if silaba[0]+silaba[1]+silaba[2] in L and silaba[3]+N[i] in L:
                    #print(silaba[0]+silaba[1]+silaba[2], silaba[3]+N[i], "ELIF5 IF")
                    palavra.append(silaba[0]+silaba[1]+silaba[2])
                    silaba = silaba[3]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
            else:
                palavra.append(silaba)
                silaba=''
                silaba+=N[i]
                #print(silaba, 'ELSE')

    else: #COMEÇA COM CONSOANTE
        for i in range(len(N)):
            #print(silaba+N[i], "nada", silaba+N[i] in L)
            if silaba+N[i] in L:
                silaba+=N[i]
                #print(silaba)
                if i == len(N)-1:
                    palavra.append(silaba)
            elif len(silaba+N[i]) == 3 and silaba+N[i] not in L:
                if silaba[0] in V and silaba[1]+N[i] in L:
                    #print(silaba[0], silaba[1]+N[i], 'ELIF')
                    palavra.append(silaba[0])
                    #palavra.append(silaba[1]+N[i])
                    silaba = silaba[1]+N[i]
                    if i == len(N)-1:
                        palavra.append(silaba)
                elif silaba[0] in L and silaba[1]+N[i] not in L:#PODERIA SER ELSE
                    #print(silaba, N[i], "ELIF ELIF")
                    palavra.append(silaba)
                    silaba=''
                    silaba+=N[i]
                    if i == len(N)-1:
                        #print("SILABA")
                        palavra.append(silaba)
            elif len(silaba+N[i]) == 4:
                if i<len(N)-2:
                    if silaba in L and N[i]+N[i+1]+N[i+2] in L:
                        #print("cond. espec.")
                        palavra.append(silaba)
                        silaba=N[i]
                    elif silaba[0]+silaba[1] in L and silaba[2]+N[i] in L:
                        #print(silaba[0]+silaba[1], silaba[2]+N[i], "ELIF IF")
                        palavra.append(silaba[0]+silaba[1])
                        silaba=silaba[2]+N[i]
                        if i == len(N)-1:
                            palavra.append(silaba)
                    elif silaba in L and N[i] in L:
                        #print(silaba, N[i], "ELIF ELIF2")
                        palavra.append(silaba)
                        silaba=N[i]
                        if i == len(N)-1:
                            palavra.append(silaba)
                
                else:
                    if silaba[0]+silaba[1] in L and silaba[2]+N[i] in L:
                        #print(silaba[0]+silaba[1], silaba[2]+N[i], "ELIF IF")
                        palavra.append(silaba[0]+silaba[1])
                        silaba=silaba[2]+N[i]
                        if i == len(N)-1:
                            palavra.append(silaba)
                    elif silaba in L and N[i] in L:
                        #print(silaba, N[i], "ELIF ELIF2")
                        palavra.append(silaba)
                        silaba=N[i]
                        if i == len(N)-1:
                            palavra.append(silaba)
                        
            else:
                palavra.append(silaba)
                #print(silaba)
                silaba=''
                silaba+=N[i]
                if i == len(N)-1:
                    palavra.append(silaba)
            #print(silaba in L)
                
    return (palavra)
    
def lê_arquivo():
    lista = []
    arquivo = open("SILABAS_FINAL.txt", "r")
    a = arquivo.readline()
    lista = a.split()
    arquivo.close()
    
    return lista

main()
