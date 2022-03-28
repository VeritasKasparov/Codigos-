import requests
def create():
    number = 0
    na = 0
    links = []
    

    for a in list(range(0, 35)):
        url = "https://dataimg.hqdragon.com/leitor/hq/Homem%20de%20Ferro%20-%20Extremis/02/HomemdeFerroExtremis02RnCBR" + str(number) + ".jpg"
        urls = "https://dataimg.hqdragon.com/leitor/hq/Homem%20de%20Ferro%20-%20Extremis/02/HomemdeFerroExtremis02RnCBR" + str(na) + str(number) + ".jpg"

        if len(str(number)) == 1:
            links.append(urls)
            number += 1  
            print(links[number-1], "\n")

        else:
            links.append(url)
            number += 1
            print(links[number-1], "\n")

    return links

links = create()



r = requests.get

def requests(links, r):
    nem = 0
    num = 0

    for a in list(range(0, 35)):
      
        file = open("a" + str(nem) + ".jpg", "wb")
        file.write(r(links[num]).content)
        file.close 
        nem += 1
        num += 1
        print(num)
    
    print(num, r)
requests(links, r)
