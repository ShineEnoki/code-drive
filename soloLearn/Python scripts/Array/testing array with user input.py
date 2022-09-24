x = input('Plz enter numbers using , between numbers') #user input
y = x.split (",")                             #,split = spliting user unput numbers
z= [int(i) for i in y]                       # making a list
min = z[0]
for i in range (1,len(z)):
    if min > z[i]:
        min = z[i]
        print ("Mimnimum number is = ",z[i])
        

    


