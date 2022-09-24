a = input ("Plz enter number using comma(,)")


try:
    b= a .split (',')
    c = [int (i) for i in b]

    for (i,x) in enumerate (c ):
        print ('The',i+1,'th term value is =',x)
except ValueError:
    print('Plz enter number only')
    