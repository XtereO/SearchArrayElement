#LinearSearch
def LinearSearch(x,l):
    #Go through array and looking for "x"
    for a in range(len(l)):
        if l[a]==x:
            return a
    return False

#Create ourList and Check LinearSearch
ourList=[3,64,7,23,62,12,34]
print(LinearSearch(4,ourList))#False
print(LinearSearch(7,ourList))#2