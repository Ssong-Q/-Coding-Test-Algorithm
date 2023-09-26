def solution(a, b, c, d):
    answer = 0
    dice = [a, b, c, d]
    sorted_dice = sorted(dice)
    
    if dice[0] == dice[1] == dice[2] == dice[3]:
        answer += 1111 * dice[0]
    elif (sorted_dice[0] == sorted_dice[1] == sorted_dice[2] != sorted_dice[3]) or (sorted_dice[0] != sorted_dice[1] == sorted_dice[2] == sorted_dice[3]):
        if (sorted_dice[0] == sorted_dice[1] == sorted_dice[2] != sorted_dice[3]):
            answer += (10 * sorted_dice[0] + sorted_dice[3]) ** 2
        elif (sorted_dice[0] != sorted_dice[1] == sorted_dice[2] == sorted_dice[3]):
            answer += (10 * sorted_dice[3] + sorted_dice[0]) ** 2
    elif sorted_dice[0] == sorted_dice[1] and sorted_dice[2] == sorted_dice[3] and sorted_dice[1] != sorted_dice[2]:
        answer += (sorted_dice[0] + sorted_dice[2]) * abs(sorted_dice[0] - sorted_dice[2])
    elif (sorted_dice[0] == sorted_dice[1] != sorted_dice[2] != sorted_dice[3]) or (sorted_dice[0] != sorted_dice[1] == sorted_dice[2] != sorted_dice[3]) or (sorted_dice[0] != sorted_dice[1] != sorted_dice[2] == sorted_dice[3]):
        if (sorted_dice[0] == sorted_dice[1] != sorted_dice[2] != sorted_dice[3]):
            answer += sorted_dice[2] * sorted_dice[3]
        elif (sorted_dice[0] != sorted_dice[1] == sorted_dice[2] != sorted_dice[3]):
            answer += sorted_dice[0] * sorted_dice[3]
        elif (sorted_dice[0] != sorted_dice[1] != sorted_dice[2] == sorted_dice[3]):
            answer += sorted_dice[0] * sorted_dice[1]
    elif dice[0] != dice[1] != dice[2] != dice[3]:
        answer += min(dice)
    return answer