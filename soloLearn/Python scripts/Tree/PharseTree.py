from BinarayTree import Btree
from stack import Stack
 
def Ptree(fp_exp):
    fp_list=fp_exp.split()
    s=Stack()
    b=Btree('')
    s.push(b)
    current_tree = b
    for i in fp_list:
        if i in '(':
            current_tree.insert_left('')
            s.push(current_tree)
            current_tree=current_tree.get_left_child()
        elif i not in ['+','-','*','/',')']:
            current_tree.set_root_vlaue(int(i))
            parent=s.pop()
            current_tree=parent

        elif i in ['+','-','*','/']:
            current_tree.set_root_vlaue(i)
            current_tree.insert_right('')
            s.push(current_tree)
            current_tree=current_tree.get_right_child()

        elif i in ')':
            current_tree=s.pop()

        else:
            raise ValueError
    return b


pt=Ptree("( ( 9 + 4 ) * ( 6 - 2 ) )")
pt.bfs()


