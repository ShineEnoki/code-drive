a=input('Please enter first number = ')
b=input('Please enter sign of operation you eant = ')
c=input("Please enter second number = ")

try:
    a=int(a)
    c=int(c)
    if b == "+":
        print(a+c)
    elif b == "-":
        print(a-c)
    elif b== "*":
        print(a*c)
    elif b == "/":
        print(a/c)
except ValueError:
    print("plz enter number only")
except ZeroDivisionError:
    print("second number must not be zero in dividion")