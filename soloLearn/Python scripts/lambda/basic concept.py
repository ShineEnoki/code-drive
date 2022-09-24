#နာမည် မပေးဘဲ တစ်ကြောင်းနတည်း ရေးတဲ့ function
#Use lambda when anonymous function is required for a short period of time
#Formula    (lambda arg:prigram)
def function(n):
    return lambda a: a* n

y = function(3)
print(y(7))

b = function (111)
print(y(2))
print(b(8))