def solution(numLog):
    answer = ''

    for index in range(len(numLog) - 1):
        if numLog[index + 1] - numLog[index] == 1:
            answer += 'w'
        elif numLog[index + 1] - numLog[index] == -1:
            answer += 's'
        elif numLog[index + 1] - numLog[index] == 10:
            answer += 'd'
        elif numLog[index + 1] - numLog[index] == -10:
            answer += 'a'
    
    return answer