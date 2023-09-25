def solution(l, r):
    answer = []
    check = 1

    for number in range(l, r + 1):
        for i in range(len(str(number))):
            if str(number)[i] == '5' or str(number)[i] == '0':
                check *= 1
            else:
                check *= 0
        
        if check == 1:
            answer.append(number)
        else:
            check = 1

    if answer == []:
      answer.append(-1)
    return answer