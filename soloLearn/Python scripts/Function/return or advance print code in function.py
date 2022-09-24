def c(x):
    min= x[0]
    for i in range (1,len(x)):
        if min > x[i]:
            min = x[i]
    return min

firstnumber = c ([5215478,4454,444,4584,1])
print ('Your first minimum value is = ',firstnumber)

secondnum = c ([455745,54785,564548,234187,564,574])
print ('Min vlaue of second series is = ', secondnum)