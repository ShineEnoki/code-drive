def max(list):
    max = list[0]
    for i in list:
        if max > i:
            max = i
    return max

list1=[124,145,566,4588,48]
list2=[6585,555,6,45,589665,545,58]

print ('Max number in list 1 is', max(list1))
print ('Max number in list 2 is', max(list2))