def solution(a, b):
    answer = 0
    if str(a) + str(b) >= str(b) + str(a):
        answer = str(a) + str(b)
    else:
        answer = str(b) + str(a)
    return int(answer)