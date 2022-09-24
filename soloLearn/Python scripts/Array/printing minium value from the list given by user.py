


s= input("Enter yiur numbers with ' , ' : ")
l = s.split(",") # split string
x = [int(i) for i in l] # str to int
min = x[0]
for i in range (1,len(x)):
    if min > x[i]:
       min = x[i]
print ('Min value in the list is =' ,min)