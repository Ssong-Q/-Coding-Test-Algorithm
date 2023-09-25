def solution(n, control):
    answer = 0

    for letter in control:
        if letter == 'w':
            n += 1
        elif letter == 's':
            n -= 1
        elif letter == 'd':
            n += 10
        elif letter == 'a':
            n -= 10

    answer = n

    return answer