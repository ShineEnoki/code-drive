a=input('please input first number = ')     #a= first number
b=input('PLease input second number = ')   # b= second number
try:
        a=int(a)
        b=int(b)
        if b <= 0:
            print('Second number must be greater than Zero')
        else:
            print(a,'divided by' ,b)
            print(a/b)
except ValueError:
        print('Plz enter number only')