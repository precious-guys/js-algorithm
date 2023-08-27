n,m = map(int, input().split())
a = list(map(int, input().split()))
a.sort()
it = 0
rt = n - 1
while it <= rt:
    mid = (it+rt)
    if a[mid]==m:
        print(mid + 1)
        break
    elif a[mid] > m:
        rt = mid - 1
    else:
        it = mid + 1