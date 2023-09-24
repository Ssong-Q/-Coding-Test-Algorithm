def solution(n):
    answer = 0
    if n % 2 == 1:
        for i in range(1, n+1):
            if i % 2 == 0:
                continue
            answer += i
    else:
        i = 1
        for i in range(1, n+1):
            if i % 2 == 1:
                continue
            answer += i * i
    return answer