def solution(arr, queries):
    answer = []
    temp = 0

    for query in queries:
        temp = arr[query[0]]
        arr[query[0]] = arr[query[1]]
        arr[query[1]] = temp

    answer = list(arr)
    return answer