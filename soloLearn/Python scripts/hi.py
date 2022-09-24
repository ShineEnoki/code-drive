cond = False

while cond == False:
    x = input (' Please enter number between 1 and 21')
    try:
        x = int (x)
        if x > 21:
            print ('Not allow for number over 21')
        elif x < 1:
            print ( " Not allow for number smaller than 1")
        else :
            print ("Your number is =",x)
            cond == True
    except ValueError:
        print("Please enter number only")