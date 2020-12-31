#BinarySearch
def BinarySearch(l,x,start,finish):
    mid=(start+finish)//2
    #RecursionKey
    if l[mid]==x:
        return mid
    if start>=finish:
        return False
    
    #Recursion
    if l[mid]>x:
        return BinarySearch(l,x,start,mid-1)
    if l[mid]<x:
        return BinarySearch(l,x,mid+1,finish)
#Create ourList and Check BinarySearch
ourList=[3,12,53,123,566,756,3461]
print(BinarySearch(ourList,53,0,len(ourList)-1))#2
print(BinarySearch(ourList,34,0,len(ourList)-1))#False