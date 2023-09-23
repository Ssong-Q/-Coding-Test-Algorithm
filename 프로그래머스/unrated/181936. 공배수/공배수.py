def solution(number, n, m):
    answer = 0
    if number % n == 0 and number % m == 0 and 10 <= number <= 100 and 2 <= n <= 10 and 2 <= m <= 10:
        answer = 1
    else:
        answer = 0
    return answer