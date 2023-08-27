n = int(input())
metting = []
for i in range(n):
    s, e = map(int, input().split())
    metting.append((s, e))

metting.sort(key=lambda x: (x[1], x[0]))
et = 0
cnt = 0

for s, e in metting:
    if s >= et:
        et = e
        cnt += 1

print(cnt)