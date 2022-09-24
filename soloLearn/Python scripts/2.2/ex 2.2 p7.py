x = input('please enter numbe = ')
x = int(x)
y= x % 2

try:
    
    
    if y == 0:
        print ("your number is even")
    elif y == 1:
        print('Your number is odd')

    
except ValueError:
    print('Plz enter number only')
