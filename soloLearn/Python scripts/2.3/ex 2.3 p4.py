from re import I


x = [3,4,1,2,9,7]

m=x[0]
for i in range (1,len(x)):
    if m < x[i]:
        m = x[i]
        
print ("max num is ",m)
for i in range (1,len(x)):
    if m == x[i]:
        print( 'the room number is =',i )