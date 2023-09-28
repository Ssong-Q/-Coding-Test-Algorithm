def solution(arr, query):
    for i in range(len(query)):
        index = query[i]
        if i % 2 == 0:
            arr = arr[:index+1]
        else:
            arr = arr[index:]
    return arr