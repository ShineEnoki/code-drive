def search(array,search):
    for (index,value) in enumerate (array):
        if search == value:
            return index
    return 404

print(search([1,2,3,4,5,65,6,7,8,9,55],65))