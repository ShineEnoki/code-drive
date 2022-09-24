x= [155614,56241,4585652,556455,486122,123]
print(x[0])
    
min= x[0]
for i in range (1,len(x)):
    if min > x[i]:
        min = x[i]
print ('Min value in the list is =' ,min)