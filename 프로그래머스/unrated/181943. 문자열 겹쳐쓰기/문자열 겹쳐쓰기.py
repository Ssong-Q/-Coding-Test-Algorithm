def solution(my_string, overwrite_string, s):
    answer = ''

    if 1 <= len(overwrite_string) <= len(my_string) <= 1000 and 0 <= s <= len(my_string) - len(overwrite_string):
        answer = my_string[:s] + overwrite_string + my_string[len(my_string[:s]) + len(overwrite_string):]

    return answer