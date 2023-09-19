str, num = input().strip().split()
num = int(num)

if len(str) >= 1 and len(str) <= 10 and num >= 1 and num <= 5:
    print('{}'.format(str * num))
else:
    print('다시 입력하세요')