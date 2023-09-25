def solution(num_list):
    answer = 0
    all_multiple = 1
    all_sum = 0
    for number in num_list:
        all_multiple *= number

    for number in num_list:
        all_sum += number

    if all_multiple < (all_sum*all_sum):
        answer = 1
    elif all_multiple > (all_sum*all_sum):
        answer = 0
    return answer