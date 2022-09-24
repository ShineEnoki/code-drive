x= [155614,56241,4585652,556455,486122]

max = x[0]
for i in range (1,len(x)):
    if max < x[i]:
        max = x[i]
print ('Max value in the list is =' ,max)

