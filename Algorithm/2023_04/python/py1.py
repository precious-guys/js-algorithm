N = int(input())
board = list(map(int, input().split()))
result, state = 0, 0
for i in board:
    if i == 1:
        state += 1
        result += state
    else: state = 0
print(result)