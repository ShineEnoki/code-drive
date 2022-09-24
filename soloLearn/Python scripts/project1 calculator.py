
import tkinter
from tkinter import*
x = Tk()

w=StringVar()
e =Entry(x,fg="green",bg="black",textvariable=w,width=40,borderwidth=30)
e.pack()

key = ('789/','456*','123-','0.+%')
for i in key:
    f=Frame(x)
    f.pack()
    for i in i:
        Button(f,text=i,fg="white",bg="black",borderwidth="10",width=7,command =lambda w=w ,i=i: w.set(w.get()+i)).pack(pady=5,side=LEFT)


f2=Frame(x)
f2.pack()
Button(f2,text="=",fg="white",bg="black",borderwidth="10",width=15,command =lambda w=w: w.set(eval(w.get()))).pack(pady=5,side=LEFT)
Button(f2,text="clear",fg="white",bg="black",borderwidth="10",width=20,command =lambda w=w: w.set('')).pack(pady=5,side=LEFT)



x.mainloop()