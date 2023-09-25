def solution(num_list):
    answer = 0
    odd_number = ''
    even_number = ''

    for number in num_list:
        if number % 2 == 0:
            even_number += str(number)
        else:
            odd_number += str(number)
    
    answer = int(odd_number) + int(even_number)
    return answer