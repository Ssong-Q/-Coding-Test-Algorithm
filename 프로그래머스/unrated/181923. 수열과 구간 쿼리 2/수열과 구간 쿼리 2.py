def solution(arr, queries):
    answer = []
    temp_arr = []

    for query in queries:
        for i in range(len(arr)):
            if query[0] <= i <= query[1] and arr[i] > query[2]:
                temp_arr.append(arr[i])
        
        if len(temp_arr) == 0:
            answer.append(-1)
        else:
            answer.append(min(temp_arr))
            temp_arr = []
            
    return answer