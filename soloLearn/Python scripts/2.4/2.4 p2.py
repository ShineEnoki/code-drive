def triangle_star(y):
    for i in range (0,y+1):
        for a in range (i):
            print("*", end="")
        print("")

y=input('plz enter number= ')
y = int (y)
triangle_star(y)