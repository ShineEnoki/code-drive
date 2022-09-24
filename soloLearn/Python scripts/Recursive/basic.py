def rec(string,No):
    if (No == 5):
        return 
    print(string,No)
    rec(string,No+1)

rec("Hello",0)