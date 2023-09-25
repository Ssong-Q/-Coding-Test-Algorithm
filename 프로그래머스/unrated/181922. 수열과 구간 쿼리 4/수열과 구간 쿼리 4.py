def solution(arr, queries):
    answer = []

    for query in queries:
        for i in range(len(arr)):
            if (query[0] <= i <= query[1]) and (i % query[2] == 0):
                arr[i] += 1
    answer = arr
            
    return answer